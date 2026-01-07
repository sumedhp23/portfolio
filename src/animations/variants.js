export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const subtleHover = {
  hover: {
    y: -4,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};



export const fadeItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};


export const hoverShift = {
  hover: {
    x: 6,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

