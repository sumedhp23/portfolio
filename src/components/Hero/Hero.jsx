import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../animations/variants";
import InteractiveHeroBG from "./InteractiveHeroBG";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      id="top"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "120px 80px",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      <InteractiveHeroBG />

      <motion.h1
        variants={fadeUp}
        transition={{ delay: 0.15 }}
        style={{
          position: "relative",
          zIndex: 2,
          fontSize: "var(--fs-h1)",
          lineHeight: "var(--lh-tight)",
          fontWeight: 700,
          maxWidth: 900,
          color: "var(--text-primary)",
        }}
      >
        Designing & engineering
        <span style={{ color: "var(--accent)" }}>
          {" "}data-driven systems
        </span>
        with clarity, motion, and intent.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        transition={{ delay: 0.3 }}
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "var(--space-md)",
          fontSize: "1.15rem",
          maxWidth: 700,
          color: "var(--text-secondary)",
        }}
      >
        Im Sumedh, a software engineer working across
        data, machine learning, and frontend systems,
        focused on building reliable products with
        thoughtful user experience.
      </motion.p>

      {/* Social icons (same as Contact) */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.45 }}
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: 28,
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <motion.a
          href="https://github.com/sumedhp23"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.15,
            color: "var(--accent)",
            filter: "drop-shadow(0 0 6px rgba(120,200,255,0.6))",
          }}
          transition={{ duration: 0.2 }}
          style={iconStyle}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/sumedh-patil-034ab2259/"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.15,
            color: "var(--accent)",
            filter: "drop-shadow(0 0 6px rgba(120,200,255,0.6))",
          }}
          transition={{ duration: 0.2 }}
          style={iconStyle}
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.6 }}
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: 56,
          fontSize: "0.9rem",
          color: "var(--text-muted)",
        }}
      >
        Scroll to explore ↓
      </motion.div>
    </motion.section>
  );
}

const iconStyle = {
  fontSize: "1.6rem",
  color: "var(--text-secondary)",
  display: "flex",
  alignItems: "center",
};
