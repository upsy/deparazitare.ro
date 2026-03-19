import { Symptom, CheckerQuestion } from "@/lib/types";

export const symptoms: Symptom[] = [
  {
    id: "bruxism",
    name: "Bruxism (scrâșnitul din dinți)",
    description:
      "Activitatea involuntară de strângere sau frecarea dinților, cel mai frecvent în timpul somnului. La copii, prevalența generală este de 15–40%, cu vârf la 3–7 ani.",
    byParasite: {
      oxiuri: {
        present: true,
        severity: "low",
        detail: "Atribuit tradițional, dovezi mixte. Mecanism propus prin iritație reflexă și perturbarea somnului.",
        evidence: "traditional",
      },
      giardia: {
        present: false,
        severity: "none",
        detail: "Fără dovezi directe. Posibil efect indirect prin malabsorbție și deficit nutrițional.",
        evidence: "none",
      },
      ascaris: {
        present: true,
        severity: "moderate",
        detail: "Documentat ca simptom neuropsihiatric în infecții masive. Migrarea larvară și toxinele pot afecta SNC.",
        evidence: "preliminary",
      },
    },
  },
  {
    id: "agitatie-nocturna",
    name: "Agitație nocturnă",
    description:
      "Treziri frecvente, somn agitat, coșmaruri, plâns în somn — unul dintre cele mai frecvent raportate simptome de către părinți.",
    byParasite: {
      oxiuri: {
        present: true,
        severity: "high",
        detail: "Pruritul perianal nocturn este bine documentat. Femela migrează noaptea (21:00–02:00) pentru a depune ouă.",
        evidence: "solid",
      },
      giardia: {
        present: true,
        severity: "low",
        detail: "Efect indirect: oboseala cronică, disconfortul abdominal persistent, diareea nocturnă (rar).",
        evidence: "preliminary",
      },
      ascaris: {
        present: true,
        severity: "moderate",
        detail: "Terori nocturne documentate, mai ales în infecții masive. Migrarea larvelor și toxinele pot afecta SNC.",
        evidence: "preliminary",
      },
    },
  },
  {
    id: "agitatie-diurna",
    name: "Agitație diurnă",
    description:
      "Iritabilitate, nervozitate, dificultăți de concentrare, comportament modificat — frecvent observată la copiii cu infecții parazitare.",
    byParasite: {
      oxiuri: {
        present: true,
        severity: "moderate",
        detail: "Secundar privării de somn cauzate de pruritul nocturn.",
        evidence: "solid",
      },
      giardia: {
        present: true,
        severity: "moderate",
        detail: "Disconfort abdominal cronic, malabsorbție, deficit nutrițional afectează dispoziția.",
        evidence: "solid",
      },
      ascaris: {
        present: true,
        severity: "moderate",
        detail: "Malnutriție, disconfort abdominal, deficit de fier și zinc afectează concentrarea.",
        evidence: "solid",
      },
    },
  },
  {
    id: "prurit-perianal",
    name: "Prurit perianal",
    description:
      "Mâncărime în zona anală, mai ales noaptea. Simptomul cardinal al oxiuriazei.",
    byParasite: {
      oxiuri: {
        present: true,
        severity: "high",
        detail: "Simptom cardinal. Femela depune ouă pe zona perianală noaptea, cauzând mâncărime intensă.",
        evidence: "solid",
      },
      giardia: {
        present: false,
        severity: "none",
        detail: "Nu este asociat cu giardia.",
        evidence: "none",
      },
      ascaris: {
        present: false,
        severity: "none",
        detail: "Rar asociat cu ascaris.",
        evidence: "none",
      },
    },
  },
  {
    id: "dureri-abdominale",
    name: "Dureri abdominale",
    description:
      "Dureri de tip colică, periombilicale, recurente. Frecvente în giardiază și ascariază.",
    byParasite: {
      oxiuri: {
        present: true,
        severity: "low",
        detail: "Ușoare, periombilicale, mai ales în infecții masive.",
        evidence: "solid",
      },
      giardia: {
        present: true,
        severity: "high",
        detail: "Tip colică, frecvente. Trofozoiții irită mucoasa intestinală.",
        evidence: "solid",
      },
      ascaris: {
        present: true,
        severity: "high",
        detail: "Periombilicale, pot fi severe. Risc de ocluzie intestinală în infecții masive.",
        evidence: "solid",
      },
    },
  },
  {
    id: "diaree",
    name: "Diaree",
    description:
      "Scaune frecvente, apoase sau grăsoase. Poate fi cronică sau intermitentă.",
    byParasite: {
      oxiuri: {
        present: false,
        severity: "none",
        detail: "Rar asociat cu oxiuri.",
        evidence: "none",
      },
      giardia: {
        present: true,
        severity: "high",
        detail: "Apoasă, grăsoasă (steatoree), cronică. Semn caracteristic al giardiazei.",
        evidence: "solid",
      },
      ascaris: {
        present: true,
        severity: "moderate",
        detail: "Intermitentă, mai ales în infecții moderate-severe.",
        evidence: "solid",
      },
    },
  },
  {
    id: "pierdere-greutate",
    name: "Pierdere în greutate",
    description:
      "Scădere ponderală sau stagnare în creștere, mai ales în infecții cronice.",
    byParasite: {
      oxiuri: {
        present: false,
        severity: "none",
        detail: "Minimă în infecții necomplicate.",
        evidence: "none",
      },
      giardia: {
        present: true,
        severity: "high",
        detail: "Malabsorbția grăsimilor și nutrienților duce la pierdere în greutate.",
        evidence: "solid",
      },
      ascaris: {
        present: true,
        severity: "high",
        detail: "Competiție pentru nutrienți, mai ales vitamina A și proteine.",
        evidence: "solid",
      },
    },
  },
  {
    id: "greata-varsaturi",
    name: "Greață și vărsături",
    description:
      "Senzație de greață, uneori însoțită de vărsături, mai ales dimineața.",
    byParasite: {
      oxiuri: {
        present: false,
        severity: "none",
        detail: "Rar asociat cu oxiuri.",
        evidence: "none",
      },
      giardia: {
        present: true,
        severity: "low",
        detail: "Ocazional, mai ales în faza acută a infecției.",
        evidence: "solid",
      },
      ascaris: {
        present: true,
        severity: "high",
        detail: "Frecvent, mai ales în infecții moderate-severe.",
        evidence: "solid",
      },
    },
  },
  {
    id: "oboseala",
    name: "Oboseală și fatigabilitate",
    description:
      "Lipsă de energie, oboseală cronică, scăderea performanței zilnice.",
    byParasite: {
      oxiuri: {
        present: true,
        severity: "low",
        detail: "Secundară somnului perturbat de prurit.",
        evidence: "solid",
      },
      giardia: {
        present: true,
        severity: "high",
        detail: "Malabsorbție cronică duce la deficit energetic și nutrițional.",
        evidence: "solid",
      },
      ascaris: {
        present: true,
        severity: "high",
        detail: "Deficit nutrițional, mai ales fier și vitamina A.",
        evidence: "solid",
      },
    },
  },
  {
    id: "tuse",
    name: "Tuse și wheezing",
    description:
      "Tuse seacă sau productivă, respirație șuierătoare — specifică fazei de migrare pulmonară.",
    byParasite: {
      oxiuri: {
        present: false,
        severity: "none",
        detail: "Nu este asociat cu oxiuri.",
        evidence: "none",
      },
      giardia: {
        present: false,
        severity: "none",
        detail: "Nu este asociat cu giardia.",
        evidence: "none",
      },
      ascaris: {
        present: true,
        severity: "high",
        detail: "Faza de migrare pulmonară (sindromul Löffler). Tuse, wheezing, uneori hemoptizie.",
        evidence: "solid",
      },
    },
  },
];

export const checkerQuestions: CheckerQuestion[] = [
  {
    id: "q1",
    text: "Copilul scrâșnește din dinți în timpul somnului?",
    relatedSymptoms: ["bruxism"],
    weight: 1,
  },
  {
    id: "q2",
    text: "Copilul are somn agitat, se trezește frecvent sau plânge noaptea?",
    relatedSymptoms: ["agitatie-nocturna"],
    weight: 2,
  },
  {
    id: "q3",
    text: "Copilul se scarpină frecvent în zona anală, mai ales noaptea?",
    relatedSymptoms: ["prurit-perianal"],
    weight: 3,
  },
  {
    id: "q4",
    text: "Copilul acuză dureri de burtă frecvente (mai ales în jurul buricului)?",
    relatedSymptoms: ["dureri-abdominale"],
    weight: 2,
  },
  {
    id: "q5",
    text: "Copilul are diaree (scaune frecvente, apoase sau grăsoase)?",
    relatedSymptoms: ["diaree"],
    weight: 2,
  },
  {
    id: "q6",
    text: "Copilul este mai iritabil, nervos sau agitat decât de obicei în timpul zilei?",
    relatedSymptoms: ["agitatie-diurna"],
    weight: 1,
  },
  {
    id: "q7",
    text: "Copilul a pierdut în greutate sau nu mai crește corespunzător?",
    relatedSymptoms: ["pierdere-greutate"],
    weight: 2,
  },
  {
    id: "q8",
    text: "Copilul are greață sau vărsături frecvente?",
    relatedSymptoms: ["greata-varsaturi"],
    weight: 2,
  },
  {
    id: "q9",
    text: "Copilul pare obosit, fără energie, chiar și după odihnă?",
    relatedSymptoms: ["oboseala"],
    weight: 1,
  },
  {
    id: "q10",
    text: "Copilul a avut episoade de tuse seacă fără alt motiv aparent?",
    relatedSymptoms: ["tuse"],
    weight: 2,
  },
  {
    id: "q11",
    text: "Ați observat viermi mici, albi, în scaunul sau pe zona anală a copilului?",
    relatedSymptoms: ["prurit-perianal"],
    weight: 5,
  },
  {
    id: "q12",
    text: "Copilul frecventează colectivități (grădiniță, școală)?",
    relatedSymptoms: [],
    weight: 1,
  },
];
