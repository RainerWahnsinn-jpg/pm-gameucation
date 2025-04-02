// pages/sap/sd/CreditMemoProcessingAdvanced.jsx
export default function CreditMemoProcessingAdvanced() {
  return (
    <main className="container">
      <hgroup>
        <h1>📄 Gutschriftprozesse (Advanced)</h1>
        <h2>Technischer Deep Dive</h2>
      </hgroup>
      <section>
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
