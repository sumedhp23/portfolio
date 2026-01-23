import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../animations/variants";
import InteractiveHeroBG from "./InteractiveHeroBG";

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

      <motion.div
  variants={fadeUp}
  transition={{ delay: 0.5 }}
  style={{
    marginTop: 64,
    fontSize: "0.9rem",
    color: "var(--text-muted)",
  }}
>
  Scroll to explore ↓
</motion.div>

    </motion.section>
  );
}
