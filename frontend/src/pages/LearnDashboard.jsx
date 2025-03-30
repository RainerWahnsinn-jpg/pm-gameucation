import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function LearnDashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Learnings (PM-Klausur) 🎯</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/learn/exercise" className="p-6 bg-green-200 rounded-xl shadow hover:bg-green-300 transition duration-300">
          <h2 className="font-semibold text-xl">📝 PM-Prüfungssimulation</h2>
          <p>Realistische Übungsfragen wie in der Klausur.</p>
        </Link>

        <Link to="/learn/buzzword-bingo" className="p-6 bg-yellow-200 rounded-xl shadow hover:bg-yellow-300 transition duration-300">
          <h2 className="font-semibold text-xl">📚 Buzzword Bingo</h2>
          <p>Wichtige PM-Begriffe spielerisch lernen.</p>
        </Link>

        <Link to="/learn/single-choice" className="p-6 bg-red-200 rounded-xl shadow hover:bg-red-300 transition duration-300">
          <h2 className="font-semibold text-xl">📝 Prüfungssimulation Single Choice</h2>
          <p>Teste dein Wissen realistisch mit Prüfungsfragen.</p>
        </Link>

        <Link to="/learn/phase-match" className="p-6 bg-purple-200 rounded-xl shadow hover:bg-purple-300 transition duration-300">
          <h2 className="font-semibold text-xl">🔄 PhaseMatch</h2>
          <p>Phasenmodelle und Projektlebenszyklus meistern.</p>
        </Link>

        <div className="p-6 bg-gray-200 rounded-xl shadow cursor-not-allowed">
          <h2 className="font-semibold text-xl">📈 Lernfortschritt (bald)</h2>
          <p>Visualisierung deiner Lernfortschritte.</p>
        </div>
      </div>
    </Layout>
  );
}
