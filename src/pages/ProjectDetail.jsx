import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import { fadeUp, staggerContainer } from "../animations/variants";
import { pageVariants } from "../animations/pageVariants";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div style={{ padding: 80 }}>Project not found.</div>;
  }

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: "120px 80px", maxWidth: 900 }}
    >
      <motion.h1 variants={fadeUp}>
        {project.title}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        style={{
            marginTop: 16,
            color: "var(--text-secondary)",
            maxWidth: 720,
        }}
    >
        {project.short}
     </motion.p>

    {/* Problem */}
        <motion.div variants={fadeUp} style={{ marginTop: 64 }}>
        <h3>Problem</h3>
        <p>{project.details.problem}</p>
        </motion.div>

        {/* Constraints */}
        {project.details.constraints && (
        <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Constraints</h3>
            <ul>
            {project.details.constraints.map((c, i) => (
                <li key={i}>{c}</li>
            ))}
            </ul>
        </motion.div>
        )}

        {/* Solution */}
        <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
        <h3>Solution</h3>
        <p>{project.details.solution}</p>
        </motion.div>

        {/* Architecture */}
        {project.details.architecture && (
        <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>System Flow</h3>
            <p>{project.details.architecture}</p>
        </motion.div>
        )}

        {/* Impact */}
        <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
        <h3>Impact</h3>
        <ul>
            {project.details.impact.map((item, idx) => (
            <li key={idx}>{item}</li>
            ))}
        </ul>
        </motion.div>

        {/* Tech */}
        <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Tech Stack</h3>
            <p>{project.details.tech.join(" · ")}</p>
        </motion.div>

        {/* Repo */}
        {project.details.repo && (
        <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <a href={project.details.repo} target="_blank" rel="noreferrer">
            View GitHub Repository →
            </a>
        </motion.div>
        )}

        <motion.div variants={fadeUp} style={{ marginTop: 64 }}>
            <Link to="/">← Back to Home</Link>
        </motion.div>

    </motion.main>
  );
}
