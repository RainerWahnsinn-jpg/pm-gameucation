export default function ProjektmanagementDashboard() {
  return (
    <div className="container">
      <h1>🎮 Spiele</h1>
      <div className="grid">
        <article>
          <h3>🧠 MindmapGame</h3>
          <p>Logische Verknüpfungen von PM-Begriffen.</p>
          <footer>
            <a href="/mindmap-game" role="button">Starten</a>
          </footer>
        </article>
        <article>
          <h3>🕵️ CaseDetective</h3>
          <p>Praxisnahe Fallstudien analytisch lösen.</p>
          <footer>
            <a href="/case-detective" role="button">Starten</a>
          </footer>
        </article>
        <article>
          <h3>🔄 PhaseMatch</h3>
          <p>Projektphasen korrekt zuordnen.</p>
          <footer>
            <a href="/learn/phase-match" role="button">Spielen</a>
          </footer>
        </article>
        <article>
          <h3>⏳ DeadlineDash</h3>
          <p>Zeitpläne und Abläufe trainieren.</p>
          <footer>
            <a href="#" role="button">Bald verfügbar</a>
          </footer>
        </article>
      </div>
    </div>
  );
}
