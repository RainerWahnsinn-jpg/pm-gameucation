import { useState, useEffect } from 'react';
import Layout from "../layout/Layout";


export default function CaseDetective() {
  const [cases, setCases] = useState([]);
  const [currentCase, setCurrentCase] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // API-Vorbereitung (Mock-Daten)
    const mockCases = [
      {
        id: 1,
        title: 'Kommunikationsprobleme im Projektteam',
        description: 'Das Projektteam hat zunehmend Kommunikationsschwierigkeiten. Was wäre dein erster Schritt?',
        options: [
          { id: 'a', text: 'Ein Meeting zur Problemanalyse einberufen', correct: true },
          { id: 'b', text: 'Sofort neue Kommunikationssoftware kaufen', correct: false },
          { id: 'c', text: 'Alle per E-Mail kritisieren', correct: false },
        ],
      },
      {
        id: 2,
        title: '95%-Syndrom im Projekt',
        description: 'Das Projekt bleibt bei 95% Fortschritt hängen. Wie gehst du vor?',
        options: [
          { id: 'a', text: 'Projektabbruch und Neustart', correct: false },
          { id: 'b', text: 'Ursachenanalyse und Hindernisse beseitigen', correct: true },
          { id: 'c', text: 'Budget sofort erhöhen', correct: false },
        ],
      },
    ];

    setCases(mockCases);
    setCurrentCase(mockCases[0]);
  }, []);

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const submitAnswer = () => {
    if (!selectedAnswer) return;

    if (selectedAnswer.correct) {
      alert('✅ Sehr gut analysiert!');
      setScore(score + 50);
    } else {
      alert('❌ Leider falsch analysiert.');
      setScore(score > 0 ? score - 20 : 0);
    }

    // Zum nächsten Fall
    const nextIndex = cases.findIndex((c) => c.id === currentCase.id) + 1;
    if (nextIndex < cases.length) {
      setCurrentCase(cases[nextIndex]);
      setSelectedAnswer(null);
    } else {
      alert(`🏆 Alle Fälle abgeschlossen! Dein Score: ${score + (selectedAnswer.correct ? 50 : 0)}`);
      setCurrentCase(null);
    }
  };

  if (!currentCase) {
    return (
      <div className="container">
        <h1>🎉 Gratulation!</h1>
        <p>Du hast alle Fälle gelöst. Dein Endpunktestand: {score}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🕵️ CaseDetective</h1>
      <section className="card">
        <h3>{currentCase.title}</h3>
        <p>{currentCase.description}</p>

        <div className="grid">
          {currentCase.options.map((option) => (
            <button
              key={option.id}
              className={`outline ${selectedAnswer?.id === option.id ? 'contrast' : ''}`}
              onClick={() => handleAnswerSelection(option)}
            >
              {option.text}
            </button>
          ))}
        </div>

        <button className="contrast" onClick={submitAnswer}>
          Antwort prüfen
        </button>
      </section>

      <section className="card">
        <h3>📊 Dein Fortschritt:</h3>
        <progress value={score} max={cases.length * 50}></progress>
        <small>{score} Punkte erreicht</small>
      </section>
    </div>
  );
}
