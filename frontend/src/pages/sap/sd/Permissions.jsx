// pages/sap/sd/Permissions.jsx
export default function Permissions() {
  return (
    <main className="container">
      <hgroup>
        <h1>🔐 Berechtigungen</h1>
        <h2>Grundlagen und Fortgeschrittene Methoden</h2>
      </hgroup>

      <section>
        <h3>Was sind Berechtigungen in SAP?</h3>
        <p>
          Berechtigungen regeln den Zugriff auf verschiedene Funktionen und
          Daten innerhalb eines SAP-Systems. In SAP S/4HANA wird das
          Berechtigungskonzept durch Rollen, Profile und Benutzeranmeldungen
          verwaltet.
          <small> (Quelle: SAP Help Portal, Berechtigungsmanagement)</small>
        </p>

        <h3>Wesentliche Änderungen ECC → S/4HANA</h3>
        <ul>
          <li>
            <b>ECC:</b> In SAP ECC wurden Berechtigungen häufig über Profile und
            Rollen direkt auf Benutzerebene zugewiesen.
            <small> (Quelle: SAP Help Portal, SAP ECC Berechtigungen)</small>
          </li>
          <li>
            <b>S/4HANA:</b> In S/4HANA erfolgt die Berechtigungsvergabe über
            Rollen und Berechtigungsobjekte, die innerhalb des Fiori Launchpad
            oder über das SAP GUI verwaltet werden.
            <small>
              {" "}
              (Quelle: SAP Help Portal, SAP S/4HANA Berechtigungen)
            </small>
          </li>
        </ul>

        <h3>Wichtige Transaktionen & Tools</h3>
        <ul>
          <li>
            <strong>PFCG</strong> – Mit der Transaktion **PFCG** werden Rollen
            erstellt und zugewiesen.
            <small>
              {" "}
              (Quelle: SAP Help Portal, SAP GUI Transaktionsübersicht)
            </small>
          </li>
          <li>
            <strong>SU01</strong> – Diese Transaktion wird verwendet, um
            Benutzer zu erstellen und deren Berechtigungen zu verwalten.
            <small>
              {" "}
              (Quelle: SAP Help Portal, SAP GUI Transaktionsübersicht)
            </small>
          </li>
          <li>
            <strong>SU53</strong> – Diese Transaktion ermöglicht es,
            fehlgeschlagene Berechtigungsprüfungen zu analysieren und
            Berechtigungsprobleme zu beheben.
            <small>
              {" "}
              (Quelle: SAP Help Portal, Fehleranalyse und Berechtigungsprüfung)
            </small>
          </li>
        </ul>

        <h3>Häufige Praxisprobleme</h3>
        <ul>
          <li>
            <strong>Fehlende Berechtigungen?</strong> → Überprüfe die
            Benutzerrollen und die zugewiesenen Berechtigungsobjekte.
            <small> (Quelle: SAP Notes, Berechtigungsprobleme)</small>
          </li>
          <li>
            <strong>Unzureichende Rechte für Transaktionen?</strong> → Überprüfe
            die Berechtigungsprofile und die zugeordneten Benutzerrollen.
            <small> (Quelle: SAP Notes, Berechtigungsprofile)</small>
          </li>
        </ul>
      </section>
    </main>
  );
}
