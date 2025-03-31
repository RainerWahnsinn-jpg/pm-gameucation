import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ProjektmanagementDashboard() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">📘 Projektmanagement Themen</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Link to="/learn/grundlagen-projektarten" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            📌 <strong>Grundlagen & Projektarten</strong>
            <p className="text-sm">Projekte klar definieren und unterscheiden.</p>
          </Link>

          <Link to="/learn/magisches-dreieck" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            🔺 <strong>Magisches Dreieck</strong>
            <p className="text-sm">Zeit, Kosten, Qualität managen.</p>
          </Link>

          <Link to="/learn/projektstrukturierung" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            🧩 <strong>Projektstrukturierung</strong>
            <p className="text-sm">Klassisch und agil strukturieren.</p>
          </Link>

          <Link to="/learn/agiles-projektmanagement" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            ♻️ <strong>Agiles Projektmanagement</strong>
            <p className="text-sm">Scrum, Rollen und agile Prozesse.</p>
          </Link>

          <Link to="/learn/projektueberwachung" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            📈 <strong>Projektüberwachung & Steuerung</strong>
            <p className="text-sm">Abweichungen erkennen und beheben.</p>
          </Link>

          <Link to="/learn/team-organisation" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            👥 <strong>Team- & Organisationsdynamik</strong>
            <p className="text-sm">Teamentwicklung gezielt steuern.</p>
          </Link>

          <Link to="/learn/stakeholder-management" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            📢 <strong>Stakeholder Management</strong>
            <p className="text-sm">Erfolgreiche Stakeholderkommunikation.</p>
          </Link>

          <Link to="/learn/vertrag-projektabschluss" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            📜 <strong>Vertrag & Projektabschluss</strong>
            <p className="text-sm">Rechtliches sauber abschließen.</p>
          </Link>

          <Link to="/learn/ergaenzte-themen" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
            📚 <strong>Ergänzte Themen</strong>
            <p className="text-sm">Multiprojekt, QM und Finanzierung.</p>
          </Link>

        </div>
      </div>
    </Layout>
  );
}