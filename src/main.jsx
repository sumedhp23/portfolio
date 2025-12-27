import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

document.addEventListener("mousemove", (e) => {
  requestAnimationFrame(() => {
    document.documentElement.style.setProperty(
      "--cursor-x",
      `${e.clientX}px`
    );
    document.documentElement.style.setProperty(
      "--cursor-y",
      `${e.clientY}px`
    );
  });
});

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


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
