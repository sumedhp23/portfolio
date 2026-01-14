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
        {/* ================= LEFT COLUMN ================= */}
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

          <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Tech Stack</h3>
            <p style={{ color: "var(--text-muted)" }}>
              {project.details.tech.join(" · ")}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
            <h3>Problem</h3>
            <p>{project.details.problem}</p>
          </motion.div>

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

          <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Solution</h3>
            <p>{project.details.solution}</p>
          </motion.div>

          {project.details.architecture && (
            <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
              <h3>System Flow</h3>
              <p>{project.details.architecture}</p>
            </motion.div>
          )}

          <motion.div variants={fadeUp} style={{ marginTop: 32 }}>
            <h3>Impact</h3>
            <ul>
              {project.details.impact.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: 40 }}>
            <a
              href={project.details.repo}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "var(--accent)",
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
          {project.screenshots?.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title} screenshot ${idx + 1}`}
              style={{
                width: "100%",
                height: 220,
                objectFit: "cover",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          ))}
        </div>
      </div>
    </motion.main>
  );
}
