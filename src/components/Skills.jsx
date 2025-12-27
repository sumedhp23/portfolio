import FadeSection from "./FadeSection";

export default function Skills() {
  return (
    <FadeSection className="skills">
      {/* Section Heading */}
      <h2 className="skills-heading">Skills</h2>

      {/* Skills Content */}
      <div className="content-blob">
        <div className="skills-group">
          <h3>Core Engineering</h3>
          <p>Python · SQL · Java · JavaScript · Data Structures & Algorithms · OOP</p>
        </div>

        <div className="skills-group">
          <h3>Machine Learning & Data</h3>
          <p>
            Machine Learning · Feature Engineering · Model Evaluation ·
            Imbalanced Data Handling · Risk Scoring · Data Analysis
          </p>
        </div>

        <div className="skills-group">
          <h3>Frameworks & Backend</h3>
          <p>Django · Flask · REST APIs · FastAPI · Backend System Design</p>
        </div>

        <div className="skills-group">
          <h3>Data Engineering & BI</h3>
          <p>ETL Pipelines · Dimensional Modeling · SQL Analytics · Tableau · Power BI</p>
        </div>

        <div className="skills-group">
          <h3>Tools & Platforms</h3>
          <p>Git · GitHub · VS Code · MySQL · PostgreSQL · MongoDB</p>
        </div>
      </div>
    </FadeSection>
  );
}
