import { useState } from 'react';
import Layout from '../layout/Layout';

const fragen = [
  { id: 1, frage: "Was ist ein typisches Merkmal eines Projekts?", antworten: ["Routinearbeit", "Unbegrenzte Ressourcen", "Einmaligkeit", "Permanente Organisation"], korrekt: "Einmaligkeit" },
  { id: 2, frage: "Der Begriff 'Triple Constraint' bezieht sich auf:", antworten: ["Zeit, Kosten, Qualität", "Stakeholder, Risiken, Ziele", "Kommunikation, Führung, Konflikte", "Planung, Durchführung, Kontrolle"], korrekt: "Zeit, Kosten, Qualität" },
  { id: 3, frage: "Was gehört zur Definition eines erfolgreichen Projekts?", antworten: ["Niedrige Kosten, hoher Gewinn", "Hoher Zeitdruck, schnelle Ergebnisse", "Erfüllung der definierten Projektziele", "Hohe Mitarbeiterzahl"], korrekt: "Erfüllung der definierten Projektziele" },
  { id: 4, frage: "Welche der folgenden Projektmethoden ist agil?", antworten: ["Wasserfallmodell", "V-Modell", "Scrum", "Stage-Gate-Modell"], korrekt: "Scrum" },
  { id: 5, frage: "Was beschreibt ein Gantt-Diagramm am besten?", antworten: ["Projektbudget", "Risikoanalyse", "Zeitplan und Aufgaben", "Stakeholder-Zufriedenheit"], korrekt: "Zeitplan und Aufgaben" },
  { id: 6, frage: "Was versteht man unter Scope Creep?", antworten: ["Klar definierte Projektziele", "Steigender Umfang ohne Genehmigung", "Reduzierung der Projektkosten", "Optimierte Ressourcenplanung"], korrekt: "Steigender Umfang ohne Genehmigung" },
  { id: 7, frage: "Wozu dient eine SWOT-Analyse im Projektmanagement?", antworten: ["Analyse von Zeitplänen", "Analyse von Risiken", "Bewertung von Stärken, Schwächen, Chancen und Risiken", "Ermittlung des Budgets"], korrekt: "Bewertung von Stärken, Schwächen, Chancen und Risiken" },
  { id: 8, frage: "Was beschreibt ein MVP?", antworten: ["Maximum Valuable Project", "Minimum Viable Product", "Most Valuable Person", "Minimum Validated Plan"], korrekt: "Minimum Viable Product" },
  { id: 9, frage: "Die Methode zur Risikobewertung heißt:", antworten: ["Kanban", "Ishikawa-Diagramm", "Gantt-Diagramm", "Risiko-Matrix"], korrekt: "Risiko-Matrix" },
  { id: 10, frage: "Was ist keine Phase im klassischen Projektlebenszyklus?", antworten: ["Planung", "Durchführung", "Evaluation", "Initiierung"], korrekt: "Evaluation" },
  { id: 11, frage: "Wofür steht das Akronym RACI?", antworten: ["Responsible, Accountable, Consulted, Informed", "Relevant, Accurate, Clear, Integrated", "Resourceful, Achievable, Cost-effective, Immediate", "Risk, Analysis, Communication, Implementation"], korrekt: "Responsible, Accountable, Consulted, Informed" },
  { id: 12, frage: "Was ist ein typisches Merkmal einer Matrixorganisation?", antworten: ["Klare Hierarchien", "Mitarbeiter haben nur eine Führungskraft", "Mitarbeiter haben mehrere Vorgesetzte", "Nur projektbezogene Tätigkeiten"], korrekt: "Mitarbeiter haben mehrere Vorgesetzte" },
  { id: 13, frage: "Was beschreibt die Meilensteintrendanalyse (MTA)?", antworten: ["Budgetkontrolle", "Qualitätssicherung", "Visualisierung von Meilensteinverschiebungen", "Ressourcenplanung"], korrekt: "Visualisierung von Meilensteinverschiebungen" },
  { id: 14, frage: "Was passiert in der Initiierungsphase eines Projekts?", antworten: ["Erstellung des Projektstrukturplans", "Ausarbeitung des Abschlussberichts", "Definition der Projektziele", "Durchführung der Aktivitäten"], korrekt: "Definition der Projektziele" },
  { id: 15, frage: "Welches der folgenden Tools ist typisch für agiles Projektmanagement?", antworten: ["Projektstrukturplan", "Stakeholder-Matrix", "Kanban-Board", "Meilensteinplan"], korrekt: "Kanban-Board" },
  { id: 16, frage: "Welche Rolle gibt es ausschließlich in Scrum?", antworten: ["Projektmanager", "Risikomanager", "Product Owner", "Qualitätsmanager"], korrekt: "Product Owner" },
  { id: 17, frage: "Die Retrospektive dient primär zur:", antworten: ["Planung neuer Aufgaben", "Bewertung und Verbesserung der Teamarbeit", "Stakeholder-Kommunikation", "Projektfinanzierung"], korrekt: "Bewertung und Verbesserung der Teamarbeit" },
  { id: 18, frage: "Ein Arbeitspaket im PSP ist:", antworten: ["Eine Hauptaufgabe", "Ein Projektziel", "Eine konkrete, abgrenzbare Aufgabe", "Ein strategisches Ziel"], korrekt: "Eine konkrete, abgrenzbare Aufgabe" },
  { id: 19, frage: "Welche Methode wird zur Priorisierung von Anforderungen genutzt?", antworten: ["SMART", "MoSCoW", "RACI", "SWOT"], korrekt: "MoSCoW" },
  { id: 20, frage: "Was ist KEIN Bestandteil des 'magischen Dreiecks'?", antworten: ["Qualität", "Kosten", "Risiko", "Zeit"], korrekt: "Risiko" }
];


export default function ExamSimulation() {
  const [aktuelleFrage, setAktuelleFrage] = useState(0);
  const [antworten, setAntworten] = useState([]);
  const [ergebnis, setErgebnis] = useState(null);

  const handleAntwort = (antwort) => {
    setAntworten([...antworten, antwort]);

    if (aktuelleFrage + 1 < fragen.length) {
      setAktuelleFrage(aktuelleFrage + 1);
    } else {
      // Auswertung durchführen
      auswerten([...antworten, antwort]);
    }
  };

  const auswerten = (userAntworten) => {
    let korrekt = 0;

    fragen.forEach((frage, idx) => {
      if (frage.korrekt === userAntworten[idx]) korrekt++;
    });

    const prozent = (korrekt / fragen.length) * 100;
    let note;

    if (prozent >= 90) note = 1;
    else if (prozent >= 80) note = 2;
    else if (prozent >= 70) note = 3;
    else if (prozent >= 60) note = 4;
    else note = 5;

    setErgebnis({ korrekt, prozent, note });
  };

  const resetSimulation = () => {
    setAktuelleFrage(0);
    setAntworten([]);
    setErgebnis(null);
  };

  if (ergebnis) {
    return (
      <Layout>
        <div className="p-6 bg-white rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">📝 Ergebnis deiner Prüfungssimulation</h2>
          <p className="mb-4">Du hast <strong>{ergebnis.korrekt}</strong> von <strong>{fragen.length}</strong> Fragen richtig beantwortet.</p>
          <p className="mb-4">Dein Ergebnis: <strong>{ergebnis.prozent.toFixed(1)}%</strong></p>
          <p className="text-xl">🎓 Deine Note: <strong>{ergebnis.note}</strong></p>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" onClick={resetSimulation}>Nochmal durchführen</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Frage {aktuelleFrage + 1}/{fragen.length}</h2>
        <p className="mb-4 font-medium">{fragen[aktuelleFrage].frage}</p>

        <ul className="space-y-2">
          {fragen[aktuelleFrage].antworten.map((antwort, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleAntwort(antwort)}
                className="w-full text-left px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition"
              >
                {antwort}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
