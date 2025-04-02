export default function PriceUpload() {
  return (
    <main className="container">
      <hgroup>
        <h1>💡 Preisupload (Konditionen)</h1>
        <h2>Grundlagen und Methoden</h2>
      </hgroup>
      <section>
        <h3>Was ist Preisupload?</h3>
        <p>
          Automatisierter Import von Konditionen wie Preise, Rabatte und Boni.
        </p>
        <h3>Warum automatisieren?</h3>
        <ul>
          <li>Fehlerreduktion und Zeitersparnis</li>
          <li>Effiziente Massendatenpflege</li>
        </ul>
        <h3>Methoden (ECC vs. S/4HANA)</h3>
        <ul>
          <li>
            <strong>ECC:</strong> LSMW, BAPI, IDoc
          </li>
          <li>
            <strong>S/4HANA:</strong> Fiori Apps („Manage Prices“), Configurable
            Parameters and Formulas (CPF) zur flexiblen Steuerung
            (Simplification List S. 5)
          </li>
        </ul>
        <h3>Zentrale Tabellen (Änderungen)</h3>
        <ul>
          <li>
            <strong>KONH, KONP:</strong> weiterhin genutzt
          </li>
          <li>
            <strong>Axxx:</strong> Zugriffsfolgen, ergänzt durch modulare
            Kalkulationsschemata (Simplification List S. 5)
          </li>
        </ul>
      </section>
    </main>
  );
}
