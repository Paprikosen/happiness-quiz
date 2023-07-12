const questions = [
  {
    question: "Welche Faktoren tragen maßgeblich zum Glücksempfinden bei?",
    explanation: "Starke soziale Bindungen sind ein wesentlicher Faktor für das Glücksempfinden, da sie Unterstützung, Zugehörigkeit und positive Emotionen bieten.",
    possibleAnswers: [
      { answer: "Geld und Besitz", correct: false },
      { answer: "Soziale Beziehungen", correct: true },
      { answer: "Perfektes Aussehen", correct: false },
      { answer: "Tägliche Routine", correct: false },
    ],
  },
  {
    question: "Welche Aktivität wird mit einem Anstieg des Glücksniveaus in Verbindung gebracht?",
    explanation: "Regelmäßige körperliche Aktivität, wie Sport, kann die Ausschüttung von Endorphinen im Gehirn stimulieren, was zu gesteigertem Glücksempfinden führt.",
    possibleAnswers: [
      { answer: "Allein sein", correct: false },
      { answer: "Sport treiben", correct: true },
      { answer: "Übermäßiger Konsum von Fernsehen", correct: false },
      { answer: "Konflikte mit anderen Menschen", correct: false },
    ],
  },
  {
    question: "Welcher Aspekt spielt eine Rolle bei der langfristigen Steigerung des Glücksempfindens?",
    explanation: "Achtsamkeitspraktiken und Meditation haben gezeigt, dass sie Stress reduzieren, positive Emotionen fördern und das Glücksempfinden langfristig steigern können.",
    possibleAnswers: [
      { answer: "Materieller Reichtum", correct: false },
      { answer: "Veränderung des äußeren Umfelds", correct: false },
      { answer: "Achtsamkeit und Meditation", correct: true },
      { answer: "Sich mit negativen Gedanken beschäftigen", correct: false },
    ],
  },
  {
    question: "Welche Einstellung ist mit einem höheren Glücksniveau verbunden?",
    explanation: "Das Kultivieren von Dankbarkeit und Wertschätzung für das Gegenwärtige kann das Glücksniveau erhöhen, indem es den Fokus auf positive Aspekte des Lebens lenkt.",
    possibleAnswers: [
      { answer: "Misstrauen gegenüber anderen Menschen", correct: false },
      { answer: "Anhaftung an materielle Besitztümer", correct: false },
      { answer: "Dankbarkeit und Wertschätzung", correct: true },
      { answer: "Konstante Sorge um die Zukunft", correct: false },
    ],
  },
  {
    question: "Welcher Lebensbereich hat einen erheblichen Einfluss auf das Glücksempfinden?",
    explanation: "Engagement in sozialen Aktivitäten und der Beitrag zur Gemeinschaft sind mit einem höheren Glücksempfinden verbunden, da sie ein Gefühl von Sinnhaftigkeit und Verbundenheit vermitteln.",
    possibleAnswers: [
      { answer: "Berufliche Karriere", correct: false },
      { answer: "Soziales Engagement", correct: true },
      { answer: "Fernreisen", correct: false },
      { answer: "Wohnort", correct: false },
    ],
  },
  {
    question: "Welche Rolle spielt die Genetik beim Glücksempfinden?",
    explanation: "Die Genetik hat einen gewissen Einfluss auf das Glücksempfinden, jedoch zeigen Studien, dass Umweltfaktoren und individuelle Verhaltensweisen einen größeren Beitrag dazu leisten.",
    possibleAnswers: [
      { answer: "Keine Rolle, Glück ist ausschließlich abhängig von äußeren Faktoren", correct: false },
      { answer: "Geringe Auswirkungen, Glück hängt größtenteils von Umweltfaktoren ab", correct: true },
      { answer: "Starke Auswirkungen, Glücksempfinden ist zu einem Großteil genetisch bedingt", correct: false },
      { answer: "Glücksempfinden ist ausschließlich erlernt und hat nichts mit Genetik zu tun", correct: false },
    ],
  },
  {
    question: "Welche Verhaltensweise ist mit einem höheren Glücksniveau verbunden?",
    explanation: "Das aktive Verfolgen von persönlichen Zielen und das Überwinden von Herausforderungen führen zu einem gesteigerten Glücksempfinden durch ein Gefühl von Erfüllung und Selbstwirksamkeit.",
    possibleAnswers: [
      { answer: "Vermeidung jeglicher Risiken", correct: false },
      { answer: "Proaktives Streben nach Zielen", correct: true },
      { answer: "Ständiges Vergleichen mit anderen Menschen", correct: false },
      { answer: "Ignorieren der eigenen Emotionen", correct: false },
    ],
  },
  {
    question: "Welche Art von sozialen Beziehungen trägt am meisten zum Glücksempfinden bei?",
    explanation: "Engere Freundschaften bieten emotionale Unterstützung, Vertrauen und die Möglichkeit, positive Erfahrungen und Erlebnisse zu teilen, was das Glücksniveau erhöht.",
    possibleAnswers: [
      { answer: "Oberflächliche Bekanntschaften", correct: false },
      { answer: "Enge Freundschaften", correct: true },
      { answer: "Geschäftliche Kontakte", correct: false },
      { answer: "Anonyme Online-Bekanntschaften", correct: false },
    ],
  },
  {
    question: "Welche Art von Aktivitäten fördern nachweislich das Glücksempfinden?",
    explanation: "Aktivitäten wie Selbstreflexion und Meditation fördern die Selbstakzeptanz, emotionale Ausgeglichenheit und das Bewusstsein im Moment, was sich positiv auf das Glücksempfinden auswirkt.",
    possibleAnswers: [
      { answer: "Konsum von Luxusgütern", correct: false },
      { answer: "Selbstreflexion und Meditation", correct: true },
      { answer: "Konkurrenz und Wettkampf", correct: false },
      { answer: "Übermäßiger Alkoholkonsum", correct: false },
    ],
  },
  {
    question: "Welche Rolle spielt die Selbsteinschätzung beim Glücksempfinden?",
    explanation: "Eine positive Selbsteinschätzung ist mit einem gesteigerten Selbstwertgefühl und Selbstzufriedenheit verbunden, was wiederum das Glücksniveau erhöht, da man sich selbst mit positiven Emotionen betrachtet.",
    possibleAnswers: [
      { answer: "Eine negative Selbsteinschätzung führt zu mehr Glück", correct: false },
      { answer: "Eine positive Selbsteinschätzung führt zu mehr Glück", correct: true },
      { answer: "Die Selbsteinschätzung hat keinen Einfluss auf das Glücksempfinden", correct: false },
      { answer: "Die Selbsteinschätzung ist ausschließlich genetisch bedingt", correct: false },
    ],
  },
];

export { questions }


/*
{
  question: "",
  explanation: "",
  possibleAnswers: [
    { answer: "", correct: false },
    { answer: "", correct: false },
    { answer: "", correct: false },
    { answer: "", correct: true },
  ],
},

*/
