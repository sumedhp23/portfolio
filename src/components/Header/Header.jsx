import { useNavigate } from "react-router-dom";

export default function Header({ onMenuOpen }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Always go home first
    navigate("/", { replace: false });

    // Then scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "20px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
        backdropFilter: "blur(8px)",
      }}
    >
      <button
        onClick={handleHomeClick}
        style={{
          background: "none",
          border: 0,
          fontWeight: 600,
          fontSize: "0.9rem",
          letterSpacing: "0.08em",
          color: "var(--text-primary)",
          cursor: "pointer",
        }}
      >
        SUMEDH PATIL
      </button>

      <button
        onClick={onMenuOpen}
        style={{
          background: "none",
          border: 0,
          fontSize: "1.4rem",
          cursor: "pointer",
          color: "var(--text-primary)",
        }}
        aria-label="Open menu"
      >
        ☰
      </button>
    </header>
  );
}
