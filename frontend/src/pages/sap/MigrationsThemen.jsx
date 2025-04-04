import { Link } from "react-router-dom";

export default function MigrationThemen() {
  const themenAbdeckung = [
    {
      thema: "Technologische Unterschiede (Datenbank, UI, Architektur)",
      quellen: ["Nachschlagewerk", "Deloitte", "SIMPL List"],
    },
    {
      thema: "Prozessveränderungen (SD, MM, FI/CO, PP, etc.)",
      quellen: ["SIMPL List", "Globalisierungsfunktionen", "Nachschlagewerk"],
    },
    {
      thema: "Datenmodell-Änderungen (ACDOCA, MATDOC, etc.)",
      quellen: ["SIMPL List", "DoktorERP", "Nachschlagewerk"],
    },
    {
      thema: "Custom Code & Z-Programme",
      quellen: ["Deloitte Whitepaper", "SIMPL List"],
    },
    {
      thema: "Integrationsstrategie (API-led, iPaaS, Event-basiert)",
      quellen: ["Deloitte (MuleSoft API Vault)"],
    },
    {
      thema: "Benutzeroberfläche & UX (SAP GUI vs. Fiori)",
      quellen: ["Nachschlagewerk", "SAP Doku"],
    },
    {
      thema: "Fakturanummerierung & CPF",
      quellen: ["Globalisierungsfunktionen SD"],
    },
    {
      thema: "Geschäftspartner (BP) als Voraussetzung",
      quellen: ["DoktorERP", "SIMPL List"],
    },
    {
      thema: "Migrationstools & -vorgehen (Greenfield/Brownfield)",
      quellen: ["Deloitte", "Nachschlagewerk"],
    },
    {
      thema: "SAP Activate & Cut-Over-Plan",
      quellen: ["Deloitte", "DoktorERP"],
    },
    {
      thema: "Embedded Analytics & Echtzeitverarbeitung",
      quellen: ["Nachschlagewerk", "SAP Journal"],
    },
    {
      thema: "Branchenlösungen & spezielle Module (IS, PLM, Utilities)",
      quellen: ["SIMPL List"],
    },
    {
      thema: "HANA Native & Clean Core Paradigma",
      quellen: ["Deloitte", "Nachschlagewerk"],
    },
    {
      thema: "Cloud vs. On-Premise Unterschiede",
      quellen: ["Nachschlagewerk", "Deloitte"],
    },
    {
      thema: "Erweiterbarkeit & In-App/Side-by-Side",
      quellen: ["Deloitte", "SIMPL List"],
    },
  ];

  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold mb-6">
        🔍 SAP ECC → S/4HANA Themenabdeckung
      </h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">📚 Themenfeld</th>
            <th className="border px-4 py-2 text-left">✅ Abgedeckt durch</th>
          </tr>
        </thead>
        <tbody>
          {themenAbdeckung.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.thema}</td>
              <td className="border px-4 py-2">
                <ul>
                  {item.quellen.map((quelle, idx) => (
                    <li key={idx}>• {quelle}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
