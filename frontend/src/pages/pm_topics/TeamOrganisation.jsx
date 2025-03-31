import ContentWrapper from '../../components/ContentWrapper';

export default function TeamOrganisation() {
  return (

      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">👥 Team- & Organisationsdynamik</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Teameffekte (APA)</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Effekt</th>
                <th className="border px-4 py-2">Erklärung</th>
                <th className="border px-4 py-2">Typische Probleme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Koaktion</td>
                <td className="border px-4 py-2">Individuelle Leistungssteigerung bei einfacher Arbeit</td>
                <td className="border px-4 py-2">Versagen bei komplexen Aufgaben</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Kooperation</td>
                <td className="border px-4 py-2">Synergien durch Zusammenarbeit</td>
                <td className="border px-4 py-2">Hoher Kommunikationsaufwand</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Solidarität</td>
                <td className="border px-4 py-2">Gruppenzusammenhalt und Motivation</td>
                <td className="border px-4 py-2">Gruppendenken („Groupthink“)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">🔸 Tuckman-Gruppenphasen</h2>
          <ul className="list-disc ml-6">
            <li><strong>Forming:</strong> Kennenlernen, Unsicherheit, Orientierung</li>
            <li><strong>Storming:</strong> Konflikte, Machtkämpfe, Rollenfindung</li>
            <li><strong>Norming:</strong> Konsensbildung, Regeln festigen, Zusammenhalt wächst</li>
            <li><strong>Performing:</strong> Hohe Produktivität, Zielorientierung, effektive Zusammenarbeit</li>
          </ul>
          <div className="mt-4 bg-green-100 p-4 rounded">
            <strong>Empfehlung für Projektleitung:</strong> Auf Phasen eingehen und passende Führung anwenden (anfangs stark moderierend, später zunehmend delegierend).
          </div>
        </section>

      </div>

  );
}