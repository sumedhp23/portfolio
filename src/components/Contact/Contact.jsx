import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("Message sent ✓");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{
        padding: "160px 80px 100px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <motion.h2
        variants={fadeUp}
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 600,
          marginBottom: 24,
          color: "var(--text-primary)",
        }}
      >
        Let’s build something meaningful
      </motion.h2>

      <motion.p
        variants={fadeUp}
        style={{
          maxWidth: 600,
          fontSize: "1.1rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          marginBottom: 32,
        }}
      >
        I’m always open to discussing impactful projects, internships,
        full-time roles, or collaborations across software and data
        engineering, machine learning — or even a chat over coffee.
      </motion.p>

      {/* Direct email (fallback) */}
      <motion.div variants={fadeUp} style={{ marginBottom: 48 }}>
        <a
          href="mailto:sumedhpatil03@gmail.com"
          style={{
            fontSize: "1.05rem",
            color: "var(--text-primary)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            paddingBottom: 4,
          }}
        >
          sumedhpatil03@gmail.com
        </a>
      </motion.div>

      {/* Contact form */}
      <motion.form
        variants={fadeUp}
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          maxWidth: 600,
          marginBottom: 64,
        }}
      >
        <input
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          style={inputStyle}
        />

        <input
          required
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          style={inputStyle}
        />

        <textarea
          required
          placeholder="Your message"
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            alignSelf: "flex-start",
            padding: "10px 20px",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "var(--text-primary)",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Send message →
        </button>

        {status && (
          <small style={{ color: "var(--text-muted)" }}>
            {status}
          </small>
        )}
      </motion.form>

      {/* Social links */}
      <motion.div
        variants={fadeUp}
        style={{
          display: "flex",
          gap: 32,
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/sumedhp23"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--text-secondary)" }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sumedh-patil-034ab2259/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--text-secondary)" }}
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        variants={fadeUp}
        style={{
          marginTop: 120,
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: "0.85rem",
          color: "var(--text-muted)",
        }}
      >
        © {new Date().getFullYear()} Sumedh Patil · Built with intent
      </motion.footer>
    </motion.section>
  );
}

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.12)",
  padding: "12px 14px",
  color: "var(--text-primary)",
  fontSize: "0.95rem",
  outline: "none",
};
