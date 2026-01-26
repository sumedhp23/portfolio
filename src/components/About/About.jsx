import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";

export default function About() {
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{
        padding: "160px 80px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <motion.h2
        variants={fadeUp}
        style={{
          fontWeight: 600,
          fontSize: "var(--fs-h2)",
          marginBottom: "var(--space-lg)",
          color: "var(--text-primary)",
        }}
      >
        <span className="interactive-link">Engineer by training. Designer by intent.</span>
      </motion.h2>

      <motion.p variants={fadeUp} style={paraStyle}>
        I approach problems by first understanding the system as a whole, how
        data flows, where decisions are made, and what truly matters to the
        user. I enjoy breaking complex ideas into simple, reliable solutions
        that can scale beyond a prototype.
      </motion.p>

      <motion.p variants={fadeUp} style={paraStyle}>
        Most of my work sits at the intersection of software engineering,
        data, and machine learning. I’ve built end-to-end ML pipelines,
        backend systems, and analytical workflows, always with a strong
        focus on correctness, maintainability, and real-world usability.
      </motion.p>

      <motion.p variants={fadeUp} style={paraStyle}>
        I care deeply about clarity, both in code and in user experience.
        Whether I’m designing a system or an interface, I aim to build
        products that feel intentional, understandable, and engineered
        with purpose rather than guesswork.
      </motion.p>

      {/* Resume Button */}
      <motion.div variants={fadeUp} style={{ marginTop: 40 }}>
        <a
          href="/resume/Sumedh_Patil_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            borderRadius: 8,
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            fontSize: "0.9rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--accent)";
          }}
        >
          View Resume →
        </a>
      </motion.div>
    </motion.section>
  );
}

const paraStyle = {
  fontSize: "1.15rem",
  lineHeight: 1.7,
  color: "var(--text-secondary)",
  marginBottom: 20,
};
