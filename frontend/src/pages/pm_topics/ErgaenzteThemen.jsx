import Layout from '../../components/Layout';

export default function ErgaenzteThemen() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">📚 Ergänzte Themenbereiche</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Multiprojektmanagement</h2>
          <ul className="list-disc ml-6">
            <li>Ressourcenkonflikte lösen</li>
            <li>Gesamtüberblick schaffen und erhalten</li>
            <li>Priorisierung strategisch wichtiger Projekte</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Fehlerklima & Qualitätsmanagement</h2>
          <ul className="list-disc ml-6">
            <li>Offener Umgang mit Fehlern fördert Lernkultur und Qualitätssteigerung.</li>
            <li>
              <strong>Qualitätsmanagement Klassisch:</strong> formell, dokumentiert, präzise
            </li>
            <li>
              <strong>Qualitätsmanagement Agil:</strong> kontinuierlich, direkt im Prozess integriert
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Finanzierungsmodelle</h2>
          <ul className="list-disc ml-6">
            <li><strong>Intern:</strong> Eigenmittel des Unternehmens</li>
            <li><strong>Extern:</strong> Kreditaufnahme (z.B. Bankdarlehen)</li>
            <li><strong>Öffentliche Förderung:</strong> Staatliche oder EU-Fördermittel</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">🔸 Rollenvergleich Klassisch vs. Agil</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Klassisch</th>
                <th className="border px-4 py-2">Agil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Projektleiter (verantwortlich für Zielerreichung)</td>
                <td className="border px-4 py-2">Product Owner (verantwortlich für Produktvision und Backlog)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Projektmitarbeiter (ausführende Rolle)</td>
                <td className="border px-4 py-2">Scrum Master (verantwortlich für Prozessqualität)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Auftraggeber (setzt Ziele und Rahmen)</td>
                <td className="border px-4 py-2">Stakeholder (geben kontinuierlich Feedback)</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </Layout>
  );
}