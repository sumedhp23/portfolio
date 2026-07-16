import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../animations/variants";
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
      {/* InteractiveHeroBG moved to global App.jsx */}

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
          {" "}intelligent data systems
        </span>
        that solve real-world problems.
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
        I'm Sumedh Patil, a Computer Science Engineer passionate about building intelligent systems through data, machine learning, and software engineering. From analytics platforms and predictive models to peer-reviewed IEEE research, I create technology that turns complex data into practical solutions with real-world impact.
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
