import Layout from '../../components/layout/Layout';

export default function GrundlagenProjektarten() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">📌 Grundlagen und Definitionen</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Projekt vs. Prozess</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-200">
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
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Projektmerkmale (klassisch)</h2>
          <ul className="list-disc ml-6">
            <li>Zielorientierung (klar definiertes Ziel)</li>
            <li>Zeitliche Begrenzung (Anfang & Ende)</li>
            <li>Einmaligkeit (neu, einzigartig)</li>
            <li>Komplexität (verschiedene Beteiligte, Unsicherheit)</li>
          </ul>

          <div className="mt-4 bg-gray-100 p-4 rounded">
            <strong>Praxisbeispiel:</strong><br />
            „SAP AG stellt Land Hessen auf S/4HANA um.“
            <ul className="list-inside list-disc ml-4 mt-2">
              <li>Zielorientierung ✅ klare Ziele (technische Umstellung)</li>
              <li>Zeitliche Begrenzung ✅ festgelegte Projektlaufzeit</li>
              <li>Einmaligkeit ✅ spezifische Umstellung einmalig</li>
              <li>Komplexität ✅ hohe technologische & organisatorische Komplexität</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">🔸 Kein Projekt (Beispiel)</h2>
          <p className="bg-red-100 p-4 rounded">
            ETF-Handel (dauerhafte, repetitive Tätigkeit ohne definiertes Ende).
          </p>
        </section>

      </div>
    </Layout>
  );
}