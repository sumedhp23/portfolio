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

      <motion.div variants={fadeUp} className="glass-card" style={{ padding: "48px 40px" }}>
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
            href="/resume/SumedhPatil_CV.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              borderRadius: "100px",
              border: "1px solid var(--accent-glow)",
              backgroundColor: "rgba(56, 189, 248, 0.05)",
              color: "var(--accent-glow)",
              fontSize: "0.95rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-glow)";
              e.currentTarget.style.color = "var(--bg-primary)";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(56, 189, 248, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(56, 189, 248, 0.05)";
              e.currentTarget.style.color = "var(--accent-glow)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View Resume →
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

const paraStyle = {
  fontSize: "1.15rem",
  lineHeight: 1.7,
  color: "var(--text-secondary)",
  marginBottom: 20,
  textAlign: "justify",
  hyphens: "auto",
};
