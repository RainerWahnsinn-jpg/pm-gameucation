import Layout from '../../components/Layout';

export default function AgilesProjektmanagement() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">♻️ Agiles Projektmanagement (Scrum)</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Scrum-Rollen</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Rolle</th>
                <th className="border px-4 py-2">Hauptaufgabe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Product Owner</td>
                <td className="border px-4 py-2">Produktvision, Priorisierung des Produkt-Backlogs</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Scrum Master</td>
                <td className="border px-4 py-2">Moderation, Sicherstellung der Prozesseinhaltung</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Entwicklerteam</td>
                <td className="border px-4 py-2">Selbstorganisierte Umsetzung der Aufgaben</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Scrum Master vs. Projektleiter (Unterschiede)</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Kriterium</th>
                <th className="border px-4 py-2">Scrum Master</th>
                <th className="border px-4 py-2">Projektleiter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Verantwortung</td>
                <td className="border px-4 py-2">Moderierend</td>
                <td className="border px-4 py-2">Führend</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Methodik</td>
                <td className="border px-4 py-2">Agil (Scrum)</td>
                <td className="border px-4 py-2">Klassisch</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Aufgaben</td>
                <td className="border px-4 py-2">Prozesse unterstützen</td>
                <td className="border px-4 py-2">Projektziele erreichen</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Autorität</td>
                <td className="border px-4 py-2">Keine direkte Weisung</td>
                <td className="border px-4 py-2">Klare Weisungsbefugnis</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Fokus</td>
                <td className="border px-4 py-2">Teamperformance</td>
                <td className="border px-4 py-2">Projekterfolg</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Sprint-Meetings (Unterschiede)</h2>
          <ul className="list-disc ml-6">
            <li><strong>Sprint-Retrospektive:</strong> Prozesse verbessern (nur Scrum Team)</li>
            <li><strong>Sprint-Review:</strong> Ergebnisse präsentieren (Scrum Team + Stakeholder)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">🔸 Häufige Fehler bei Scrum</h2>
          <ul className="list-disc ml-6">
            <li>Unklare Rollenverteilung</li>
            <li>Auslassen der Retrospektive</li>
            <li>Zu großes Sprint-Backlog</li>
            <li>Fehlende Einbindung der Stakeholder</li>
          </ul>
        </section>

      </div>
    </Layout>
  );
}