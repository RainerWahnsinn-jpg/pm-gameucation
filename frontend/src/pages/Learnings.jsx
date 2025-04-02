import { Link } from "react-router-dom";

export default function Learnings() {
  return (
    <main className="container">
      <h1>📖 Meine Learnings</h1>
      <section className="grid">
        <article>
          <h3>📌 Agile Methoden</h3>
          <p>Scrum, Kanban und agiles Mindset.</p>
          <Link to="/learnings/agileMethoden" role="button">
            Vertiefen
          </Link>
        </article>

        <article>
          <h3>📌 Kommunikation & Konfliktmanagement</h3>
          <p>Grundlagen und Modelle verständlich erklärt.</p>
          <Link to="/learnings/kommunikationKonflikte" role="button">
            Vertiefen
          </Link>
        </article>

        <article>
          <h3>📌 Projektphasen & Modelle</h3>
          <p>Tuckman, Wasserfallmodell & Co.</p>
          <Link to="/learnings/projektphasenModelle" role="button">
            Vertiefen
          </Link>
        </article>

        <article>
          <h3>🔎 Alle PM-Themen</h3>
          <p>Alle verfügbaren Lerninhalte kompakt im Überblick.</p>
          <Link to="/pm-topics" role="button">
            Zur Übersicht
          </Link>
        </article>
      </section>
    </main>
  );
}
