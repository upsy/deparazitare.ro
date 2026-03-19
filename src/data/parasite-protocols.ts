import { ParasiteProtocol } from "@/lib/types";

export const parasiteProtocols: ParasiteProtocol[] = [
  {
    parasiteId: "oxiuri",
    parasiteName: "Oxiuri (Enterobius vermicularis)",
    difficulty: "dificil",
    naturalEfficacy:
      "Cele mai slabe dovezi naturale dintre cei 3 paraziți. Niciun remediu natural nu are studii clinice convingătoare. Igiena riguroasă este cel mai important factor.",
    conventionalNote:
      "Tratamentul convențional (mebendazol sau pyrantel pamoate — disponibil fără rețetă) este de preferat. Eficacitate >95%, doză unică, bine tolerat. Recomandat mai ales când sunt afectați mai mulți membri ai familiei.",
    phases: [
      {
        phase: 1,
        name: "Igienă intensivă + pregătire",
        duration: "5–7 zile",
        remedies: [
          {
            remedyId: "probiotice",
            priority: "primar",
            notes: "Susțin flora intestinală pe toată durata curei",
          },
        ],
        steps: [
          "Spălatul mâinilor cu apă și săpun, minimum 20 secunde, înainte de mese și după toaletă",
          "Tăiatul unghiilor scurt — sub unghii se acumulează ouăle",
          "Schimbarea lenjeriei de pat zilnic, spălare la 60°C",
          "Baia dimineața (nu seara) — îndepărtează ouăle depuse noaptea pe zona perianală",
          "Începerea dietei antiparazitare (eliminare zahăr, creștere fibre)",
          "Începerea probioticelor",
        ],
      },
      {
        phase: 2,
        name: "Tratament activ + eliminare",
        duration: "3 zile",
        remedies: [
          {
            remedyId: "seminte-dovleac",
            priority: "primar",
            notes: "Paralizează viermii — necesită laxativ la 2–3h",
          },
          {
            remedyId: "ulei-ricin",
            priority: "primar",
            notes: "Agent de eliminare: 1–3 linguri la 2–3 ore după semințe (adulți). Copii: citrat de magneziu",
          },
          {
            remedyId: "cimbru",
            priority: "adjuvant",
            notes: "Ceai de cimbru ca adjuvant antiparazitar",
          },
        ],
        steps: [
          "Dimineața, pe stomacul gol: semințe de dovleac (copii: 50–100g, adulți: 100–200g)",
          "După 2–3 ore: laxativ (ulei de ricin adulți / citrat de magneziu copii / psyllium)",
          "Ceai de cimbru — 2–3 căni pe zi (adulți), 1 cană (copii)",
          "Continuarea igienei riguroase — critic pentru oxiuri",
          "3 zile consecutiv",
        ],
      },
      {
        phase: 3,
        name: "Refacere + monitorizare",
        duration: "7–14 zile",
        remedies: [
          {
            remedyId: "probiotice",
            priority: "primar",
            notes: "Doză crescută pentru refacerea florei",
          },
          {
            remedyId: "zinc",
            priority: "adjuvant",
            notes: "Susține imunitatea în perioada de refacere",
          },
        ],
        steps: [
          "Continuarea probioticelor (doză crescută)",
          "Suplimentare zinc dacă este cazul",
          "Menținerea igienei stricte — oxiurii se reinfectează foarte ușor",
          "Monitorizare simptome (mâncărimea perianală nocturnă)",
        ],
      },
    ],
    repeatCycle: {
      interval: "2–3 săptămâni",
      times: 3,
      reason:
        "Ciclul de viață al oxiurilor este de ~6 săptămâni. Ouăle depuse nu sunt afectate de tratament și eclozează după 2–3 săptămâni. Sunt necesare 2–3 cure consecutive pentru a elimina toate generațiile.",
    },
  },
  {
    parasiteId: "giardia",
    parasiteName: "Giardia (Giardia lamblia)",
    difficulty: "moderat",
    naturalEfficacy:
      "Cele mai puternice dovezi naturale. Berberina are studii clinice cu eficacitate comparabilă metronidazolului. Usturoiul și S. boulardii au dovezi clinice de susținere.",
    conventionalNote:
      "Metronidazolul rămâne standardul, dar berberina este o alternativă naturală cu dovezi clinice. Pentru femei care alăptează, usturoiul + S. boulardii sunt mai sigure decât berberina. Consultați medicul dacă simptomele nu se ameliorează în 10–14 zile.",
    phases: [
      {
        phase: 1,
        name: "Pregătire + susținere floră",
        duration: "5–7 zile",
        remedies: [
          {
            remedyId: "probiotice",
            priority: "primar",
            notes: "Preferabil formulări cu S. boulardii — activitate anti-Giardia directă",
          },
        ],
        steps: [
          "Începerea probioticelor cu S. boulardii",
          "Dietă antiparazitară: eliminare zahăr și carbohidrați simpli",
          "Hidratare adecvată (important — giardia cauzează deshidratare prin diaree)",
          "Introducerea usturoiului în alimentație",
        ],
      },
      {
        phase: 2,
        name: "Tratament activ",
        duration: "10–14 zile",
        remedies: [
          {
            remedyId: "berberina",
            priority: "primar",
            notes: "Prima alegere dacă nu alăptați. Doză: copii 5–10 mg/kg/zi, adulți 200–400 mg x3/zi",
          },
          {
            remedyId: "usturoi",
            priority: "primar",
            notes: "Alternativă principală pentru femei care alăptează",
          },
          {
            remedyId: "probiotice",
            priority: "primar",
            notes: "S. boulardii zilnic — efect anti-Giardia sinergic",
          },
          {
            remedyId: "cimbru",
            priority: "adjuvant",
            notes: "Ceai de cimbru ca susținere antiparazitară",
          },
        ],
        steps: [
          "Berberină conform dozei (sau usturoi dacă alăptați) — 10 zile minimum",
          "S. boulardii zilnic",
          "Ceai de cimbru 2–3 căni/zi",
          "Continuare dietă strictă",
          "Hidratare crescută (minimum 2 litri/zi adulți)",
        ],
      },
      {
        phase: 3,
        name: "Refacere intestinală",
        duration: "14 zile",
        remedies: [
          {
            remedyId: "probiotice",
            priority: "primar",
            notes: "Esențial — giardia afectează sever flora intestinală",
          },
          {
            remedyId: "zinc",
            priority: "adjuvant",
            notes: "Combate deficitul nutrițional cauzat de malabsorbție",
          },
        ],
        steps: [
          "Probiotice doză crescută — minimum 2 săptămâni",
          "Suplimentare zinc (giardia cauzează deficit de zinc prin malabsorbție)",
          "Reintroducerea treptată a lactatelor",
          "Monitorizare scaune — dacă rămân grase/mirositoare, repetați testul",
        ],
      },
    ],
    repeatCycle: {
      interval: "2–3 săptămâni",
      times: 2,
      reason:
        "Chisturile de Giardia sunt rezistente și pot persista. Dacă simptomele reapar sau testul rămâne pozitiv, repetați cura activă. La persistență, consultați medicul pentru tratament convențional.",
    },
  },
  {
    parasiteId: "ascaris",
    parasiteName: "Ascaris (Ascaris lumbricoides)",
    difficulty: "moderat",
    naturalEfficacy:
      "Dovezi moderate. Semințele de papaya au studii clinice solide (RCT). Semințele de dovleac au efect de paralizare. Combinația papaya + dovleac + eliminare este abordarea naturală cea mai susținută de dovezi.",
    conventionalNote:
      "Infecțiile severe (mulți viermi) necesită OBLIGATORIU tratament convențional — risc de ocluzie intestinală sau migrare în căile biliare. Albendazolul (doză unică) este standardul. Abordarea naturală este rezonabilă doar pentru infecții ușoare-moderate.",
    phases: [
      {
        phase: 1,
        name: "Pregătire",
        duration: "5–7 zile",
        remedies: [
          {
            remedyId: "probiotice",
            priority: "primar",
            notes: "Susțin flora intestinală",
          },
        ],
        steps: [
          "Dietă antiparazitară strictă (eliminare zahăr, creștere fibre)",
          "Începerea probioticelor",
          "Hidratare adecvată",
          "Introducerea morcovilor cruzi și a usturoiului în alimentație",
        ],
      },
      {
        phase: 2,
        name: "Tratament activ + eliminare",
        duration: "7 zile",
        remedies: [
          {
            remedyId: "seminte-papaya",
            priority: "primar",
            notes: "Semințe crude zdrobite cu miere, zilnic dimineața pe stomacul gol",
          },
          {
            remedyId: "seminte-dovleac",
            priority: "primar",
            notes: "Paralizează viermii — se ia în aceeași zi cu papaya sau alternativ",
          },
          {
            remedyId: "ulei-ricin",
            priority: "primar",
            notes: "Agent de eliminare la 2–3h după semințe (adulți). Copii: citrat de magneziu",
          },
          {
            remedyId: "cimbru",
            priority: "adjuvant",
            notes: "Ceai de cimbru ca adjuvant",
          },
        ],
        steps: [
          "Dimineața pe stomacul gol: semințe papaya (1–2 linguri) + semințe dovleac (100–200g)",
          "După 2–3 ore: laxativ pentru eliminare (ulei de ricin adulți / citrat de magneziu copii)",
          "Ceai de cimbru 2–3 căni pe zi",
          "7 zile consecutiv",
          "Monitorizați scaunul pentru prezența viermilor eliminați",
        ],
      },
      {
        phase: 3,
        name: "Refacere",
        duration: "14 zile",
        remedies: [
          {
            remedyId: "probiotice",
            priority: "primar",
            notes: "Refacerea florei intestinale",
          },
          {
            remedyId: "zinc",
            priority: "adjuvant",
            notes: "Combate deficitul nutrițional — Ascaris cauzează malabsorbție",
          },
        ],
        steps: [
          "Probiotice doză crescută",
          "Suplimentare zinc și vitamine",
          "Reintroducerea treptată a alimentelor variate",
          "Monitorizare simptome",
        ],
      },
    ],
    repeatCycle: {
      interval: "4 săptămâni",
      times: 3,
      reason:
        "Ciclul de viață al Ascaris este de 2–3 luni (include migrare pulmonară). Ouăle depuse înainte de tratament necesită 4 săptămâni să eclozeze. Sunt necesare 2–3 cure consecutive pentru eliminare completă.",
    },
  },
];
