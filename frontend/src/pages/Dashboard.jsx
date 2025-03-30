import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Willkommen, Konsti 🚀</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/learn" className="p-6 bg-blue-200 rounded-xl shadow hover:bg-blue-300 transition duration-300">
          <h2 className="text-xl font-semibold">🎓 PM-Learnings</h2>
          <p>Teste und verbessere dein PM-Wissen spielerisch.</p>
        </Link>
        <div className="p-6 bg-gray-200 rounded-xl shadow cursor-not-allowed">
          <h2 className="text-xl font-semibold">📅 PM-Tool (Coming soon!)</h2>
          <p>Projekte effizient planen und steuern.</p>
        </div>
        <div className="p-6 bg-gray-200 rounded-xl shadow cursor-not-allowed">
          <h2 className="text-xl font-semibold">🧠 KI-Coach (Coming soon!)</h2>
          <p>Interaktive Hilfestellung für dein Studium.</p>
        </div>
      </div>
    </Layout>
  );
}
