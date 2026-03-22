import { Remedy } from "@/lib/types";

export const remedies: Remedy[] = [
  {
    id: "seminte-dovleac",
    name: "Semințe de dovleac",
    latinName: "Cucurbita pepo",
    activeSubstance: "Cucurbitină",
    mechanism:
      "Cucurbitina paralizează musculatura paraziților intestinali, provocând desprinderea lor de peretele intestinal. Important: paralizează viermii dar NU îi ucide — este nevoie de un laxativ la 2–3 ore după administrare pentru eliminarea lor efectivă.",
    efficacy:
      "Activitate demonstrată in vitro și în studii pe animale. Studiu clinic China (Li et al. 2012, 91 pacienți): 75% rată de eliminare a teniilor (singure), 89% combinat cu extract de areca. Efect mai slab comparativ cu medicamentele convenționale.",
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
    targetParasites: [
      {
        parasiteId: "ascaris",
        efficacy: "moderate",
        notes: "Paralizează viermii; necesită laxativ pentru eliminare efectivă",
      },
      {
        parasiteId: "oxiuri",
        efficacy: "low",
        notes: "Efect limitat; utilizare tradițională, dovezi slabe",
      },
    ],
    references: [
      { pmid: "22910218", text: "Li et al. 2012 — Semințe dovleac: 75% eliminare tenii (singure), 89% combinat cu extract de areca, China, 91 pacienți" },
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
      "Activitate anti-Giardia demonstrată in vitro și într-un studiu clinic (Soffar 1991 — 26 copii: 5 ml extract crud de usturoi în 100 ml apă, de 2 ori pe zi, 3 zile. Simptomele au dispărut în 36 ore la toți cei 26 copii. Vindecare parazitologică completă). Efect antiparazitar complementar.",
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
    targetParasites: [
      {
        parasiteId: "giardia",
        efficacy: "moderate",
        notes: "Studiu clinic Soffar 1991: 26 copii, simptome complet rezolvate",
      },
    ],
    references: [
      { pmid: "1875077", text: "Soffar 1991 — Efect anti-Giardia la copii" },
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
      "Restabilesc flora intestinală, creează un mediu nefavorabil paraziților, susțin imunitatea mucoasei intestinale. S. boulardii are activitate anti-Giardia directă — inhibă aderența trofozoiților la mucoasa intestinală.",
    efficacy:
      "S. boulardii are activitate anti-Giardia demonstrată în studiu clinic randomizat (Besirbellioglu 2006). Studiu experimental (Ribeiro 2021): ~90% reducere a încărcăturii parazitare în giardiază. RCT clinic: 70% pacienți ameliorați cu S. boulardii + metronidazol vs 10% cu placebo. Probioticele susțin recuperarea și previn reinfecția.",
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
      "Pentru Giardia: preferați formulări cu S. boulardii",
    ],
    targetParasites: [
      {
        parasiteId: "giardia",
        efficacy: "moderate",
        notes: "S. boulardii — RCT Besirbellioglu 2006: reducere semnificativă a duratei infecției",
      },
    ],
    references: [
      { pmid: "16798698", text: "Besirbellioglu 2006 — S. boulardii adjuvant anti-Giardia (RCT)" },
      { pmid: "33289232", text: "Ribeiro 2021 — S. boulardii: ~90% reducere încărcătură parazitară în giardiază experimentală" },
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
      "Combate deficitul nutrițional cauzat de paraziți. Susține funcția imunitară. RCT (Long et al. 2007, 707 copii, Mexico): zinc + vitamina A reduce incidența infecției cu Giardia la copii.",
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
    targetParasites: [
      {
        parasiteId: "giardia",
        efficacy: "low",
        notes: "Zinc + vitamina A reduce incidența infecției cu Giardia la copii (RCT, 707 copii)",
      },
    ],
    references: [
      { pmid: "17908741", text: "Long et al. 2007 — RCT 707 copii Mexico: zinc + vitamina A reduce incidența Giardia" },
    ],
  },
  // --- Remedii noi ---
  {
    id: "berberina",
    name: "Berberină",
    activeSubstance: "Berberină (alcaloid vegetal)",
    mechanism:
      "Inhibă metabolismul energetic al trofozoiților de Giardia și perturbă aderența lor la mucoasa intestinală. Acțiune antiparazitară directă demonstrată clinic.",
    efficacy:
      "Cele mai puternice dovezi clinice dintre remediile naturale anti-Giardia. Două studii pe copii: Gupte 1975 (137 copii, ~90% eliminare) și Choudhry 1972. Eficacitate comparabilă cu metronidazolul în unele studii.",
    evidenceLevel: "solid",
    safetyChildren: "caution",
    safetyBreastfeeding: "danger",
    childrenNotes:
      "Cu precauție — sigură la copii peste 4 ani în doze de 5–10 mg/kg/zi, conform review-ului de siguranță (PMID:33149763). PERICULOASĂ la sugari (deplasează bilirubina). Nu se administrează sub 4 ani.",
    breastfeedingNotes:
      "CONTRAINDICAT — trece în laptele matern și poate deplasa bilirubina la sugar, crescând riscul de icter neonatal.",
    usage: [
      "Copii 4+: 5–10 mg/kg/zi, împărțit în 3 doze, timp de 10 zile",
      "Adulți: 200–400 mg de 3 ori pe zi, timp de 10 zile",
      "Se ia cu mâncare pentru a reduce iritația gastrică",
      "Cura: 10 zile (conform protocoalelor din studii clinice)",
    ],
    warnings: [
      "CONTRAINDICAT în alăptare — trece în lapte, deplasează bilirubina",
      "NU se administrează sub 4 ani",
      "Poate interacționa cu medicamente metabolizate hepatic (CYP3A4)",
      "Poate cauza disconfort gastrointestinal (greață, diaree) la doze mari",
    ],
    targetParasites: [
      {
        parasiteId: "giardia",
        efficacy: "high",
        notes: "2 studii clinice pe copii: ~90% rată de eliminare, comparabilă cu metronidazolul",
      },
    ],
    references: [
      { pmid: "1096596", text: "Gupte 1975 — Berberină vs metronidazol la 137 copii cu giardioză" },
      { pmid: "4555485", text: "Choudhry 1972 — Berberină anti-Giardia la copii" },
      { pmid: "33149763", text: "Review de siguranță a berberinei la copii" },
    ],
  },
  {
    id: "seminte-papaya",
    name: "Semințe de papaya",
    latinName: "Carica papaya",
    activeSubstance: "Benzil izotiocianat (BITC)",
    mechanism:
      "BITC (benzil izotiocianat) din semințele crude de papaya are efect antihelmitic direct — perturbă metabolismul energetic al viermilor intestinali, în special Ascaris.",
    efficacy:
      "Dovezi clinice solide: RCT Okeniyi 2007 (60 copii, 76.7% vs 16.7% eliminare paraziți, P=0.0000109). Studiu Kenya (326 copii, 63.9% reducere ouă Ascaris). Semințele TREBUIE să fie crude sau uscate la aer — căldura distruge BITC.",
    evidenceLevel: "solid",
    safetyChildren: "safe",
    safetyBreastfeeding: "caution",
    childrenNotes:
      "Sigur — testat direct în studii clinice randomizate pe copii. Bine tolerat, fără efecte adverse semnificative raportate.",
    breastfeedingNotes:
      "Cu precauție — date insuficiente privind trecerea BITC în laptele matern. Papaya are efect uterotonic în doze mari. Folosiți cu moderație.",
    usage: [
      "Copii 4+: 1 linguriță semințe crude zdrobite, amestecate cu miere, pe stomacul gol",
      "Adulți: 1–2 linguri semințe crude zdrobite, cu miere sau iaurt",
      "Semințele TREBUIE crude sau uscate la aer (căldura distruge substanța activă)",
      "Cura: zilnic timp de 7 zile, repetare după 4 săptămâni",
    ],
    targetParasites: [
      {
        parasiteId: "ascaris",
        efficacy: "high",
        notes: "RCT: 76.7% eliminare la copii; 63.9% reducere ouă în studiu pe 326 copii",
      },
      {
        parasiteId: "giardia",
        efficacy: "moderate",
        notes: "Okeniyi 2007: clearance 71.4–100% pentru mai mulți paraziți, inclusiv E. histolytica și G. lamblia",
      },
    ],
    references: [
      { pmid: "17472487", text: "Okeniyi 2007 — RCT semințe papaya vs placebo, 60 copii" },
      { pmid: "30526582", text: "Studiu Kenya — 326 copii, reducere Ascaris cu semințe papaya" },
    ],
  },
  {
    id: "ulei-ricin",
    name: "Ulei de ricin (agent de eliminare)",
    latinName: "Ricinus communis",
    activeSubstance: "Acid ricinoleic",
    mechanism:
      "Acidul ricinoleic activează receptorii EP3 din mucoasa intestinală, provocând contracții intestinale puternice care ajută la eliminarea viermilor paralizați. Are și efect antihelmitic direct (97.4% mortalitate C. elegans în studiu in vitro).",
    efficacy:
      "Laxativ puternic cu dovezi preliminare de efect antihelmitic direct. Se folosește ca agent de eliminare după semințe de dovleac, nu ca tratament de sine stătător.",
    evidenceLevel: "preliminary",
    safetyChildren: "caution",
    safetyBreastfeeding: "caution",
    childrenNotes:
      "Cu precauție — pentru copii se preferă citrat de magneziu sau psyllium ca alternativă mai blândă. Dacă se folosește: doze mici (1 linguriță), doar sub supraveghere.",
    breastfeedingNotes:
      "Cu precauție — poate cauza crampe abdominale și deshidratare. CONTRAINDICAT în sarcină (efect uterotonic). În alăptare: folosiți cu moderație, asigurați hidratare adecvată.",
    usage: [
      "Adulți: 1–3 linguri la 2–3 ore după administrarea semințelor de dovleac",
      "Copii: se preferă citrat de magneziu (½ doză de adult) sau psyllium",
      "NU se folosește pe stomacul gol fără tratament antiparazitar prealabil",
      "Asigurați hidratare generoasă",
    ],
    warnings: [
      "CONTRAINDICAT în sarcină (efect uterotonic puternic)",
      "Nu se administrează pe termen lung — risc de dependență și deshidratare",
      "Poate cauza crampe abdominale intense",
      "Pentru copii: preferați citrat de magneziu sau fibre (psyllium)",
    ],
    references: [
      { pmid: "40004099", text: "Efect antihelmitic direct al uleiului de ricin (in vitro, C. elegans)" },
    ],
  },
  // --- Bindere (toxin binders) ---
  {
    id: "carbune-activ",
    name: "Cărbune activ",
    activeSubstance: "Carbon activat (adsorbanți microporoși)",
    mechanism:
      "Suprafața extrem de poroasă a cărbunelui activ adsoarbe toxinele, endotoxinele și metaboliții eliberați de paraziți în timpul morții lor (reacția die-off). Toxinele se leagă ireversibil de carbon și sunt eliminate prin scaun, prevenind reabsorbția lor în circulație.",
    efficacy:
      "Adsorbant universal aprobat medical pentru intoxicații acute. Utilizare bine documentată ca antidot (FDA-approved). Capacitate de adsorbție: 1 g cărbune activ poate lega 100–200 mg substanțe toxice. Utilizarea ca binder în protocoale de deparazitare se bazează pe mecanismul farmacologic stabilit, nu pe studii clinice specifice pe paraziți.",
    evidenceLevel: "solid",
    safetyChildren: "caution",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Cu precauție — sigur la doze adecvate (250–500 mg/doză), dar poate cauza constipație. IMPORTANT: se ia la minim 2 ore distanță de orice medicament sau supliment (le inactivează). Nu se administrează pe termen lung (peste 2 săptămâni) fără supraveghere.",
    breastfeedingNotes:
      "Sigur — nu se absoarbe sistemic, rămâne în tractul gastrointestinal. Nu trece în laptele matern.",
    usage: [
      "Adulți: 500–1000 mg (1–2 capsule) de 2–3 ori pe zi, între mese",
      "Copii 4+: 250–500 mg de 1–2 ori pe zi",
      "Se ia la 30–60 min ÎNAINTE de masă SAU la 2 ore DUPĂ mese și suplimente",
      "Se bea multă apă (minim 250 ml la fiecare doză)",
      "Cura: 7–21 zile, pe durata tratamentului antiparazitar și 7 zile după",
    ],
    warnings: [
      "Se ia la MINIM 2 ore distanță de medicamente, suplimente și probiotice — le inactivează",
      "Poate cauza constipație — asigurați hidratare generoasă",
      "Colorează scaunul negru (normal, nu este motiv de îngrijorare)",
      "Nu se administrează pe termen lung fără supraveghere medicală",
    ],
  },
  {
    id: "bentonita",
    name: "Bentonită",
    activeSubstance: "Montmorilonit (argilă smectitică)",
    mechanism:
      "Argila bentonită are o structură stratificată cu sarcină electrică negativă care atrage și leagă toxinele, metalele grele și endotoxinele cu sarcină pozitivă. Formează un gel în tractul intestinal care captează substanțele toxice și le transportă spre eliminare prin scaun.",
    efficacy:
      "Studii in vitro demonstrează capacitate de legare a aflatoxinelor, metalelor grele (plumb, cadmiu) și a unor endotoxine bacteriene. Utilizare tradițională în detoxifiere. Studii pe animale arată reducerea absorbției de aflatoxine cu 80–90%. Date clinice limitate specific pentru detox post-parazitar.",
    evidenceLevel: "preliminary",
    safetyChildren: "caution",
    safetyBreastfeeding: "caution",
    childrenNotes:
      "Cu precauție — unele produse pot conține urme de metale grele. Se folosește doar bentonită de calitate alimentară (food-grade). Nu se recomandă sub 6 ani.",
    breastfeedingNotes:
      "Cu precauție — date insuficiente la doze terapeutice. Nu se absoarbe sistemic, dar calitatea produsului este critică.",
    usage: [
      "Adulți: 1 linguriță (≈3–5 g) dizolvată în 250 ml apă, 1–2 ori pe zi",
      "Se ia pe stomacul gol, cu 30–60 min înainte de masă",
      "Se bea multă apă (risc de constipație)",
      "Cura: 7–14 zile, în faza de eliminare intensivă",
    ],
    warnings: [
      "Se folosește DOAR bentonită de calitate alimentară (food-grade)",
      "Se ia la minim 2 ore distanță de medicamente și suplimente",
      "Poate cauza constipație — hidratare obligatorie",
      "Nu se recomandă pe termen lung (peste 2 săptămâni)",
      "Unele produse pot conține urme de plumb — alegeți mărci testate",
    ],
  },
  {
    id: "zeolite",
    name: "Zeolite (clinoptilolit)",
    activeSubstance: "Clinoptilolit (mineral vulcanic microporos)",
    mechanism:
      "Clinoptilolitul are o structură cristalină de tip cușcă cu pori de dimensiune moleculară care captează selectiv metalele grele, amoniacul și toxinele de dimensiuni mici. Mecanismul de schimb ionic permite legarea toxinelor cu sarcină pozitivă (Pb²⁺, Cd²⁺, NH₄⁺) și eliberarea de ioni benefici (Ca²⁺, Mg²⁺, K⁺).",
    efficacy:
      "EFSA a evaluat clinoptilolitul ca aditiv alimentar. Studii pe animale demonstrează reducerea absorbției de metale grele. Studii clinice preliminare la om: reducerea nivelurilor de metale grele în urină. Mecanism de acțiune bine înțeles la nivel fizico-chimic.",
    evidenceLevel: "preliminary",
    safetyChildren: "caution",
    safetyBreastfeeding: "caution",
    childrenNotes:
      "Cu precauție — date pediatrice limitate. Se folosește doar zeolit micronizat de calitate farmaceutică. Nu sub 6 ani.",
    breastfeedingNotes:
      "Cu precauție — nu se absoarbe sistemic, dar date insuficiente în alăptare.",
    usage: [
      "Adulți: 1–3 g/zi (conform prospectului produsului), de 1–2 ori pe zi",
      "Se ia pe stomacul gol cu 250 ml apă",
      "Se ia la 30–60 min înainte de masă sau la 2 ore după",
      "Cura: 7–14 zile, în faza de eliminare intensivă",
    ],
    warnings: [
      "Se folosește DOAR zeolit micronizat de calitate farmaceutică/alimentară",
      "Se ia la minim 2 ore distanță de medicamente și suplimente",
      "Hidratare adecvată obligatorie",
      "Nu se recomandă pe termen lung fără supraveghere",
    ],
  },
  {
    id: "chlorella",
    name: "Chlorella",
    latinName: "Chlorella vulgaris",
    activeSubstance: "Clorofilă, sporopolenină, fitonutrienți chelatori",
    mechanism:
      "Chlorella leagă metalele grele și toxinele prin mecanisme multiple: sporopolenina din peretele celular are capacitate naturală de chelare, iar clorofila susține detoxifierea hepatică. Stimulează și producția de glutation (antioxidant endogen). Acțiunea este mai blândă decât cărbunele activ, potrivită pentru utilizare prelungită.",
    efficacy:
      "Studii pe animale demonstrează reducerea absorbției de metilmercur și plumb. Studii clinice la om (Nakano 2005): reducerea nivelurilor de dioxine la femei care alăptează. Profil nutrițional bogat (proteine, vitamine B, fier). Utilizare tradițională extensivă în Japonia și Coreea.",
    evidenceLevel: "preliminary",
    safetyChildren: "safe",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Sigur — bine tolerat, disponibil în forme pediatrice (tablete mici, pulbere). Se începe cu doză mică pentru a evita disconfortul digestiv.",
    breastfeedingNotes:
      "Sigur — utilizare tradițională îndelungată. Studiul Nakano 2005 a demonstrat reducerea toxinelor la femei care alăptează, fără efecte adverse asupra sugarului.",
    usage: [
      "Adulți: 3–5 g/zi (6–10 tablete de 500 mg), împărțit în 2–3 prize",
      "Copii 4+: 1–2 g/zi (2–4 tablete de 500 mg)",
      "Se începe cu doză mică (1 g) și se crește treptat pe parcursul a 3–5 zile",
      "Se poate lua cu mese (acțiune mai blândă decât alți binderi)",
      "Cura: 14–30 zile, se poate continua și în faza de refacere",
    ],
    warnings: [
      "Se începe cu doză mică — poate cauza balonare sau greață inițial",
      "Alegeți chlorella cu perete celular spart (broken cell wall) pentru absorbție optimă",
      "Persoanele alergice la iod sau cu probleme tiroidiene — consultați medicul",
    ],
  },
  {
    id: "pectina-citrice",
    name: "Pectină de citrice",
    activeSubstance: "Pectină modificată din citrice (Modified Citrus Pectin — MCP)",
    mechanism:
      "Pectina modificată are molecule suficient de mici pentru a fi absorbite parțial, legând metalele grele și toxinele atât în intestin cât și în circulație. Ca fibră solubilă, formează un gel care captează toxinele în intestin și le elimină prin scaun. Cel mai blând binder, ideal pentru copii și persoane sensibile.",
    efficacy:
      "Studii clinice (Zhao et al. 2008): reducerea plumbului din sânge la copii cu 15–20% în 4 săptămâni cu pectină de citrice. Mecanism de legare a metalelor grele bine documentat. Ca fibră dietetică, are și efect prebiotic benefic.",
    evidenceLevel: "preliminary",
    safetyChildren: "safe",
    safetyBreastfeeding: "safe",
    childrenNotes:
      "Sigur — este în esență o fibră din fructe. Cel mai blând binder, prima alegere pentru copii. Bine tolerat, fără efecte secundare semnificative.",
    breastfeedingNotes:
      "Sigur — fibră dietetică naturală. Nu se absoarbe sistemic în cantități relevante.",
    usage: [
      "Adulți: 5–15 g/zi, dizolvat în apă sau suc, între mese",
      "Copii 4+: 3–5 g/zi, în apă sau suc de fructe",
      "Se ia la 30–60 min înainte de masă pentru efect maxim de legare",
      "Cura: 14–30 zile, se poate continua pe termen lung",
    ],
    warnings: [
      "Poate cauza balonare ușoară la început — se crește doza treptat",
      "Se bea apă suficientă (ca orice fibră solubilă)",
    ],
    references: [
      { pmid: "18448706", text: "Zhao et al. 2008 — Pectină de citrice modificată reduce plumbul din sânge la copii spitalizați" },
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
