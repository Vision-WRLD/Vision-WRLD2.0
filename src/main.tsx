import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Fade out page loader once React has hydrated
const loader = document.getElementById("page-loader");
if (loader) {
  loader.classList.add("fade-out");
  setTimeout(() => loader.remove(), 500);
}
