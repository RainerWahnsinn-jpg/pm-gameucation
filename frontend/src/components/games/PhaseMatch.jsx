import { useState } from 'react';
import Layout from "../layout/Layout";


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

  const checkPhase = (correctPhase) => {
    if (selectedPhase === correctPhase) {
      setFeedback("✅ Richtig!");
    } else {
      setFeedback(`❌ Leider falsch. Richtige Phase: ${correctPhase}`);
    }
  };

  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">🔄 PhaseMatch</h1>
      
      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-lg font-semibold mb-4">Ordne die Aufgabe der korrekten Phase zu:</p>
        <div className="text-xl italic mb-4">"{randomTask.task}"</div>

        <div className="mb-4">
          {phases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPhase(phase)}
              className={`m-2 px-4 py-2 rounded ${
                selectedPhase === phase ? 'bg-blue-300' : 'bg-gray-200 hover:bg-blue-200'
              }`}
            >
              {phase}
            </button>
          ))}
        </div>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded shadow"
          onClick={() => checkPhase(randomTask.phase)}
        >
          Prüfen
        </button>

        {feedback && (
          <div className="mt-4 text-xl font-bold">
            {feedback}
          </div>
        )}
      </div>
    </Layout>
  );
}
