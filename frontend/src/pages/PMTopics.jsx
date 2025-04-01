import { Link } from "react-router-dom";

export default function PmTopics() {
  return (
    <main className="container" style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>📂 PM-Themenübersicht</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {[
          {
            name: "Grundlagen & Projektarten",
            path: "/learn/grundlagen-projektarten",
          },
          { name: "Magisches Dreieck", path: "/learn/magisches-dreieck" },
          {
            name: "Projektstrukturierung",
            path: "/learn/projektstrukturierung",
          },
          {
            name: "Agiles Projektmanagement",
            path: "/learn/agiles-projektmanagement",
          },
          { name: "Projektüberwachung", path: "/learn/projektueberwachung" },
          { name: "Teamorganisation", path: "/learn/team-organisation" },
          {
            name: "Stakeholder Management",
            path: "/learn/stakeholder-management",
          },
          {
            name: "Vertrag & Projektabschluss",
            path: "/learn/vertrag-projektabschluss",
          },
          { name: "Ergänzte Themen", path: "/learn/ergaenzte-themen" },
        ].map((topic) => (
          <article key={topic.path}>
            <Link
              to={topic.path}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0.75rem 1rem",
                minHeight: "80px", // Einheitliche Button-Höhe
                backgroundColor: "var(--accent-color)",
                color: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              {topic.name}
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
