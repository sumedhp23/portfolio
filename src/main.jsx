import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


// Cursor-reactive background logic (desktop only)
if (window.matchMedia("(hover: hover)").matches) {
  let rafId = null;

  window.addEventListener("mousemove", (e) => {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`
      );
      rafId = null;
    });
  });
}

function updateVh() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
}

updateVh();
window.addEventListener("resize", updateVh);
window.addEventListener("orientationchange", updateVh);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
