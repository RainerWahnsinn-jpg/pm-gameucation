import Layout from '../../components/layout/Layout';

export default function Projektstrukturierung() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">🔄 Projektstrukturierung</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Klassische Strukturierung</h2>
          <ul className="list-disc ml-6">
            <li><strong>Objektorientiert:</strong> Gebäude → Wohnung → Raum</li>
            <li><strong>Funktionsorientiert:</strong> Planung, Durchführung, Kontrolle</li>
            <li><strong>Vorgehensorientiert:</strong> Aufteilung nach Projektphasen (z.B. Analyse → Entwicklung → Einführung)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Agile Strukturierung</h2>
          <ul className="list-disc ml-6">
            <li><strong>Iterativ-inkrementelle Ansätze:</strong> kontinuierliche, schrittweise Weiterentwicklung</li>
            <li><strong>Beispiele:</strong> Scrum, Kanban, XP (Extreme Programming)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">🔸 Vor- und Nachteile agiler Strukturierung</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Vorteile</th>
                <th className="border px-4 py-2">Nachteile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  <ul className="list-disc ml-4">
                    <li>Hohe Flexibilität</li>
                    <li>Schnelle Anpassung an Änderungen</li>
                    <li>Kontinuierliche Verbesserung</li>
                  </ul>
                </td>
                <td className="border px-4 py-2">
                  <ul className="list-disc ml-4">
                    <li>Schwieriger langfristig planbar</li>
                    <li>Hoher Kommunikationsaufwand</li>
                    <li>Risikomanagement anspruchsvoller</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </Layout>
  );
}