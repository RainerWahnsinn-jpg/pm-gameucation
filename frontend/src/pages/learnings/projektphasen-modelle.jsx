export default function ProjektphasenModelle() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">📌 Projektphasen & Modelle</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          🔄 Phasenmodelle im Projektmanagement
        </h2>

        <h3 className="font-semibold">1. Wasserfallmodell</h3>
        <p className="mb-2">
          <strong>Phasen:</strong> Initiierung → Planung → Durchführung →
          Kontrolle → Abschluss
        </p>
        <p>
          <strong>Vorteile:</strong> Klare Struktur und Dokumentation.
        </p>
        <p>
          <strong>Nachteile:</strong> Wenig flexibel bei Änderungen, spätes
          Feedback.
        </p>

        <h3 className="font-semibold mt-4">
          2. Iterative Modelle (z.B. Spiralmodell)
        </h3>
        <p className="mb-2">
          <strong>Prinzip:</strong> Iterative Zyklen, frühes Feedback,
          regelmäßige Anpassungen möglich.
        </p>

        <h3 className="font-semibold mt-4">3. V-Modell</h3>
        <p>
          Systematische Vorgehensweise, starke Qualitätsorientierung, parallele
          Testplanung.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">📈 Tuckman-Phasenmodell</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Phase</th>
              <th className="border px-4 py-2">Merkmale</th>
              <th className="border px-4 py-2">Führungsstrategie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Forming</td>
              <td className="border px-4 py-2">Orientierung, Unsicherheit</td>
              <td className="border px-4 py-2">Klare Strukturen geben</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Storming</td>
              <td className="border px-4 py-2">Konflikte, Positionskämpfe</td>
              <td className="border px-4 py-2">Konflikte moderieren</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Norming</td>
              <td className="border px-4 py-2">
                Rollen geklärt, Teamregeln klar
              </td>
              <td className="border px-4 py-2">Eigenverantwortung fördern</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Performing</td>
              <td className="border px-4 py-2">Leistungsstark, flexibel</td>
              <td className="border px-4 py-2">Zielorientiert unterstützen</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Adjourning</td>
              <td className="border px-4 py-2">Abschluss, Abschied</td>
              <td className="border px-4 py-2">
                Projektabschluss strukturieren
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          🔀 Agile vs. Klassische Projektmodelle
        </h2>

        <h3 className="font-semibold">1. Wann eignet sich welcher Ansatz?</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Agil:</strong> Unsichere Anforderungen, hohe Änderungsrate,
            schnelle Ergebnisse nötig.
          </li>
          <li>
            <strong>Klassisch:</strong> Klare, stabile Anforderungen, lange
            Planungsphasen möglich.
          </li>
        </ul>

        <h3 className="font-semibold">
          2. Praxisbeispiele für erfolgreiche Anwendungen
        </h3>
        <ul className="list-disc ml-6">
          <li>
            <strong>Agil:</strong> Entwicklung einer App, Anpassung einer
            Webseite.
          </li>
          <li>
            <strong>Klassisch:</strong> Bau eines Gebäudes, Anlagenbau.
          </li>
        </ul>
      </section>

      <section className="mt-10 bg-blue-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          📌 Nächste Schritte für deine App (Empfehlung):
        </h2>
        <ul className="list-disc ml-6">
          <li>
            Erstelle gezielt interaktive Lernmodule (Quiz, Zuordnungen,
            Übersichten) in deinem PM-Tool.
          </li>
          <li>
            Nutze klare Strukturen (Überschriften, Listen, Tabellen), um Nutzer
            intuitiv durch Themen zu führen.
          </li>
          <li>
            Ergänze konkrete Beispiele oder Fragen aus dieser Übersicht, um
            Prüfungssituationen praxisnah zu simulieren.
          </li>
        </ul>
      </section>
    </div>
  );
}
