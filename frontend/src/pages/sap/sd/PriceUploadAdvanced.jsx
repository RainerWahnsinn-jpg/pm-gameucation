export default function PriceUploadAdvanced() {
  return (
    <main className="container">
      <hgroup>
        <h1>💡 Preisupload Advanced</h1>
        <h2>Technischer Deep Dive (LSMW, BAPI, IDoc & CPF)</h2>
      </hgroup>
      <section>
        <h3>LSMW (Ablauf kurz erklärt)</h3>
        <ol>
          <li>
            Recording der VK11-Transaktion (jetzt ergänzt um Fiori-App "Manage
            Prices")
          </li>
          <li>Felder zuordnen und Quelldaten importieren</li>
          <li>Daten simulieren und prüfen, dann hochladen</li>
        </ol>
        <h3>BAPI_PRICES_CONDITIONS</h3>
        <ul>
          <li>Technischer Upload via ABAP</li>
          <li>Flexibel, automatisiert (ideal via Hintergrundjobs)</li>
        </ul>
        <h3>IDoc COND_A03</h3>
        <ul>
          <li>Automatisierte Massendaten via Schnittstellen (EDI)</li>
          <li>Monitoring via BD87</li>
        </ul>
        <h3>Neu in S/4HANA: CPF (Configurable Parameters and Formulas)</h3>
        <ul>
          <li>Flexible Steuerung über konfigurierbare Formeln</li>
          <li>
            Keine Programmierung zwingend erforderlich, ideal für Business-User
            (Simplification List S. 5)
          </li>
        </ul>
        <h3>Customizing-Einstellungen</h3>
        <ul>
          <li>
            Zugriffsfolgen definieren (VK12) jetzt modularer Ansatz
            (Simplification List S. 5)
          </li>
          <li>Konditionsarten & Preisfindung festlegen (SPRO)</li>
        </ul>
        <h3>Häufige Praxisprobleme</h3>
        <ul>
          <li>
            <strong>Daten überschrieben?</strong> Upload-Modus checken
          </li>
          <li>
            <strong>Performance?</strong> Upload in kleinere Datenpakete
            splitten (durch CPF-Logik weiter optimierbar)
          </li>
        </ul>
      </section>
    </main>
  );
}
