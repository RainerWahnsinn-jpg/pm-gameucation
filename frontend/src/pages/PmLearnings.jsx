import ContentWrapper from '../components/ContentWrapper';

export default function PmLearnings() {
  return (
    <ContentWrapper>
      <div className="container p-8 text-base">
        <h1 className="text-3xl font-bold mb-6">🚀 Klausurvorbereitung Projektmanagement</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📌 I. Grundlagen und Definitionen</h2>

          <h3 className="text-xl font-semibold mb-2">🔸 Projekt vs. Prozess</h3>
          <table className="table-auto w-full border mb-4">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border px-4 py-2">Merkmal</th>
                <th className="border px-4 py-2">Projekt</th>
                <th className="border px-4 py-2">Prozess</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Ziel</td>
                <td className="border px-4 py-2">Einmalig, innovativ</td>
                <td className="border px-4 py-2">Wiederkehrend, Optimierung</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Dauer</td>
                <td className="border px-4 py-2">Zeitlich begrenzt</td>
                <td className="border px-4 py-2">Dauerhaft</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Beispiele</td>
                <td className="border px-4 py-2">Einführung SAP S/4HANA</td>
                <td className="border px-4 py-2">Monatliche Gehaltsabrechnung</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold mb-2">🔸 Projektmerkmale (klassisch)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Zielorientierung (klar definiertes Ziel)</li>
            <li>Zeitliche Begrenzung (Anfang & Ende)</li>
            <li>Einmaligkeit (neu, einzigartig)</li>
            <li>Komplexität (verschiedene Beteiligte, Unsicherheit)</li>
          </ul>

          <div className="bg-gray-700 text-white p-4 rounded">
            <strong>Praxisbeispiel:</strong><br />
            „SAP AG stellt Land Hessen auf S/4HANA um.“
            <ul className="list-inside list-disc ml-4 mt-2">
              <li>Zielorientierung ✅ klare Ziele (technische Umstellung)</li>
              <li>Zeitliche Begrenzung ✅ festgelegte Projektlaufzeit</li>
              <li>Einmaligkeit ✅ spezifische Umstellung einmalig</li>
              <li>Komplexität ✅ hohe technologische & organisatorische Komplexität</li>
            </ul>
          </div>

          <div className="mt-4 bg-red-100 p-4 rounded">
            ETF-Handel (dauerhaft, repetitive Tätigkeit ohne definiertes Ende).
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🔺 II. Magisches Dreieck & Leistungsfaktoren</h2>

          <ul className="list-disc ml-6">
            <li>Zeit, Kosten, Qualität/Leistung</li>
            <li>Änderung einer Dimension beeinflusst automatisch die anderen</li>
          </ul>

          <table className="table-auto w-full border mt-4">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border px-4 py-2">Begriff</th>
                <th className="border px-4 py-2">Erklärung</th>
                <th className="border px-4 py-2">Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Produktivität</td>
                <td className="border px-4 py-2">Output/Input-Verhältnis</td>
                <td className="border px-4 py-2">Fertigstellung Arbeitspakete pro Tag</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Rentabilität</td>
                <td className="border px-4 py-2">Gewinn im Verhältnis zu Kosten</td>
                <td className="border px-4 py-2">ROI</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Effektivität</td>
                <td className="border px-4 py-2">Zielerreichung</td>
                <td className="border px-4 py-2">Vollständigkeit der Anforderungen</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🔄 III. Projektstrukturierung</h2>

          <ul className="list-disc ml-6">
            <li>Objektorientiert</li>
            <li>Funktionsorientiert</li>
            <li>Vorgehensorientiert</li>
          </ul>

          <p className="mt-4">Agile Methoden: Scrum, Kanban, XP (Extreme Programming)</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">♻️ IV. Agiles Projektmanagement (Scrum)</h2>
          <p>Details siehe eigene Lernkarte.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📈 V. Projektüberwachung & Steuerung</h2>
          <p>Details siehe eigene Lernkarte.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">👥 VI. Team- & Organisationsdynamik</h2>
          <p>Details siehe eigene Lernkarte.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📢 VII. Stakeholder Management</h2>
          <p>Details siehe eigene Lernkarte.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📜 VIII. Vertrag & Projektabschluss</h2>
          <p>Details siehe eigene Lernkarte.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📚 IX. Ergänzte Themen</h2>
          <p>Details siehe eigene Lernkarte.</p>
        </section>
      </div>
    </ContentWrapper>
  );
}
