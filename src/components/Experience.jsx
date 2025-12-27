import FadeSection from "./FadeSection";

export default function Experience() {
  return (
    <FadeSection className="experience">
      {/* Section Heading */}
      <h2 className="experience-heading">Experience</h2>

      {/* Experience 1 */}
      <div className="content-blob experience-blob">
        <h3>AI / ML Engineering Intern</h3>
        <div className="experience-meta">
          Rooman Technologies · Sep 2024 – Apr 2025
        </div>

        <p>
          Worked on building and optimizing a production-style fraud detection
          and risk scoring system using highly imbalanced financial transaction
          data. Designed end-to-end ML pipelines covering data preprocessing,
          feature engineering, model training, evaluation, and inference.
        </p>

        <p>
          Trained and evaluated multiple ML and deep learning models, improving
          ROC-AUC from 0.92 to 0.98 through feature scaling, class weighting, and
          hyperparameter tuning. Reduced false negatives by 30% using
          precision–recall optimization.
        </p>

        <div className="tech">
          Python · Scikit-learn · TensorFlow · Machine Learning · Data Analysis · Git
        </div>
      </div>

      {/* Experience 2 */}
      <div className="content-blob experience-blob">
        <h3>Python Full-Stack Intern</h3>
        <div className="experience-meta">
          Future Technologys · Mar 2024 – Apr 2024
        </div>

        <p>
          Built backend-driven applications using Python, Django, and Flask,
          working extensively with structured data formats and REST APIs.
          Strengthened object-oriented programming skills and backend system
          reliability.
        </p>

        <p>
          Developed a full-stack weather forecasting application with live API
          integration, responsive UI, and location-based predictions. Optimized
          backend workflows using multithreading and unit testing.
        </p>

        <div className="tech">
          Python · Django · Flask · REST APIs · Pandas · NumPy · SQL
        </div>
      </div>

      {/* Experience 3 */}
      <div className="content-blob experience-blob">
        <h3>Digital Product Data Analyst</h3>
        <div className="experience-meta">
          Nikhil Paint Manufacturer / Supplier Ltd. · Jun 2025 – Nov 2025
        </div>

        <p>
          Designed and implemented ETL workflows to support data processing for
          paint mixing and product software systems. Performed data analysis to
          improve software efficiency and operational performance.
        </p>

        <p>
          Collaborated with cross-functional teams using agile practices and
          Azure DevOps, contributing to streamlined development workflows and
          faster turnaround times.
        </p>

        <div className="tech">
          ETL · SQL · Python · Tableau · Power BI · Azure DevOps · Data Analytics
        </div>

        
      </div>
    </FadeSection>
  );
}
