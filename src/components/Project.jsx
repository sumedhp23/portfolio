import FadeSection from "./FadeSection";
import { FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <FadeSection className="project">
      {/* Section Heading */}
      <h2 className="projects-heading">Projects</h2>

      {/* Project 1 */}
      <div className="content-blob project-blob">
        <h3>Transaction Risk Modeling & Fraud Prevention System</h3>

        <p>
          Developed a machine-learning based fraud detection and transaction risk scoring system to identify potentially fraudulent financial transactions in a highly imbalanced dataset of 280K+ records. The key challenge was minimizing false negatives while maintaining high model accuracy. I built an end-to-end ML pipeline involving data preprocessing, feature engineering, model training, and evaluation, and implemented a probability-based risk scoring mechanism. Using Python, Scikit-learn, TensorFlow, Pandas, and multiple models (Logistic Regression, Random Forest, Neural Networks), I improved ROC-AUC from ~0.92 to ~0.98 and reduced false negatives by approximately 30%, making the solution suitable for real-world fraud prevention use cases.
        </p>

        <p className="project-impact">
            <strong>Impact:</strong> Improved fraud detection reliability by reducing false negatives and converting model outputs into actionable transaction risk scores suitable for real-world decision-making.
        </p>


        <div className="tech">
          Python · Scikit-learn · TensorFlow · Pandas · Machine Learning
        </div>

        <a
          href="https://github.com/sumedhp23/Fraud-Detection-and-Risk-Scoring"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub size={20} />
        </a>
      </div>

      {/* Project 2 */}
      <div className="content-blob project-blob">
        <h3>Weather Intelligence Platform</h3>

        <p>
          Built a full-stack weather intelligence application to provide real-time, location-based weather insights using external APIs. The primary challenge was reliably ingesting and processing live API data while maintaining backend performance. I designed backend services for API integration, data validation, and structured storage, and implemented dynamic UI updates for real-time forecasting. The project was developed using Django, Python, REST APIs, SQL, and backend optimization techniques, resulting in a scalable application capable of handling live weather data with low latency and improved data consistency.
        </p>

        <p className="project-impact">
            <strong>Impact:</strong> Delivered a production-style backend system capable of handling live API data with consistent performance, clean service separation, and scalable request processing.
        </p>


        <div className="tech">
          Django · Python · REST APIs · SQL · Data Engineering
        </div>

        <a
          href="https://github.com/sumedhp23/weather-forecast-django"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub size={20} />
        </a>
      </div>

      {/* Project 3 */}
      <div className="content-blob project-blob">
        <h3>Food Inspection Data Analytics</h3>

        <p>
          Created a data analytics solution to analyze large-scale food inspection datasets from multiple U.S. cities to identify compliance trends and violation patterns. The challenge involved cleaning, transforming, and structuring raw inspection data for meaningful analysis. I designed ETL pipelines and dimensional data models, performed exploratory data analysis, and built interactive dashboards for insight generation. Using Python, SQL, ETL techniques, Tableau, and Power BI, the project enabled data-driven insights into inspection risk factors and regulatory compliance trends across cities.
        </p>

        <p className="project-impact">
            <strong>Impact:</strong> Enabled clearer visibility into inspection risks and compliance patterns by transforming raw datasets into structured analytics and interactive dashboards.
        </p>


        <div className="tech">
          SQL · ETL · Dimensional Modeling · Tableau · Power BI
        </div>
      </div>
    </FadeSection>
  );
}
