import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer } from "../../animations/variants";

export default function Research() {
  return (
    <motion.section
      id="research"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      style={{
        padding: "120px 24px",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      {/* Headings */}
      <div style={{ textAlign: "center", marginBottom: "var(--space-2xl)" }}>
        <motion.h2
          variants={fadeUp}
          style={{
            fontSize: "var(--fs-h2)",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "12px",
          }}
        >
          Featured Research
        </motion.h2>

        <motion.h3
          variants={fadeUp}
          style={{
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "var(--text-secondary)",
            marginBottom: "16px",
          }}
        >
          Peer-Reviewed IEEE Conference Publication
        </motion.h3>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "0.95rem",
            color: "var(--text-tertiary)",
            marginBottom: "48px",
          }}
        >
          Presented at the 6th IEEE International Conference on Intelligent Technologies (IEEE CONIT 2026)
        </motion.p>

        <motion.h1
          variants={fadeUp}
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "var(--text-primary)",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          Bridging Discrepancies: Improving Packaged Food Label Accuracy in India Through Machine Learning and Laboratory Validation
        </motion.h1>
      </div>

      {/* Abstract Text */}
      <motion.div variants={fadeUp} style={{ maxWidth: 800, margin: "0 auto", marginBottom: "64px" }}>
        <p style={paraStyle}>
          India houses one of the world's largest diabetic populations, making accurate nutritional labeling
          a critical public health necessity. Millions of consumers rely on these labels for making daily
          dietary decisions. However, existing systems predominantly depend on manufacturer declarations
          and crowdsourced food databases that lack systematic scientific validation.
        </p>
        <p style={paraStyle}>
          This leaves consumers without a reliable mechanism to verify whether the declared nutritional
          values accurately represent the actual product contents, exposing them to hidden sugars and
          mislabeled macronutrients.
        </p>
        <p style={paraStyle}>
          <b>To bridge this gap, this research introduces a scalable, AI-assisted verification framework. By
            proposing an unifying laboratory validation, statistical analysis, and machine learning, the framework can successfully
            identify discrepancies between declared and actual sugar content. This establishes
            a robust evidence-based tool designed to enhance consumer trust, support regulatory agencies,
            and enforce transparency in packaged food labeling.</b>
        </p>
      </motion.div>

      {/* Publication Details Card */}
      <motion.div
        variants={fadeUp}
        className="glass-card"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "48px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>
          Publication Details
        </h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          paddingBottom: "32px"
        }}>
          <div>
            <div style={labelStyle}>CONFERENCE</div>
            <div style={valueStyle}>IEEE CONIT 2026</div>
          </div>
          <div>
            <div style={labelStyle}>STATUS</div>
            <div style={valueStyle}>Published</div>
          </div>
          <div>
            <div style={labelStyle}>PUBLICATION</div>
            <div style={valueStyle}>IEEE Xplore</div>
          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          <a href="/certifications/IEEE_CONIT_2026_Certificate.pdf" target="_blank" rel="noreferrer" className="interactive-link" style={linkStyle}>
            View Certificate
          </a>
          <a href="https://ieeexplore.ieee.org/document/11621434/authors#authors" target="_blank" rel="noreferrer" className="interactive-link" style={linkStyle}>
            View Publication
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://doi.org/10.1109/CONIT69683.2026.11621434"
            target="_blank"
            rel="noreferrer"
            className="interactive-link"
            style={linkStyle}
          >
            DOI: 10.1109/CONIT69683.2026.11621434
          </a>
        </div>

        <div style={{ marginTop: "16px" }}>
          <Link
            to="/research/details"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              borderRadius: "100px",
              border: "1px solid var(--accent-glow)",
              backgroundColor: "rgba(56, 189, 248, 0.05)",
              color: "var(--accent-glow)",
              fontSize: "0.95rem",
              fontWeight: 500,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-glow)";
              e.currentTarget.style.color = "var(--bg-primary)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(56, 189, 248, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(56, 189, 248, 0.05)";
              e.currentTarget.style.color = "var(--accent-glow)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Read more details →
          </Link>
        </div>
      </motion.div>

    </motion.section>
  );
}

const paraStyle = {
  fontSize: "1.1rem",
  lineHeight: 1.7,
  color: "var(--text-secondary)",
  marginBottom: "24px",
  textAlign: "justify",
};

const labelStyle = {
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
  color: "var(--text-tertiary)",
  marginBottom: "8px",
};

const valueStyle = {
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "var(--text-primary)",
};

const linkStyle = {
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "var(--text-primary)",
};

const disabledLinkStyle = {
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "var(--text-tertiary)",
};
