import { useState } from "react";
import { contactApi } from "../../services/api";
import type { ContactForm } from "../../types";

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await contactApi.submit(form);
      if (res.data.success) {
        setStatus("success");
        setMessage(
          res.data.message ||
            "Message sent successfully! I'll get back to you soon.",
        );
        setForm(initialForm);
      } else {
        throw new Error(res.data.message);
      }
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again or reach out via email.",
      );
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 0",
        background: "var(--bg2)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container-custom" style={{ maxWidth: "1100px" }}>
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-tag">05 — Contact</div>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "5rem",
          }}
        >
          {/* Left Column - Info */}
          <div>
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
                fontWeight: 700,
                marginBottom: "1rem",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
                color: "var(--text)",
              }}
            >
              Got a project?
              <br />
              <span style={{ color: "var(--green)" }}>Let's talk.</span>
            </h3>
            <p
              style={{
                color: "var(--muted)",
                fontSize: 14,
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              I'm currently available for freelance projects, collaborations,
              and full-time opportunities. Whether you have a question or just
              want to connect — I'd love to hear from you.
            </p>

            {/* Contact Info Cards */}
            <div style={{ marginBottom: "2rem" }}>
              {[
                { icon: "📍", label: "Location", value: "Accra, Ghana" },
                {
                  icon: "📧",
                  label: "Email",
                  value: "learnfromothers32@gmail.com", // Replace with your email
                  href: "mailto:learnfromothers32@gmail.com.com",
                },
                {
                  icon: "🐙",
                  label: "GitHub",
                  value: "learnfromothers32-cell",
                  href: "https://github.com/learnfromothers32-cell",
                },
                {
                  icon: "💼",
                  label: "Status",
                  value: "Available for work",
                  isGreen: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                    padding: "0.75rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--green)";
                    e.currentTarget.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--muted2)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: item.isGreen ? "var(--green)" : "var(--text)",
                          textDecoration: "none",
                          fontSize: 13,
                          fontWeight: item.isGreen ? 500 : 400,
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (!item.isGreen)
                            e.currentTarget.style.color = "var(--green)";
                        }}
                        onMouseLeave={(e) => {
                          if (!item.isGreen)
                            e.currentTarget.style.color = "var(--text)";
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          color: item.isGreen ? "var(--green)" : "var(--text)",
                          fontSize: 13,
                          fontWeight: item.isGreen ? 500 : 400,
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              <SocialLink
                href="https://github.com/learnfromothers32-cell"
                label="GitHub"
              />
              <SocialLink
                href="https://linkedin.com/in/your-profile"
                label="LinkedIn"
              />
              <SocialLink
                href="https://twitter.com/your-handle"
                label="Twitter"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <Field
                label="Name"
                name="name"
                type="text"
                placeholder="Asante Kelvin"
                value={form.name}
                onChange={handleChange}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="hello@kelvin.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              type="text"
              placeholder="Project inquiry / Collaboration"
              value={form.subject}
              onChange={handleChange}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  fontWeight: 500,
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  padding: "12px 14px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  lineHeight: 1.6,
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                  borderRadius: "4px",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            {/* Status message */}
            {status !== "idle" && status !== "loading" && (
              <div
                style={{
                  fontSize: 12,
                  padding: "12px 16px",
                  borderLeft: `3px solid ${status === "success" ? "var(--green)" : "#ff5555"}`,
                  background: "var(--surface)",
                  color: status === "success" ? "var(--green)" : "#ff5555",
                  borderRadius: "4px",
                }}
              >
                {status === "success" ? "✓ " : "⚠ "}
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary"
              style={{
                alignSelf: "flex-start",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                opacity: status === "loading" ? 0.7 : 1,
                transition: "all 0.2s ease",
              }}
            >
              {status === "loading" ? (
                <>
                  <span
                    style={{
                      display: "inline-block",
                      animation: "spin 1s linear infinite",
                    }}
                  >
                    ⟳
                  </span>
                  {" Sending..."}
                </>
              ) : (
                "Send Message →"
              )}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .container-custom > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label
        style={{
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
          fontWeight: 500,
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--text)",
          padding: "12px 14px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          outline: "none",
          transition: "border-color 0.2s",
          borderRadius: "4px",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--green)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
      />
    </div>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        color: "var(--muted)",
        fontSize: 12,
        textDecoration: "none",
        padding: "6px 12px",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        transition: "all 0.2s ease",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--green)";
        e.currentTarget.style.borderColor = "var(--green)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--muted)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {label}
    </a>
  );
}
