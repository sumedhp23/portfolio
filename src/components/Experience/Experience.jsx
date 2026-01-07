import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { experience } from "../../data/experienceData";
import { staggerContainer, fadeItem } from "../../animations/variants";

export default function Experience() {
  return (
    <section style={{ padding: "160px 80px" }}>
      <h2 style={{ textAlign: "center", fontSize: "var(--fs-h2)",
    marginBottom: "var(--space-lg)",
    color: "var(--text-primary)", }}>Experience</h2>

      <motion.div
        id="experience"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        style={{
          position: "relative",
          maxWidth: 720,
          marginLeft: 40,
        }}
      >
        {/* Vertical timeline line */}
        <div
          style={{
            position: "absolute",
            left: -24,
            top: 0,
            bottom: 0,
            width: 1,
            background: "var(--border-subtle)",
          }}
        />

        {experience.map((item, index) => {
          const isCurrent = index === 0;

          return (
            <motion.div
              key={item.id}
              variants={fadeItem}
              style={{
                position: "relative",
                paddingLeft: 40,
                marginBottom: 72,
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: -30,
                  top: 6,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: isCurrent
                    ? "var(--accent)"
                    : "var(--text-muted)",
                }}
              />

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
                  maxWidth: 640,
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
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                    View details →
                </motion.span>

              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

