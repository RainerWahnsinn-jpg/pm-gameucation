import { useState, useEffect } from "react";

export default function BuzzwordBingo() {
  const [buzzwords, setBuzzwords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const mockBuzzwords = [
      "Agilität",
      "Scrum",
      "Sprint",
      "Stakeholder",
      "Triple Constraint",
      "Kritischer Pfad",
      "Gantt-Diagramm",
      "SMART-Ziele",
      "Risikomanagement",
    ];
    setBuzzwords(mockBuzzwords);
  }, []);

  const handleWordClick = (word) => {
    if (selectedWords.includes(word)) {
      alert("❌ Bereits ausgewählt!");
      return;
    }

    setSelectedWords([...selectedWords, word]);
    setScore(score + 10);
    alert(`✅ "${word}" ausgewählt!`);
  };

  return (
    <div className="container">
      <h1>🎲 Buzzword Bingo</h1>
      <p>Wähle jedes Buzzword genau einmal und sammle Punkte!</p>

      <section className="card">
        <h3>🔸 Buzzwords:</h3>
        <div className="grid">
          {buzzwords.map((word, index) => (
            <button
              key={index}
              className={`outline ${
                selectedWords.includes(word) ? "contrast" : ""
              }`}
              onClick={() => handleWordClick(word)}
            >
              {word}
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h3>🏆 Dein aktueller Score:</h3>
        <progress value={score} max={90}></progress>
        <small>{score} von 90 Punkten erreicht</small>
      </section>
    </div>
  );
}
