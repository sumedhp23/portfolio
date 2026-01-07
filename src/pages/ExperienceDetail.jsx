import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { experience } from "../data/experienceData";
import { pageVariants } from "../animations/pageVariants";
import { fadeUp } from "../animations/variants";

export default function ExperienceDetail() {
  const { id } = useParams();
  const item = experience.find((e) => e.id === id);

  if (!item) return null;

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: "140px 80px", maxWidth: 900 }}
    >
      <motion.h1 variants={fadeUp}>
        {item.role}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        style={{ color: "var(--text-muted)", marginTop: 12 }}
      >
        {item.org} · {item.period}
      </motion.p>

      <motion.div variants={fadeUp} style={{ marginTop: 48 }}>
        <h3>What I Worked On</h3>
        <p>{item.short}</p>
      </motion.div>

      <motion.div variants={fadeUp} style={{ marginTop: 64 }}>
        <Link to="/">← Back to Home</Link>
      </motion.div>
    </motion.section>
  );
}
