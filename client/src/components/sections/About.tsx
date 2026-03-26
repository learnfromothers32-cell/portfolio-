import React from "react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "var(--bg2)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container-custom" style={{ maxWidth: "1100px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-tag">01 — About Me</div>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-line" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left Column - Text Content */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <p
              style={{
                color: "var(--muted)",
                fontSize: "15px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              I'm <Hl>Asante Kelvin</Hl>, a{" "}
              <Hl green>self-taught Full Stack Developer</Hl> from Ghana. I
              didn't take the traditional path — I learned by building, breaking
              things, and rebuilding them better.
            </p>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "15px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              My stack revolves around{" "}
              <Hl>React, Node.js, Express, and MongoDB</Hl>. I care deeply about
              clean code, good architecture, and shipping things that actually
              work in production — not just on localhost.
            </p>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "15px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Right now I'm deep into <Hl green>DevOps practices</Hl> — learning
              Docker Compose, CI/CD pipelines with GitHub Actions, and deploying
              full-stack apps on Vercel & Render. A developer who understands
              the whole pipeline is worth 10x more.
            </p>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "15px",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              When I'm not coding, I'm writing about what I've learned — because
              the best way to solidify knowledge is to <Hl>teach it</Hl> and
              share with the community.
            </p>

            {/* Optional: Quote or highlight */}
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem 0",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  color: "var(--text)",
                  fontSize: "13px",
                  fontStyle: "italic",
                  letterSpacing: "0.02em",
                  margin: 0,
                }}
              >
                "Building things that matter, one line of code at a time."
              </p>
            </div>
          </div>

          {/* Right Column - Terminal Card */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(0, 255, 135, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            {/* Terminal Header */}
            <div
              style={{
                background: "var(--bg3)",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div style={{ display: "flex", gap: "8px" }}>
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#ff5f57",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#febc2e",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#28c840",
                    display: "block",
                  }}
                />
              </div>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 11,
                  color: "var(--muted)",
                  letterSpacing: "0.05em",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                about.json
              </span>
            </div>

            {/* Terminal Content */}
            <div
              style={{
                padding: "1.5rem",
                fontSize: 13,
                lineHeight: 2,
                fontFamily: "'JetBrains Mono', monospace",
                background: "var(--surface)",
              }}
            >
              <Line>
                <Bracket>{"{"}</Bracket>
              </Line>
              <Line pad>
                <Key>"name"</Key>
                <Bracket>:</Bracket> <Str>"Asante Kelvin"</Str>
                <Bracket>,</Bracket>
              </Line>
              <Line pad>
                <Key>"title"</Key>
                <Bracket>:</Bracket> <Str>"Full Stack Developer"</Str>
                <Bracket>,</Bracket>
              </Line>
              <Line pad>
                <Key>"location"</Key>
                <Bracket>:</Bracket> <Str>"Accra, Ghana"</Str>
                <Bracket>,</Bracket>
              </Line>
              <Line pad>
                <Key>"experience"</Key>
                <Bracket>:</Bracket> <Str>"3+ years"</Str>
                <Bracket>,</Bracket>
              </Line>
              <Line pad>
                <Key>"techStack"</Key>
                <Bracket>:</Bracket> <Bracket>[</Bracket>
              </Line>
              <Line pad2>
                <Str>"React"</Str>
                <Bracket>,</Bracket> <Str>"Node.js"</Str>
                <Bracket>,</Bracket>
              </Line>
              <Line pad2>
                <Str>"Express"</Str>
                <Bracket>,</Bracket> <Str>"MongoDB"</Str>
                <Bracket>,</Bracket>
              </Line>
              <Line pad2>
                <Str>"TypeScript"</Str>
                <Bracket>,</Bracket> <Str>"Docker"</Str>
              </Line>
              <Line pad>
                <Bracket>],</Bracket>
              </Line>
              <Line pad>
                <Key>"devOps"</Key>
                <Bracket>:</Bracket> <Bracket>[</Bracket>
                <Str>"Docker"</Str>
                <Bracket>,</Bracket> <Str>"GitHub Actions"</Str>
                <Bracket>,</Bracket> <Str>"Vercel"</Str>
                <Bracket>],</Bracket>
              </Line>
              <Line pad>
                <Key>"currentlyLearning"</Key>
                <Bracket>:</Bracket> <Bracket>[</Bracket>
                <Str>"Kubernetes"</Str>
                <Bracket>,</Bracket> <Str>"AWS"</Str>
                <Bracket>],</Bracket>
              </Line>
              <Line pad>
                <Key>"availableForWork"</Key>
                <Bracket>:</Bracket> <Val>true</Val>
              </Line>
              <Line>
                <Bracket>{"}"}</Bracket>
              </Line>
              <div style={{ marginTop: "1rem" }}>
                <Line>
                  <Comment>// Always building, always learning</Comment>
                </Line>
                <Line>
                  <Comment>// Open to collaborations & opportunities</Comment>
                </Line>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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

// ─── Helper Components ──────────────────────────────────────────────────

function Hl({
  children,
  green,
}: {
  children: React.ReactNode;
  green?: boolean;
}) {
  return (
    <span
      style={{
        color: green ? "var(--green)" : "var(--text)",
        fontWeight: 500,
        borderBottom: green ? "1px solid var(--green)" : "none",
        paddingBottom: green ? "1px" : "0",
      }}
    >
      {children}
    </span>
  );
}

function Line({
  children,
  pad,
  pad2,
}: {
  children?: React.ReactNode;
  pad?: boolean;
  pad2?: boolean;
}) {
  return (
    <div
      style={{
        paddingLeft: pad2 ? "2rem" : pad ? "1rem" : 0,
        whiteSpace: "pre-wrap",
      }}
    >
      {children}
    </div>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--cyan)", fontWeight: 500 }}>{children}</span>
  );
}

function Str({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#ff9966" }}>{children}</span>;
}

function Val({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--green)", fontWeight: 600 }}>{children}</span>
  );
}

function Bracket({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "var(--muted)" }}>{children}</span>;
}

function Comment({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "var(--muted2)", fontStyle: "italic" }}>
      {children}
    </span>
  );
}
