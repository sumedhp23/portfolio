import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 600,
          marginBottom: 24,
          color: "var(--text-primary)",
        }}
      >
        <span className="interactive-link">Let’s build something meaningful</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        style={{
          maxWidth: 600,
          fontSize: "1.1rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          marginBottom: 40,
        }}
      >
        I’m always open to discussing impactful projects, internships,
        full-time roles, or collaborations across software and data
        engineering, machine learning, or even a chat over coffee!
      </motion.p>

      {/* Contact Blob Card */}
      <motion.div
        variants={fadeUp}
        style={blobStyle}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
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
            style={{ ...inputStyle, resize: "vertical" }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 8,
            }}
          >
            <motion.button
              type="submit"
              whileHover={{
                y: -3,
                borderColor: "var(--accent)",
                boxShadow:
                  "0 0 0 1px rgba(120,200,255,0.4), 0 8px 24px rgba(120,200,255,0.15)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={buttonStyle}
            >
              Send message →
            </motion.button>

            {status && (
              <small style={{ color: "var(--text-muted)" }}>
                {status}
              </small>
            )}
          </div>
        </form>
      </motion.div>

      {/* Email below blob */}
      <motion.div
        variants={fadeUp}
        style={{ marginBottom: 48 }}
      >
        <a
          href="mailto:sumedhpatil03@gmail.com"
          className="interactive-link"
          style={{ fontSize: "1rem" }}
        >
          sumedhpatil03@gmail.com
        </a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        variants={fadeUp}
        style={{
          display: "flex",
          gap: 28,
          alignItems: "center",
        }}
      >
        <motion.a
          href="https://github.com/sumedhp23"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.15,
            color: "var(--accent)",
            filter: "drop-shadow(0 0 6px rgba(120,200,255,0.6))",
          }}
          transition={{ duration: 0.2 }}
          style={iconStyle}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/sumedh-patil-034ab2259/"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.15,
            color: "var(--accent)",
            filter: "drop-shadow(0 0 6px rgba(120,200,255,0.6))",
          }}
          transition={{ duration: 0.2 }}
          style={iconStyle}
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>

      {/* Footer */}
      <motion.footer
        variants={fadeUp}
        style={{
          marginTop: 120,
          paddingTop: 32,
          textAlign: "center",
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

/* ───────── styles ───────── */

const blobStyle = {
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: 14,
  padding: 32,
  maxWidth: 640,
  marginBottom: 28,
};

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.12)",
  padding: "12px 14px",
  color: "var(--text-primary)",
  fontSize: "0.95rem",
  outline: "none",
  borderRadius: 6,
  transition: "border 0.2s ease, box-shadow 0.2s ease",
};

const buttonStyle = {
  padding: "10px 20px",
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.25)",
  color: "var(--text-primary)",
  cursor: "pointer",
  fontSize: "0.9rem",
};

const iconStyle = {
  fontSize: "1.6rem",
  color: "var(--text-secondary)",
  display: "flex",
  alignItems: "center",
};
