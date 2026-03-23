import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  const [webglUnavailable, setWebglUnavailable] = useState(false);

  useEffect(() => {
    const root = canvasDiv.current;
    if (!root) return;

    let renderer: THREE.WebGLRenderer;
    let rafId = 0;
    let debounce: ReturnType<typeof setTimeout> | undefined;
    let introTimeout: ReturnType<typeof setTimeout> | undefined;
    let isDisposed = false;
    let touchMoveTarget: HTMLElement | null = null;
    let character: THREE.Object3D | null = null;
    let headBone: THREE.Object3D | null = null;
    let screenLight: any | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    const scene = new THREE.Scene();

    const rect = root.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const aspect = width / height;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.innerWidth > 768,
        powerPreference: "high-performance",
      });
    } catch (error) {
      console.error("Error creating WebGL context.", error);
      setWebglUnavailable(true);
      return;
    }

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      if (!isDisposed) {
        setWebglUnavailable(true);
      }
    };

    setWebglUnavailable(false);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.debug.checkShaderErrors = false;
    renderer.domElement.addEventListener("webglcontextlost", handleContextLost, false);
    root.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
    camera.position.z = 10;
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    const clock = new THREE.Clock();
    const light = setLighting(scene);
    const progress = setProgress((value) => {
      if (!isDisposed) {
        setLoading(value);
      }
    });
    const { loadCharacter } = setCharacter(renderer, scene, camera);

    let mouse = { x: 0, y: 0 };
    let interpolation = { x: 0.1, y: 0.2 };

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => (mouse = { x, y }));
    };

    const onTouchMove = (event: TouchEvent) => {
      handleTouchMove(event, (x, y) => (mouse = { x, y }));
    };

    const onTouchStart = (event: TouchEvent) => {
      touchMoveTarget = event.target as HTMLElement;
      debounce = setTimeout(() => {
        touchMoveTarget?.addEventListener("touchmove", onTouchMove, {
          passive: true,
        });
      }, 200);
    };

    const onTouchEnd = () => {
      touchMoveTarget?.removeEventListener("touchmove", onTouchMove);
      touchMoveTarget = null;

      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    const onResize = () => {
      if (character) {
        handleResize(renderer, camera, canvasDiv, character);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    const landingDiv = document.getElementById("landingDiv");
    if (landingDiv) {
      landingDiv.addEventListener("touchstart", onTouchStart, {
        passive: true,
      });
      landingDiv.addEventListener("touchend", onTouchEnd);
    }

    loadCharacter()
      .then((gltf) => {
        if (!gltf || isDisposed) return;

        const animations = setAnimations(gltf);
        if (hoverDivRef.current) {
          animations.hover(gltf, hoverDivRef.current);
        }

        mixer = animations.mixer;
        character = gltf.scene;
        scene.add(character);
        headBone = character.getObjectByName("spine006") || null;
        screenLight = character.getObjectByName("screenlight") || null;

        progress.loaded().then(() => {
          if (isDisposed) return;
          introTimeout = setTimeout(() => {
            if (isDisposed) return;
            light.turnOnLights();
            animations.startIntro();
          }, 2500);
        });
      })
      .catch((error) => {
        console.error("Error loading character scene:", error);
        if (!isDisposed) {
          setWebglUnavailable(true);
        }
      });

    const animate = () => {
      if (isDisposed) return;
      rafId = requestAnimationFrame(animate);
      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );
        light.setPointLight(screenLight);
      }
      const delta = clock.getDelta();
      mixer?.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    const disposeMaterial = (material: THREE.Material) => {
      const typedMaterial = material as THREE.Material & {
        [key: string]: unknown;
      };
      Object.values(typedMaterial).forEach((value) => {
        if (value instanceof THREE.Texture) {
          value.dispose();
        }
      });
      material.dispose();
    };

    return () => {
      isDisposed = true;
      clearTimeout(debounce);
      clearTimeout(introTimeout);
      progress.clear();

      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      touchMoveTarget?.removeEventListener("touchmove", onTouchMove);

      if (landingDiv) {
        landingDiv.removeEventListener("touchstart", onTouchStart);
        landingDiv.removeEventListener("touchend", onTouchEnd);
      }

      if (character) {
        scene.remove(character);
        character.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.geometry) {
            mesh.geometry.dispose();
          }
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(disposeMaterial);
          } else if (mesh.material) {
            disposeMaterial(mesh.material);
          }
        });
      }

      scene.clear();
      renderer.setAnimationLoop(null);
      renderer.domElement.removeEventListener(
        "webglcontextlost",
        handleContextLost,
        false
      );
      renderer.dispose();

      if (root.contains(renderer.domElement)) {
        root.removeChild(renderer.domElement);
      }
    };
  }, [setLoading]);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          {webglUnavailable && (
            <p style={{ color: "#fff", textAlign: "center", paddingTop: "2rem" }}>
              3D preview is unavailable on this device/browser.
            </p>
          )}
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
