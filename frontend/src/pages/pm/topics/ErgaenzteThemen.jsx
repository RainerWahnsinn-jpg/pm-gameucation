export default function ErgaenzteThemen() {
  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-2xl font-bold mb-6">📚 Ergänzte Themenbereiche</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          🔸 Multiprojektmanagement
        </h2>
        <ul className="list-disc ml-6">
          <li>Ressourcenkonflikte lösen</li>
          <li>Gesamtüberblick schaffen</li>
          <li>Projekte strategisch priorisieren</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          🔸 Fehlerklima & Qualitätsmanagement
        </h2>
        <ul className="list-disc ml-6">
          <li>Offener Umgang mit Fehlern</li>
          <li>
            <strong>Klassisch:</strong> formell, dokumentiert
          </li>
          <li>
            <strong>Agil:</strong> integriert, kontinuierlich
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">🔸 Finanzierungsmodelle</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Intern:</strong> Eigenmittel
          </li>
          <li>
            <strong>Extern:</strong> Kreditaufnahme
          </li>
          <li>
            <strong>Öffentlich:</strong> Fördermittel
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          🔸 Rollenvergleich Klassisch vs. Agil
        </h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Klassisch</th>
              <th className="border px-4 py-2">Agil</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                Projektleiter (Zielerreichung)
              </td>
              <td className="border px-4 py-2">
                Product Owner (Produktvision & Backlog)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Projektmitarbeiter (ausführend)
              </td>
              <td className="border px-4 py-2">
                Scrum Master (Prozessqualität)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Auftraggeber (setzt Ziele & Rahmen)
              </td>
              <td className="border px-4 py-2">
                Stakeholder (kontinuierliches Feedback)
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
