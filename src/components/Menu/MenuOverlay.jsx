import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { navigateToSection } from "../../utils/navigateToSection";

export default function MenuOverlay({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleClick = (sectionId) => {
    navigateToSection(navigate, sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.nav
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              textAlign: "center",
            }}
          >
            <MenuItem label="About" onClick={() => handleClick("about")} />
            <MenuItem label="Tech Stack" onClick={() => handleClick("tech")} />
            <MenuItem label="Experience" onClick={() => handleClick("experience")} />
            <MenuItem label="Projects" onClick={() => handleClick("projects")} />

            {/* ✅ NEW: Certifications */}
            <MenuItem
              label="Certifications"
              onClick={() => handleClick("certifications")}
            />

            <MenuItem label="Contact" onClick={() => handleClick("contact")} />

            <button
              onClick={onClose}
              style={{
                marginTop: 40,
                background: "none",
                border: 0,
                color: "#aaa",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MenuItem({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: 0,
        fontSize: "2rem",
        fontWeight: 500,
        color: "#f5f5f5",
        cursor: "pointer",

        /* ✨ Micro-interaction polish */
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "0.7";
        e.currentTarget.style.transform = "translateX(6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "translateX(0)";
      }}
    >
      {label}
    </button>
  );
}
