// pages/sap/sd/CreditMemoProcessing.jsx
export default function CreditMemoProcessing() {
  return (
    <main className="container">
      <hgroup>
        <h1>📄 Gutschriftprozesse</h1>
        <h2>SAP SD – Grundlagen und Fortgeschritten</h2>
      </hgroup>

      <section>
        <h3>Was sind Gutschriftprozesse?</h3>
        <p>
          Ein Gutschriftprozess tritt auf, wenn ein Kunde nach einer Lieferung
          Geld zurückerhält, z. B. bei Retouren oder Mängeln an der gelieferten
          Ware. Dieser Prozess dient dazu, den finanziellen Ausgleich für
          fehlerhafte Lieferungen oder Retouren zu regeln.
          <small> (Quelle: SAP Help Portal, Gutschriftprozesse)</small>
        </p>

        <h3>ECC vs. S/4HANA</h3>
        <ul>
          <li>
            <b>ECC:</b> In SAP ECC wurde der Gutschriftprozess über den
            klassischen SD-Belegfluss abgewickelt, bei dem jeder Schritt manuell
            überprüft und durchgeführt werden musste.
            <small>
              {" "}
              (Quelle: SAP Help Portal, SAP ECC – Gutschriftprozesse)
            </small>
          </li>
          <li>
            <b>S/4HANA:</b> In S/4HANA wurde dieser Prozess durch einen
            **dokumentenbasierten Ansatz** ersetzt, bei dem der
            **Abrechnungsbeleg** für eine viel flexiblere und automatisierte
            Abwicklung sorgt. Das Modell integriert die Gutschriften effizienter
            in den gesamten Belegfluss.
            <small>
              {" "}
              (Quelle: SAP Help Portal, S/4HANA – Abrechnungsbelege)
            </small>
          </li>
        </ul>

        <h3>Wichtige Transaktionen & Tabellen</h3>
        <ul>
          <li>
            <strong>VA01</strong> – Gutschriftsanforderung: Diese Transaktion
            wird verwendet, um eine **Gutschriftsanforderung** zu erstellen, die
            als Grundlage für die spätere Abrechnung dient.
            <small> (Quelle: SAP Help Portal, Transaktionsübersicht)</small>
          </li>
          <li>
            <strong>WB2R_SC</strong> – Abrechnung: Mit der Transaktion
            **WB2R_SC** wird die Abrechnung für die Gutschrift gestartet, die
            den Finanzbeleg und die Rückerstattung generiert.
            <small>
              {" "}
              (Quelle: SAP Help Portal, Abrechnungsprozess in S/4HANA)
            </small>
          </li>
          <li>
            <strong>VBFA</strong> – Belegfluss-Tabelle: Diese Tabelle verfolgt
            den **Belegfluss** und stellt sicher, dass alle relevanten Belege
            miteinander verknüpft sind, sodass der gesamte Prozess nachverfolgt
            werden kann.
            <small> (Quelle: SAP Help Portal, SAP S/4HANA – Belegfluss)</small>
          </li>
        </ul>

        <h3>Technischer End-to-End Prozess</h3>
        <ol>
          <li>
            <strong>Gutschriftsanforderung erstellen (VA01)</strong> – In SAP
            wird eine Gutschriftsanforderung über die Transaktion **VA01**
            erstellt. Sie bildet die Grundlage für die spätere Abrechnung.
            <small> (Quelle: SAP Help Portal)</small>
          </li>
          <li>
            <strong>Automatische Abrechnung (WB2R_SC)</strong> – In dieser Phase
            wird der Abrechnungsbeleg automatisch durch die Transaktion
            **WB2R_SC** generiert und mit den relevanten Daten befüllt.
            <small> (Quelle: SAP Help Portal)</small>
          </li>
          <li>
            <strong>Buchung FI-Beleg (automatisch)</strong> – Nach der
            Abrechnung erfolgt die automatische FI-Buchung des Gutschriftbelegs,
            der in der Finanzbuchhaltung verbucht wird.
            <small> (Quelle: SAP Help Portal)</small>
          </li>
        </ol>

        <h3>Tabellen & Belegfluss</h3>
        <ul>
          <li>
            <strong>VBAK/VBAP:</strong> Gutschriftsanforderung – Diese Tabellen
            enthalten die Basisdaten für die Gutschriftsanforderung, wie z. B.
            Verkaufsbelegnummer und Position.
            <small> (Quelle: SAP Help Portal)</small>
          </li>
          <li>
            <strong>WB2_VBRK/VBRP:</strong> Abrechnungsbeleg – Diese Tabellen
            speichern die Abrechnungsdaten für die Gutschrift, wie z. B. die
            Rechnungsbelegnummer und Positionen.
            <small> (Quelle: SAP Help Portal)</small>
          </li>
          <li>
            <strong>VBFA:</strong> Belegfluss vollständig nachvollziehen – Die
            Tabelle **VBFA** ermöglicht die Nachverfolgung des gesamten
            Belegflusses, indem sie die Verknüpfung zwischen verschiedenen
            Belegen wie Bestellung, Lieferung und Rechnung zeigt.
            <small> (Quelle: SAP Help Portal)</small>
          </li>
        </ul>

        <h3>Customizing Essentials</h3>
        <ul>
          <li>
            Vertriebsbelegarten konfigurieren (z. B. CR) – Im Customizing wird
            die **Vertriebsbelegart** für Gutschriften konfiguriert. Für
            Gutschriften wird häufig die Belegart **CR** verwendet.
            <small> (Quelle: SAP Customizing Guide)</small>
          </li>
          <li>
            Kopiervorlagen (Transaktion VTFA) – Über **VTFA** werden
            Kopiervorlagen für Gutschriften und andere Vertriebsbelege erstellt,
            um wiederkehrende Prozesse zu automatisieren.
            <small> (Quelle: SAP Customizing Guide)</small>
          </li>
        </ul>

        <h3>Häufige Praxisprobleme</h3>
        <ul>
          <li>
            <strong>Fehlerhafter Belegfluss?</strong> – Wenn der Belegfluss
            nicht korrekt funktioniert, sollte man die **Kopiervorlagen** sowie
            den Status der Gutschriftsanforderung überprüfen. Häufig sind
            fehlerhafte Kopiervorlagen die Ursache.
            <small> (Quelle: SAP Notes, SAP Community)</small>
          </li>
          <li>
            <strong>Keine FI-Buchung?</strong> – Falls keine FI-Buchung erfolgt,
            kann dies an einer falschen **Kontierung** in der Transaktion
            **VKOA** liegen. Die **Kontierungseinstellungen** müssen auf die
            Gutschriftsprozesse abgestimmt sein.
            <small> (Quelle: SAP Notes, SAP Help Portal)</small>
          </li>
        </ul>
      </section>
    </main>
  );
}
