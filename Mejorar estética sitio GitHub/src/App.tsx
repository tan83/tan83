import { useState } from "react";
import profileImg from "@/imports/image.png";

const CYAN = "#00D4FF";
const repos = [
  {
    name: "programacion3",
    desc: "Hacer una carpeta con el nombre de Tran S.A y adjuntar todos exepto el sin",
    lang: "C#",
    langColor: "#178600",
    stars: 0,
    forks: 0,
    visibility: "Public",
  },
  {
    name: "tan83",
    desc: "Config repo — GitHub profile README",
    lang: "Markdown",
    langColor: "#083fa1",
    stars: 0,
    forks: 0,
    visibility: "Public",
  },
];

const skills = [
  "C#", ".NET", "SQL", "Git", "Linux", "Agile", "DevOps", "Cloud",
];

const heatmapMonths = ["Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];
const heatmapRows = 5;
const heatmapCols = 53;
function fakeHeat(r: number, c: number) {
  if (c === 52 && r === 4) return 4;
  if (c === 52 && r === 2) return 3;
  const rand = Math.sin(r * 17 + c * 31) * 0.5 + 0.5;
  if (rand > 0.97) return 3;
  if (rand > 0.94) return 2;
  if (rand > 0.9) return 1;
  return 0;
}
const heatColors = ["#0d1117", "#0e4429", "#006d32", "#26a641", "#39d353"];

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#080D1A",
        minHeight: "100vh",
        color: "#E2E8F0",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(8,13,26,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,212,255,0.12)",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          height: "56px",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>

        <div style={{ display: "flex", gap: "0.25rem" }}>
          {["overview", "repositories", "projects", "packages", "stars"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.5rem 0.875rem",
                borderRadius: "6px",
                fontSize: "0.8125rem",
                fontWeight: 500,
                textTransform: "capitalize",
                cursor: "pointer",
                border: "none",
                background: activeTab === tab ? "rgba(0,212,255,0.12)" : "transparent",
                color: activeTab === tab ? CYAN : "#94A3B8",
                transition: "all 0.15s",
                letterSpacing: "0.01em",
              }}
            >
              {tab}
              {tab === "repositories" && (
                <span
                  style={{
                    marginLeft: "0.375rem",
                    background: "rgba(0,212,255,0.15)",
                    color: CYAN,
                    borderRadius: "10px",
                    padding: "1px 6px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  2
                </span>
              )}
            </button>
          ))}
        </div>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "8px",
              padding: "0.375rem 0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8125rem",
              color: "#64748B",
            }}
          >
            <span>⌘</span>
            <span>Type / to search</span>
          </div>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "4rem 2rem 3rem",
          background: "linear-gradient(135deg, #0A0F1E 0%, #0D1A2E 50%, #091218 100%)",
          borderBottom: "1px solid rgba(0,212,255,0.08)",
        }}
      >
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "-60px", left: "30%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", right: "20%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(96,165,250,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E" }} />
            <span style={{ fontSize: "0.75rem", color: "#22C55E", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}>AVAILABLE FOR COLLABORATION</span>
          </div>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              margin: "0 0 1rem",
              background: `linear-gradient(135deg, #FFFFFF 0%, ${CYAN} 60%, #60A5FA 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}
          >
            Jonathan Salgado Vega
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#94A3B8", maxWidth: "520px", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
            Transformación digital · Desarrollador de software · San José, Costa Rica
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="mailto:jhsv18483@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1.125rem",
                borderRadius: "8px",
                background: CYAN,
                color: "#080D1A",
                fontSize: "0.875rem",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "opacity 0.15s",
              }}
            >
              Contactar
            </a>
            <a
              href="https://linkedin.com/in/jonathan-salgado-vega-77a00368"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1.125rem",
                borderRadius: "8px",
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.25)",
                color: CYAN,
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem", display: "grid", gridTemplateColumns: "280px 1fr", gap: "2rem", position: "relative", zIndex: 1 }}>

        {/* SIDEBAR */}
        <aside>
          {/* Avatar */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                borderRadius: "50%",
                overflow: "hidden",
                border: `3px solid rgba(0,212,255,0.3)`,
                boxShadow: `0 0 32px rgba(0,212,255,0.15)`,
                maxWidth: "200px",
              }}
            >
              <img
                src={profileImg}
                alt="Jonathan Salgado Vega"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.375rem", fontWeight: 700, margin: "0 0 0.125rem", color: "#F1F5F9" }}>
            Jonathan Salgado Vega
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#64748B", margin: "0 0 1rem", fontFamily: "'JetBrains Mono', monospace" }}>
            @tan83
          </p>

          <button
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "8px",
              background: "rgba(0,212,255,0.06)",
              border: "1px solid rgba(0,212,255,0.2)",
              color: CYAN,
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "1.25rem",
            }}
          >
            Editar perfil
          </button>

          {/* Bio items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
            {[
              { icon: "🏢", text: "Claro CR" },
              { icon: "📍", text: "San José, Costa Rica" },
              { icon: "✉️", text: "jhsv18483@gmail.com" },
              { icon: "🔗", text: "LinkedIn" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "#94A3B8" }}>
                <span style={{ fontSize: "1rem" }}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#475569",
                marginBottom: "0.75rem",
              }}
            >
              Stack Tecnológico
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
              {skills.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "0.25rem 0.625rem",
                    borderRadius: "5px",
                    fontSize: "0.75rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                    background: "rgba(0,212,255,0.07)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: CYAN,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div>
            <h3
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#475569",
                marginBottom: "0.75rem",
              }}
            >
              Organizaciones
            </h3>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "rgba(0,212,255,0.1)",
                border: "1px solid rgba(0,212,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.1rem",
              }}
            >
              🏛️
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

          {/* README Card */}
          <section
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(0,212,255,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.875rem 1.25rem",
                borderBottom: "1px solid rgba(0,212,255,0.08)",
              }}
            >
              <span style={{ fontSize: "0.8125rem", color: "#64748B", fontFamily: "'JetBrains Mono', monospace" }}>
                tan83 / <span style={{ color: "#94A3B8" }}>README.md</span>
              </span>
              <span style={{ color: "#64748B", fontSize: "1rem" }}>✏️</span>
            </div>
            <div style={{ padding: "1.5rem 1.75rem" }}>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1.625rem",
                  fontWeight: 700,
                  margin: "0 0 0.75rem",
                  color: "#F1F5F9",
                }}
              >
                Hola, soy Jonathan 👋
              </h2>
              <p style={{ fontSize: "0.9375rem", color: "#94A3B8", lineHeight: 1.7, margin: "0 0 1rem" }}>
                Desarrollador de software comprometido con la <span style={{ color: CYAN, fontWeight: 600 }}>transformación digital</span> de organizaciones. Actualmente en <strong style={{ color: "#F1F5F9" }}>Claro CR</strong>, impulsando soluciones tecnológicas que conectan personas y aceleran el cambio.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {[
                  { label: "Commits 2026", value: "1" },
                  { label: "Repos", value: "2" },
                  { label: "Años activo", value: "9+" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", fontWeight: 800, color: CYAN }}>{value}</div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", marginTop: "0.125rem" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Repositories */}
          <section>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.875rem" }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#F1F5F9", margin: 0 }}>
                Repositorios populares
              </h3>
              <button
                style={{
                  fontSize: "0.8125rem",
                  color: CYAN,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Personalizar pins →
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.875rem" }}>
              {repos.map((repo) => (
                <div
                  key={repo.name}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(0,212,255,0.1)",
                    borderRadius: "10px",
                    padding: "1rem 1.25rem",
                    transition: "border-color 0.2s, transform 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.35)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,255,0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <span style={{ color: CYAN, fontWeight: 600, fontSize: "0.9375rem", fontFamily: "'Outfit', sans-serif" }}>
                      {repo.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        padding: "2px 8px",
                        borderRadius: "20px",
                        border: "1px solid rgba(0,212,255,0.25)",
                        color: "#64748B",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {repo.visibility}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "#64748B", lineHeight: 1.5, margin: "0 0 0.875rem", minHeight: "2.5rem" }}>
                    {repo.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.75rem", color: "#64748B" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: repo.langColor, display: "inline-block" }} />
                      {repo.lang}
                    </span>
                    <span>⭐ {repo.stars}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contribution Heatmap */}
          <section
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(0,212,255,0.1)",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "#F1F5F9", margin: 0 }}>
                2 contribuciones en el último año
              </h3>
              <span style={{ fontSize: "0.8125rem", color: "#64748B" }}>Configuración de contribuciones ▾</span>
            </div>
            <div style={{ overflowX: "auto" }}>
              {/* Month labels */}
              <div style={{ display: "flex", marginLeft: "24px", marginBottom: "4px" }}>
                {heatmapMonths.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: "0.6875rem",
                      color: "#475569",
                      width: `${(heatmapCols / heatmapMonths.length) * 12}px`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
              {/* Grid */}
              <div style={{ display: "flex", gap: "2px" }}>
                {/* Day labels */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginRight: "4px" }}>
                  {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                    <div key={i} style={{ height: "10px", fontSize: "0.5rem", color: "#475569", lineHeight: "10px", fontFamily: "'JetBrains Mono', monospace" }}>
                      {d}
                    </div>
                  ))}
                </div>
                {Array.from({ length: heatmapCols }).map((_, c) => (
                  <div key={c} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {Array.from({ length: heatmapRows }).map((_, r) => {
                      const level = fakeHeat(r, c);
                      return (
                        <div
                          key={r}
                          title={`${level} contributions`}
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "2px",
                            background: level === 0 ? "rgba(0,212,255,0.05)" : heatColors[level],
                            boxShadow: level >= 3 ? `0 0 4px ${heatColors[level]}88` : "none",
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.375rem", marginTop: "0.5rem" }}>
                <span style={{ fontSize: "0.6875rem", color: "#475569" }}>Menos</span>
                {heatColors.map((c, i) => (
                  <div key={i} style={{ width: "10px", height: "10px", borderRadius: "2px", background: i === 0 ? "rgba(0,212,255,0.05)" : c }} />
                ))}
                <span style={{ fontSize: "0.6875rem", color: "#475569" }}>Más</span>
              </div>
            </div>
          </section>

          {/* Contribution Activity */}
          <section
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(0,212,255,0.08)",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
            }}
          >
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "#F1F5F9", margin: "0 0 1rem" }}>
              Actividad de contribución
            </h3>
            <div style={{ fontSize: "0.8125rem", color: "#475569", marginBottom: "0.875rem", fontFamily: "'JetBrains Mono', monospace" }}>
              Agosto 2026
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { text: "Creó 1 commit en 1 repositorio", sub: "tan83/tan83 — 1 commit", bar: 90 },
                { text: "Creó 1 repositorio", sub: "", bar: 30 },
              ].map(({ text, sub, bar }) => (
                <div key={text} style={{ borderLeft: `2px solid rgba(0,212,255,0.2)`, paddingLeft: "1rem" }}>
                  <div style={{ fontSize: "0.875rem", color: "#94A3B8", marginBottom: sub ? "0.25rem" : 0 }}>{text}</div>
                  {sub && (
                    <div style={{ fontSize: "0.8125rem", color: CYAN, marginBottom: "0.5rem" }}>{sub}</div>
                  )}
                  <div style={{ height: "4px", background: "rgba(0,212,255,0.08)", borderRadius: "2px" }}>
                    <div style={{ height: "100%", width: `${bar}%`, background: `linear-gradient(90deg, #006d32, ${CYAN})`, borderRadius: "2px" }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(0,212,255,0.06)", padding: "1.5rem 2rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.75rem", color: "#334155", fontFamily: "'JetBrains Mono', monospace" }}>
          Jonathan Salgado Vega · tan83 · San José, CR · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
