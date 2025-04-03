export default function GrundlagenProjektarten() {
  return (
    <div className="container p-8">
      <h1 className="text-2xl font-bold mb-6">
        📌 Grundlagen und Definitionen
      </h1>

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
        <h2 className="text-xl font-semibold mb-4">
          🔸 Projektmerkmale (klassisch)
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Zielorientierung (klar definiertes Ziel)</li>
          <li>Zeitliche Begrenzung (Anfang & Ende)</li>
          <li>Einmaligkeit (neu, einzigartig)</li>
          <li>Komplexität (verschiedene Beteiligte, Unsicherheit)</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded shadow">
          <strong>🎯 Praxisbeispiel:</strong>
          <br />
          „SAP AG stellt Land Hessen auf S/4HANA um.“
          <ul className="list-inside list-disc ml-4 mt-2">
            <li>
              ✅ <strong>Zielorientierung:</strong> Klar definiertes Ziel
              (technische Umstellung)
            </li>
            <li>
              ✅ <strong>Zeitliche Begrenzung:</strong> Projektlaufzeit
              festgelegt
            </li>
            <li>
              ✅ <strong>Einmaligkeit:</strong> Spezifische Umstellung einmalig
            </li>
            <li>
              ✅ <strong>Komplexität:</strong> Technologische & organisatorische
              Komplexität hoch
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">🔸 Was ist KEIN Projekt?</h2>
        <div className="bg-red-100 p-4 rounded shadow">
          <strong>ETF-Handel</strong>:
          <ul className="list-disc ml-6 mt-2">
            <li>Dauerhaft und kontinuierlich</li>
            <li>Repetitive Tätigkeit (Prozess) ohne klares Ende</li>
            <li>Standardisierte Abläufe</li>
            <li>Kein einmaliges, klar definiertes Ziel</li>
          </ul>
          <strong>Beispiel:</strong> Monatliche Durchführung des ETF-Handels als
          wiederholender Geschäftsprozess.
        </div>
      </section>
    </div>
  );
}
