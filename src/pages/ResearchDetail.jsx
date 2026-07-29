import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageVariants } from "../animations/pageVariants";
import { fadeUp, staggerContainer } from "../animations/variants";
import useScrollToTop from "../hooks/useScrollToTop";

export default function ResearchDetail() {
  useScrollToTop();

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        padding: "120px 24px",
        maxWidth: 1000,
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        {/* Back Button */}
        <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
          <Link
            to="/"
            state={{ scrollTo: "research" }}
            className="interactive-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--text-tertiary)",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "100px" }}>
          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "24px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Research Details
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            In-depth exploration of a proposed hybrid machine learning framework for improving packaged food label verification through laboratory validation and predictive analytics.
          </p>
        </motion.div>

        {/* Key Findings */}
        <motion.div variants={fadeUp} style={{ marginBottom: "100px" }}>
          <h2 style={sectionHeadingStyle}>Key Findings</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px 24px",
            textAlign: "center"
          }}>
            <StatBlock value="95–97%" label="Expected Framework Accuracy" />
            <StatBlock value="200+" label="Proposed Product Dataset for Evaluation" />
            <StatBlock value="70%" label="Existing Open Food Facts Baseline" />
            <StatBlock value="95%" label="Hybrid Framework Expected Performance" />
            <StatBlock value="50%+" label="Reduction in Predicted Label Errors" />
            <StatBlock value="92–95%" label="VVariance Analysis within Proposed Framework" />
          </div>
        </motion.div>

        {/* Roles & Contributions */}
        <motion.div variants={fadeUp} style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          marginBottom: "120px",
          justifyContent: "space-between"
        }}>
          {/* My Role */}
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ ...sectionHeadingStyle, textAlign: "left" }}>My Role</h2>
            <p style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "24px"
            }}>
              As the primary contributor, I led the conception, methodology design, technical development, comparative analysis, manuscript preparation, and presentation of this research. The work focused on proposing a scalable machine learning framework for improving packaged food label verification through laboratory validation and predictive analytics.
            </p>
            <ul style={listStyle}>
              <li>Research conception</li>
              <li>Literature review</li>
              <li>Research planning</li>
              <li>Problem formulation</li>
              <li>Methodology design</li>
              <li>Machine learning framework development</li>
              <li>Statistical framework development</li>
              <li>Comparative analysis</li>
              <li>Performance benchmarking</li>
              <li>Technical writing</li>
              <li>Research presentation at IEEE CONIT 2026</li>
            </ul>
          </div>

          {/* Research Contributions */}
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ ...sectionHeadingStyle, textAlign: "left" }}>Research Contributions</h2>
            <ul style={listStyle}>
              <li>Designed a hybrid machine learning framework for food label verification</li>
              <li>Integrated laboratory validation with predictive machine learning</li>
              <li>Proposed the use of Random Forest for predictive modelling</li>
              <li>Evaluated XGBoost as part of the proposed predictive framework and feature importance</li>
              <li>Proposed Isolation Forest for anomaly detection</li>
              <li>Designed statistical validation methodology</li>
              <li>Proposed comparative evaluation using Open Food Facts as a reference dataset</li>
              <li>Proposed integrating laboratory validation with machine learning for food label verification</li>
            </ul>
          </div>
        </motion.div>

        {/* Research Workflow */}
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "120px" }}>
          <h2 style={sectionHeadingStyle}>Research Workflow</h2>
          <h3 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "32px" }}>Proposed Research Methodology</h3>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "center"
          }}>
            <WorkflowStep text="Product Sampling" />
            <WorkflowStep text="Data Collection" />
            <WorkflowStep text="Open Food Facts Dataset" />
            <WorkflowStep text="Laboratory Validation" />
            <WorkflowStep text="Feature Engineering" />
            <WorkflowStep text="Machine Learning Models" />
            <WorkflowStep text="Statistical Analysis" />
            <WorkflowStep text="Benchmarking" />
            <WorkflowStep text="Regulatory Insights" />
          </div>
        </motion.div>

        {/* Technology & Methods */}
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "120px" }}>
          <h2 style={sectionHeadingStyle}>Technology & Methods</h2>
          <p style={{
            fontSize: "1.15rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "800px",
            margin: "0 auto",
            fontWeight: 500
          }}>
            Python &bull; Pandas &bull; Scikit-learn &bull; Random Forest &bull; XGBoost &bull; Isolation Forest &bull; Statistical Analysis &bull; Machine Learning &bull; Predictive Analytics &bull; Open Food Facts &bull; HPLC &bull; Bomb Calorimetry &bull; FSSAI Guidelines
          </p>
        </motion.div>

        {/* Real-World Impact */}
        <motion.div variants={fadeUp} style={{ textAlign: "center", paddingBottom: "100px" }}>
          <h2 style={sectionHeadingStyle}>Real-World Impact</h2>
          <p style={{
            fontSize: "1.2rem",
            color: "var(--text-secondary)",
            maxWidth: "700px",
            margin: "0 auto 40px auto",
            lineHeight: 1.6
          }}>
            This research proposes a scalable framework demonstrating how machine learning and laboratory validation can be combined to strengthen food label verification. The methodology is intended to support future research, improve nutritional transparency, and provide a foundation for evidence-based regulatory decision-making.
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px 40px",
            fontWeight: 600,
            color: "var(--text-primary)",
            fontSize: "1.05rem"
          }}>
            <span>Consumer Protection</span>
            <span>Food Safety</span>
            <span>Public Health</span>
            <span>Regulatory Compliance</span>
            <span>Nutritional Transparency</span>
            <span>AI for Social Impact</span>
          </div>
        </motion.div>

      </motion.div>
    </motion.main>
  );
}

// Reusable micro-components for consistent styling
const sectionHeadingStyle = {
  fontSize: "2.2rem",
  fontWeight: 800,
  color: "var(--text-primary)",
  marginBottom: "60px",
  letterSpacing: "-0.02em",
  textAlign: "center"
};

const StatBlock = ({ value, label }) => (
  <div>
    <div style={{
      fontSize: "3.5rem",
      fontWeight: 800,
      color: "var(--text-primary)",
      marginBottom: "8px",
      letterSpacing: "-0.03em"
    }}>
      {value}
    </div>
    <div style={{
      fontSize: "1.05rem",
      color: "var(--text-secondary)",
      fontWeight: 500
    }}>
      {label}
    </div>
  </div>
);

const listStyle = {
  listStyleType: "disc",
  paddingLeft: "24px",
  color: "var(--text-primary)",
  fontSize: "1.05rem",
  lineHeight: 1.8,
  fontWeight: 500,
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};

const WorkflowStep = ({ text }) => (
  <div style={{
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "var(--text-primary)",
  }}>
    {text}
  </div>
);
