export default function TeamOrganisation() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        👥 Team- & Organisationsdynamik
      </h1>

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
              <td className="border px-4 py-2">
                Individuelle Leistungssteigerung bei einfacher Arbeit
              </td>
              <td className="border px-4 py-2">
                Versagen bei komplexen Aufgaben
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Kooperation</td>
              <td className="border px-4 py-2">
                Synergien durch Zusammenarbeit
              </td>
              <td className="border px-4 py-2">Hoher Kommunikationsaufwand</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Solidarität</td>
              <td className="border px-4 py-2">
                Gruppenzusammenhalt und Motivation
              </td>
              <td className="border px-4 py-2">Gruppendenken („Groupthink“)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">🔸 Tuckman-Gruppenphasen</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Forming:</strong> Kennenlernen, Unsicherheit, Orientierung
          </li>
          <li>
            <strong>Storming:</strong> Konflikte, Machtkämpfe, Rollenfindung
          </li>
          <li>
            <strong>Norming:</strong> Konsensbildung, Regeln festigen,
            Zusammenhalt wächst
          </li>
          <li>
            <strong>Performing:</strong> Hohe Produktivität, Zielorientierung,
            effektive Zusammenarbeit
          </li>
          <li>
            <strong>Adjourning:</strong> Abschluss, Reflexion, Erfolge feiern,
            Abschied nehmen
          </li>
        </ul>

        <div className="mt-6 bg-green-100 p-4 rounded">
          <strong>Empfehlung für Projektleitung:</strong> Führung an Phasen
          anpassen:
          <ul className="list-disc ml-6 mt-2">
            <li>
              <strong>Forming:</strong> Orientierung geben, Klarheit schaffen.
            </li>
            <li>
              <strong>Storming:</strong> Konflikte moderieren, offen
              kommunizieren.
            </li>
            <li>
              <strong>Norming:</strong> Eigenverantwortung stärken, Strukturen
              etablieren.
            </li>
            <li>
              <strong>Performing:</strong> Delegieren, Freiräume lassen,
              Ressourcen bereitstellen.
            </li>
            <li>
              <strong>Adjourning:</strong> Projektabschluss strukturiert
              begleiten, Erfolge sichtbar machen.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">ℹ️ Hintergrundinfo</h2>
        <p className="italic">
          Bruce Tuckman entwickelte 1965 sein bekanntes Phasenmodell der
          Teamentwicklung. Die fünfte Phase "Adjourning" wurde später (1977)
          gemeinsam mit Mary Ann Jensen ergänzt, um den wichtigen
          Abschlussprozess insbesondere bei temporären Teams zu berücksichtigen.
        </p>
      </section>
    </div>
  );
}
