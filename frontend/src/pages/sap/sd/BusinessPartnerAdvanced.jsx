// pages/sap/sd/BusinessPartnerAdvanced.jsx
export default function BusinessPartnerAdvanced() {
  return (
    <main className="container">
      <hgroup>
        <h1>🧑‍💻 Business Partner </h1>
      </hgroup>

      <section>
        <h3>Customer Vendor Integration (CVI)</h3>
        <p>
          Die Customer Vendor Integration (CVI) ermöglicht die technische
          Migration von alten Debitoren- und Kreditorenstammdaten zu den neuen
          Business Partnern (BP) in SAP S/4HANA. Der Prozess erfordert
          umfangreiche Vorbereitungen und eine präzise Durchführung der
          Migration. Diese Integration ermöglicht es, bestehende Daten mit dem
          neuen BP-Modell zu synchronisieren (Quelle: SAP Help Portal, CVI
          Integration).
        </p>
        <ul>
          <li>
            Vorbereitung & Datenchecks: Sicherstellen, dass alle Stammdaten für
            die CVI-Migration korrekt sind (z.B. Konsistenz der Felder).
            <small> (Quelle: SAP Help Portal, CVI Migration Guidelines)</small>
          </li>
          <li>
            Customizing und Mapping: Die richtigen Zuordnungen zwischen den
            alten Daten und den neuen Business Partnern definieren.
            <small> (Quelle: SAP Customizing Guide)</small>
          </li>
          <li>
            Initial Load und Nachbereitung: Die eigentliche Migration
            durchführen und sicherstellen, dass alle Daten korrekt in die neuen
            Tabellen übertragen wurden.
            <small> (Quelle: SAP Help Portal, Data Migration)</small>
          </li>
        </ul>

        <h3>Relevante Tabellen</h3>
        <ul>
          <li>
            <strong>BUT000</strong> – Zentrale Kopfdaten des Business Partners.
            Diese Tabelle enthält alle wichtigen Stammdaten des Business
            Partners.
            <small>
              {" "}
              (Quelle: SAP Help Portal, SAP S/4HANA Tabellenreferenz)
            </small>
          </li>
          <li>
            <strong>CVI_CUST_LINK / CVI_VEND_LINK</strong> – Tabellen zur
            Verknüpfung von Debitoren- und Kreditorenstammdaten mit Business
            Partnern. Diese Tabellen sind für die Datenübertragung und
            -verknüpfung zwischen altem und neuem Modell verantwortlich.
            <small>
              {" "}
              (Quelle: SAP Help Portal, SAP S/4HANA Tabellenreferenz)
            </small>
          </li>
        </ul>

        <h3>Wichtige Transaktionen & Tools</h3>
        <ul>
          <li>
            <strong>CVI_COCKPIT</strong> – Das zentrale Werkzeug für die
            CVI-Migration, das die Durchführung und Überwachung des
            Migrationsprozesses ermöglicht. Es bietet eine benutzerfreundliche
            Oberfläche zur Verwaltung der Migration.
            <small> (Quelle: SAP Help Portal, CVI Cockpit)</small>
          </li>
          <li>
            <strong>MDS_LOAD_COCKPIT</strong> – Tool zur Durchführung von
            Migrationsläufen, das speziell für die Massenübertragung von
            Stammdaten entwickelt wurde.
            <small> (Quelle: SAP Help Portal, MDS Load Cockpit)</small>
          </li>
          <li>
            <strong>BP</strong> – Die Transaktion zur Verwaltung der Business
            Partner, in der alle relevanten Daten eingesehen und bearbeitet
            werden können.
            <small>
              {" "}
              (Quelle: SAP Help Portal, SAP S/4HANA Transaktionsreferenz)
            </small>
          </li>
        </ul>

        <h3>Typische Probleme & Lösungen</h3>
        <ul>
          <li>
            <strong>Fehlende Felder:</strong> Es können bei der Migration
            bestimmte Felder fehlen. Überprüfe das Mapping und konsultiere die
            relevanten SAP Notes, um diese Felder zu definieren.
            <small> (Quelle: SAP Notes, Migration Best Practices)</small>
          </li>
          <li>
            <strong>Dublettenerkennung:</strong> Um Probleme mit doppelten
            Business Partnern zu vermeiden, stelle sicher, dass die
            Dublettenerkennung (BUPA_CLEAR) korrekt eingerichtet ist.
            <small> (Quelle: SAP Help Portal, Dublettenerkennung)</small>
          </li>
          <li>
            <strong>Performance:</strong> Bei großen Migrationen kann es zu
            Performance-Problemen kommen. Aktiviere die Parallelisierung, um die
            Verarbeitung zu optimieren.
            <small> (Quelle: SAP Notes, Performance Optimization)</small>
          </li>
        </ul>
      </section>
    </main>
  );
}
