// pages/LearningDashboard.jsx
import { Link } from "react-router-dom";

export default function LearningDashboard() {
  return (
    <main className="container">
      <h1>📚 lernen lernen lernen</h1>
      <section className="grid">
        <article>
          <h3>📌 PM</h3>
          <p>Alle Projektmanagement-Themen.</p>
          <Link to="/learn-dashboard" role="button">
            Öffnen
          </Link>
        </article>

        <article>
          <h3>📌 SAP SD</h3>
          <p>Inhalte rund um SAP ECC und S/4HANA.</p>
          <Link to="/sap-dashboard" role="button">
            Öffnen
          </Link>
        </article>

        <article>
          <h3>📌 WebTech</h3>
          <p>Web-Technologien: HTML, CSS, JS, Flask...</p>
          <Link to="/webtech-dashboard" role="button">
            Öffnen
          </Link>
        </article>
      </section>
    </main>
  );
}
