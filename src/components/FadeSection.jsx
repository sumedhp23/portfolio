import { motion } from "framer-motion";

const fadeVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function FadeSection({ children, className = "" }) {
  const isLandscape =
    window.matchMedia("(orientation: landscape)").matches &&
    window.innerHeight < 500;

  return (
    <section className={className}>
      <motion.div
        style={{
          minHeight: "1px",
          opacity: isLandscape ? 1 : undefined,
          transform: isLandscape ? "none" : undefined,
        }}
        variants={isLandscape ? {} : fadeVariants}
        initial={isLandscape ? false : "hidden"}
        whileInView={isLandscape ? undefined : "visible"}
        viewport={
          isLandscape
            ? undefined
            : {
                once: false,
                amount: 0.15,
                margin: "-40px",
              }
        }
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}