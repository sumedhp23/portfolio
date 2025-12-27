import FadeSection from "./FadeSection";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <FadeSection className="contact">
      {/* Section Heading */}
      <h2 className="contact-heading">Contact</h2>

      {/* Contact Content */}
      <div className="content-blob">
        <p className="contact-email">
          sumedhpatil03@gmail.com
        </p>

        <div className="contact-icons">
          <a
            href="https://github.com/sumedhp23"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={26} />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>

      {/* Footer at page end */}
      <footer className="page-footer">
        © 2025 Sumedh Patil
      </footer>
    </FadeSection>
  );
}
