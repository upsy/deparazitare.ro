import { TreatmentPhase, DietCategory } from "@/lib/types";

export const treatmentPhases: TreatmentPhase[] = [
  {
    phase: 1,
    name: "Pregătire",
    duration: "5–7 zile",
    goal: "Pregătirea organismului, susținerea tranzitului intestinal, întărirea florei intestinale.",
    steps: [
      "Eliminarea zahărului rafinat și a alimentelor procesate din dietă",
      "Introducerea alimentelor bogate în fibre",
      "Începerea administrării de probiotice",
      "Hidratare adecvată (copii: 1–1,5 litri apă/zi; adulți: 2 litri/zi)",
      "Introducerea treptată a alimentelor antiparazitare (usturoi, morcovi cruzi, ceapă)",
    ],
  },
  {
    phase: 2,
    name: "Tratament Activ",
    duration: "14–21 zile",
    goal: "Administrarea remediilor antiparazitare în mod consecvent.",
    steps: [
      "Administrarea remediului/remediilor alese conform indicațiilor specifice",
      "Continuarea dietei antiparazitare stricte",
      "Continuarea probioticelor zilnic",
      "Menținerea igienei riguroase pentru prevenirea reinfecției",
      "Monitorizarea simptomelor și notarea progresului",
    ],
  },
  {
    phase: 3,
    name: "Refacere",
    duration: "7–14 zile",
    goal: "Restaurarea florei intestinale, refacerea nutrițională.",
    steps: [
      "Continuarea probioticelor (doză crescută)",
      "Reintroducerea treptată a alimentelor variate",
      "Suplimentare cu zinc și vitamine (dacă este cazul)",
      "Monitorizarea simptomelor — dacă persistă, consultați medicul",
      "Planificarea repetării curei după 2–3 săptămâni (pentru a elimina generația nouă din ouă)",
    ],
  },
];

export const cureRepeatInfo = {
  title: "De ce se repetă cura?",
  explanation:
    "Majoritatea remediilor naturale acționează asupra paraziților adulți, dar nu distrug ouăle. Ouăle depuse înainte sau în timpul curei vor ecloza după 2–3 săptămâni, generând o nouă infecție.",
  recommendations: [
    "Se recomandă repetarea fazei de tratament activ după 2–3 săptămâni de pauză",
    "Pentru oxiuri: ciclul de viață este de ~6 săptămâni; ideal 2–3 cure consecutive",
    "Pentru Ascaris: ciclul este mai lung (~2–3 luni); monitorizare pe termen mai lung",
    "Membrii familiei ar trebui tratați simultan pentru a preveni reinfecția încrucișată",
  ],
};

export const dietCategories: DietCategory[] = [
  {
    title: "Alimente recomandate",
    type: "recommended",
    items: [
      { name: "Semințe de dovleac", reason: "Efect antiparazitar direct (cucurbitina)" },
      { name: "Usturoi crud", reason: "Efect antimicrobian și antiparazitar" },
      { name: "Ceapă", reason: "Proprietăți antimicrobiene similare usturoiului" },
      { name: "Morcovi cruzi", reason: "Fibrele ajută la eliminarea mecanică a paraziților" },
      { name: "Afine", reason: "Tanini cu proprietăți antiparazitare" },
      { name: "Alimente bogate în fibre", reason: "Tranzit intestinal regulat" },
      { name: "Alimente fermentate (iaurt, varză murată)", reason: "Susțin flora intestinală sănătoasă" },
      { name: "Hrean", reason: "Stimulează digestia, proprietăți antimicrobiene" },
    ],
  },
  {
    title: "Alimente de evitat",
    type: "avoid",
    items: [
      { name: "Zahăr rafinat", reason: "Favorizează dezvoltarea paraziților" },
      { name: "Carbohidrați simpli (pâine albă, paste, dulciuri)", reason: "Efect similar zahărului" },
      { name: "Produse procesate", reason: "Aditivi care pot irita tractul digestiv" },
      { name: "Lactate excesive", reason: "Pot crește producția de mucus intestinal" },
    ],
  },
];

export const dietDuration = {
  minimum: "2–3 săptămâni",
  ideal: "4 săptămâni",
  reason: "Acoperirea unui ciclu complet de viață al paraziților (ouă → larvă → adult)",
};
