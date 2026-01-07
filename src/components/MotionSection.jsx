import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export default function MotionSection({ children, style = {} }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      style={style}
    >
      {children}
    </motion.section>
  );
}
