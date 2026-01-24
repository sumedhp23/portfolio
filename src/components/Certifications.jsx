import { motion } from "framer-motion";
import { useState } from "react";
import { certifications } from "../data/certificationsData";
import { staggerContainer, fadeItem } from "../animations/variants";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" style={{ padding: "160px 80px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "var(--fs-h2)",
          marginBottom: "var(--space-xl)",
          color: "var(--text-primary)",
        }}
      >
        Certifications
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 48,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {certifications.map((cert) => (
          <motion.article
            key={cert.id}
            variants={fadeItem}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
            onClick={() => setActiveCert(cert)}
          >
            {/* Hero image — MATCHES PROJECTS EXACTLY */}
            <div
              style={{
                height: 200,
                backgroundImage: `url(${cert.hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content */}
            <div style={{ padding: 24, flexGrow: 1 }}>
              <h3 style={{ marginBottom: 6 }}>{cert.title}</h3>
              <small>{cert.issuer}</small>

              <p
                style={{
                  marginTop: 10,
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                {cert.skills.join(" · ")}
              </p>
            </div>

            {/* Footer actions — VERIFY */}
            <div
              style={{
                padding: "16px 24px",
                display: "flex",
                justifyContent: "flex-end",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={cert.verify}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--accent)",
                  fontSize: "0.9rem",
                }}
              >
                Verify →
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <CertificateModal
        cert={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}
