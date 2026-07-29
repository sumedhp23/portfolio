import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const techData = [
  {
    key: "languages",
    label: "Languages",
    items: ["Python", "SQL", "Java", "JavaScript", "HTML", "CSS", "C / C++"],
  },
  {
    key: "ml",
    label: "Machine Learning & AI",
    items: [
      "Regression",
      "Random Forest",
      "KNN",
      "Decision Trees",
      "Clustering",
      "K-Means",
      "Predictive Analytics",
    ],
  },
  {
    key: "libraries",
    label: "ML & Data Libraries",
    items: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "SciPy",
      "TensorFlow",
      "Matplotlib",
    ],
  },
  {
    key: "frameworks",
    label: "Frameworks",
    items: ["Django", "Flask", "React"],
  },
  {
    key: "databases",
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    key: "tools",
    label: "Tools & Platforms",
    items: [
      "Power BI",
      "Tableau",
      "JIRA",
      "GitHub",
      "Jupyter Notebook",
      "Google Analytics",
      "MySQL Workbench",
      "MS Excel",
      "Microsoft Office",
    ],
  },
];

export default function TechStack() {
  const [active, setActive] = useState("languages");
  const activeItem = techData.find(item => item.key === active);

  return (
    <section
      id="tech"
      style={{
        padding: "180px 24px",
        textAlign: "center",
        position: "relative",
        zIndex: 10,
        background:
          "radial-gradient(1200px circle at 50% 50%, rgba(120,200,255,0.05), transparent 70%)",
      }}
    >
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "var(--fs-h2)",
          marginBottom: "var(--space-lg)",
          fontWeight: 600,
          color: "var(--text-primary)",
        }}
      >
        <span className="interactive-link">Technical Skills</span>
      </motion.h2>

      {/* Category Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16,
          marginBottom: 72,
        }}
      >
        {techData.map(item => {
          const isActive = active === item.key;

          return (
            <motion.button
              key={item.key}
              onClick={() => setActive(item.key)}
              whileHover={{
                y: -4,
                background:
                  "radial-gradient(400px circle at var(--mx) var(--my), rgba(120,200,255,0.18), transparent 60%), rgba(255,255,255,0.08)",
                borderColor: "rgba(120,200,255,0.45)",
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: isActive
                  ? "1px solid rgba(255,255,255,0.5)"
                  : "1px solid rgba(255,255,255,0.3)",
                background: isActive
                  ? "rgba(255,255,255,0.15)"
                  : "rgba(255,255,255,0.1)",
                color: isActive
                  ? "var(--text-primary)"
                  : "#9ca3af",
                fontSize: "1.05rem",
                fontWeight: isActive ? 800 : 600,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {item.label}
            </motion.button>

          );
        })}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
          }}
        >
          {activeItem.items.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -2,
                color: "var(--accent)",
                textShadow: "0 0 10px rgba(120,200,255,0.55)",
              }}
              transition={{
                duration: 0.2,
                delay: idx * 0.03,
                ease: "easeOut",
              }}
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                cursor: "default",
              }}
            >
              {skill}
              {idx !== activeItem.items.length - 1 && " · "}
            </motion.span>
          ))}




        </motion.div>
      </AnimatePresence>
    </section>
  );
}
