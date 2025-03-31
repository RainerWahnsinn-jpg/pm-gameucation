import Layout from '../../components/Layout';

export default function Projektueberwachung() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">📈 Projektüberwachung & Steuerung</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Ursachen für Projektabweichungen</h2>
          <ul className="list-disc ml-6">
            <li>Unklare Anforderungen</li>
            <li>Mangelhafte Planung</li>
            <li>Kommunikationsprobleme</li>
            <li>Ressourcenmangel</li>
            <li>Externe Störungen</li>
            <li>Fehlende Risikoanalyse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Projektüberwachung vs. Projektsteuerung</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Projektüberwachung</th>
                <th className="border px-4 py-2">Projektsteuerung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Feststellung IST vs. SOLL (Statusermittlung)</td>
                <td className="border px-4 py-2">Ergreifen von Korrekturmaßnahmen</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">🔸 95%-Syndrom</h2>
          <div className="bg-yellow-100 p-4 rounded">
            <p>
              <strong>Erklärung:</strong> Überschätzung des Fertigstellungsgrades (fast fertig).
            </p>
            <p className="mt-2">
              <strong>Gegenmaßnahmen:</strong>
            </p>
            <ul className="list-disc ml-6">
              <li>Klare Fertigstellungskriterien definieren.</li>
              <li>Engmaschige Fortschrittskontrollen durchführen.</li>
            </ul>
          </div>
        </section>

      </div>
    </Layout>
  );
}