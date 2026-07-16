import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projectsData";
import { fadeUp } from "../animations/variants";
import { pageVariants } from "../animations/pageVariants";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  const [lightboxImg, setLightboxImg] = useState(null);

  // ESC to close lightbox
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!project) {
    return <div style={{ padding: 80 }}>Project not found.</div>;
  }

  return (
    <>
      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "zoom-out",
            }}
          >
            <motion.img
              src={lightboxImg}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: 14,
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= PAGE ================= */}
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
        {/* MOBILE OVERRIDES */}
        <style>{`
          @media (max-width: 768px) {
            .project-layout {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
            .screenshots {
              position: static !important;
            }
            .screenshot {
              height: 260px !important;
            }
          }
        `}</style>

        <div
          className="project-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 64,
            alignItems: "flex-start",
          }}
        >
          {/* ================= LEFT COLUMN ================= */}
          <motion.div variants={fadeUp} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h1>{project.title}</h1>
              <p
                style={{
                  marginTop: 16,
                  color: "var(--text-secondary)",
                  maxWidth: 640,
                }}
              >
                {project.short}
              </p>
            </div>

            <div>
              <h3>Tech Stack</h3>
              <p style={{ color: "var(--text-muted)" }}>
                {project.details.tech.join(" · ")}
              </p>
            </div>

            <div>
              <h3>Problem</h3>
              <p>{project.details.problem}</p>
            </div>

            {project.details.constraints && (
              <div>
                <h3>Constraints</h3>
                <ul>
                  {project.details.constraints.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3>Solution</h3>
              <p>{project.details.solution}</p>
            </div>

            {project.details.architecture && (
              <div>
                <h3>System Flow</h3>
                <p>{project.details.architecture}</p>
              </div>
            )}

            <div>
              <h3>Impact</h3>
              <ul>
                {project.details.impact.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* LINKS */}
            <div
              style={{
                marginTop: 8,
                display: "flex",
                gap: 28,
                alignItems: "center",
              }}
            >
              {project.details.repo && (
                <motion.a
                  href={project.details.repo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.12,
                    color: "var(--accent)",
                    filter:
                      "drop-shadow(0 0 6px rgba(120,200,255,0.6))",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    color: "var(--text-muted)",
                  }}
                >
                  <FaGithub style={{ fontSize: "1.35rem" }} />
                  GitHub
                </motion.a>
              )}

              {project.details.demo && (
                <motion.a
                  href={project.details.demo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, color: "var(--accent)" }}
                  transition={{ duration: 0.2 }}
                  style={{ color: "var(--text-muted)" }}
                >
                  🌐 Live Demo
                </motion.a>
              )}
            </div>

            <div style={{ marginTop: 32 }}>
              <Link to="/" state={{ scrollTo: "projects" }}>← Back to Home</Link>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <div
            className="screenshots"
            style={{
              position: "sticky",
              top: 120,
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            {project.screenshots?.map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="screenshot"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxImg(src)}
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.08)",
                  cursor: "zoom-in",
                }}
              />
            ))}
          </div>
        </div>
      </motion.main>
    </>
  );
}
