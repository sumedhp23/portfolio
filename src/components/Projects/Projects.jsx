import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import { staggerContainer, fadeItem } from "../../animations/variants";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "160px 80px" }}>
      {/* MOBILE OVERRIDES */}
      <style>{`
        @media (max-width: 640px) and (orientation: portrait) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .project-image {
            height: 240px !important;
          }
        }
      `}</style>

      <h2
        style={{
          textAlign: "center",
          fontSize: "var(--fs-h2)",
          marginBottom: "var(--space-xl)",
          color: "var(--text-primary)",
        }}
      >
        <span className="interactive-link">Projects</span>
      </h2>


      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 48,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={fadeItem}
            whileHover={{
              y: -6,
              background:
                "radial-gradient(600px circle at var(--mx) var(--my), rgba(120,200,255,0.12), transparent 60%), rgba(255,255,255,0.02)",
              borderColor: "rgba(120,200,255,0.35)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Hero image */}
            <div
              className="project-image"
              style={{
                height: 200,
                backgroundImage: `url(/projects/${project.id}/hero.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content */}
            <div style={{ padding: 24, flexGrow: 1 }}>
              <h3 style={{ marginBottom: 8 }}>
                <span className="interactive-link">
                  {project.title}
                </span>
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  marginBottom: 12,
                }}
              >
                {project.short}
              </p>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                {project.details.tech.join(" · ")}
              </p>
            </div>

            {/* Footer actions */}
            <div
              style={{
                padding: "16px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Link to={`/projects/${project.id}`}>
                <motion.span
                  whileHover={{ x: 6, color: "var(--accent)" }}
                  transition={{ duration: 0.2 }}
                >
                  View case study →
                </motion.span>
              </Link>

              {project.details.repo && (
                <motion.a
                  href={project.details.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub repository"
                  whileHover={{
                    scale: 1.15,
                    color: "var(--accent)",
                    filter: "drop-shadow(0 0 6px rgba(120,200,255,0.6))",
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1.3rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaGithub />
                </motion.a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
