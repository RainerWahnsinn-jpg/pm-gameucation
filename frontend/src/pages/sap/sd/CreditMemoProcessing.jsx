// pages/sap/sd/CreditMemoProcessing.jsx
export default function CreditMemoProcessing() {
  return (
    <main className="container">
      <hgroup>
        <h1>📄 Gutschriftprozesse</h1>
        <h2>SAP SD Starter-Level</h2>
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
      </section>
    </main>
  );
}
