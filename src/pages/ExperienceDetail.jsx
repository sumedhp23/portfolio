import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { experience } from "../data/experienceData";
import { fadeUp } from "../animations/variants";
import { pageVariants } from "../animations/pageVariants";

export default function ExperienceDetail() {
  const { id } = useParams();
  const item = experience.find(e => e.id === id);

  if (!item) {
    return <div style={{ padding: 80 }}>Experience not found.</div>;
  }

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: "120px 80px", maxWidth: 900 }}
    >
      <motion.h1 variants={fadeUp}>{item.role}</motion.h1>

      <motion.p
        variants={fadeUp}
        style={{ marginTop: 8, color: "var(--text-muted)" }}
      >
        {item.org} · {item.period}
      </motion.p>

      {item.details && (
        <>
          <motion.p
            variants={fadeUp}
            style={{
              marginTop: 32,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
            }}
          >
            {item.details.overview}
          </motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <h3>Key Responsibilities</h3>
            <ul>
              {item.details.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Projects</h3>
            <ul>
              {item.details.projects.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Tech Stack</h3>
            <p>{item.details.tech.join(" · ")}</p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Impact</h3>
            <ul>
              {item.details.impact.map((imp, i) => (
                <li key={i}>{imp}</li>
              ))}
            </ul>
          </motion.div>
        </>
      )}

      <motion.div variants={fadeUp} style={{ marginTop: 64 }}>
        <Link to="/">← Back to Home</Link>
      </motion.div>
    </motion.main>
  );
}
