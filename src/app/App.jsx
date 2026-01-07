import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import useScrollToSection from "../hooks/useScrollToSection";

export default function App() {
  const location = useLocation();

  useScrollToTop();
  useScrollToSection();

  // ✅ cursor position updater (already discussed)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mx", `${x}%`);
      document.documentElement.style.setProperty("--my", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* ✅ GLOBAL CURSOR LIGHT (THIS WAS MISSING) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background:
            "radial-gradient(750px circle at var(--mx) var(--my), rgba(120,200,255,0.20), transparent 60%)",
        }}
      />

      <ScrollProgress />

      <AnimatePresence mode="wait">
        <Outlet key={location.key} />
      </AnimatePresence>
    </>
  );
}
