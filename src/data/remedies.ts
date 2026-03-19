import { Remedy } from "@/lib/types";

export const remedies: Remedy[] = [
  {
    id: "seminte-dovleac",
    name: "Semințe de dovleac",
    latinName: "Cucurbita pepo",
    activeSubstance: "Cucurbitină",
    mechanism:
      "Cucurbitina paralizează musculatura paraziților intestinali, provocând desprinderea lor de peretele intestinal și eliminarea prin tranzit intestinal normal.",
    efficacy:
      "Activitate demonstrată in vitro și în studii pe animale. Studii limitate la om, cu rezultate promițătoare, mai ales pentru tenii. Efect mai slab comparativ cu medicamentele convenționale.",
    evidenceLevel: "preliminary",
    safetyChildren: "safe",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Cel mai blând remediu natural antiparazitar. Fără efecte secundare semnificative la dozele obișnuite. Atenție la alergii rare (posibilă reactivitate cu piersică, măr, pepene).",
    breastfeedingNotes:
      "Nu sunt raportate efecte adverse asupra sugarului sau lactației. Prima alegere pentru femei care alăptează.",
    usage: [
      "Copii 4+: 50–100 g semințe crude, decojite, pe stomacul gol, dimineața",
      "Adulți: 100–200 g semințe crude pe stomacul gol",
      "Se pot zdrobi și amesteca cu miere sau iaurt",
      "3 zile consecutiv, apoi un laxativ ușor după 2–3 ore",
      "Cura poate fi repetată după 2 săptămâni",
    ],
  },
  {
    id: "cimbru",
    name: "Cimbru",
    latinName: "Thymus vulgaris",
    activeSubstance: "Timol, eugenol",
    mechanism:
      "Timolul perturbă membrana celulară a paraziților și inhibă dezvoltarea lor. Are și efect carminativ (reduce balonarea).",
    efficacy:
      "Activitate antiparazitară demonstrată in vitro. Studii clinice la om limitate. Efect benefic asupra florei intestinale.",
    evidenceLevel: "preliminary",
    safetyChildren: "safe",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Sigur în cantități culinare sau ca ceai ușor. Extractele concentrate NU sunt recomandate copiilor.",
    breastfeedingNotes:
      "Sigur în cantități culinare și ca ceai moderat (1–2 căni/zi).",
    usage: [
      "Ceai: 1 linguriță cimbru uscat la 200 ml apă clocotită, infuzie 10 min",
      "Copii: ½ cană de 1–2 ori pe zi",
      "Adulți: 1 cană de 2–3 ori pe zi",
      "Ca condiment zilnic în preparate culinare",
      "Cura: 2–3 săptămâni",
    ],
  },
  {
    id: "usturoi",
    name: "Usturoi",
    latinName: "Allium sativum",
    activeSubstance: "Alicină",
    mechanism:
      "Alicina afectează metabolismul energetic al paraziților și poate avea efect direct asupra unor protozoare (Giardia).",
    efficacy:
      "Activitate anti-Giardia demonstrată in vitro. Studii limitate la om. Efect antiparazitar complementar, nu suficient ca monoterapie.",
    evidenceLevel: "preliminary",
    safetyChildren: "safe",
    safetyBreastfeeding: "caution",
    childrenNotes:
      "Sigur în cantități alimentare (1–2 căței pe zi în mâncare). Se poate integra în supă, piure.",
    breastfeedingNotes:
      "Sigur în cantități alimentare moderate. Poate modifica gustul laptelui matern — monitorizați reacția sugarului. Are efect antiplachetă — prudență la risc de hemoragie.",
    usage: [
      "Crud: 1–2 căței zdrobit pe stomacul gol, cu miere",
      "Copii: zdrobit în supă cremă sau piure",
      "Lapte cu usturoi: 2–3 căței fierți în 200 ml lapte, seara, cu miere",
      "Cura: 7–14 zile",
    ],
    warnings: [
      "Poate modifica gustul laptelui matern",
      "Efect antiplachetă — prudență la risc de hemoragie",
    ],
  },
  {
    id: "pelin",
    name: "Pelin",
    latinName: "Artemisia absinthium",
    activeSubstance: "Tujona, absintină",
    mechanism:
      "Tujona afectează sistemul nervos al paraziților, dar are și efecte neurotoxice la om în doze mari.",
    efficacy:
      "Proprietăți antiparazitare bine documentate în utilizarea tradițională, în special împotriva Ascaris.",
    evidenceLevel: "traditional",
    safetyChildren: "danger",
    safetyBreastfeeding: "danger",
    childrenNotes:
      "CONTRAINDICAT — tujona este neurotoxică, mai ales pentru sistemul nervos în dezvoltare.",
    breastfeedingNotes:
      "CONTRAINDICAT — tujona trece foarte probabil în laptele matern; poate afecta sugarul și reduce lactația.",
    usage: [
      "DOAR adulți sănătoși, sub supraveghere medicală",
      "Ceai slab: ½ linguriță pelin uscat la 200 ml apă, infuzie 5 min, max 1 cană/zi",
      "Cure scurte: maximum 2 săptămâni",
    ],
    warnings: [
      "CONTRAINDICAT la copii și femei care alăptează",
      "Neurotoxic în doze mari",
    ],
  },
  {
    id: "cuisoare",
    name: "Cuișoare",
    latinName: "Syzygium aromaticum",
    activeSubstance: "Eugenol",
    mechanism:
      "Eugenolul are proprietăți antiparazitare in vitro. Componentă tradițională a triadei antiparazitare.",
    efficacy:
      "Proprietăți antiparazitare in vitro. Studii clinice limitate la om.",
    evidenceLevel: "traditional",
    safetyChildren: "caution",
    safetyBreastfeeding: "caution",
    childrenNotes:
      "Cu precauție — iritant gastric în doze mari. Cantități culinare sunt sigure.",
    breastfeedingNotes:
      "Cu precauție — date insuficiente la doze terapeutice. Cantități culinare sunt sigure.",
    usage: [
      "½ linguriță pudră în mâncare",
      "Ceai ușor: 2–3 cuișoare la 200 ml apă",
    ],
  },
  {
    id: "nuca-neagra",
    name: "Nucă neagră",
    latinName: "Juglans nigra",
    activeSubstance: "Juglon",
    mechanism:
      "Julgonul are proprietăți antiparazitare. Componentă tradițională a triadei antiparazitare.",
    efficacy:
      "Utilizare tradițională. Studii clinice la om lipsesc.",
    evidenceLevel: "traditional",
    safetyChildren: "caution",
    safetyBreastfeeding: "danger",
    childrenNotes:
      "Cu precauție — doar sub supraveghere medicală strictă.",
    breastfeedingNotes:
      "CONTRAINDICAT — date insuficiente de siguranță, potențial toxic.",
    usage: [
      "Doar sub supraveghere medicală",
      "Nu se recomandă copiilor sau femeilor care alăptează",
    ],
    warnings: [
      "CONTRAINDICAT în alăptare",
      "Potențial toxic",
    ],
  },
  {
    id: "oregano",
    name: "Oregano (condiment)",
    latinName: "Origanum vulgare",
    activeSubstance: "Carvacrol, timol",
    mechanism:
      "Carvacrolul și timolul au activitate antiparazitară, în special anti-Giardia.",
    efficacy:
      "Activitate antiparazitară demonstrată in vitro, în special anti-Giardia.",
    evidenceLevel: "preliminary",
    safetyChildren: "safe",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Sigur ca condiment culinar. Uleiul esențial de oregano este CONTRAINDICAT intern la copii.",
    breastfeedingNotes:
      "Sigur ca condiment culinar. Uleiul esențial este CONTRAINDICAT.",
    usage: [
      "Ca condiment zilnic în preparate culinare",
      "NU se folosește ulei esențial de oregano intern",
    ],
    warnings: [
      "Uleiul esențial de oregano este CONTRAINDICAT intern la copii și în alăptare",
    ],
  },
  {
    id: "ulei-oregano",
    name: "Ulei esențial de oregano",
    latinName: "Origanum vulgare",
    activeSubstance: "Carvacrol concentrat",
    mechanism:
      "Carvacrolul concentrat are activitate antiparazitară puternică.",
    efficacy:
      "Activitate demonstrată in vitro. Concentrația ridicată crește atât eficacitatea, cât și riscurile.",
    evidenceLevel: "preliminary",
    safetyChildren: "danger",
    safetyBreastfeeding: "danger",
    childrenNotes:
      "CONTRAINDICAT intern la copii — risc de toxicitate.",
    breastfeedingNotes:
      "CONTRAINDICAT — date insuficiente de siguranță, poate trece în lapte.",
    usage: [
      "Doar adulți sănătoși, sub supraveghere",
      "NU se administrează copiilor sau femeilor care alăptează",
    ],
    warnings: [
      "CONTRAINDICAT la copii și femei care alăptează",
      "Risc de toxicitate hepatică",
    ],
  },
  {
    id: "probiotice",
    name: "Probiotice",
    activeSubstance: "Lactobacillus, Bifidobacterium, Saccharomyces boulardii",
    mechanism:
      "Restabilesc flora intestinală, creează un mediu nefavorabil paraziților, susțin imunitatea mucoasei intestinale. S. boulardii are activitate anti-Giardia.",
    efficacy:
      "S. boulardii are activitate anti-Giardia demonstrată. Probioticele susțin recuperarea și previn reinfecția.",
    evidenceLevel: "preliminary",
    safetyChildren: "safe",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Sigure — formulări pediatrice disponibile. Se administrează pe toată durata curei.",
    breastfeedingNotes:
      "Sigure — benefice și pentru mamă, și pentru sugar (indirect).",
    usage: [
      "Pe toată durata curei antiparazitare",
      "Continuare 2–4 săptămâni după terminarea curei",
      "Formulări pediatrice pentru copii",
    ],
  },
  {
    id: "ulei-cocos",
    name: "Ulei de cocos",
    activeSubstance: "Acid lauric",
    mechanism:
      "Acidul lauric are proprietăți antimicrobiene.",
    efficacy:
      "Proprietăți antimicrobiene generale. Efect antiparazitar complementar.",
    evidenceLevel: "preliminary",
    safetyChildren: "safe",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Sigur — 1–2 lingurițe pe zi, în mâncare sau direct.",
    breastfeedingNotes:
      "Sigur — 1–2 linguri pe zi.",
    usage: [
      "Copii: 1–2 lingurițe pe zi",
      "Adulți: 1–2 linguri pe zi",
      "În mâncare sau direct",
    ],
  },
  {
    id: "zinc",
    name: "Zinc",
    activeSubstance: "Zinc",
    mechanism:
      "Susține imunitatea, combate deficitul frecvent în infecțiile parazitare.",
    efficacy:
      "Combate deficitul nutrițional cauzat de paraziți. Susține funcția imunitară.",
    evidenceLevel: "solid",
    safetyChildren: "caution",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Sigur în doze adecvate vârstei (5–10 mg/zi). Supradozarea poate fi toxică.",
    breastfeedingNotes:
      "Sigur — 15–25 mg/zi, ideal din alimente (semințe de dovleac, carne roșie, leguminoase).",
    usage: [
      "Copii: 5–10 mg/zi",
      "Adulți: 15–25 mg/zi",
      "Ideal din alimente: semințe de dovleac, carne roșie, leguminoase",
    ],
    warnings: [
      "Supradozarea poate fi toxică — respectați dozele recomandate",
    ],
  },
];

export function getSafeRemedies(audience: "copii" | "alaptare"): Remedy[] {
  return remedies.filter((r) =>
    audience === "copii" ? r.safetyChildren === "safe" : r.safetyBreastfeeding === "safe"
  );
}

export function getCautionRemedies(audience: "copii" | "alaptare"): Remedy[] {
  return remedies.filter((r) =>
    audience === "copii" ? r.safetyChildren === "caution" : r.safetyBreastfeeding === "caution"
  );
}

export function getDangerRemedies(audience: "copii" | "alaptare"): Remedy[] {
  return remedies.filter((r) =>
    audience === "copii" ? r.safetyChildren === "danger" : r.safetyBreastfeeding === "danger"
  );
}
