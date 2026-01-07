import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import {
  staggerContainer,
  fadeItem,
  hoverShift,
} from "../../animations/variants";

export default function Projects() {
  return (
    <section style={{ padding: "160px 80px" }}>
      <h2 style={{ textAlign:"center", fontSize: "var(--fs-h2)",
    marginBottom: "var(--space-lg)",
    color: "var(--text-primary)",}}>Projects</h2>

      <motion.div
        id="projects"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        style={{
          maxWidth: 720,
          display: "flex",
          flexDirection: "column",
          gap: 72,
        }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeItem} whileHover={hoverShift.hover}>
            <h3 className="interactive-link">{project.title}</h3>

            <p
              style={{
                marginTop: 16,
                maxWidth: 640,
                color: "var(--text-secondary)",
              }}
            >
              {project.short}
            </p>

            <Link
              to={`/projects/${project.id}`}
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
                View case study →
              </motion.span>

            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
