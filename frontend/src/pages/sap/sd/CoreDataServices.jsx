// pages/sap/sd/CoreDataServices.jsx
export default function CoreDataServices() {
  return (
    <main className="container">
      <hgroup>
        <h1>📊 Core Data Services (CDS)</h1>
        <h2>Grundlagen und Fortgeschrittene Methoden</h2>
      </hgroup>

      <section>
        <h3>Was sind Core Data Services (CDS)?</h3>
        <p>
          **Core Data Services (CDS)** ist eine Technologie in SAP S/4HANA, die
          es ermöglicht, Datenmodelle direkt in der Datenbank zu definieren und
          zu verwalten. Sie bieten eine effiziente und performante Möglichkeit,
          Daten aus verschiedenen Quellen zu integrieren und zu aggregieren.
          <small> (Quelle: SAP Help Portal, Core Data Services)</small>
        </p>

        <h3>Wesentliche Änderungen ECC → S/4HANA</h3>
        <ul>
          <li>
            <b>ECC:</b> In SAP ECC wurden Datenmodelle und Datenbankabfragen
            manuell mit ABAP und klassischen Views umgesetzt.
            <small> (Quelle: SAP Help Portal, SAP ECC – Datenmodelle)</small>
          </li>
          <li>
            <b>S/4HANA:</b> In S/4HANA wurden die traditionellen
            Datenbankabfragen durch **Core Data Services (CDS)** ersetzt, die
            eine stärkere Integration und bessere Performance bieten.
            <small>
              {" "}
              (Quelle: SAP Help Portal, SAP S/4HANA – Core Data Services)
            </small>
          </li>
        </ul>

        <h3>Wichtige Transaktionen & Tools</h3>
        <ul>
          <li>
            <strong>SE11</strong> – Mit dieser Transaktion können
            **Datenbank-Views** und **CDS-Views** erstellt und gepflegt werden.
            <small> (Quelle: SAP Help Portal, SE11 – ABAP Dictionary)</small>
          </li>
          <li>
            <strong>ADRC</strong> – Diese Transaktion zeigt die **Adressdaten**
            an, die durch CDS-Views integriert werden können.
            <small> (Quelle: SAP Help Portal, ADRC Transaktion)</small>
          </li>
        </ul>

        <h3>Häufige Praxisprobleme</h3>
        <ul>
          <li>
            <strong>Fehler bei der View-Erstellung?</strong> → Überprüfe, ob die
            **Datenbankabfragen** korrekt definiert sind und alle Verknüpfungen
            stimmen.
            <small> (Quelle: SAP Notes, CDS View Probleme)</small>
          </li>
          <li>
            <strong>Performance-Probleme?</strong> → Optimiere die **Joins** und
            **Aggregationen** in deinen CDS-Views.
            <small> (Quelle: SAP Notes, Performance Tuning)</small>
          </li>
        </ul>
      </section>
    </main>
  );
}
