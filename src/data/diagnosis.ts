import { DiagnosisMethod, DoctorAlertCondition } from "@/lib/types";

export const diagnosisMethods: DiagnosisMethod[] = [
  {
    parasiteId: "oxiuri",
    parasiteName: "Oxiuri (Enterobius vermicularis)",
    methods: [
      {
        name: "Scotch test (testul cu banda adezivă)",
        description:
          "Se aplică o bandă adezivă transparentă pe zona perianală dimineața, înainte de baie sau toaletă, apoi se examinează la microscop.",
        sensitivity: "Ridicată (dacă se repetă 3 dimineți consecutiv)",
        notes: "Metoda de referință. Se recomandă repetarea testului 3 dimineți consecutive.",
      },
      {
        name: "Examen coproparazitologic",
        description: "Examinarea scaunului la microscop pentru ouă de paraziți.",
        sensitivity: "Scăzută pentru oxiuri",
        notes: "Ouăle sunt rareori prezente în fecale — nu este metoda recomandată.",
      },
      {
        name: "Vizualizare directă",
        description: "Viermii adulți pot fi văzuți cu ochiul liber pe zona perianală sau în scaun.",
        sensitivity: "Variabilă",
        notes: "Verificați noaptea sau dimineața devreme.",
      },
    ],
  },
  {
    parasiteId: "giardia",
    parasiteName: "Giardia (Giardia lamblia)",
    methods: [
      {
        name: "Examen coproparazitologic",
        description: "Detectarea chisturilor sau trofozoiților în scaun.",
        sensitivity: "Moderată (crește cu 3 probe)",
        notes: "Se recomandă 3 probe de scaun, recoltate în zile diferite (eliminarea este intermitentă).",
      },
      {
        name: "Test de antigen fecal (ELISA)",
        description: "Test imunologic care detectează antigenele Giardia în scaun.",
        sensitivity: "Ridicată",
        notes: "Mai sensibil decât microscopia. Disponibil în laboratoare specializate.",
      },
      {
        name: "PCR fecal",
        description: "Detectarea ADN-ului parazitului prin reacție de polimerizare în lanț.",
        sensitivity: "Foarte ridicată",
        notes: "Cea mai sensibilă metodă, dar mai puțin accesibilă și mai costisitoare.",
      },
    ],
  },
  {
    parasiteId: "ascaris",
    parasiteName: "Ascaris (Ascaris lumbricoides)",
    methods: [
      {
        name: "Examen coproparazitologic",
        description: "Detectarea ouălor în scaun.",
        sensitivity: "Ridicată",
        notes: "De obicei suficient datorită numărului mare de ouă produse zilnic.",
      },
      {
        name: "Vizualizare directă",
        description: "Viermii adulți (20–35 cm) eliminați în scaun.",
        sensitivity: "Variabilă",
        notes: "Eveniment alarmant, dar diagnostic clar.",
      },
      {
        name: "Imagistică",
        description: "Ecografie abdominală sau radiografie.",
        sensitivity: "Variabilă",
        notes: "Indicată în cazuri de suspiciune de ocluzie intestinală.",
      },
    ],
  },
];

export const bloodTests = [
  {
    name: "Hemoleucogramă cu formulă leucocitară",
    description: "Eozinofilia (creșterea eozinofilelor peste 5–7%) poate sugera o infecție parazitară.",
    notes: "Nu este specifică — poate apărea și în alergii.",
  },
  {
    name: "Imunoglobuline (IgE total)",
    description: "Poate fi crescut în infecțiile parazitare.",
    notes: "Test complementar, nu diagnostic.",
  },
  {
    name: "Markeri nutriționali",
    description: "Fier seric, feritină, vitamina B12, acid folic, zinc.",
    notes: "Utili pentru evaluarea impactului nutrițional al infecției.",
  },
];

export const doctorAlertConditions: DoctorAlertCondition[] = [
  { text: "Simptome persistente (prurit, dureri abdominale, diaree) mai mult de 1–2 săptămâni", urgent: false },
  { text: "Observați viermi în scaunul copilului", urgent: true },
  { text: "Copilul pierde în greutate sau nu crește corespunzător", urgent: false },
  { text: "Simptomele afectează semnificativ somnul, alimentația sau activitățile zilnice", urgent: false },
  { text: "Febră asociată simptomelor digestive", urgent: true },
  { text: "Tratamentul natural nu ameliorează simptomele după 2–3 săptămâni", urgent: false },
  { text: "Copilul este sub 4 ani", urgent: true },
  { text: "Mama care alăptează are simptome sugestive de infecție parazitară", urgent: false },
  { text: "Dureri abdominale intense", urgent: true },
  { text: "Semne de deshidratare (buze uscate, urinare rară, apatie)", urgent: true },
  { text: "Vărsături persistente sau diaree severă", urgent: true },
];
