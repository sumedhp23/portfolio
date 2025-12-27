import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <main>
      <div className="intro-wrapper">
        <div className="intro-bg" />
        <div className="intro-noise" />

        <Hero />
        <About />
      </div>

      <Skills />
      <Experience />
      <Project />
      <Contact />
    </main>
  );
}

export default App;
