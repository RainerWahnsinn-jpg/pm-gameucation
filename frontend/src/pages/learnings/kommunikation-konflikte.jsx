export default function Konfliktmanagement() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">⚡ Konfliktmanagement</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          🔸 Konfliktarten und Ursachen
        </h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Konfliktart</th>
              <th className="border px-4 py-2">Beschreibung/Ursachen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Beziehungskonflikte</td>
              <td className="border px-4 py-2">
                Emotionale Spannungen, unterschiedliche Persönlichkeiten
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sachkonflikte</td>
              <td className="border px-4 py-2">
                Inhaltliche Differenzen, unterschiedliche Zielsetzungen
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Rollenkonflikte</td>
              <td className="border px-4 py-2">
                Unklare oder widersprüchliche Rollenverteilung
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          🔸 Eskalationsstufen nach Glasl
        </h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Phase</th>
              <th className="border px-4 py-2">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Win-Win</td>
              <td className="border px-4 py-2">
                Spannungen, sachliche Debatten, gegenseitige Rücksichtnahme
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Win-Lose</td>
              <td className="border px-4 py-2">
                Einsatz von Drohstrategien, Gesichtsverlust
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Lose-Lose</td>
              <td className="border px-4 py-2">
                Gezielte Schädigung, totale Konfrontation ohne Rücksicht auf
                Verluste
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          🔸 Strategien zur Konfliktbewältigung
        </h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Harvard-Methode:</strong> Interessen aller Parteien
            identifizieren, auf sachlicher Ebene Lösungen finden
          </li>
          <li>
            <strong>Mediation:</strong> Neutrale dritte Person vermittelt
            zwischen Konfliktparteien, um gemeinsame Lösungen zu erreichen
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          🔸 Praxisbeispiele für Konfliktsituationen
        </h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Rollenkonflikt:</strong> Unklare Abgrenzung zwischen Scrum
            Master und klassischem Projektleiter
          </li>
          <li>
            <strong>Ressourcenkonflikt:</strong> Verteilungskonflikte um
            Ressourcen in Multiprojekt-Umgebungen
          </li>
        </ul>
      </section>
    </div>
  );
}
