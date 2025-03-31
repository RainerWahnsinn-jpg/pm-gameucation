import { Link } from 'react-router-dom';

export default function PmTopics() {
  return (
    <main className="container">
      <h1>📂 PM-Themenübersicht</h1>
      <section className="grid">
        <article><Link to="/learn/grundlagen-projektarten">Grundlagen & Projektarten</Link></article>
        <article><Link to="/learn/magisches-dreieck">Magisches Dreieck</Link></article>
        <article><Link to="/learn/projektstrukturierung">Projektstrukturierung</Link></article>
        <article><Link to="/learn/agiles-projektmanagement">Agiles Projektmanagement</Link></article>
        <article><Link to="/learn/projektueberwachung">Projektüberwachung</Link></article>
        <article><Link to="/learn/team-organisation">Teamorganisation</Link></article>
        <article><Link to="/learn/stakeholder-management">Stakeholder Management</Link></article>
        <article><Link to="/learn/vertrag-projektabschluss">Vertrag & Projektabschluss</Link></article>
        <article><Link to="/learn/ergaenzte-themen">Ergänzte Themen</Link></article>
      </section>
    </main>
  );
}
