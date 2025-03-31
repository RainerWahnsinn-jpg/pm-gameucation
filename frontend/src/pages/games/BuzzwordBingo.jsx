import { useState, useEffect } from 'react';
import Layout from './Layout';

const buzzwords = [
  "Agilität", "Scrum", "Sprint", "Stakeholder",
  "Triple Constraint", "Kritischer Pfad", "Gantt-Diagramm", "SMART-Ziele",
  "Risikomanagement", "Matrixorganisation", "Wasserfallmodell", "Projektstrukturplan",
  "Qualitätsmanagement", "Ressourcenallokation", "Projektlebenszyklus", "Daily Standup",
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function BuzzwordBingo() {
  const [board, setBoard] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setBoard(shuffle(buzzwords).slice(0, 9));
  }, []);

  const handleSelect = (word) => {
    setSelected(prev =>
      prev.includes(word) ? prev.filter(w => w !== word) : [...prev, word]
    );
  };

  const isSelected = (word) => selected.includes(word);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">📚 Buzzword Bingo</h1>
      <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow">
        {board.map((word, index) => (
          <button
            key={index}
            className={`p-4 rounded-xl border-2 transition duration-300 ${
              isSelected(word) ? 'bg-green-300 border-green-500' : 'bg-gray-100 border-gray-300'
            }`}
            onClick={() => handleSelect(word)}
          >
            {word}
          </button>
        ))}
      </div>
    </Layout>
  );
}
