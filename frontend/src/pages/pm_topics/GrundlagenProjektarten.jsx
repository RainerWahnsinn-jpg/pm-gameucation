export default function GrundlagenProjektarten() {
  return (
    <>
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
      
      {/* Weitere Sections hier */}
    </>
  );
}
