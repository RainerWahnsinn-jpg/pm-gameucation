export default function Dashboard() {
  return (
    <main className="container">
      <h1>🚀 Dashboard</h1>

      <section className="grid">
        {/* Widget: Prüfungsfortschritt */}
        <article>
          <h3>🎯 Prüfungsfortschritt</h3>
          <p>Gesamtfortschritt deiner Prüfungsvorbereitung:</p>
          <progress value="75" max="100" className="secondary"></progress>
          <small>75% geschafft!</small>
        </article>

        {/* Widget: Meine Spiele */}
        <article>
          <h3>🕹️ Meine Spiele</h3>
          <ul>
            <li><a href="/mindmap-game">🧠 MindmapGame</a></li>
            <li><a href="/case-detective">🕵️ CaseDetective</a></li>
            <li><a href="/phase-match">🔀 PhaseMatch</a></li>
          </ul>
        </article>

        {/* Widget: Nächste Schritte */}
        <article>
          <h3>📅 Nächste Schritte</h3>
          <ul>
            <li>🔴 <strong>MindmapGame</strong> weiter üben</li>
            <li>🔴 <strong>CaseDetective</strong> starten</li>
            <li>🟠 DeadlineDash kennenlernen</li>
          </ul>
        </article>
      </section>

      {/* Mini-Heatmap */}
      <section style={{ marginTop: "3rem" }}>
        <h3>🔥 Problemthemen (Mini-Heatmap)</h3>
        <div className="grid">
          <div className="card" style={{ backgroundColor: "#e53935", color: "#fff", padding: "0.5rem 1rem", textAlign: "center" }}>
            Agiles Projektmanagement
          </div>
          <div className="card" style={{ backgroundColor: "#fb8c00", color: "#fff", padding: "0.5rem 1rem", textAlign: "center" }}>
            Kommunikationsmodelle
          </div>
          <div className="card" style={{ backgroundColor: "#43a047", color: "#fff", padding: "0.5rem 1rem", textAlign: "center" }}>
            Projektphasen nach Tuckman
          </div>
        </div>
      </section>
    </main>
  );
}
