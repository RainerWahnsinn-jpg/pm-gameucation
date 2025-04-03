// pages/sap/sd/SapDashboard.jsx
import { Link } from "react-router-dom";

export default function SapDashboard() {
  return (
    <main className="container">
      <h1>📘 SAP SD Themen</h1>
      <section className="grid">
        <article>
          <h3>🧑‍💼 Business Partner</h3>
          <p>Grundlagen und Fortgeschrittene</p>
          <Link to="/sap/sd/business-partner" role="button">
            Thema öffnen
          </Link>
        </article>

        <article>
          <h3>💰 Settlement Management</h3>
          <p>Grundlagen und Fortgeschrittene</p>
          <Link to="/sap/sd/settlement-management" role="button">
            Thema öffnen
          </Link>
        </article>

        <article>
          <h3>📄 Gutschrift</h3>
          <p>Grundlagen und Fortgeschrittene</p>
          <Link to="/sap/sd/credit-memo-processing" role="button">
            Thema öffnen
          </Link>
        </article>

        <article>
          <h3>💡 Konditionen</h3>
          <p>Grundlagen und Fortgeschrittene</p>
          <Link to="/sap/sd/price-upload" role="button">
            Thema öffnen
          </Link>
        </article>

        {/* Neue Themen */}
        <article>
          <h3>🔐 Berechtigungen</h3>
          <p>Grundlagen und Fortgeschrittene</p>
          <Link to="/sap/sd/permissions" role="button">
            Thema öffnen
          </Link>
        </article>

        <article>
          <h3>📊 Core Data Services</h3>
          <p>Grundlagen und Fortgeschrittene</p>
          <Link to="/sap/sd/core-data-services" role="button">
            Thema öffnen
          </Link>
        </article>

        {/* Weitere Artikel später */}
      </section>
    </main>
  );
}
