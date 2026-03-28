import { useState, useEffect } from "react";


const phrases = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Docker Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter
  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 60);
      } else {
        setDeleting(false);
        setPhraseIdx((p) => (p + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orbs - more subtle */}
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: "20%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,135,0.03) 0%, rgba(0,255,135,0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-5%",
          bottom: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.02) 0%, rgba(0,212,255,0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-custom"
        style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}
      >
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left column - Text content */}
          <div>
            {/* Eyebrow - more refined */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 12,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--green)",
                marginBottom: "2rem",
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 40,
                  height: 1.5,
                  background: "var(--green)",
                }}
              />
              Welcome to my digital space
            </div>

            {/* Name - cleaner gradient */}
            <h1
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, var(--text) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Asante Kelvin
            </h1>

            {/* Typewriter - cleaner presentation */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(1rem, 2vw, 1.35rem)",
                color: "var(--muted)",
                marginBottom: "2rem",
                minHeight: "2.5em",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: "var(--green)" }}>➜</span>
              <span style={{ fontWeight: 500 }}>{displayed}</span>
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1.2em",
                  background: "var(--green)",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </div>

            {/* Bio - more professional tone */}
            <p
              style={{
                maxWidth: 580,
                color: "var(--muted)",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                borderLeft: "2px solid var(--border)",
                paddingLeft: "1.5rem",
              }}
            >
              <span style={{ color: "var(--text)", fontWeight: 500 }}>
                Self-taught developer based in Ghana
              </span>
              , passionate about building scalable web applications. I specialize
              in the <span style={{ color: "var(--green)" }}>MERN stack</span>{" "}
              and containerized deployments with{" "}
              <span style={{ color: "var(--green)" }}>Docker</span>. My focus is
              on creating clean, efficient code that solves real-world problems.
            </p>

            {/* CTAs - refined styling */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
                marginBottom: "2rem",
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
                style={{
                  display: "inline-block",
                  background: "var(--green)",
                  color: "var(--bg)",
                  padding: "0.875rem 2rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--cyan)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--green)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="btn-outline"
                style={{
                  display: "inline-block",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  padding: "0.875rem 2rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--green)";
                  e.currentTarget.style.color = "var(--green)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch →
              </a>
            </div>

            {/* GitHub - cleaner */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: "2.5rem",
              }}
            >
              <a
                href="https://github.com/learnfromothers32-cell"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--muted2)",
                  fontSize: 12,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--green)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--muted2)")
                }
              >
                <GithubIcon />
                <span>github.com/learnfromothers32-cell</span>
              </a>
            </div>

            {/* Stats - cleaner design */}
            <div
              style={{
                display: "flex",
                gap: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                {
                  num: "5+",
                  label: "Projects Completed",
                  description: "Production-ready applications",
                },
                {
                  num: "∞",
                  label: "Continuous Learning",
                  description: "Always improving skills",
                },
                {
                  num: "🇬🇭",
                  label: "Based in Ghana",
                  description: "West Africa",
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--green)",
                      lineHeight: 1.2,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "var(--text)",
                      letterSpacing: "0.02em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--muted2)",
                    }}
                  >
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Profile Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid var(--green)",
                boxShadow: "0 0 50px rgba(0, 255, 135, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 0 80px rgba(0, 255, 135, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 0 50px rgba(0, 255, 135, 0.2)";
              }}
            >
              {/* Decorative ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -10,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, var(--green) 0%, var(--cyan) 100%)",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />
              <img
                 src="/src/assets/as.jpg" // Replace with your actual image path
                alt="Asante Kelvin - Full Stack Developer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              {/* Optional: Tech stack overlay effect */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                  padding: "20px",
                  textAlign: "center",
                  transform: "translateY(100%)",
                  transition: "transform 0.3s ease",
                }}
                className="image-overlay"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(100%)";
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--green)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - more subtle */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted2)",
          opacity: 0.7,
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--green), transparent)",
            animation: "scrollDown 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollDown {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          30% { opacity: 1; }
          70% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .container-custom > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          
          .image-overlay {
            transform: translateY(0) !important;
            background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%) !important;
          }
          
          p {
            border-left: none !important;
            padding-left: 0 !important;
          }
          
          .stats {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}