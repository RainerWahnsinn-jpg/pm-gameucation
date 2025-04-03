// pages/sap/sd/SettlementManagement.jsx
export default function SettlementManagement() {
  return (
    <main className="container">
      <hgroup>
        <h1>💰 Settlement Management</h1>
        <h2>Grundlagen und Fortgeschrittene Methoden</h2>
      </hgroup>
      <section>
        <h3>Von Rebate zu Settlement Management</h3>
        <p>
          In SAP S/4HANA wurde die Bonusabwicklung mit einem neuen, flexiblen
          Ansatz über **Konditionskontrakte** (WCOCO) eingeführt. Diese Methode
          ermöglicht es, Bonusvereinbarungen effizienter und transparenter
          abzubilden und zu verwalten. Im Vergleich zu den klassischen
          **Rebate**-Modellen in SAP ECC bietet Settlement Management erweiterte
          Möglichkeiten zur Automatisierung und Verbesserung der Abrechnung
          <small> (Quelle: SAP Help Portal, Settlement Management)</small>.
        </p>

        <h3>Wesentliche Änderungen ECC → S/4HANA</h3>
        <ul>
          <li>
            <b>ECC:</b> In SAP ECC wurde die Bonusvereinbarung klassisch über
            die Transaktion **VBO1** erstellt, um Rabattvereinbarungen zu
            verwalten.
            <small> (Quelle: SAP Help Portal, ECC Rabattmanagement)</small>
          </li>
          <li>
            <b>S/4HANA:</b> In S/4HANA werden Konditionskontrakte mit der
            Transaktion **WCOCO** verwaltet, was eine flexiblere und
            automatisierte Handhabung ermöglicht.
            <small>
              {" "}
              (Quelle: SAP Help Portal, Konditionskontrakte in S/4HANA)
            </small>
          </li>
        </ul>

        <h3>Relevante Tools & Tabellen</h3>
        <ul>
          <li>
            <b>WB2R_SC:</b> Mit dieser Transaktion wird der Abrechnungsbeleg
            erstellt, um die Bonusabwicklung und die darauf basierenden
            Zahlungen abzuwickeln.
            <small> (Quelle: SAP Help Portal, WB2R_SC Transaktion)</small>
          </li>
          <li>
            <b>Tabellen:</b> Die relevanten Tabellen für das Settlement
            Management sind: - **WCOCO** für Konditionskontrakte -
            **WB2_VBRK/VBRP** für die Abrechnung von Gutschriften und
            Rechnungen.
            <small> (Quelle: SAP Help Portal, Tabellenübersicht)</small>
          </li>
        </ul>

        <h3>Tabellen & Struktur</h3>
        <ul>
          <li>
            <strong>WCOCO</strong> – Konditionskontrakt: Diese Tabelle enthält
            die Stammdaten für die Konditionskontrakte, wie z.B. Bedingungen und
            zugehörige Konditionen.{" "}
            <small>(Quelle: SAP Help Portal, Tabellenübersicht)</small>
          </li>
          <li>
            <strong>WB2_VBRK</strong> – Abrechnungsbeleg Kopf: Diese Tabelle
            speichert den Kopf des Abrechnungsbelegs, der die grundlegenden
            Informationen zur Abrechnung enthält.{" "}
            <small>(Quelle: SAP Help Portal, Abrechnungsbeleg Struktur)</small>
          </li>
          <li>
            <strong>WB2_VBRP</strong> – Abrechnungsbeleg Position: Diese Tabelle
            speichert die einzelnen Positionen des Abrechnungsbelegs und ist für
            die detaillierte Abrechnung zuständig.{" "}
            <small>(Quelle: SAP Help Portal, Abrechnungsbeleg Struktur)</small>
          </li>
        </ul>

        <h3>Technischer Ablauf</h3>
        <ol>
          <li>
            <code>WCOCO</code> – Kontrakt anlegen: Der erste Schritt in der
            Prozesskette ist das Erstellen des Konditionskontraktes mit der
            Transaktion **WCOCO**, in dem alle relevanten Konditionen hinterlegt
            werden.
            <small>
              (Quelle: SAP Help Portal, Konditionskontrakte in S/4HANA)
            </small>
          </li>
          <li>
            <code>VA01/VF01</code> – Verkaufsbelege erstellen: Mit **VA01**
            werden Verkaufsbelege erstellt, und mit **VF01** werden die
            entsprechenden Rechnungen und Gutschriften erzeugt, die für die
            Abrechnung notwendig sind.
            <small>
              (Quelle: SAP Help Portal, Verkaufsbelege & Abrechnung)
            </small>
          </li>
          <li>
            <code>WB2R_SC</code> – Abrechnung starten: In dieser Phase wird die
            Abrechnung mit **WB2R_SC** angestoßen, was den Übergang zur
            Zahlungsabwicklung und Buchung der Gutschriften ermöglicht.
            <small>(Quelle: SAP Help Portal, Abrechnungsprozesse)</small>
          </li>
        </ol>

        <h3>Customizing (SPRO)</h3>
        <ul>
          <li>
            Nummernkreise & Konditionsarten definieren: In **SPRO** müssen die
            **Nummernkreise** für die Abrechnungsbelege und die entsprechenden
            **Konditionsarten** definiert werden, um eine ordnungsgemäße
            Verwaltung der Belege zu gewährleisten.{" "}
            <small>(Quelle: SAP Customizing Guide)</small>
          </li>
          <li>
            Abrechnungsarten definieren (Teil-/Endabrechnung): Im Customizing
            müssen die **Abrechnungsarten** konfiguriert werden, damit entweder
            eine Teilabrechnung oder eine Endabrechnung durchgeführt wird.{" "}
            <small>(Quelle: SAP Customizing Guide)</small>
          </li>
        </ul>

        <h3>Typische Probleme & Lösungen</h3>
        <ul>
          <li>
            <strong>Bonus falsch berechnet?</strong> → Umsatzbasis prüfen: Wenn
            der Bonus falsch berechnet wird, kann es daran liegen, dass die
            **Umsatzbasis** nicht korrekt eingestellt wurde. Überprüfe die
            relevanten Einstellungen in den Konditionskontrakten.{" "}
            <small>(Quelle: SAP Notes, Bonusberechnung)</small>
          </li>
          <li>
            <strong>Keine Gutschrift erstellt?</strong> → Status in WCOCO
            prüfen: Falls keine Gutschrift erstellt wird, kann es an einem
            **fehlerhaften Status** des Konditionskontrakts liegen. Stelle
            sicher, dass der Status korrekt gesetzt ist.
            <small>(Quelle: SAP Notes, Gutschriftfehler)</small>
          </li>
          <li>
            <strong>Performance-Probleme?</strong> → Jobplanung optimieren: Wenn
            es zu **Performance-Problemen** kommt, sollten die **Jobplanung und
            Parallelisierung** in SAP optimiert werden, um die Verarbeitung
            effizienter zu gestalten.
            <small>(Quelle: SAP Notes, Performance Optimization)</small>
          </li>
        </ul>
      </section>
    </main>
  );
}
