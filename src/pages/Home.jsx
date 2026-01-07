import { motion } from "framer-motion";
import { pageVariants } from "../animations/pageVariants";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


import Header from "../components/Header/Header";
import MenuOverlay from "../components/Menu/MenuOverlay";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import TechStack from "../components/TechStack/TechStack";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </motion.main>
  );
}
