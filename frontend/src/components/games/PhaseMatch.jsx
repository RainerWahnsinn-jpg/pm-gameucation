import { useState, useEffect } from "react";

const phases = ["Initiierung", "Planung", "Durchführung", "Abschluss"];

const tasks = [
  { task: "Projektziele definieren", phase: "Initiierung" },
  { task: "Projektstrukturplan erstellen", phase: "Planung" },
  { task: "Statusmeetings durchführen", phase: "Durchführung" },
  { task: "Projektdokumentation abschließen", phase: "Abschluss" },
  { task: "Stakeholder identifizieren", phase: "Initiierung" },
  { task: "Gantt-Diagramm erstellen", phase: "Planung" },
  { task: "Qualitätsprüfung durchführen", phase: "Durchführung" },
  { task: "Projektübergabe", phase: "Abschluss" },
];

export default function PhaseMatch() {
  const [selectedPhase, setSelectedPhase] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentTask, setCurrentTask] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setRandomTask();
  }, []);

  const setRandomTask = () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    setCurrentTask(randomTask);
    setSelectedPhase("");
    setFeedback("");
  };

  const checkPhase = () => {
    if (selectedPhase === currentTask.phase) {
      setFeedback("✅ Richtig!");
      setScore(score + 10);
    } else {
      setFeedback(`❌ Leider falsch. Richtige Phase: ${currentTask.phase}`);
      setScore(score > 0 ? score - 5 : 0);
    }
  };

  return (
    <div className="container">
      <h1>🔄 Phase Match</h1>
      <p>Ordne Aufgaben der richtigen Projektphase zu und sammle Punkte!</p>

      <section className="card">
        <h3>📌 Aufgabe:</h3>
        <p className="text-xl">
          <em>{currentTask?.task}</em>
        </p>
      </section>

      <section className="card">
        <h3>📂 Wähle die passende Phase:</h3>
        <div className="grid">
          {phases.map((phase, idx) => (
            <button
              key={idx}
              className={`outline ${selectedPhase === phase ? "contrast" : ""}`}
              onClick={() => setSelectedPhase(phase)}
            >
              {phase}
            </button>
          ))}
        </div>

        <button className="secondary mt-4" onClick={checkPhase}>
          Prüfen
        </button>
      </section>

      {feedback && (
        <section className="card">
          <h3>📣 Feedback:</h3>
          <p>{feedback}</p>
          <button className="secondary" onClick={setRandomTask}>
            Neue Aufgabe
          </button>
        </section>
      )}

      <section className="card">
        <h3>🏆 Dein aktueller Score:</h3>
        <progress value={score} max={100}></progress>
        <small>{score} Punkte erreicht</small>
      </section>
    </div>
  );
}
