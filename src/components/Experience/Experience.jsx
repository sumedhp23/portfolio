import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { experience } from "../../data/experienceData";
import { staggerContainer, fadeItem } from "../../animations/variants";

export default function Experience() {
  return (
    <section style={{ padding: "160px 80px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "var(--fs-h2)",
          marginBottom: "var(--space-xl)",
          color: "var(--text-primary)",
        }}
      >
        Experience
      </h2>

      <motion.div
        id="experience"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          position: "relative",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {/* Center timeline */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 1,
            background: "var(--border-subtle)",
            transform: "translateX(-50%)",
          }}
        />

        {experience.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isCurrent = index === 0;

          // Simple heuristic: last 2 entries are education
          const isEducation = index >= experience.length - 2;

          return (
            <motion.div
              key={item.id}
              variants={fadeItem}
              style={{
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                marginBottom: 96,
                position: "relative",
              }}
            >
              {/* Content */}
              <div
                style={{
                  width: "45%",
                  textAlign: isLeft ? "right" : "left",
                }}
              >
                <h3 className="interactive-link">{item.role}</h3>

                <p
                  style={{
                    marginTop: 6,
                    color: "var(--text-muted)",
                  }}
                >
                  {item.org} · {item.period}
                </p>

                <p
                  style={{
                    marginTop: 16,
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.short}
                </p>

                <Link
                  to={`/experience/${item.id}`}
                  style={{
                    display: "inline-block",
                    marginTop: 14,
                    color: "var(--accent)",
                  }}
                >
                  <motion.span
                    whileHover={{ x: isLeft ? -6 : 6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    View details →
                  </motion.span>
                </Link>
              </div>

              {/* Connector line */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: "50%",
                  width: 40,
                  height: 1,
                  background: "var(--border-subtle)",
                  transform: isLeft
                    ? "translateX(-40px)"
                    : "translateX(0)",
                }}
              />

              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 8,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: isCurrent
                    ? "var(--accent)"
                    : "var(--text-muted)",
                  transform: "translateX(-50%)",
                }}
              />

              {/* Section label */}
              {index === 0 && (
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: -32,
                    transform: "translateX(-50%)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    color: "var(--text-muted)",
                  }}
                >
                  WORK
                </div>
              )}

              {isEducation && index === experience.length - 2 && (
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: -32,
                    transform: "translateX(-50%)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    color: "var(--text-muted)",
                  }}
                >
                  EDUCATION
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
