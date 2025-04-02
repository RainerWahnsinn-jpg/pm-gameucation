import { Link } from "react-router-dom";

export default function ProjektmanagementDashboard() {
  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold mb-6">🎮 Projektmanagement Spiele</h1>

      <section className="grid">
        {/* 🧠 Mindmap Game */}
        <article>
          <h3>🧠 Mindmap Game</h3>
          <p>Verknüpfe Begriffe sinnvoll und lerne PM-Konzepte spielerisch.</p>
          <Link to="/games/mindmap-game" role="button">
            Spielen
          </Link>
        </article>

        {/* 🎲 Buzzword Bingo */}
        <article>
          <h3>🎲 Buzzword Bingo</h3>
          <p>Teste spielerisch dein Wissen rund um PM-Begriffe.</p>
          <Link to="/games/buzzword-bingo" role="button">
            Spielen
          </Link>
        </article>

        {/* 🕵️ Case Detective */}
        <article>
          <h3>🕵️ Case Detective</h3>
          <p>Untersuche Fälle und finde die richtige Lösung.</p>
          <Link to="/games/case-detective" role="button">
            Spielen
          </Link>
        </article>

        {/* 🎯 Phase Match */}
        <article>
          <h3>🎯 Phase Match</h3>
          <p>Ordne Projektphasen den richtigen Beschreibungen zu.</p>
          <Link to="/games/phase-match" role="button">
            Spielen
          </Link>
        </article>

        {/* ✅ Single Choice */}
        <article>
          <h3>✅ Probeklausur</h3>
          <p>Bereite dich mit gezielten Single-Choice-Fragen optimal vor.</p>
          <Link to="/games/single-choice" role="button">
            Spielen
          </Link>
        </article>
      </section>
    </main>
  );
}
