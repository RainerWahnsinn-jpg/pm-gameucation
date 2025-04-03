// pages/sap/sd/PriceUpload.jsx
export default function PriceUpload() {
  return (
    <main className="container">
      <hgroup>
        <h1>💡 Preisupload (Konditionen)</h1>
        <h2>Grundlagen und Fortgeschrittene Methoden</h2>
      </hgroup>
      <section>
        <h3>Was ist Preisupload?</h3>
        <p>
          Automatisierter Import von Konditionen wie Preise, Rabatte und Boni.
          Der Preisupload ermöglicht eine schnelle und fehlerfreie Pflege von
          Massendaten im SAP-System. (Quelle: SAP Help Portal, Preismanagement)
        </p>

        <h3>Warum automatisieren?</h3>
        <ul>
          <li>Fehlerreduktion und Zeitersparnis</li>
          <li>Effiziente Massendatenpflege</li>
        </ul>

        <h3>Methoden (ECC vs. S/4HANA)</h3>
        <ul>
          <li>
            <strong>ECC:</strong> In SAP ECC wurden Methoden wie **LSMW**,
            **BAPI** und **IDoc** verwendet, um Konditionen zu importieren.
            Diese Methoden ermöglichen es, Daten aus externen Quellen zu
            importieren und im SAP-System zu speichern.
            <small> (Quelle: SAP Help Portal, LSMW/BAPI/IDoc Methoden)</small>
          </li>
          <li>
            <strong>S/4HANA:</strong> In S/4HANA wird der Prozess durch die
            Verwendung von **Fiori Apps** wie „**Manage Prices**“ vereinfacht.
            Außerdem wird das flexible Werkzeug **Configurable Parameters and
            Formulas (CPF)** zur Steuerung der Konditionen verwendet. (Quelle:
            Simplification List, S. 5)
          </li>
        </ul>

        <h3>Zentrale Tabellen (Änderungen)</h3>
        <ul>
          <li>
            <strong>KONH, KONP:</strong> Diese Tabellen bleiben auch in S/4HANA
            relevant und werden weiterhin für die Speicherung von
            Konditionsstammdaten genutzt.
            <small> (Quelle: SAP Help Portal, Tabellenübersicht)</small>
          </li>
          <li>
            <strong>Axxx:</strong> Neu hinzugefügte Tabellen für Zugriffsfolgen
            werden durch **modulare Kalkulationsschemata** ergänzt, die eine
            flexiblere Preisfindung ermöglichen. (Quelle: Simplification List,
            S. 5)
          </li>
        </ul>

        <h3>LSMW (Ablauf kurz erklärt)</h3>
        <ol>
          <li>
            Recording der **VK11**-Transaktion (jetzt ergänzt um die Fiori-App
            „Manage Prices“), die für das Aufzeichnen von Daten zum Import
            verwendet wird. (Quelle: SAP Help Portal, Fiori Apps)
          </li>
          <li>Felder zuordnen und Quelldaten importieren</li>
          <li>Daten simulieren und prüfen, dann hochladen</li>
        </ol>

        <h3>BAPI_PRICES_CONDITIONS</h3>
        <ul>
          <li>
            Technischer Upload über **ABAP** mit dem BAPI
            **BAPI_PRICES_CONDITIONS**. Dieses BAPI bietet eine flexible
            Möglichkeit für den automatisierten Upload von Preis- und
            Konditionsdaten. (Quelle: SAP Help Portal, BAPI-Referenz)
          </li>
          <li>Flexibel, automatisiert (ideal via Hintergrundjobs)</li>
        </ul>

        <h3>IDoc COND_A03</h3>
        <ul>
          <li>
            Automatisierter Massendatenimport über **IDoc COND_A03**. Dieser
            Standard-IDoc-Typ wird verwendet, um Konditionsdaten via **EDI** zu
            übertragen. (Quelle: SAP Help Portal, IDoc-Referenz)
          </li>
          <li>
            Monitoring über **BD87**, um den Status des Imports zu überwachen.
          </li>
        </ul>

        <h3>Neu in S/4HANA: CPF (Configurable Parameters and Formulas)</h3>
        <ul>
          <li>
            **CPF** ermöglicht eine flexible Steuerung der Preisfindung durch
            konfigurierbare Formeln, ohne dass eine spezielle Programmierung
            erforderlich ist. Diese Funktion ist besonders für Business-User
            geeignet, die Preisregeln selbst anpassen können. (Quelle:
            Simplification List, S. 5)
          </li>
          <li>
            Keine Programmierung zwingend erforderlich, ideal für Business-User
            (Simplification List, S. 5)
          </li>
        </ul>

        <h3>Customizing-Einstellungen</h3>
        <ul>
          <li>
            **Zugriffsfolgen** definieren (VK12) jetzt modularer Ansatz zur
            flexibleren Verwaltung von Preisberechnungen und -zuordnungen.
            (Quelle: Simplification List, S. 5)
          </li>
          <li>
            Konditionsarten & Preisfindung festlegen (SPRO): In **SPRO** wird
            die Konfiguration für Konditionsarten und die Preisfindung
            vorgenommen, um den Upload und die Preisberechnung korrekt zu
            steuern. (Quelle: SAP Customizing Guide, SPRO – Preisfindung)
          </li>
        </ul>

        <h3>Häufige Praxisprobleme</h3>
        <ul>
          <li>
            <strong>Daten überschrieben?</strong> → Überprüfe den
            **Upload-Modus**, um sicherzustellen, dass keine unbeabsichtigten
            Datenüberschreibungen stattfinden. (Quelle: SAP Notes,
            Fehlerbehebung)
          </li>
          <li>
            <strong>Performance-Probleme?</strong> → Optimiere den Upload, indem
            du große Datenpakete in kleinere Teile aufteilst. Dies lässt sich
            durch die **CPF-Logik** weiter verbessern. (Quelle: SAP Notes,
            Performance-Tuning)
          </li>
        </ul>
      </section>
    </main>
  );
}
