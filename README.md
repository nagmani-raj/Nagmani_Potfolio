# `NAGMANI RAJ PORTFOLIO`
### `>>> Interactive 3D Developer Portfolio built with React + TypeScript + Vite + Three.js + GSAP`

![Portfolio Preview](Nagmani_Potfolio/public/images/preview.png)

---

## `--> Project Overview`

This project is a **personal developer portfolio website** for **Nagmani Raj**.
It is not a basic static portfolio. The website combines:

- `-->` a modern React + TypeScript frontend
- `-->` a custom animated loading experience
- `-->` a manually controlled Three.js 3D character scene
- `-->` GSAP-powered text, scroll, and transition animations
- `-->` a responsive portfolio layout with desktop and mobile differences
- `-->` a draggable / physics-based tech stack showcase

The main goal of this project is to present Nagmani Raj as a **Full Stack Developer / Software Engineer** through an interface that feels polished, animated, cinematic, and memorable.

---

## `--> Why This Project Exists`

Most portfolio sites only show text, cards, and links.
This project goes beyond that.

It is designed to communicate:

- `-->` technical skill
- `-->` frontend craft
- `-->` interaction design sense
- `-->` animation knowledge
- `-->` 3D/web graphics confidence
- `-->` personal branding

In short:

`Portfolio website + interactive experience + engineering showcase = this project`

---

## `--> Core Highlights`

- `-->` Custom loading screen with fake-progress behavior and animated entry
- `-->` Lazy loaded app sections for better initial experience
- `-->` 3D character scene rendered manually through Three.js
- `-->` Encrypted character asset loading
- `-->` DRACO decoder support for compressed 3D data
- `-->` Head-follow effect based on mouse / touch movement
- `-->` GSAP `ScrollSmoother`, `ScrollTrigger`, and `SplitText` driven motion
- `-->` Desktop-specific 3D hero placement
- `-->` Mobile-aware fallback behavior
- `-->` Tech stack physics canvas using React Three Fiber + Rapier
- `-->` Project carousel for featured work
- `-->` Resume access and social links
- `-->` Vercel-ready deployment configuration

---

## `--> Live Experience Structure`

The page flow is roughly:

`Loading Screen`
`-->`
`Landing / Hero`
`-->`
`About`
`-->`
`What I Do`
`-->`
`Career Timeline`
`-->`
`Work Carousel`
`-->`
`Tech Stack Physics Section`
`-->`
`Contact`

Meanwhile, the 3D character remains part of the experience and reacts to screen size, scroll position, and pointer movement.

---

## `--> Tech Stack Used In This Project`

Below is the **actual stack used by the source code**, along with **why each technology is used**.

### `1. React`

**Why used:**
React is used to build the full UI using reusable components. Each section like navbar, landing, about, work, contact, loading, and tech stack is split into separate components for better structure and maintainability.

**Where used:**
- `src/App.tsx`
- `src/components/*`
- `src/context/LoadingProvider.tsx`

**Why it makes sense here:**
- `-->` clean component architecture
- `-->` easy state handling for UI interactions
- `-->` lazy loading support
- `-->` better separation of concerns

---

### `2. TypeScript`

**Why used:**
TypeScript adds type safety to React components, utility functions, refs, and Three.js integrations.

**Where used:**
Almost the entire source inside `src/` uses `.ts` and `.tsx`.

**Why it makes sense here:**
- `-->` catches mistakes early
- `-->` makes refs and complex object handling safer
- `-->` very useful in Three.js and animation-heavy logic
- `-->` improves maintainability as project grows

---

### `3. Vite`

**Why used:**
Vite is the build tool and dev server for the project.

**Where used:**
- `vite.config.ts`
- npm scripts in `package.json`

**Why it makes sense here:**
- `-->` fast local development
- `-->` modern ESM-based workflow
- `-->` quick HMR
- `-->` simple deployment pipeline

---

### `4. GSAP`

**Why used:**
GSAP is the main animation engine of the site. It controls initial entry animations, text reveals, looping text transitions, scroll-linked motion, and 3D scene-related timing.

**Where used:**
- `src/main.tsx`
- `src/components/Navbar.tsx`
- `src/components/Cursor.tsx`
- `src/components/utils/initialFX.ts`
- `src/components/utils/GsapScroll.ts`
- `src/components/utils/splitText.ts`
- `src/components/Character/utils/lighting.ts`

**Why it makes sense here:**
- `-->` precise animation control
- `-->` timeline-based sequencing
- `-->` scroll-linked animation support
- `-->` much smoother than basic CSS-only animation for complex choreography

---

### `5. GSAP ScrollTrigger`

**Why used:**
To animate elements based on scroll position.

**Where used:**
- `src/components/WhatIDo.tsx`
- `src/components/Navbar.tsx`
- `src/components/utils/GsapScroll.ts`
- `src/components/utils/splitText.ts`
- `src/components/Character/utils/resizeUtils.ts`

**Why it makes sense here:**
- `-->` landing-to-about-to-3D transitions depend on scroll
- `-->` career timeline reveal is scroll-based
- `-->` character camera movement is scroll-synced

---

### `6. GSAP ScrollSmoother`

**Why used:**
To create smooth scrolling on desktop and make section transitions feel premium.

**Where used:**
- `src/components/Navbar.tsx`
- `src/components/utils/initialFX.ts`
- `src/components/utils/splitText.ts`

**Why it makes sense here:**
- `-->` smoother premium scrolling
- `-->` better cinematic movement
- `-->` fits portfolio presentation well

**Important note:**
`ScrollSmoother` is a GSAP Club plugin. This means the project expects GSAP Club plugin availability in the environment.

---

### `7. GSAP SplitText`

**Why used:**
To split headings and paragraphs into characters / words / lines for detailed stagger animations.

**Where used:**
- `src/components/utils/initialFX.ts`
- `src/components/utils/splitText.ts`

**Why it makes sense here:**
- `-->` animated typography feels much more premium
- `-->` hero text reveals become more expressive
- `-->` section titles and paragraph entrances look polished

**Important note:**
`SplitText` is also a GSAP Club plugin.

---

### `8. Three.js`

**Why used:**
Three.js powers the custom 3D hero character scene.

**Where used:**
- `src/components/Character/Scene.tsx`
- `src/components/Character/utils/character.ts`
- `src/components/Character/utils/lighting.ts`
- `src/components/Character/utils/mouseUtils.ts`
- `src/components/Character/utils/resizeUtils.ts`
- `src/components/Character/utils/animationUtils.ts`

**Why it makes sense here:**
- `-->` full control over renderer, camera, lighting, model, and animation
- `-->` suitable for a custom cinematic hero experience
- `-->` manual setup gives flexibility that a generic viewer would not

---

### `9. React Three Fiber`

**Why used:**
React Three Fiber is used in the `TechStack` section to build a Three.js scene with React-style component patterns.

**Where used:**
- `src/components/TechStack.tsx`

**Why it makes sense here:**
- `-->` easier React integration for 3D section
- `-->` declarative scene setup
- `-->` ideal for independent canvas sections inside React apps

---

### `10. @react-three/drei`

**Why used:**
To use helper components such as `Environment`.

**Where used:**
- `src/components/TechStack.tsx`

**Why it makes sense here:**
- `-->` reduces boilerplate
- `-->` easier environment setup
- `-->` improves visuals with less custom code

---

### `11. @react-three/rapier`

**Why used:**
To add real-time physics behavior to the floating tech spheres in the tech stack section.

**Where used:**
- `src/components/TechStack.tsx`

**Why it makes sense here:**
- `-->` floating icons feel alive
- `-->` pointer interaction becomes physically responsive
- `-->` turns a static stack list into a memorable section

---

### `12. three-stdlib`

**Why used:**
To access utility loaders such as `GLTFLoader`, `DRACOLoader`, and `RGBELoader`.

**Where used:**
- `src/components/Character/utils/character.ts`
- `src/components/Character/utils/lighting.ts`
- `src/components/Character/utils/animationUtils.ts`

**Why it makes sense here:**
- `-->` required for model loading
- `-->` required for DRACO compressed assets
- `-->` required for HDR environment textures

---

### `13. react-fast-marquee`

**Why used:**
For the text marquee in the loading screen.

**Where used:**
- `src/components/Loading.tsx`

**Why it makes sense here:**
- `-->` simple continuous marquee without custom implementation
- `-->` improves loading screen energy

---

### `14. react-icons`

**Why used:**
To display icons for arrows, social media, resume, and copyright.

**Where used:**
- `src/components/Work.tsx`
- `src/components/WorkImage.tsx`
- `src/components/Contact.tsx`
- `src/components/SocialIcons.tsx`

**Why it makes sense here:**
- `-->` fast icon usage
- `-->` lightweight and consistent
- `-->` avoids manually managing SVG icon files for common icons

---

### `15. Plain CSS`

**Why used:**
Styling is written using regular CSS files, mostly organized component-wise.

**Where used:**
- `src/index.css`
- `src/App.css`
- `src/components/styles/*.css`

**Why it makes sense here:**
- `-->` simple and direct
- `-->` full freedom for custom visual styling
- `-->` no dependency on utility-first styling system

---

### `16. Web Crypto API`

**Why used:**
To decrypt the encrypted 3D character asset before loading it into the scene.

**Where used:**
- `src/components/Character/utils/decrypt.ts`

**Why it makes sense here:**
- `-->` protects direct raw model exposure a bit
- `-->` adds an extra layer before runtime model loading
- `-->` fits the custom asset pipeline

---

### `17. Vercel`

**Why used:**
Deployment target configuration is set up for Vercel.

**Where used:**
- `vercel.json`

**Why it makes sense here:**
- `-->` simple frontend hosting
- `-->` quick deploys
- `-->` easy static app delivery

---

## `--> Technologies Installed But Not Clearly Used In Current Source`

These packages exist in `package.json`, but they are not clearly active in the current source files:

- `@react-three/cannon`
- `@react-three/postprocessing`
- `@vercel/analytics`
- `@gsap/react`

This likely means one of the following:

- `-->` they were used in an earlier version
- `-->` they are planned for future usage
- `-->` they were installed experimentally

So in README terms, they should be treated as **available dependencies**, not core active logic.

---

## `--> Project Architecture`

At a high level, the architecture looks like this:

```text
index.html
  -->
src/main.tsx
  -->
src/App.tsx
  -->
LoadingProvider
  -->
MainContainer
  --> Navbar
  --> Cursor
  --> SocialIcons
  --> Landing
        --> Character Scene (desktop outside landing / mobile inside landing)
  --> About
  --> WhatIDo
  --> Career
  --> Work
  --> TechStack
  --> Contact
```

There are really **two big visual systems** running together:

1. `-->` the normal React website sections
2. `-->` the 3D and motion system

These two systems are stitched together using loading state, scroll triggers, and DOM-targeted animation helpers.

---

## `--> Data Flow Explained`

This project does **not** use a backend API or database for runtime content.

That means:

- `-->` no Express server inside this repo
- `-->` no external REST API being called for portfolio content
- `-->` no database connection in this codebase

The data flow is mostly:

```text
Static assets + hardcoded component content
  -->
React components render sections
  -->
GSAP enhances those DOM elements
  -->
Three.js loads local encrypted character model
  -->
User interactions (scroll/mouse/touch) update visuals
```

### `Actual runtime data sources`

#### `1. Hardcoded section content`

Examples:

- `src/components/About.tsx`
- `src/components/Career.tsx`
- `src/components/Contact.tsx`
- `src/components/Work.tsx`

These files directly contain text and project info.

#### `2. Static public assets`

Examples:

- images from `public/images/`
- resume from `public/Nagmani_Raj_Resume.pdf`
- logo from `public/logo.png`
- encrypted model from `public/models/character.enc`
- HDR environment from `public/models/char_enviorment.hdr`
- DRACO decoder files from `public/draco/`

#### `3. Derived interaction data`

Examples:

- mouse position
- touch position
- viewport width
- scroll position
- loading progress state

This data is not fetched from a server. It is generated in the browser during runtime.

---

## `--> Loading Flow`

The loading system is one of the most important flows in the project.

### `Step-by-step`

```text
App mounts
  -->
LoadingProvider starts with isLoading = true
  -->
Loading screen is visible
  -->
Character Scene starts loading
  -->
Progress UI is updated through setProgress(...)
  -->
Encrypted 3D model is fetched and decrypted
  -->
Model is loaded and compiled
  -->
Progress completes to 100
  -->
Loading screen transitions out
  -->
initialFX() runs
  -->
Main content becomes fully interactive
```

### `Files involved`

- `src/context/LoadingProvider.tsx`
- `src/components/Loading.tsx`
- `src/components/Character/Scene.tsx`
- `src/components/utils/initialFX.ts`

### `What is happening conceptually`

- `LoadingProvider` stores global loading state
- `Loading` displays the visual loader UI
- `Scene` updates progress while the character scene is being prepared
- when loading finishes, intro effects begin and the main page unlocks

---

## `--> 3D Character Pipeline`

This is the most advanced part of the project.

### `Pipeline`

```text
character.enc file in public/models
  -->
fetch encrypted file
  -->
decrypt in browser using Web Crypto API
  -->
create Blob URL
  -->
GLTFLoader loads model
  -->
DRACOLoader handles compressed geometry
  -->
renderer.compileAsync(...) prepares rendering
  -->
custom materials / mesh tweaks are applied
  -->
scene + lighting + camera + animations start
```

### `Files responsible`

- `src/components/Character/Scene.tsx`
- `src/components/Character/utils/character.ts`
- `src/components/Character/utils/decrypt.ts`
- `src/components/Character/utils/lighting.ts`
- `src/components/Character/utils/animationUtils.ts`
- `src/components/Character/utils/mouseUtils.ts`
- `src/components/Character/utils/resizeUtils.ts`
- `src/data/boneData.ts`

### `Why encryption is used`

The file `character.enc` is an encrypted form of the character model.
At runtime, the browser:

- `-->` fetches the encrypted file
- `-->` extracts the IV from the first 16 bytes
- `-->` derives a key from the password
- `-->` decrypts the data using `AES-CBC`
- `-->` passes the decrypted result to the loader

This is not full DRM-level protection, but it does stop the raw model from being directly exposed in the most obvious way.

---

## `--> 3D Animation Logic`

The 3D model does not simply appear. It has multiple animation layers.

### `Animation sources`

- intro animation
- blink animation
- typing animation
- keyboard key animations
- eyebrow hover animation
- head rotation tracking

### `How it works`

`animationUtils.ts` creates an `AnimationMixer` and selectively builds actions.

Some actions use the full clip, while others use **filtered tracks** so only certain bones animate.

### `Bone filtering`

Bone names are stored in:

- `src/data/boneData.ts`

This file defines:

- `typingBoneNames`
- `eyebrowBoneNames`

These are used so the app can isolate only the bones needed for a specific effect.

This is smart because:

- `-->` one source clip can be reused partially
- `-->` small facial details can be controlled separately
- `-->` animation feels more layered and realistic

---

## `--> Mouse / Touch Interaction Flow`

The character reacts to pointer movement.

### `Flow`

```text
mousemove / touchmove
  -->
normalize screen coordinates to -1 .. 1
  -->
store mouse position
  -->
animate head bone rotation with lerp smoothing
```

### `Files involved`

- `src/components/Character/Scene.tsx`
- `src/components/Character/utils/mouseUtils.ts`

### `Behavior`

- `-->` on top of the page, the head follows the pointer
- `-->` after scrolling down, the head settles toward a fixed pose
- `-->` touch devices use delayed touch handling and reset behavior

---

## `--> Scroll Animation Flow`

Scroll behavior is deeply integrated into this project.

### `High level`

```text
User scrolls
  -->
GSAP ScrollTrigger timelines update
  -->
DOM sections move / fade / reveal
  -->
3D character rotates / shifts
  -->
camera position changes
  -->
monitor light and scene elements reveal
```

### `Main scroll controllers`

- `src/components/Navbar.tsx`
- `src/components/utils/GsapScroll.ts`
- `src/components/utils/splitText.ts`

### `Examples`

- landing fades away as the scene transitions
- about section moves into view
- character/camera transform during content progression
- career timeline fills while cards appear
- desktop and mobile use different behavior rules

---

## `--> Tech Stack Physics Section Flow`

This section is separate from the main custom Three.js hero scene.

### `What it does`

It shows multiple floating tech spheres with texture maps such as:

- React
- Next.js
- Node.js
- Express
- MongoDB
- MySQL
- TypeScript
- JavaScript

### `How it works`

```text
TextureLoader loads icon textures
  -->
MeshPhysicalMaterial created for each texture
  -->
Rigid bodies spawned in physics world
  -->
pointer body follows mouse
  -->
spheres collide / react physically
```

### `File responsible`

- `src/components/TechStack.tsx`

### `Why it is effective`

Instead of just writing "My Tech Stack", the section turns technology presentation into an interactive visual experience.

---

## `--> Responsive Behavior`

This project does not render desktop and mobile exactly the same way.

### `Desktop`

- `-->` 3D character is rendered outside the landing content inside `MainContainer`
- `-->` smooth scrolling is heavily used
- `-->` tech stack physics section is rendered
- `-->` complex scroll choreography is active

### `Mobile / Smaller screens`

- `-->` 3D character is passed inside `Landing`
- `-->` some desktop-only animation assumptions are avoided
- `-->` text split animations are limited for smaller widths
- `-->` `WhatIDo` supports touch-specific toggling

This separation exists mainly inside:

- `src/components/MainContainer.tsx`
- `src/components/utils/GsapScroll.ts`
- `src/components/utils/splitText.ts`
- `src/components/WhatIDo.tsx`

---

## `--> Folder Structure`

```text
Nagmani-portfolio/
|-- public/
|   |-- draco/
|   |-- images/
|   |-- models/
|   |-- logo.jpg
|   |-- logo.png
|   `-- Nagmani_Raj_Resume.pdf
|
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Character/
|   |   |   `-- utils/
|   |   |-- styles/
|   |   `-- utils/
|   |-- context/
|   |-- data/
|   |-- App.tsx
|   |-- App.css
|   |-- index.css
|   `-- main.tsx
|
|-- eslint.config.js
|-- index.html
|-- LICENSE
|-- package.json
|-- package-lock.json
|-- README.md
|-- test.js
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vercel.json
`-- vite.config.ts
```

---

## `--> File By File Explanation`

This section is written so that anyone reading the README can understand **what each important file is doing**.

## `--> Root Files`

### `package.json`

Contains:

- dependency list
- dev dependency list
- project scripts

Scripts available:

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

---

### `vite.config.ts`

Minimal Vite configuration using the React plugin.

Purpose:

- `-->` enables Vite + React setup
- `-->` handles bundling and local dev server behavior

---

### `vercel.json`

Deployment config for Vercel.

Purpose:

- `-->` uses `npm run build`
- `-->` outputs from `dist`
- `-->` rewrites all routes to `/` for SPA compatibility

---

### `index.html`

Base HTML file where the React app mounts.

Purpose:

- `-->` defines root div `#root`
- `-->` sets favicon
- `-->` sets page title
- `-->` loads `src/main.tsx`

---

### `eslint.config.js`

ESLint setup for TypeScript and React hooks.

Purpose:

- `-->` code quality enforcement
- `-->` React hooks rule support
- `-->` React refresh compatibility warnings

---

### `tsconfig.json`

Root TypeScript config that references:

- `tsconfig.app.json`
- `tsconfig.node.json`

Purpose:

- `-->` central TS project coordination

---

### `tsconfig.app.json`

TypeScript configuration for application source code.

Important details:

- `-->` strict mode enabled
- `-->` DOM + ES2020 libs enabled
- `-->` React JSX config enabled
- `-->` no emit mode

---

### `tsconfig.node.json`

TypeScript config for Vite/node-side config file(s).

Purpose:

- `-->` type-checks node-context config files like `vite.config.ts`

---

### `test.js`

This file appears to be a small standalone experiment / scratch logic file.
It is not imported anywhere in the current app flow.

Practical meaning:

- `-->` not part of production runtime
- `-->` safe to treat as non-core unless intentionally used later

---

### `LICENSE`

Contains the project license.

---

## `--> Source Entry Files`

### `src/main.tsx`

This is the React entry point.

Responsibilities:

- `-->` imports global styles
- `-->` configures GSAP to silence `trialWarn`
- `-->` mounts `<App />` into `#root`

---

### `src/App.tsx`

This is the main application composition file.

Responsibilities:

- `-->` wraps the app inside `LoadingProvider`
- `-->` lazy loads `MainContainer`
- `-->` lazy loads `Character`
- `-->` keeps the 3D experience and page shell together

---

### `src/index.css`

Global styling foundation.

Responsibilities:

- `-->` imports Geist font
- `-->` defines CSS variables like accent/background colors
- `-->` sets body/global layout rules
- `-->` defines some shared helpers and tech stack section styles

---

### `src/App.css`

Contains shared app-level section sizing helpers.

Responsibilities:

- `-->` section width definitions
- `-->` responsive width behavior
- `-->` typography rendering optimizations for animated text

---

## `--> Context Layer`

### `src/context/LoadingProvider.tsx`

This is the global loading state provider.

Responsibilities:

- `-->` stores `isLoading`
- `-->` stores loading percentage indirectly via `setLoading`
- `-->` shows loading overlay while app is loading
- `-->` exposes `useLoading()` hook

This provider is very important because the 3D scene and loading UI coordinate through it.

---

## `--> Main UI Composition Files`

### `src/components/MainContainer.tsx`

This is the central page layout orchestrator.

Responsibilities:

- `-->` renders navbar, social icons, sections, cursor
- `-->` detects desktop vs mobile view
- `-->` inserts the character scene differently based on screen size
- `-->` initializes text splitting again on resize
- `-->` wraps the smooth scrolling structure

This file is the main content skeleton of the portfolio.

---

### `src/components/Navbar.tsx`

Top navigation bar and smooth scrolling setup.

Responsibilities:

- `-->` creates `ScrollSmoother`
- `-->` pauses smoother initially until intro finishes
- `-->` handles smooth section navigation on desktop
- `-->` renders logo, mail link, and nav links
- `-->` renders background / decorative nav layers

---

### `src/components/Cursor.tsx`

Custom cursor implementation.

Responsibilities:

- `-->` tracks mouse movement
- `-->` smoothly interpolates cursor position
- `-->` changes cursor state for icons and disabled areas
- `-->` integrates with elements using `data-cursor`

---

### `src/components/HoverLinks.tsx`

Small reusable animated text link component.

Responsibilities:

- `-->` duplicates label text for layered hover animation
- `-->` used in navbar and resume button

---

### `src/components/SocialIcons.tsx`

Renders social links and resume button.

Responsibilities:

- `-->` social icon rendering
- `-->` animated icon hover motion through CSS variables
- `-->` link to resume PDF

---

### `src/components/Landing.tsx`

Hero section text content.

Responsibilities:

- `-->` renders greeting and name
- `-->` renders rotating developer/engineer title blocks
- `-->` optionally receives children, which allows mobile character placement

---

### `src/components/About.tsx`

About section content.

Responsibilities:

- `-->` introduces profile summary
- `-->` defines descriptive paragraph used in split text animations

---

### `src/components/WhatIDo.tsx`

Services / capability section.

Responsibilities:

- `-->` presents frontend and backend capability cards
- `-->` lists major skills
- `-->` supports touch-specific activation behavior
- `-->` toggles active card state on touch devices

---

### `src/components/Career.tsx`

Timeline / experience section.

Responsibilities:

- `-->` displays education and career milestones
- `-->` works with GSAP timeline reveal animations

---

### `src/components/Work.tsx`

Project showcase carousel.

Responsibilities:

- `-->` stores project data array locally
- `-->` handles previous/next navigation
- `-->` handles dot navigation
- `-->` prevents rapid re-triggering with `isAnimating`

Important note:

The project data is currently hardcoded directly in this component.

---

### `src/components/WorkImage.tsx`

Visual block for project preview image/video.

Responsibilities:

- `-->` shows project image
- `-->` optionally shows external link icon
- `-->` can lazily fetch a local video asset on hover if video is provided

Important note:

In current `Work.tsx`, no `video` or `link` is being passed, so that optional path is available but not actively used by the listed project items.

---

### `src/components/Contact.tsx`

Final contact section.

Responsibilities:

- `-->` shows email
- `-->` shows education info
- `-->` shows external social links
- `-->` shows ownership/footer credit

---

### `src/components/Loading.tsx`

Custom loading overlay component.

Responsibilities:

- `-->` shows logo and animated loader
- `-->` shows fake/managed loading percentage
- `-->` switches from loading state to welcome state
- `-->` triggers `initialFX()` after load completion

Also exports:

- `setProgress(...)`

That helper is used by the 3D scene to simulate and finalize loading progress.

---

### `src/components/TechStack.tsx`

Interactive tech stack visualization.

Responsibilities:

- `-->` loads technology textures
- `-->` creates textured spheres
- `-->` enables physics with Rapier
- `-->` creates a pointer-controlled collider
- `-->` activates interaction based on scroll position

This is one of the most visually distinctive sections after the 3D hero.

---

## `--> Character Module`

### `src/components/Character/index.tsx`

Very small entry component that simply returns `<Scene />`.

Purpose:

- `-->` keeps the Character module clean and import-friendly

---

### `src/components/Character/Scene.tsx`

This is the heart of the 3D character system.

Responsibilities:

- `-->` checks if WebGL is available
- `-->` creates Three.js renderer, scene, and camera
- `-->` initializes loading progress
- `-->` loads and mounts the character
- `-->` binds mouse / touch / resize events
- `-->` runs animation loop
- `-->` updates head tracking
- `-->` updates light behavior
- `-->` disposes geometry, textures, and renderer on cleanup
- `-->` shows fallback message when WebGL is unavailable

This file is the runtime bridge between React and the manual Three.js scene.

---

### `src/components/Character/utils/character.ts`

Loads and configures the character model.

Responsibilities:

- `-->` configures `GLTFLoader`
- `-->` configures `DRACOLoader`
- `-->` decrypts the encrypted model file
- `-->` creates blob URL for loader input
- `-->` compiles scene for rendering
- `-->` modifies some mesh material colors
- `-->` enables shadows
- `-->` starts GSAP scene timelines

Also does custom mesh material recoloring:

- shirt mesh `BODY.SHIRT` becomes brown
- `Pant` becomes black

---

### `src/components/Character/utils/decrypt.ts`

Browser-side decryption helper.

Responsibilities:

- `-->` derives AES key from password using SHA-256
- `-->` fetches encrypted binary data
- `-->` extracts IV from first 16 bytes
- `-->` decrypts remaining payload using `AES-CBC`

---

### `src/components/Character/utils/animationUtils.ts`

Animation controller for the GLTF character.

Responsibilities:

- `-->` creates `AnimationMixer`
- `-->` starts intro animation
- `-->` starts keyboard/key clips
- `-->` builds filtered bone animations
- `-->` handles eyebrow hover animation
- `-->` starts blink after intro timing

---

### `src/components/Character/utils/mouseUtils.ts`

Pointer math helpers.

Responsibilities:

- `-->` normalize mouse coordinates
- `-->` normalize touch coordinates
- `-->` reset touch pose after inactivity
- `-->` compute smoothed head rotation behavior

---

### `src/components/Character/utils/resizeUtils.ts`

Resize handling for Three.js scene and GSAP triggers.

Responsibilities:

- `-->` update renderer size
- `-->` update camera aspect
- `-->` refresh and rebuild scroll-linked timelines

---

### `src/components/Character/utils/lighting.ts`

Lighting system for the character scene.

Responsibilities:

- `-->` creates directional and point lights
- `-->` loads HDR environment texture
- `-->` animates scene lighting reveal
- `-->` syncs point light intensity with screen emissive object

---

### `src/data/boneData.ts`

Stores named bone lists used for filtered animation clips.

Responsibilities:

- `-->` lists typing-related bones
- `-->` lists eyebrow bones

---

## `--> Shared Utility Files`

### `src/components/utils/GsapScroll.ts`

Main scroll animation orchestrator.

Responsibilities:

- `-->` defines character + camera timelines
- `-->` defines landing/about/what-i-do transitions
- `-->` animates monitor/screen light reveal
- `-->` animates career section progression
- `-->` creates different behavior for desktop vs mobile

---

### `src/components/utils/initialFX.ts`

Initial post-loading animation sequence.

Responsibilities:

- `-->` unlocks body scroll
- `-->` resumes scroll smoother
- `-->` fades main content in
- `-->` animates landing text pieces
- `-->` starts looping title text transitions

---

### `src/components/utils/splitText.ts`

Scroll-based text reveal helper.

Responsibilities:

- `-->` registers GSAP plugins
- `-->` splits `.para` into lines/words
- `-->` splits `.title` into chars/lines
- `-->` attaches `ScrollTrigger` animations
- `-->` reverts old splits before rebuilding

---

## `--> Styles Folder`

The folder `src/components/styles/` contains section-specific CSS files.

These are responsible for visual styling only, not business logic.

### `About.css`

Styles the about section layout and typography.

### `Career.css`

Styles the career timeline and cards.

### `Contact.css`

Styles contact section layout and footer-style content.

### `Cursor.css`

Styles the custom cursor appearance and state variations.

### `Landing.css`

Styles the hero/landing section.

### `Loading.css`

Styles the loading overlay, progress button, marquee, and loading animations.

### `Navbar.css`

Styles the header, nav links, decorative background elements, and navigation layout.

### `SocialIcons.css`

Styles social icon dock and resume button.

### `style.css`

Shared hover link animation styling.

### `WhatIDo.css`

Styles skills/capabilities cards and hover/touch states.

### `Work.css`

Styles the project carousel, controls, dots, and image area.

---

## `--> Public Assets Explanation`

### `public/logo.png` and `public/logo.jpg`

Brand/logo assets used in the site.

### `public/Nagmani_Raj_Resume.pdf`

Resume file opened from the resume button.

### `public/images/*`

Contains:

- preview image
- project showcase images
- technology icon textures
- placeholder/supporting graphics

These are used mainly by:

- `Work.tsx`
- `TechStack.tsx`
- README preview

### `public/draco/*`

DRACO decoder runtime files required for compressed model decoding.

### `public/models/character.enc`

Encrypted character model used by the hero scene.

### `public/models/char_enviorment.hdr`

HDR environment texture used for reflections and scene mood.

### `public/models/encrypt.cjs`

Likely a helper script used during the model encryption workflow before runtime usage.

It is not part of the client runtime bundle.

---

## `--> API Usage`

If someone asks, "Is there any API in this project?", the practical answer is:

### `Short answer`

`-->` No external portfolio-content API is running in this repo.

### `What actually happens instead`

- `-->` the site mostly uses hardcoded content
- `-->` static files are served from `public/`
- `-->` `fetch()` is used locally to read encrypted model data
- `-->` browser APIs handle decryption and rendering

### `Actual browser fetches`

The meaningful runtime fetches are local asset fetches like:

- `/models/character.enc?v=2`
- `/models/char_enviorment.hdr?v=2`
- optional local video fetch in `WorkImage.tsx`

So this project is a **frontend-only experience-oriented app**, not a full backend-connected portfolio platform.

---

## `--> Performance Considerations`

This project includes several decisions that affect performance positively:

- `-->` lazy loading for heavy sections/components
- `-->` loading gate before showing full UI
- `-->` WebGL capability check
- `-->` device-based antialias setting
- `-->` pixel ratio capped with `Math.min(window.devicePixelRatio, 2)`
- `-->` Three.js cleanup on unmount
- `-->` desktop-only rendering of some heavier interactions

There are also some heavy elements by nature:

- `-->` 3D character scene
- `-->` scroll-linked animations
- `-->` text splitting
- `-->` physics-based tech stack canvas

That means this project is visually rich, but also more demanding than a plain portfolio.

---

## `--> Current Limitations / Caveats`

This section is important for anyone maintaining the project later.

### `1. GSAP Club Plugins`

The project imports:

- `gsap/ScrollSmoother`
- `gsap/SplitText`

These are GSAP Club plugins.
So anyone setting up the project must ensure GSAP Club plugin access is handled correctly.

### `2. Some content is hardcoded`

Projects, about text, career entries, contact details, and many labels are directly written inside components.

This is simple, but:

- `-->` content updates require code edits
- `-->` scaling content becomes harder over time

### `3. A few dependencies appear unused`

Installed packages like `@vercel/analytics` and `@react-three/postprocessing` do not currently appear in the runtime source.

### `4. Some event listener cleanup patterns could be improved later`

A few components use inline event callbacks or repeated listeners where cleanup could be made more explicit in future refactors.

### `5. No CMS or admin layer`

Everything is code-managed.
That is okay for a personal portfolio, but not ideal if non-developers need to update content.

---

## `--> How To Run This Project Locally`

### `1. Clone the repository`

```bash
git clone <your-repo-url>
cd Nagmani-portfolio
```

### `2. Install dependencies`

```bash
npm install
```

### `3. Start development server`

```bash
npm run dev
```

### `4. Build for production`

```bash
npm run build
```

### `5. Preview production build`

```bash
npm run preview
```

### `6. Lint the project`

```bash
npm run lint
```

---

## `--> Important Setup Note About GSAP`

Because this project uses:

- `ScrollSmoother`
- `SplitText`

You may need to ensure your GSAP environment includes those plugins correctly.

If you clone this project on a fresh machine and those imports are not available in your environment, you may need to:

- `-->` use GSAP Club plugin access
- `-->` or replace those features with open alternatives

This matters especially before production deployment.

---

## `--> Deployment`

This project is deployment-friendly for static hosting.

### `Configured target`

`--> Vercel`

### `How deployment works`

- `-->` Vercel runs `npm run build`
- `-->` build output is generated in `dist`
- `-->` all routes rewrite to `/` for SPA behavior

### `Relevant file`

- `vercel.json`

---

## `--> If You Want To Extend This Project`

Good future improvements could be:

- `-->` move project/work data into a separate `data` file or CMS
- `-->` add real project links and live demo links
- `-->` add video previews to `WorkImage`
- `-->` wire up `@vercel/analytics` if analytics are desired
- `-->` add accessibility improvements for reduced motion users
- `-->` create admin-editable content source
- `-->` add test coverage
- `-->` optimize event listener cleanup
- `-->` move repeated hardcoded text into constants/content config

---

## `--> Summary In One Paragraph`

This project is a **highly visual frontend portfolio application** built mainly with **React, TypeScript, Vite, GSAP, Three.js, React Three Fiber, and Rapier**. It uses a **custom loading flow**, **browser-side decryption of an encrypted 3D character model**, **scroll-driven animations**, **interactive cursor behavior**, **project carousel UI**, and a **physics-based tech stack section** to create a premium portfolio experience. Most content is currently **hardcoded in React components**, and there is **no backend API** powering the portfolio text. The project is architected as a **frontend-first cinematic portfolio experience**, with special emphasis on motion, presentation, and personal branding.

---

## `--> Quick File Navigation Guide`

If you are new to this project and want the fastest understanding path, read files in this order:

1. `src/main.tsx`
2. `src/App.tsx`
3. `src/context/LoadingProvider.tsx`
4. `src/components/MainContainer.tsx`
5. `src/components/Character/Scene.tsx`
6. `src/components/Character/utils/character.ts`
7. `src/components/utils/GsapScroll.ts`
8. `src/components/Loading.tsx`
9. `src/components/TechStack.tsx`
10. `src/components/Work.tsx`

That order will give you the clearest mental model of the app.

---

## `--> Credits`

Designed and developed by **Nagmani Raj**.

---

## `--> License`

This project is available under the [MIT License](LICENSE).
