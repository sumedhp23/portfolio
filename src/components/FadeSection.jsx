import { motion } from "framer-motion";

export default function FadeSection({ children, className = "" }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.section>
  );
}
