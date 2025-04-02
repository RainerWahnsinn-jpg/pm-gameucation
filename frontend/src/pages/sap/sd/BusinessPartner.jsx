// pages/sap/sd/BusinessPartner.jsx
export default function BusinessPartner() {
  return (
    <main className="container">
      <hgroup>
        <h1>🧑‍💼 Business Partner (BP)</h1>
      </hgroup>

      <section>
        <h3>Warum gibt es den Business Partner?</h3>
        <p>
          In S/4HANA ersetzt das <strong>Business Partner (BP)</strong>-Modell
          die bisher separaten Debitoren (KNA1) und Kreditoren (LFA1). Der BP
          ist ein zentrales Stammdatenobjekt für alle Geschäftspartner: Kunden,
          Lieferanten, Mitarbeiter, Ansprechpartner.
          <small> (Quelle: SAP Help Portal, SAP S/4HANA – Grundlagen)</small>
        </p>

        <ul>
          <li>Einheitliche Verwaltung & Pflege</li>
          <li>Keine Redundanzen</li>
          <li>Flexible Rollen (Kunde, Lieferant, etc.)</li>
        </ul>

        <h3>Wichtigste Unterschiede ECC vs. S/4HANA</h3>
        <table>
          <thead>
            <tr>
              <th>Aspekt</th>
              <th>ECC</th>
              <th>S/4HANA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kundenpflege</td>
              <td>XD01/XD02</td>
              <td>BP</td>
            </tr>
            <tr>
              <td>Lieferantenpflege</td>
              <td>XK01/XK02</td>
              <td>BP</td>
            </tr>
            <tr>
              <td>Tabellen Debitoren</td>
              <td>KNA1, KNVV</td>
              <td>BUT000, CVI</td>
            </tr>
            <tr>
              <td>Tabellen Kreditoren</td>
              <td>LFA1</td>
              <td>BUT000, CVI</td>
            </tr>
            <tr>
              <td>CVI Integration</td>
              <td>Teilweise manuelle Integration</td>
              <td>Automatisierte Synchronisation (CVI Cockpit)</td>
            </tr>
          </tbody>
        </table>
        <small>
          {" "}
          (Quelle: SAP Help Portal, S/4HANA Business Partner Integration)
        </small>

        <h3>Zentrale Begriffe</h3>
        <dl>
          <dt>Business Partner (BP)</dt>
          <dd>
            Zentrales Stammdatenobjekt für Kunden, Lieferanten und andere
            Geschäftspartner.
            <small> (Quelle: SAP Help Portal, SAP S/4HANA – Stammdaten)</small>
          </dd>
          <dt>BP-Rollen</dt>
          <dd>
            Definieren die Funktion des BP (z.B. Kunde: FLCU01, Lieferant:
            FLVN01).
            <small> (Quelle: SAP Help Portal, BP-Rollenverwaltung)</small>
          </dd>
          <dt>Customer Vendor Integration (CVI)</dt>
          <dd>
            Technische Synchronisation alter Stammdaten mit BP (z.B. KNA1,
            LFA1).
            <small> (Quelle: SAP Help Portal, CVI Integration)</small>
          </dd>
        </dl>

        <h3>Beispiel</h3>
        <p>
          Kunde war früher Debitor <code>#4711</code> in ECC. Jetzt wird
          derselbe Kunde als <code>BP #1000</code> gepflegt und erhält die Rolle{" "}
          <code>FLCU01</code> (Kunde).
        </p>
        <small> (Beispiel basierend auf der SAP S/4HANA Implementierung)</small>
      </section>
    </main>
  );
}
