import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{
        padding: "160px 80px 100px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <motion.h2
        variants={fadeUp}
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 600,
          marginBottom: 24,
          color: "var(--text-primary)",
        }}
      >
        Let’s build something meaningful
      </motion.h2>

      <motion.p
        variants={fadeUp}
        style={{
          maxWidth: 600,
          fontSize: "1.1rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          marginBottom: 40,
        }}
      >
        I’m always open to discussing impactful projects, internships,
        full-time roles, or collaborations across software and data
        engineering, machine learning or even have a chat over a 
        cup of coffee!
      </motion.p>

      <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
        <a
          href="mailto:sumedhpatil@example.com"
          style={{
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            paddingBottom: 4,
          }}
        >
          sumedhpatil03@gmail.com
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        style={{
          display: "flex",
          gap: 32,
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/sumedhp23"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--text-secondary)" }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sumedh-patil-034ab2259/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--text-secondary)" }}
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        variants={fadeUp}
        style={{
          marginTop: 120,
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}
      >
        © {new Date().getFullYear()} Sumedh Patil · Built with intent
      </motion.footer>
    </motion.section>
  );
}
