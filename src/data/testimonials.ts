import { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "byron-giardia",
    type: "clinical",
    source: "Byron Herbalist (clinică naturopată, Australia)",
    sourceUrl: "https://www.byronherbalist.com.au/parasite-infections/giardia-infections/",
    parasites: ["giardia"],
    remediesUsed: ["usturoi", "probiotice", "zinc"],
    summary: "Giardie cronică eliminată în 8 săptămâni cu usturoi, probiotice și zinc",
    details:
      "Pacient de 34 de ani cu giardie cronică. Tratament: extract de usturoi + probiotice (S. boulardii) + suplimentare zinc. Simptomele s-au ameliorat la 4 săptămâni, Giardia eliminată complet la 8 săptămâni, confirmat prin test PCR.",
    outcome: "Vindecare completă confirmată PCR la 8 săptămâni",
    duration: "8 săptămâni",
    year: 2019,
  },
  {
    id: "alexandra-suprainfestare",
    type: "personal",
    source: "Caietul Alexandrei (blog parenting, România)",
    sourceUrl: "https://caietulalexandrei.ro/sanatate/cum-m-am-vindecat-de-suprainfestare-cu-oxiuri-limbrici-si-giardia-cu-seminte-de-dovleac/",
    parasites: ["oxiuri", "ascaris", "giardia"],
    remediesUsed: ["seminte-dovleac", "cimbru"],
    summary: "Copil 8 ani vindecat de suprainfestare masivă (oxiuri + limbrici + giardia) cu semințe de dovleac și cimbru",
    details:
      "Copil de 8 ani cu suprainfestare masivă: oxiuri, limbrici și giardia. Tratament natural: semințe crude de dovleac + ceai de cimbru, regim 3 săptămâni on / 1 săptămână off, timp de 4 luni. Vindecare completă, revenire la dezvoltare normală.",
    outcome: "Vindecare completă, revenire la dezvoltare normală",
    duration: "4 luni (cicluri 3 săpt. on / 1 săpt. off)",
    year: 2020,
  },
  {
    id: "soffar-1991-relatare",
    type: "clinical",
    source: "Studiu clinic Soffar & Mokhtar 1991 (PubMed)",
    parasites: ["giardia"],
    remediesUsed: ["usturoi"],
    summary: "26 copii cu Giardia vindecați cu extract de usturoi în 3 zile",
    details:
      "Studiu clinic pe 26 de copii cu giardiază simptomatică. Tratament: 5 ml extract crud de usturoi în 100 ml apă, administrat de 2 ori pe zi, timp de 3 zile. Simptomele (diaree, balonare, crampe) au dispărut în 36 de ore la toți pacienții. Vindecare parazitologică completă confirmată la examinarea scaunului.",
    outcome: "Simptome dispărute în 36 ore, vindecare parazitologică completă",
    duration: "3 zile",
    year: 1991,
  },
  {
    id: "okeniyi-2007-relatare",
    type: "clinical",
    source: "Studiu clinic RCT Okeniyi et al. 2007 (PubMed)",
    parasites: ["ascaris"],
    remediesUsed: ["seminte-papaya"],
    summary: "60 copii din Nigeria: 76.7% eliminare completă paraziți cu semințe de papaya și miere",
    details:
      "Studiu clinic randomizat controlat pe 60 de copii cu paraziți intestinali din Nigeria. Grup tratament: semințe uscate de papaya amestecate cu miere, administrate zilnic timp de 7 zile. Rezultat: 76.7% eliminare completă a paraziților (vs 16.7% placebo). Clearance 71.4–100% pentru mai mulți paraziți. Fără efecte adverse semnificative raportate.",
    outcome: "76.7% eliminare completă, fără efecte adverse",
    duration: "7 zile",
    year: 2007,
  },
  {
    id: "bolivia-gse-giardia",
    type: "personal",
    source: "Ben Greenfield (relatare Bolivia)",
    sourceUrl: "https://bengreenfieldlife.com/article/biohacking-articles/natural-giardia-treatment/",
    parasites: ["giardia"],
    remediesUsed: [],
    summary: "Giardia persistentă după 11 luni de tratament convențional, ameliorată cu extract de semințe de grapefruit",
    details:
      "Pacient care a contractat Giardia în Bolivia. După 11 luni de tratament convențional spitalicesc eșuat, a învățat de la misionari locali despre extractul de semințe de grapefruit (GSE). Acesta a fost singurul remediu care a funcționat. Notă: GSE nu face parte din lista noastră de remedii recomandate — controversat științific, unele produse comerciale contaminate cu compuși sintetici.",
    outcome: "Ameliorare după eșecul tratamentului convențional de 11 luni",
    duration: "Nespecificat",
    disclaimer:
      "GSE (extract de semințe de grapefruit) nu face parte din remediile recomandate pe acest site. Relatarea este inclusă doar ca experiență documentată. Unele produse GSE comerciale au fost găsite contaminate cu compuși sintetici antimicrobieni.",
  },
];
