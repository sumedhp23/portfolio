import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import { fadeUp } from "../animations/variants";
import { pageVariants } from "../animations/pageVariants";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div style={{ padding: 80 }}>Project not found.</div>;
  }

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        padding: "120px 80px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 64,
          alignItems: "flex-start",
        }}
      >
        {/* ================= LEFT COLUMN (SCROLLS) ================= */}
        <div>
          <motion.h1 variants={fadeUp}>{project.title}</motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              marginTop: 16,
              color: "var(--text-secondary)",
              maxWidth: 640,
            }}
          >
            {project.short}
          </motion.p>

          {/* Tech Stack */}
          <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Tech Stack</h3>
            <p style={{ color: "var(--text-muted)" }}>
              {project.details.tech.join(" · ")}
            </p>
          </motion.div>

          {/* Problem */}
          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
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

          {/* GitHub Link */}
          <motion.div variants={fadeUp} style={{ marginTop: 40 }}>
            <a
              href={project.details.repo || "#"}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "var(--accent)",
                fontSize: "0.95rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}></span>
              View GitHub Repository
            </a>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 64 }}>
            <Link to="/">← Back to Home</Link>
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN (STICKY) ================= */}
        <div
          style={{
            position: "sticky",
            top: 120,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Screenshot 1 */}
          <div
            style={{
              height: 220,
              borderRadius: 12,
              background: "rgba(255,255,255,0.05)",
              border: "1px dashed rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
            }}
          >
            Screenshot 1
          </div>

          {/* Screenshot 2 */}
          <div
            style={{
              height: 220,
              borderRadius: 12,
              background: "rgba(255,255,255,0.05)",
              border: "1px dashed rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
            }}
          >
            Screenshot 2
          </div>
        </div>
      </div>
    </motion.main>
  );
}
