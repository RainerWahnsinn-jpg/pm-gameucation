import ContentWrapper from '../../components/ContentWrapper';

export default function VertragProjektabschluss() {
  return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">📜 Vertrag & Projektabschluss</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Wesentliche Vertragsinhalte</h2>
          <ul className="list-disc ml-6">
            <li>Leistungsumfang klar definieren</li>
            <li>Qualitätsanforderungen festlegen</li>
            <li>Präziser Zeitplan (Termine, Meilensteine)</li>
            <li>Kostenregelungen und Zahlungsbedingungen</li>
            <li>Abnahmekriterien und -verfahren beschreiben</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">🔸 Vertragsprobleme & Abnahme</h2>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <strong>Abnahme:</strong> Formelle Bestätigung des Projektabschlusses.
          </div>

          <ul className="list-disc ml-6">
            <li><strong>Gewährleistung:</strong> Mängelbehebung nach Abnahme (vertraglich geregelt)</li>
            <li><strong>Haftung:</strong> Vertragliche Regelung bei Nichterfüllung oder Schäden</li>
            <li><strong>Produzentenhaftung:</strong> Gesetzliche Haftung für Folgeschäden (Produkthaftungsgesetz)</li>
          </ul>
        </section>

      </div>
  );
}