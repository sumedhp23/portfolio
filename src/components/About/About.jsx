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
        zIndex: 10,
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
        Engineer by training. Designer by intent.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        style={paraStyle}
      >
        I approach problems by first understanding the system as a whole—how
        data flows, where decisions are made, and what truly matters to the
        user. I enjoy breaking complex ideas into simple, reliable solutions
        that can scale beyond a prototype.
      </motion.p>

      <motion.p
        variants={fadeUp}
        style={paraStyle}
      >
        Most of my work sits at the intersection of software engineering,
        data, and machine learning. I’ve built end-to-end ML pipelines,
        backend systems, and analytical workflows, always with a strong
        focus on correctness, maintainability, and real-world usability.
      </motion.p>

      <motion.p
        variants={fadeUp}
        style={paraStyle}
      >
        I care deeply about clarity—both in code and in user experience.
        Whether I’m designing a system or an interface, I aim to build
        products that feel intentional, understandable, and engineered
        with purpose rather than guesswork.
      </motion.p>
    </motion.section>
  );
}

const paraStyle = {
  fontSize: "1.15rem",
  lineHeight: 1.7,
  color: "var(--text-secondary)",
  marginBottom: 20,
};
