import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import { staggerContainer, fadeItem } from "../../animations/variants";

export default function Projects() {
  return (
    <section  id="projects"  style={{ padding: "160px 80px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "var(--fs-h2)",
          marginBottom: "var(--space-xl)",
          color: "var(--text-primary)",
        }}
      >
        Projects
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
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
            whileHover={{ y: -6 }}
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
              style={{
                height: 200,
                backgroundImage: `url(/projects/${project.id}/hero.jpg)`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content */}
            <div style={{ padding: 24, flexGrow: 1 }}>
              <h3 style={{ marginBottom: 8 }}>{project.title}</h3>

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
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  style={{ color: "var(--accent)" }}
                >
                  View case study →
                </motion.span>
              </Link>

              {project.details.repo && (
                <a
                  href={project.details.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub repository"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1.1rem",
                  }}
                >
                  
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
