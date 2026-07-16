import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageVariants";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import TechStack from "../components/TechStack/TechStack";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </motion.main>
  );
}
