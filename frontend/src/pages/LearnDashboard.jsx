export default function LearnDashboard() {
  return (
    <div className="container">
      <h1>📚 Learnings (PM-Klausur)</h1>
      <div className="grid">
        <article>
          <h3>📝 PM-Prüfungssimulation</h3>
          <p>Realistische Übungsfragen wie in der Klausur.</p>
          <footer>
            <a href="/learn/exercise" role="button">Jetzt starten</a>
          </footer>
        </article>
        <article>
          <h3>📚 Buzzword Bingo</h3>
          <p>Wichtige PM-Begriffe spielerisch lernen.</p>
          <footer>
            <a href="/learn/buzzword-bingo" role="button">Jetzt spielen</a>
          </footer>
        </article>
        <article>
          <h3>🗒️ Single Choice</h3>
          <p>Teste dein Wissen realistisch mit Prüfungsfragen.</p>
          <footer>
            <a href="/learn/single-choice" role="button">Übung starten</a>
          </footer>
        </article>
        <article>
          <h3>🔄 PhaseMatch</h3>
          <p>Phasenmodelle und Projektlebenszyklus meistern.</p>
          <footer>
            <a href="/learn/phase-match" role="button">Jetzt starten</a>
          </footer>
        </article>
        <article>
          <h3>📈 Lernfortschritt (bald)</h3>
          <p>Visualisierung deiner Lernfortschritte.</p>
        </article>
        <article>
          <h3>📘 Projektmanagement Themen</h3>
          <p>Alle PM-Themen übersichtlich sortiert.</p>
          <footer>
            <a href="/learn/projektmanagement" role="button">Anzeigen</a>
          </footer>
        </article>
      </div>
    </div>
  );
}
