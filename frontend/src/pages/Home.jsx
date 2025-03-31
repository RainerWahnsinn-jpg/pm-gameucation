// Datei: /src/pages/Home.jsx

export default function Home() {
    return (
      <main className="container">
        <section className="grid" style={{ marginTop: "3rem" }}>
          <div>
            <h1>🎯 Willkommen bei PM-Gameucation!</h1>
            <p>
              Bereite dich spielerisch und effizient auf deine Projektmanagement-Prüfung vor.
              Starte jetzt und teste dein Wissen!
            </p>
            <a href="/dashboard" role="button" className="contrast">
              Jetzt loslegen 🚀
            </a>
          </div>
          <div>
            <article>
              <header>
                <strong>Serverstatus:</strong>
              </header>
              <p>✅ Backend läuft stabil auf <code>localhost:5000</code></p>
            </article>
          </div>
        </section>
        
        <section style={{ marginTop: "5rem" }}>
          <h2>🕹️ Sofort spielen:</h2>
          <div className="grid">
            <article>
              <h3>🧠 MindmapGame <span className="badge" style={{ backgroundColor: "#e53935" }}>Hoch</span></h3>
              <p>Logische Verknüpfungen von PM-Begriffen üben.</p>
              <footer>
                <a href="/mindmap-game" role="button" className="secondary">Spiel starten</a>
              </footer>
            </article>
            <article>
              <h3>🕵️ CaseDetective <span className="badge" style={{ backgroundColor: "#e53935" }}>Hoch</span></h3>
              <p>Analytisches Lösen praxisnaher Fallstudien.</p>
              <footer>
                <a href="/case-detective" role="button" className="secondary">Spiel starten</a>
              </footer>
            </article>
          </div>
        </section>
      </main>
    );
  }
  