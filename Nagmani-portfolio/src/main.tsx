import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { gsap } from "gsap";
import App from "./App.tsx";
import "./index.css";

// @ts-ignore - trialWarn is not in GSAP's type definitions but works at runtime
gsap.config({ trialWarn: false });


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
