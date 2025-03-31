import { useState, useEffect } from 'react';

export default function MindmapGame() {
  const [terms, setTerms] = useState([]);
  const [connections, setConnections] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // API-Call vorbereiten (Mock-Daten)
    const mockTerms = [
      { id: 1, label: 'Agil' },
      { id: 2, label: 'Stakeholder' },
      { id: 3, label: 'Scrum Master' },
      { id: 4, label: 'Product Owner' },
    ];

    const mockConnections = [
      { id: 1, label: 'Rollen', connectedTerms: [3, 4] },
      { id: 2, label: 'Methoden', connectedTerms: [1] },
      { id: 3, label: 'Projektbeteiligte', connectedTerms: [2] },
    ];

    setTerms(mockTerms);
    setConnections(mockConnections);
  }, []);

  const handleTermClick = (term) => {
    setSelectedTerm(term);
  };

  const handleConnectionClick = (connection) => {
    if (!selectedTerm) return;

    if (connection.connectedTerms.includes(selectedTerm.id)) {
      alert('✅ Korrekt verknüpft!');
      setScore(score + 25);
      setTerms(terms.filter(t => t.id !== selectedTerm.id));
    } else {
      alert('❌ Leider falsch!');
      setScore(score > 0 ? score - 10 : 0);
    }

    setSelectedTerm(null);
  };

  return (
    <div className="container">
      <h1>🧠 MindmapGame</h1>
      <p>Verknüpfe alle Begriffe korrekt und meistere PM-Konzepte für deine Klausur!</p>

      <section className="card">
        <h3>🎲 Begriffe:</h3>
        <div className="grid">
          {terms.map(term => (
            <button
              key={term.id}
              className={`outline ${selectedTerm?.id === term.id ? 'contrast' : ''}`}
              onClick={() => handleTermClick(term)}
            >
              {term.label}
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h3>🔗 Verbindungen:</h3>
        <div className="grid">
          {connections.map(connection => (
            <button
              key={connection.id}
              className="secondary"
              onClick={() => handleConnectionClick(connection)}
            >
              {connection.label}
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h3>🏆 Dein aktueller Score:</h3>
        <progress value={score} max="100"></progress>
        <small>{score}% erreicht</small>
      </section>
    </div>
  );
}
