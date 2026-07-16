import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import { fadeUp } from "../../animations/variants";
import { FaGithub } from "react-icons/fa";
import { useRef, useEffect } from "react";

export default function Projects() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationId;
    let isHovered = false;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = () => {
      // Only auto-scroll if not hovered
      if (!isHovered) {
        scrollContainer.scrollLeft += 1; // Adjust this for base auto-scroll speed
      }
      
      // Infinite loop logic
      // Because we have 2 identical tracks, we reset scroll position when we reach halfway
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
      } else if (scrollContainer.scrollLeft <= 0 && isHovered) {
        // If they manually scroll left past 0, loop them to the second track
        // We only do this if hovered (interacting) to avoid fighting the browser too much
        scrollContainer.scrollLeft += scrollContainer.scrollWidth / 2;
      }

      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);

    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);
    // When the user is manually scrolling (touchpad or wheel), we can optionally pause auto-scroll
    // but just tracking hover is usually sufficient for desktop.

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    // For touch devices
    scrollContainer.addEventListener("touchstart", handleMouseEnter, { passive: true });
    scrollContainer.addEventListener("touchend", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("touchstart", handleMouseEnter);
      scrollContainer.removeEventListener("touchend", handleMouseLeave);
    };
  }, []);

  return (
    <section id="projects" style={{ padding: "160px 0" }}>
      {/* CSS for Native Scrolling Marquee */}
      <style>{`
        .marquee-wrapper {
          display: flex;
          overflow-x: auto; /* Allow native scrolling */
          width: 100%;
          padding: 40px 0;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          cursor: grab;
        }
        
        .marquee-wrapper:active {
          cursor: grabbing;
        }

        .marquee-wrapper::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        
        .marquee-track {
          display: flex;
          gap: 32px;
          padding-right: 32px; 
          flex-shrink: 0;
        }

        .project-card {
          width: 450px;
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      border-color 0.4s ease, 
                      box-shadow 0.4s ease;
        }

        /* Enlarge grid slightly on hover as requested */
        .project-card:hover {
          transform: scale(1.05) translateY(-8px) !important; 
          z-index: 10;
        }

        @media (max-width: 640px) and (orientation: portrait) {
          .project-card {
            width: 85vw;
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
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div 
          ref={scrollRef}
          className="marquee-wrapper"
        >
          {/* Render two identical tracks for seamless infinite scrolling */}
          {[1, 2].map((trackIndex) => (
            <div key={`track-${trackIndex}`} className="marquee-track">
              {projects.map((project) => (
                <article
                  key={`${trackIndex}-${project.id}`}
                  className="glass-card project-card"
                  style={{
                    padding: 0,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  {/* Hero image */}
                  <div
                    className="project-image"
                    style={{
                      height: 220,
                      backgroundImage: `url(/projects/${project.id}/hero.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
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
                </article>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
