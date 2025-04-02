import { Link } from "react-router-dom";

export default function LearnDashboard() {
  return (
    <main className="container">
      <h1>📚 PM Dashboard</h1>
      <section className="grid">
        <article>
          <h3>🧠 Meine Learnings</h3>
          <p>Zugriff auf alle Lerninhalte und Zusammenfassungen.</p>
          <Link to="/learnings" role="button">
            Öffnen
          </Link>
        </article>

        <article>
          <h3>🎮 PM-Spiele</h3>
          <p>Interaktive Spiele zur Vertiefung der PM-Inhalte.</p>
          <Link to="/projektmanagement-dashboard" role="button">
            Spiele starten
          </Link>
        </article>

        <article>
          <h3>📖 PM-Themenübersicht</h3>
          <p>Übersicht aller Themengebiete für gezielte Wiederholung.</p>
          <Link to="/pm-topics" role="button">
            Themen ansehen
          </Link>
        </article>
      </section>
    </main>
  );
}
