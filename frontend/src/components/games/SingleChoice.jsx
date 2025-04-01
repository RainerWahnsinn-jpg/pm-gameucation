import { useState, useEffect } from "react";

const fragen = [
  {
    id: 1,
    frage: "Was ist ein typisches Merkmal eines Projekts?",
    antworten: [
      "Routinearbeit",
      "Unbegrenzte Ressourcen",
      "Einmaligkeit",
      "Permanente Organisation",
    ],
    korrekt: "Einmaligkeit",
  },
  {
    id: 2,
    frage: "Der Begriff 'Triple Constraint' bezieht sich auf:",
    antworten: [
      "Zeit, Kosten, Qualität",
      "Stakeholder, Risiken, Ziele",
      "Kommunikation, Führung, Konflikte",
      "Planung, Durchführung, Kontrolle",
    ],
    korrekt: "Zeit, Kosten, Qualität",
  },
  {
    id: 3,
    frage: "Was gehört zur Definition eines erfolgreichen Projekts?",
    antworten: [
      "Niedrige Kosten, hoher Gewinn",
      "Hoher Zeitdruck, schnelle Ergebnisse",
      "Erfüllung der definierten Projektziele",
      "Hohe Mitarbeiterzahl",
    ],
    korrekt: "Erfüllung der definierten Projektziele",
  },
  {
    id: 4,
    frage: "Welche der folgenden Projektmethoden ist agil?",
    antworten: ["Wasserfallmodell", "V-Modell", "Scrum", "Stage-Gate-Modell"],
    korrekt: "Scrum",
  },
  {
    id: 5,
    frage: "Was beschreibt ein Gantt-Diagramm am besten?",
    antworten: [
      "Projektbudget",
      "Risikoanalyse",
      "Zeitplan und Aufgaben",
      "Stakeholder-Zufriedenheit",
    ],
    korrekt: "Zeitplan und Aufgaben",
  },
  {
    id: 6,
    frage: "Was versteht man unter Scope Creep?",
    antworten: [
      "Klar definierte Projektziele",
      "Steigender Umfang ohne Genehmigung",
      "Reduzierung der Projektkosten",
      "Optimierte Ressourcenplanung",
    ],
    korrekt: "Steigender Umfang ohne Genehmigung",
  },
  {
    id: 7,
    frage: "Wozu dient eine SWOT-Analyse im Projektmanagement?",
    antworten: [
      "Analyse von Zeitplänen",
      "Analyse von Risiken",
      "Bewertung von Stärken, Schwächen, Chancen und Risiken",
      "Ermittlung des Budgets",
    ],
    korrekt: "Bewertung von Stärken, Schwächen, Chancen und Risiken",
  },
  {
    id: 8,
    frage: "Was beschreibt ein MVP?",
    antworten: [
      "Maximum Valuable Project",
      "Minimum Viable Product",
      "Most Valuable Person",
      "Minimum Validated Plan",
    ],
    korrekt: "Minimum Viable Product",
  },
  {
    id: 9,
    frage: "Die Methode zur Risikobewertung heißt:",
    antworten: [
      "Kanban",
      "Ishikawa-Diagramm",
      "Gantt-Diagramm",
      "Risiko-Matrix",
    ],
    korrekt: "Risiko-Matrix",
  },
  {
    id: 10,
    frage: "Was ist keine Phase im klassischen Projektlebenszyklus?",
    antworten: ["Planung", "Durchführung", "Evaluation", "Initiierung"],
    korrekt: "Evaluation",
  },
  {
    id: 11,
    frage: "Wofür steht das Akronym RACI?",
    antworten: [
      "Responsible, Accountable, Consulted, Informed",
      "Relevant, Accurate, Clear, Integrated",
      "Resourceful, Achievable, Cost-effective, Immediate",
      "Risk, Analysis, Communication, Implementation",
    ],
    korrekt: "Responsible, Accountable, Consulted, Informed",
  },
  {
    id: 12,
    frage: "Was ist ein typisches Merkmal einer Matrixorganisation?",
    antworten: [
      "Klare Hierarchien",
      "Mitarbeiter haben nur eine Führungskraft",
      "Mitarbeiter haben mehrere Vorgesetzte",
      "Nur projektbezogene Tätigkeiten",
    ],
    korrekt: "Mitarbeiter haben mehrere Vorgesetzte",
  },
  {
    id: 13,
    frage: "Was beschreibt die Meilensteintrendanalyse (MTA)?",
    antworten: [
      "Budgetkontrolle",
      "Qualitätssicherung",
      "Visualisierung von Meilensteinverschiebungen",
      "Ressourcenplanung",
    ],
    korrekt: "Visualisierung von Meilensteinverschiebungen",
  },
  {
    id: 14,
    frage: "Was passiert in der Initiierungsphase eines Projekts?",
    antworten: [
      "Erstellung des Projektstrukturplans",
      "Ausarbeitung des Abschlussberichts",
      "Definition der Projektziele",
      "Durchführung der Aktivitäten",
    ],
    korrekt: "Definition der Projektziele",
  },
  {
    id: 15,
    frage:
      "Welches der folgenden Tools ist typisch für agiles Projektmanagement?",
    antworten: [
      "Projektstrukturplan",
      "Stakeholder-Matrix",
      "Kanban-Board",
      "Meilensteinplan",
    ],
    korrekt: "Kanban-Board",
  },
  {
    id: 16,
    frage: "Welche Rolle gibt es ausschließlich in Scrum?",
    antworten: [
      "Projektmanager",
      "Risikomanager",
      "Product Owner",
      "Qualitätsmanager",
    ],
    korrekt: "Product Owner",
  },
  {
    id: 17,
    frage: "Die Retrospektive dient primär zur:",
    antworten: [
      "Planung neuer Aufgaben",
      "Bewertung und Verbesserung der Teamarbeit",
      "Stakeholder-Kommunikation",
      "Projektfinanzierung",
    ],
    korrekt: "Bewertung und Verbesserung der Teamarbeit",
  },
  {
    id: 18,
    frage: "Ein Arbeitspaket im PSP ist:",
    antworten: [
      "Eine Hauptaufgabe",
      "Ein Projektziel",
      "Eine konkrete, abgrenzbare Aufgabe",
      "Ein strategisches Ziel",
    ],
    korrekt: "Eine konkrete, abgrenzbare Aufgabe",
  },
  {
    id: 19,
    frage: "Welche Methode wird zur Priorisierung von Anforderungen genutzt?",
    antworten: ["SMART", "MoSCoW", "RACI", "SWOT"],
    korrekt: "MoSCoW",
  },
  {
    id: 20,
    frage: "Was ist KEIN Bestandteil des 'magischen Dreiecks'?",
    antworten: ["Qualität", "Kosten", "Risiko", "Zeit"],
    korrekt: "Risiko",
  },
  {
    id: 21,
    frage:
      "Welche Methode hilft dabei, Ursachen von Problemen systematisch zu identifizieren?",
    antworten: [
      "Kanban-Board",
      "Ishikawa-Diagramm",
      "Burn-Down-Chart",
      "RACI-Matrix",
    ],
    korrekt: "Ishikawa-Diagramm",
  },
  {
    id: 22,
    frage: "Was beschreibt das SMART-Prinzip?",
    antworten: [
      "Risikoanalyse",
      "Zielformulierung",
      "Budgetplanung",
      "Kommunikationsstrategie",
    ],
    korrekt: "Zielformulierung",
  },
  {
    id: 23,
    frage:
      "Welche Methode dient der visualisierten Darstellung des Projektfortschritts im agilen Umfeld?",
    antworten: [
      "Gantt-Diagramm",
      "Burn-Down-Chart",
      "Risiko-Matrix",
      "Stakeholder-Matrix",
    ],
    korrekt: "Burn-Down-Chart",
  },
  {
    id: 24,
    frage: "Wer ist hauptverantwortlich für die Produktvision im Scrum?",
    antworten: [
      "Scrum Master",
      "Projektmanager",
      "Product Owner",
      "Entwicklungsteam",
    ],
    korrekt: "Product Owner",
  },
  {
    id: 25,
    frage: "Welche Phase gehört zum klassischen Wasserfallmodell?",
    antworten: ["Sprint-Planung", "Konzeption", "Daily Scrum", "Retrospektive"],
    korrekt: "Konzeption",
  },
  {
    id: 26,
    frage: "Ein Meilenstein im Projektplan dient primär der:",
    antworten: [
      "Kostenkalkulation",
      "Qualitätssicherung",
      "Terminüberwachung",
      "Stakeholder-Kommunikation",
    ],
    korrekt: "Terminüberwachung",
  },
  {
    id: 27,
    frage: "Was ist ein typisches Kennzeichen des V-Modells?",
    antworten: [
      "Sprintzyklen",
      "Parallele Testphasen zur Entwicklung",
      "Kanban-Boards",
      "Flexible Anforderungen",
    ],
    korrekt: "Parallele Testphasen zur Entwicklung",
  },
  {
    id: 28,
    frage: "Welches Tool ist hilfreich zur Stakeholder-Analyse?",
    antworten: [
      "Kanban-Board",
      "Burn-Up-Chart",
      "Stakeholder-Matrix",
      "Projektstrukturplan",
    ],
    korrekt: "Stakeholder-Matrix",
  },
  {
    id: 29,
    frage: "Was beschreibt der Begriff 'Critical Path'?",
    antworten: [
      "Budgetobergrenze",
      "Risiko mit höchster Eintrittswahrscheinlichkeit",
      "Der längste Pfad im Ablaufplan",
      "Maximale Stakeholderzahl",
    ],
    korrekt: "Der längste Pfad im Ablaufplan",
  },
  {
    id: 30,
    frage: "Ein typisches agiles Vorgehen ist:",
    antworten: ["Stage-Gate", "Spiralmodell", "Scrum", "Wasserfallmodell"],
    korrekt: "Scrum",
  },
  {
    id: 31,
    frage: "Was bezeichnet man als Ressourcenpuffer?",
    antworten: [
      "Zeitreserve im Projektplan",
      "Externe Finanzierung",
      "Zusätzliche Mitarbeiter",
      "Reduziertes Budget",
    ],
    korrekt: "Zeitreserve im Projektplan",
  },
  {
    id: 32,
    frage: "Der Zweck des Daily Scrums ist hauptsächlich:",
    antworten: [
      "Risikoanalyse durchführen",
      "Tagesplanung im Team abstimmen",
      "Stakeholder informieren",
      "Endprodukt präsentieren",
    ],
    korrekt: "Tagesplanung im Team abstimmen",
  },
  {
    id: 33,
    frage: "Was ist KEIN agiler Wert?",
    antworten: [
      "Individuen und Interaktionen",
      "Vertragsverhandlungen",
      "Funktionierende Software",
      "Reagieren auf Veränderung",
    ],
    korrekt: "Vertragsverhandlungen",
  },
  {
    id: 34,
    frage: "Was beschreibt das Parkinsonsche Gesetz?",
    antworten: [
      "Mehr Aufwand bringt automatisch bessere Ergebnisse",
      "Arbeit dehnt sich auf die verfügbare Zeit aus",
      "Komplexität immer minimieren",
      "80/20-Regel in der Aufwand-Nutzen-Analyse",
    ],
    korrekt: "Arbeit dehnt sich auf die verfügbare Zeit aus",
  },
  {
    id: 35,
    frage: "Welche Methode ist typisch für Aufwandsschätzungen im Scrum?",
    antworten: ["MoSCoW", "Planning Poker", "SWOT", "RACI"],
    korrekt: "Planning Poker",
  },
  {
    id: 36,
    frage: "Wofür steht 'Definition of Done' (DoD)?",
    antworten: [
      "Projektabschlussbericht",
      "Fertigstellungskriterien einer Aufgabe",
      "Budgetfreigabe",
      "Risikoabschätzung",
    ],
    korrekt: "Fertigstellungskriterien einer Aufgabe",
  },
  {
    id: 37,
    frage: "Was beschreibt der Begriff 'Kooperationseffekt' in Teams?",
    antworten: [
      "Leistungssteigerung durch Zusammenarbeit",
      "Verminderte Leistung durch Konflikte",
      "Unabhängige Aufgabenerfüllung",
      "Gemeinsame Entscheidungsvermeidung",
    ],
    korrekt: "Leistungssteigerung durch Zusammenarbeit",
  },
  {
    id: 38,
    frage: "Ein Sprint-Backlog beinhaltet:",
    antworten: [
      "Langfristige Projektziele",
      "Aufgaben für den aktuellen Sprint",
      "Stakeholder-Feedback",
      "Endproduktanforderungen",
    ],
    korrekt: "Aufgaben für den aktuellen Sprint",
  },
  {
    id: 39,
    frage: "Wodurch zeichnet sich eine Retrospektive aus?",
    antworten: [
      "Ergebnispräsentation an Stakeholder",
      "Bewertung der Zusammenarbeit im Team",
      "Budgetplanung",
      "Risikobewertung",
    ],
    korrekt: "Bewertung der Zusammenarbeit im Team",
  },
  {
    id: 40,
    frage: "Was ist eine typische Ursache für Projektverzögerungen?",
    antworten: [
      "Klare Anforderungen",
      "Gute Kommunikation",
      "Unrealistische Planung",
      "Effektives Konfliktmanagement",
    ],
    korrekt: "Unrealistische Planung",
  },
  {
    id: 41,
    frage: "Die Harvard-Methode dient:",
    antworten: [
      "Konfliktlösung",
      "Budgetierung",
      "Risikomanagement",
      "Zeitplanung",
    ],
    korrekt: "Konfliktlösung",
  },
  {
    id: 42,
    frage: "Welches Modell erklärt Teamphasen?",
    antworten: [
      "Tuckman-Modell",
      "Wasserfallmodell",
      "Spiralmodell",
      "V-Modell",
    ],
    korrekt: "Tuckman-Modell",
  },
  {
    id: 43,
    frage: "Kanban fokussiert primär auf:",
    antworten: [
      "Zeitplanung",
      "Visualisierung des Workflows",
      "Budgetmanagement",
      "Stakeholderkommunikation",
    ],
    korrekt: "Visualisierung des Workflows",
  },
  {
    id: 44,
    frage: "Was gehört typischerweise NICHT zum Projektabschluss?",
    antworten: [
      "Lessons Learned",
      "Projektnachkalkulation",
      "Stakeholder-Analyse",
      "Abschlussbericht",
    ],
    korrekt: "Stakeholder-Analyse",
  },
  {
    id: 45,
    frage: "Was bedeutet Effektivität in Projekten?",
    antworten: [
      "Ressourcenverbrauch minimieren",
      "Das richtige Ziel verfolgen",
      "Kostengünstig sein",
      "Schnelle Umsetzung",
    ],
    korrekt: "Das richtige Ziel verfolgen",
  },
  {
    id: 46,
    frage: "Ein Sprint im Scrum dauert typischerweise:",
    antworten: ["2 bis 4 Wochen", "3 bis 6 Monate", "1 Jahr", "1 Tag"],
    korrekt: "2 bis 4 Wochen",
  },
  {
    id: 47,
    frage: "Was zeigt die Risiko-Matrix?",
    antworten: [
      "Ressourcenplanung",
      "Eintrittswahrscheinlichkeit und Schadenshöhe",
      "Zeitverzögerungen",
      "Kostenübersicht",
    ],
    korrekt: "Eintrittswahrscheinlichkeit und Schadenshöhe",
  },
  {
    id: 48,
    frage: "Ein typisches Merkmal eines Projekts ist:",
    antworten: [
      "Dauerhaftigkeit",
      "Routineprozesse",
      "Klare Zielsetzung",
      "Unbegrenzte Mittel",
    ],
    korrekt: "Klare Zielsetzung",
  },
  {
    id: 49,
    frage: "Was versteht man unter 'agilem Mindset'?",
    antworten: [
      "Langfristige Planung",
      "Hohe Flexibilität",
      "Feste Budgetvorgaben",
      "Starre Strukturen",
    ],
    korrekt: "Hohe Flexibilität",
  },
  {
    id: 50,
    frage:
      "Welches Instrument eignet sich zur Teamkommunikation im agilen Umfeld?",
    antworten: ["Gantt-Diagramm", "Daily Scrum", "Budgetplanung", "V-Modell"],
    korrekt: "Daily Scrum",
  },
  {
    id: 51,
    frage: "Welche Aussage zu einem Kick-off Meeting ist richtig?",
    antworten: [
      "Es findet ausschließlich am Projektende statt.",
      "Es dient dazu, Stakeholder erstmals zu informieren und zu involvieren.",
      "Es wird nur vom Scrum Master geleitet.",
      "Es ersetzt die Sprint-Retrospektive.",
    ],
    korrekt:
      "Es dient dazu, Stakeholder erstmals zu informieren und zu involvieren.",
  },
  {
    id: 52,
    frage:
      "Welches Diagramm ist typisch für die Darstellung von Projektrisiken?",
    antworten: [
      "Netzplandiagramm",
      "Pareto-Diagramm",
      "Eisenhower-Matrix",
      "Risikomatrix",
    ],
    korrekt: "Risikomatrix",
  },
  {
    id: 53,
    frage:
      "Welche Methode eignet sich zur Aufwandsschätzung im Projektmanagement?",
    antworten: [
      "SWOT-Analyse",
      "Planning Poker",
      "Eskalationsmatrix",
      "Stakeholder-Analyse",
    ],
    korrekt: "Planning Poker",
  },
  {
    id: 54,
    frage: "Was ist charakteristisch für agiles Projektmanagement?",
    antworten: [
      "Strikte Phasentrennung",
      "Festlegung aller Anforderungen zu Projektbeginn",
      "Iteratives Vorgehen und regelmäßige Anpassungen",
      "Vermeidung direkter Stakeholder-Kommunikation",
    ],
    korrekt: "Iteratives Vorgehen und regelmäßige Anpassungen",
  },
  {
    id: 55,
    frage: "Wofür steht SMART im Zusammenhang mit Zieldefinition?",
    antworten: [
      "Sustainable, Manageable, Attainable, Realistic, Timely",
      "Specific, Measurable, Achievable, Relevant, Time-bound",
      "Simple, Meaningful, Actionable, Responsible, Tactical",
      "Structured, Motivational, Accurate, Reliable, Testable",
    ],
    korrekt: "Specific, Measurable, Achievable, Relevant, Time-bound",
  },
  {
    id: 56,
    frage:
      "Welche Rolle übernimmt typischerweise die Verantwortung für die Priorisierung des Backlogs?",
    antworten: [
      "Scrum Master",
      "Entwicklungsteam",
      "Product Owner",
      "Projektleiter",
    ],
    korrekt: "Product Owner",
  },
  {
    id: 57,
    frage:
      "Welche Technik unterstützt das Konfliktmanagement gezielt durch Moderation?",
    antworten: ["Daily Standup", "Mediation", "Gantt-Planung", "SWOT-Analyse"],
    korrekt: "Mediation",
  },
  {
    id: 58,
    frage: "Was beschreibt das V-Modell am besten?",
    antworten: [
      "Agiles Framework",
      "Testorientiertes Vorgehen bei Softwareprojekten",
      "Finanzplanung eines Projekts",
      "Organisationsstruktur für Teams",
    ],
    korrekt: "Testorientiertes Vorgehen bei Softwareprojekten",
  },
  {
    id: 59,
    frage: "Was gehört typischerweise nicht zu den Aufgaben des Scrum Masters?",
    antworten: [
      "Entfernen von Hindernissen",
      "Verbesserung der Prozesse im Team",
      "Inhaltliche Vorgaben für die Umsetzung",
      "Moderation von Scrum-Events",
    ],
    korrekt: "Inhaltliche Vorgaben für die Umsetzung",
  },
  {
    id: 60,
    frage: "Was versteht man unter 'Fast Tracking' im Projektmanagement?",
    antworten: [
      "Parallelisierung ursprünglich sequenzieller Aktivitäten",
      "Zusätzliche Ressourcen einsetzen",
      "Verkleinerung des Projektumfangs",
      "Budgetkürzung zur Zeitersparnis",
    ],
    korrekt: "Parallelisierung ursprünglich sequenzieller Aktivitäten",
  },
  {
    id: 61,
    frage: "Welche Aussage zum Projektabschluss ist korrekt?",
    antworten: [
      "Ein Abschlussbericht ist optional.",
      "Der Projektabschluss muss immer öffentlich erfolgen.",
      "Lessons Learned werden dokumentiert und reflektiert.",
      "Der Projektabschluss findet ausschließlich im agilen Projekt statt.",
    ],
    korrekt: "Lessons Learned werden dokumentiert und reflektiert.",
  },
  {
    id: 62,
    frage: "Welches Modell beschreibt Teamentwicklungsphasen?",
    antworten: [
      "Maslows Bedürfnispyramide",
      "Tuckman-Phasenmodell",
      "Ishikawa-Diagramm",
      "MoSCoW-Methode",
    ],
    korrekt: "Tuckman-Phasenmodell",
  },
  {
    id: 63,
    frage: "Was beschreibt der Kooperations-Effekt in Teams?",
    antworten: [
      "Leistungssteigerung durch gegenseitige Unterstützung",
      "Leistungsabfall durch Konflikte",
      "Unabhängiges Arbeiten ohne Austausch",
      "Verlust der Motivation durch Zusammenarbeit",
    ],
    korrekt: "Leistungssteigerung durch gegenseitige Unterstützung",
  },
  {
    id: 64,
    frage: "Ein Sprint Review dient hauptsächlich zur:",
    antworten: [
      "Planung der nächsten Aufgaben",
      "Reflexion des Teamprozesses",
      "Präsentation und Diskussion der Ergebnisse mit Stakeholdern",
      "Budgetkontrolle",
    ],
    korrekt: "Präsentation und Diskussion der Ergebnisse mit Stakeholdern",
  },
  {
    id: 65,
    frage: "Was kennzeichnet eine objektorientierte Projektstrukturierung?",
    antworten: [
      "Organisation nach Projektphasen",
      "Organisation nach Verantwortlichkeiten",
      "Organisation nach Ergebnissen und Produkten",
      "Organisation nach Abteilungen",
    ],
    korrekt: "Organisation nach Ergebnissen und Produkten",
  },
  {
    id: 66,
    frage: "Was ist ein typischer Grund für Projektabweichungen?",
    antworten: [
      "Klare Kommunikation",
      "Unklare Anforderungen",
      "Zu viele Ressourcen",
      "Fehlende Meetings",
    ],
    korrekt: "Unklare Anforderungen",
  },
  {
    id: 67,
    frage: "Welches Artefakt gehört nicht direkt zu Scrum?",
    antworten: [
      "Sprint Backlog",
      "Gantt-Diagramm",
      "Product Backlog",
      "Increment",
    ],
    korrekt: "Gantt-Diagramm",
  },
  {
    id: 68,
    frage: "Was versteht man unter Rentabilität in einem Projekt?",
    antworten: [
      "Verhältnis von Output zu Input",
      "Grad der Zielerreichung",
      "Verhältnis von Gewinn zu eingesetztem Kapital",
      "Gesamtdauer des Projekts",
    ],
    korrekt: "Verhältnis von Gewinn zu eingesetztem Kapital",
  },
  {
    id: 69,
    frage: "Was beschreibt Produktivität im Projektkontext?",
    antworten: [
      "Qualität des Produkts",
      "Zeitliche Dauer des Projekts",
      "Verhältnis von Output zu Input",
      "Stakeholderzufriedenheit",
    ],
    korrekt: "Verhältnis von Output zu Input",
  },
  {
    id: 70,
    frage: "Welche Eigenschaft beschreibt Effektivität in Projekten?",
    antworten: [
      "Das Projekt mit geringsten Kosten durchführen",
      "Die richtigen Ziele erreichen",
      "Möglichst viele Aktivitäten erledigen",
      "Möglichst schnell abschließen",
    ],
    korrekt: "Die richtigen Ziele erreichen",
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function SingleChoice() {
  const [zufallsFragen, setZufallsFragen] = useState([]);
  const [aktuelleFrage, setAktuelleFrage] = useState(0);
  const [antworten, setAntworten] = useState([]);
  const [ergebnis, setErgebnis] = useState(null);

  useEffect(() => {
    // 30 zufällige Fragen auswählen, einmalig bei Komponentenstart
    setZufallsFragen(shuffle(fragen).slice(0, 30));
  }, []);

  const handleAntwort = (antwort) => {
    const neueAntworten = [...antworten, antwort];
    setAntworten(neueAntworten);

    if (aktuelleFrage + 1 < zufallsFragen.length) {
      setAktuelleFrage(aktuelleFrage + 1);
    } else {
      auswerten(neueAntworten);
    }
  };

  const auswerten = (userAntworten) => {
    const details = zufallsFragen.map((frage, idx) => ({
      frage: frage.frage,
      korrekt: frage.korrekt,
      gewählt: userAntworten[idx],
      istRichtig: frage.korrekt === userAntworten[idx],
    }));

    const korrektAnzahl = details.filter((d) => d.istRichtig).length;
    const prozent = (korrektAnzahl / zufallsFragen.length) * 100;
    const note =
      prozent >= 90
        ? 1
        : prozent >= 80
        ? 2
        : prozent >= 70
        ? 3
        : prozent >= 60
        ? 4
        : 5;

    setErgebnis({ korrektAnzahl, prozent, note, details });
  };

  const resetSimulation = () => {
    setZufallsFragen(shuffle(fragen).slice(0, 30));
    setAktuelleFrage(0);
    setAntworten([]);
    setErgebnis(null);
  };

  return (
    <div className="container">
      <h1>📝 Prüfungssimulation</h1>

      {zufallsFragen.length === 0 ? (
        <p>Loading...</p>
      ) : ergebnis ? (
        <>
          <section className="card">
            <h3>🎓 Ergebnis:</h3>
            <p>
              {ergebnis.korrektAnzahl}/{zufallsFragen.length} richtig (
              {ergebnis.prozent.toFixed(1)}%)
            </p>
            <p>
              <strong>Note:</strong> {ergebnis.note}
            </p>
            <button className="secondary" onClick={resetSimulation}>
              🔄 Neu starten
            </button>
          </section>

          <section className="card">
            <h3>🔍 Deine Antworten:</h3>
            <ul>
              {ergebnis.details.map((detail, idx) => (
                <li key={idx}>
                  <strong>Frage {idx + 1}:</strong> {detail.frage} <br />
                  <strong>Deine Antwort:</strong> {detail.gewählt}{" "}
                  {detail.istRichtig ? "✅" : "❌"}
                  <br />
                  {!detail.istRichtig && (
                    <>
                      <strong>Richtige Antwort:</strong> {detail.korrekt}
                    </>
                  )}
                  <hr />
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <>
          <section className="card">
            <h3>
              ❓ Frage {aktuelleFrage + 1}/{zufallsFragen.length}
            </h3>
            <p>{zufallsFragen[aktuelleFrage].frage}</p>
          </section>

          <section className="card grid">
            {zufallsFragen[aktuelleFrage].antworten.map((antwort, idx) => (
              <button
                key={idx}
                className="outline"
                onClick={() => handleAntwort(antwort)}
              >
                {antwort}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
