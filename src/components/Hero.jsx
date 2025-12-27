import FadeSection from "./FadeSection";

export default function Hero() {
  return (
    <FadeSection className="hero">
      <div className="content-blob">
        <h1>Sumedh Patil</h1>

        <div className="tagline">
          Software Engineer | Data Engineering | Machine Learning
        </div>

        <div className="pitch">
          I build data-driven systems and machine learning solutions,
          focusing on solving real-world problems through thoughtful
          engineering and clean, scalable design.
        </div>
      </div>
    </FadeSection>
  );
}
