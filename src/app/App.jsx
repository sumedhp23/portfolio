import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import useScrollToSection from "../hooks/useScrollToSection";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header/Header";
import MenuOverlay from "../components/Menu/MenuOverlay";
export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorLightRef = useRef(null);

  useScrollToTop();
  useScrollToSection();

  // Performant cursor light updater directly manipulating DOM node styles
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (cursorLightRef.current) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Use requestAnimationFrame to avoid layout thrashing
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          cursorLightRef.current.style.background = `radial-gradient(750px circle at ${x}% ${y}%, rgba(56,189,248,0.08), transparent 60%)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* GLOBAL CURSOR LIGHT */}
      <div
        ref={cursorLightRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          background: "radial-gradient(750px circle at 50% 50%, rgba(56,189,248,0.08), transparent 60%)",
        }}
      />

      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <ScrollProgress />

      <AnimatePresence mode="wait">
        <Outlet key={location.key} />
      </AnimatePresence>
    </>
  );
}
