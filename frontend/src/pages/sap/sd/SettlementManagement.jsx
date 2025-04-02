// pages/sap/sd/SettlementManagement.jsx
export default function SettlementManagement() {
  return (
    <main className="container">
      <hgroup>
        <h1>💰 Settlement Management</h1>
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
          (Quelle: SAP Help Portal, Settlement Management).
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
            **WB2_VBRK/VBRP** für die Abrechnung von Gutschriften und Rechnungen
            <small> (Quelle: SAP Help Portal, Tabellenübersicht)</small>
          </li>
        </ul>
      </section>
    </main>
  );
}
