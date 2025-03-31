export default function Dashboard() {
  return (
    <main className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">🚀 Dashboard</h1>

      <section className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        <article className="card bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h3>🎯 Prüfungsfortschritt</h3>
          <progress value="75" max="100" className="w-full"></progress>
          <small>75% geschafft!</small>
        </article>
        <article className="card bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h3>🕹️ Meine Spiele</h3>
          <ul>
            <li><a href="/mindmap-game">🧠 MindmapGame</a></li>
            <li><a href="/case-detective">🕵️ CaseDetective</a></li>
            <li><a href="/phase-match">🔀 PhaseMatch</a></li>
          </ul>
        </article>
        <article className="card bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h3>📅 Nächste Schritte</h3>
          <ul>
            <li>🔴 MindmapGame weiter üben</li>
            <li>🔴 CaseDetective starten</li>
            <li>🟠 DeadlineDash kennenlernen</li>
          </ul>
        </article>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-bold mb-4">🔥 Problemthemen (Mini-Heatmap)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-red-500 text-center text-white p-4 rounded">Agiles Projektmanagement</div>
          <div className="card bg-orange-500 text-center text-white p-4 rounded">Kommunikationsmodelle</div>
          <div className="card bg-green-500 text-center text-white p-4 rounded">Projektphasen nach Tuckman</div>
        </div>
      </section>
    </main>
  );
}
