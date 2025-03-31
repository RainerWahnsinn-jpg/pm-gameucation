import Layout from '../../components/layout/Layout';

export default function MagischesDreieck() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">🔺 Magisches Dreieck & Leistungsfaktoren</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Magisches Dreieck (Zeit, Kosten, Qualität)</h2>
          <ul className="list-disc ml-6">
            <li>Änderung einer Dimension beeinflusst die anderen.</li>
            <li>Kostensenkung kann Qualität gefährden.</li>
            <li>Qualitätssteigerung erhöht oft Zeit/Kosten.</li>
          </ul>

          <img
            src="/images/magisches-dreieck.png"
            alt="Magisches Dreieck"
            className="mt-4 mx-auto rounded shadow-md"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">🔸 Vergleich Klassisch vs. Agil</h2>
          <img
            src="/images/magischesDreieckVergleich.png"
            alt="Vergleich Klassisches vs. Agiles Projektmanagement"
            className="mt-4 mx-auto rounded shadow-md"
          />
          <p className="mt-4">Im klassischen Projektmanagement ist typischerweise der Inhalt fix und Kosten sowie Termin geschätzt. Im agilen Projektmanagement hingegen sind Kosten und Termin meist fix, während der Inhalt flexibel gestaltet und geschätzt wird.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">🔸 Begriffe klar definiert</h2>
          <table className="table-auto w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Begriff</th>
                <th className="border px-4 py-2">Erklärung</th>
                <th className="border px-4 py-2">Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Produktivität</td>
                <td className="border px-4 py-2">Output/Input-Verhältnis</td>
                <td className="border px-4 py-2">Fertigstellung Arbeitspakete pro Tag</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Rentabilität</td>
                <td className="border px-4 py-2">Gewinn im Verhältnis zu Kosten</td>
                <td className="border px-4 py-2">ROI (Return on Investment)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Effektivität</td>
                <td className="border px-4 py-2">Grad der Zielerreichung</td>
                <td className="border px-4 py-2">Vollständigkeit der Anforderungen</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </Layout>
  );
}
