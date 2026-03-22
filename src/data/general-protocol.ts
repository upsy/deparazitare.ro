import { GeneralProtocol } from "@/lib/types";

export const generalProtocol: GeneralProtocol = {
  id: "protocol-general",
  name: "Protocol General de Deparazitare Naturală",
  description:
    "Protocol unificat de deparazitare naturală cu bindere pentru eliminarea toxinelor. Potrivit pentru persoanele care nu știu exact ce parazit au, sau care vor o abordare generală cu spectru larg.",
  targetAudience: "Adulți și copii peste 4 ani",
  totalDuration: "6–8 săptămâni (o cură completă)",
  phases: [
    {
      phase: 1,
      name: "Pregătire + Deschidere Căi de Eliminare",
      duration: "5–7 zile",
      goal: "Pregătirea organismului, introducerea binderelor la doză mică pentru a deschide căile de eliminare ÎNAINTE de a începe uciderea paraziților. Această fază previne supraîncărcarea cu toxine.",
      remedies: [
        {
          remedyId: "probiotice",
          priority: "primar",
          category: "probiotic",
          notes: "Începeți S. boulardii — susține flora pe toată durata curei",
        },
        {
          remedyId: "carbune-activ",
          priority: "primar",
          category: "binder",
          notes: "Doză mică (1 capsulă/zi) pentru a obișnui organismul",
          timing: "30–60 min înainte de prânz",
        },
        {
          remedyId: "pectina-citrice",
          priority: "adjuvant",
          category: "binder",
          notes: "Alternativă blândă, ideală pentru copii. Se poate combina cu cărbunele activ",
          timing: "30–60 min înainte de cină",
        },
      ],
      steps: [
        "Eliminarea zahărului rafinat și a alimentelor procesate din dietă",
        "Introducerea alimentelor bogate în fibre (morcovi cruzi, legume)",
        "Începerea probioticelor (seara, la 2h distanță de bindere)",
        "Introducerea binderelor la doză mică — 1 capsulă cărbune activ/zi sau 3g pectină/zi",
        "Hidratare adecvată: minim 2 litri apă/zi adulți, 1–1,5 litri copii",
        "Introducerea treptată a alimentelor antiparazitare (usturoi, ceapă, morcovi cruzi)",
      ],
      binderTiming:
        "Binderele se iau la 30–60 min ÎNAINTE de masă. Probioticele se iau SEARA, la minim 2 ore distanță de bindere.",
    },
    {
      phase: 2,
      name: "Tratament Activ Antiparazitar",
      duration: "14–21 zile",
      goal: "Administrarea remediilor antiparazitare cu spectru larg, în paralel cu bindere pentru absorbția toxinelor eliberate de paraziții afectați. Faza cea mai intensă.",
      remedies: [
        {
          remedyId: "seminte-dovleac",
          priority: "primar",
          category: "antiparazitar",
          notes: "100–200g adulți, 50–100g copii, zdrobite cu miere, pe stomacul gol",
          timing: "Dimineața, pe stomacul gol (07:00–08:00)",
        },
        {
          remedyId: "cimbru",
          priority: "primar",
          category: "antiparazitar",
          notes: "Ceai de cimbru — 2–3 căni/zi adulți, 1 cană copii",
          timing: "După masă (10:00, 15:00, 20:00)",
        },
        {
          remedyId: "usturoi",
          priority: "primar",
          category: "antiparazitar",
          notes: "1–2 căței cruzi/zi, zdrobit cu miere sau în supă",
          timing: "La prânz sau cină, cu mâncare",
        },
        {
          remedyId: "carbune-activ",
          priority: "primar",
          category: "binder",
          notes: "Doză crescută: 2–3 capsule/zi adulți, 1–2 copii. CRITIC: departe de remedii",
          timing: "La 2 ore DUPĂ remedii antiparazitare, ÎNTRE mese",
        },
        {
          remedyId: "chlorella",
          priority: "adjuvant",
          category: "binder",
          notes: "Binder complementar blând — 3–5 tablete/zi adulți",
          timing: "Cu mesele (acțiune mai blândă, se poate lua cu mâncare)",
        },
        {
          remedyId: "probiotice",
          priority: "primar",
          category: "probiotic",
          notes: "S. boulardii zilnic — continuare obligatorie",
          timing: "Seara la culcare, la 2h distanță de bindere",
        },
      ],
      steps: [
        "Dimineața pe stomacul gol: semințe de dovleac zdrobite cu miere",
        "După 2–3 ore de la semințe: prima doză de binder (cărbune activ)",
        "Ceai de cimbru între mese, 2–3 căni pe zi",
        "Usturoi crud cu mâncare la prânz/cină",
        "A doua doză de binder la mijlocul după-amiezii (între mese)",
        "Chlorella cu mesele (binder blând complementar)",
        "Probiotice seara, la culcare",
        "Continuarea dietei antiparazitare stricte",
        "Hidratare crescută — minim 2,5 litri/zi adulți",
        "Monitorizarea simptomelor de die-off (oboseală, cefalee, greață)",
      ],
      binderTiming:
        "IMPORTANT: Binderele (cărbune activ) se iau la MINIM 2 ore distanță de remediile antiparazitare și probiotice. Dacă luați semințele la 07:00, binderul se ia cel mai devreme la 09:30–10:00.",
    },
    {
      phase: 3,
      name: "Eliminare + Detox Intensiv",
      duration: "7–14 zile",
      goal: "Eliminarea paraziților morți și a toxinelor reziduale. Doză crescută de bindere, susținere a tranzitului intestinal. Faza cu cel mai mare risc de reacție Herxheimer.",
      remedies: [
        {
          remedyId: "carbune-activ",
          priority: "primar",
          category: "binder",
          notes: "Doză maximă: 3 capsule x 2–3/zi adulți. Se pot combina 2 tipuri de bindere",
          timing: "Pe stomacul gol dimineața + între mese",
        },
        {
          remedyId: "bentonita",
          priority: "adjuvant",
          category: "binder",
          notes: "1 linguriță în 250ml apă, 1–2 ori/zi — binder intensiv complementar",
          timing: "Pe stomacul gol, dimineața sau seara",
        },
        {
          remedyId: "zeolite",
          priority: "adjuvant",
          category: "binder",
          notes: "Alternativă la bentonită — nu se iau simultan",
          timing: "Pe stomacul gol, dimineața",
        },
        {
          remedyId: "probiotice",
          priority: "primar",
          category: "probiotic",
          notes: "Continuare obligatorie",
          timing: "Seara la culcare",
        },
      ],
      steps: [
        "Dimineața pe stomacul gol: binder (cărbune activ + bentonită SAU zeolite)",
        "Agent de eliminare: psyllium zilnic (1–2 linguri în 300ml apă, adulți) sau citrat de magneziu",
        "Adulți: ulei de ricin opțional (1–2 linguri) la 2–3 zile, pentru eliminare mai puternică",
        "Copii: doar psyllium (1 linguriță) sau citrat de magneziu (½ doză adult)",
        "Binder la prânz (între mese) — a doua doză",
        "Probiotice seara, la distanță de bindere",
        "Hidratare intensivă — minim 2,5–3 litri/zi adulți (binderele deshidratează)",
        "Monitorizare scaun — normal: scaun negru de la cărbune, posibile fragmente parazitare",
        "Dacă apar simptome intense de die-off: creșteți doza de binder, nu reduceți-o",
      ],
      binderTiming:
        "În această fază se pot combina 2 bindere (ex: cărbune activ + bentonită). Se iau în momente diferite ale zilei. Probioticele rămân seara, la minim 2h distanță.",
    },
    {
      phase: 4,
      name: "Refacere + Restaurare",
      duration: "14 zile",
      goal: "Restaurarea florei intestinale, refacerea nutrițională, tapering treptat al binderelor. Tranziție spre alimentație normală.",
      remedies: [
        {
          remedyId: "probiotice",
          priority: "primar",
          category: "probiotic",
          notes: "Doză crescută — esențial pentru refacerea florei intestinale",
          timing: "Dimineața și seara",
        },
        {
          remedyId: "zinc",
          priority: "primar",
          category: "suport",
          notes: "15–25 mg/zi adulți, 5–10 mg copii — combate deficitul nutrițional",
        },
        {
          remedyId: "chlorella",
          priority: "adjuvant",
          category: "binder",
          notes: "Binder blând — se poate continua pe termen lung, efect și nutritiv",
          timing: "Cu mesele, 3–5 tablete/zi",
        },
        {
          remedyId: "pectina-citrice",
          priority: "adjuvant",
          category: "binder",
          notes: "Fibră prebiotică + binder blând — susține și refacerea florei",
          timing: "Între mese, 5g/zi",
        },
      ],
      steps: [
        "Probiotice doză crescută — minimum 2 săptămâni după terminarea tratamentului activ",
        "Reducerea treptată a binderelor: treceți de la cărbune activ la chlorella/pectină (mai blânde)",
        "Suplimentare zinc (15–25 mg/zi adulți)",
        "Reintroducerea treptată a alimentelor variate",
        "Continuarea hidratării adecvate",
        "Monitorizarea simptomelor — dacă persistă, consultați medicul",
        "Planificarea repetării curei după 3–4 săptămâni",
      ],
      binderTiming:
        "În faza de refacere, binderele blânde (chlorella, pectină) se pot lua cu mesele. Cărbunele activ se oprește treptat.",
    },
  ],
  herxheimerNote: {
    title: "Reacția Herxheimer (Die-Off) — De Ce Sunt Necesare Binderele",
    explanation:
      "Când paraziții sunt uciși sau expulzați, ei eliberează toxine (endotoxine, metaboliți, fragmente celulare) în tractul intestinal. Aceste toxine pot fi reabsorbite în circulație, provocând o agravare temporară a simptomelor — cunoscută sub numele de reacție Herxheimer sau die-off. Binderele (cărbune activ, bentonită, chlorella etc.) absorb aceste toxine în intestin ÎNAINTE să fie reabsorbite, reducând semnificativ severitatea reacției.",
    symptoms: [
      "Oboseală accentuată, stare generală de rău",
      "Cefalee (dureri de cap)",
      "Greață, balonare, disconfort abdominal",
      "Erupții cutanate sau agravarea celor existente",
      "Iritabilitate, tulburări de somn",
      "Dureri musculare sau articulare",
    ],
    solution:
      "Dacă apar simptome de die-off: NU opriți tratamentul. Creșteți doza de binder, creșteți hidratarea și reduceți temporar doza de remedii antiparazitare. Simptomele durează de obicei 2–5 zile și sunt semn că tratamentul funcționează.",
  },
  repeatCycle: {
    interval: "3–4 săptămâni",
    times: 2,
    reason:
      "Majoritatea remediilor naturale acționează asupra paraziților adulți, dar nu distrug ouăle. Ouăle eclozează după 2–4 săptămâni. Se recomandă repetarea fazelor 2–3 (tratament activ + eliminare) după o pauză de 3–4 săptămâni, cu menținerea binderelor blânde în pauză.",
  },
  conventionalNote:
    "Dacă simptomele nu se ameliorează după 2 cure complete (8–10 săptămâni), sau dacă aveți o infecție confirmată cu parazit specific, consultați medicul pentru tratament convențional. Acest protocol general NU înlocuiește tratamentul medical pentru infecții severe.",
};

export const dailySchedule = [
  { time: "06:30", action: "Binder pe stomacul gol", detail: "Cărbune activ (1–2 capsule) cu 250ml apă", category: "binder" as const },
  { time: "07:00", action: "Remediu antiparazitar", detail: "Semințe de dovleac (100–200g) zdrobite cu miere", category: "antiparazitar" as const },
  { time: "07:30", action: "Mic dejun", detail: "Dietă antiparazitară: ouă, legume, fără zahăr", category: "suport" as const },
  { time: "10:00", action: "Binder + Ceai", detail: "Cărbune activ (1 capsulă) + ceai de cimbru", category: "binder" as const },
  { time: "12:30", action: "Prânz", detail: "Mâncare cu usturoi, oregano, legume. Chlorella (2–3 tablete) cu mâncarea", category: "suport" as const },
  { time: "15:00", action: "Binder între mese", detail: "Pectină de citrice (5g în apă) sau cărbune activ", category: "binder" as const },
  { time: "18:30", action: "Cină", detail: "Supă cu usturoi, legume fierte/crude. Chlorella (2–3 tablete)", category: "suport" as const },
  { time: "20:00", action: "Ceai cimbru", detail: "Ultima cană de ceai de cimbru", category: "antiparazitar" as const },
  { time: "21:30", action: "Probiotice", detail: "S. boulardii — la MINIM 2h după ultimul binder", category: "probiotic" as const },
];
