import FadeSection from "./FadeSection";

export default function About() {
  return (
    <FadeSection className="about">
      {/* Section Heading */}
      <h2 className="about-heading">About Me</h2>

      {/* About Content */}
      <div className="content-blob">
        <p>
          I approach problems by first understanding the system as a whole — the data, the constraints, and the real-world impact of the solution. I focus on breaking complex problems into smaller, solvable components and prefer building solutions that are practical, testable, and easy to reason about rather than over-engineered.
        </p>

        <p style={{ marginTop: "24px" }}>
          I enjoy working on backend, data, and machine learning systems where I can design clean pipelines, experiment thoughtfully, and turn raw data into reliable outcomes. I’m particularly drawn to work that involves building end-to-end systems — from data processing and model development to backend integration and decision-ready outputs.
        </p>

        <p style={{ marginTop: "24px" }}>
            In my work, I optimize for clarity, reliability, and impact. I value readable code, well-defined interfaces, and solutions that perform consistently in real-world conditions. My goal is not just to make things work, but to make them understandable, maintainable, and genuinely useful.
        </p>
      </div>
      
      {/* Resume Button */}
      <div className="about-resume">
        <a
          href="public/Sumedh_job_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
      </div>  

    </FadeSection>
  );
}
