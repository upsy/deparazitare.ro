import { Parasite } from "@/lib/types";

export const parasites: Parasite[] = [
  {
    id: "oxiuri",
    name: "Oxiuri",
    latinName: "Enterobius vermicularis",
    popularNames: ["oxiuri", "viermi mici", "viermi albi"],
    description:
      "Viermi mici (nematode), de culoare albă, cei mai frecvenți paraziți intestinali la copiii din țările dezvoltate. Femela depune ouă pe zona perianală noaptea, cauzând prurit intens.",
    size: "8–13 mm (femela), 2–5 mm (masculul)",
    lifecycle: [
      "Ouăle sunt ingerate (de pe mâini, jucării, lenjerie)",
      "Larvele eclozează în intestinul subțire",
      "Viermii adulți migrează în intestinul gros (cec, colon)",
      "Noaptea, femela migrează spre zona perianală și depune 10.000–16.000 de ouă",
      "Ouăle devin infecțioase în 2–6 ore",
      "Ciclul complet: aproximativ 2–6 săptămâni",
    ],
    transmission: [
      "Mâini contaminate duse la gură (auto-infecție)",
      "Inhalarea ouălor din praf sau lenjerie",
      "Contact direct cu obiecte contaminate (jucării, clanțe, toalete)",
      "Ouăle supraviețuiesc pe suprafețe până la 2–3 săptămâni",
    ],
    prevalence:
      "Cel mai frecvent parazit la copiii de 4–11 ani. Prevalența în Europa variază între 4% și 34% în colectivități.",
    riskFactors: [
      "Frecventarea colectivităților (grădinițe, școli)",
      "Obiceiul de a roade unghiile sau suge degetele",
      "Igiena deficitară a mâinilor",
      "Dormitul în aceeași cameră/pat cu o persoană infectată",
    ],
  },
  {
    id: "giardia",
    name: "Giardia",
    latinName: "Giardia lamblia / Giardia intestinalis",
    popularNames: ["giardia", "lamblia"],
    description:
      "Protozoar flagelat (organism unicelular) care parazitează intestinul subțire. Există sub două forme: trofozoit (forma activă) și chist (forma de rezistență). Se transmite predominant prin apă contaminată.",
    size: "Trofozoit: 10–20 μm; Chist: 8–12 μm",
    lifecycle: [
      "Chisturile sunt ingerate (prin apă sau alimente contaminate)",
      "În duoden, chisturile eliberează trofozoiți",
      "Trofozoiții se atașează de mucoasa intestinului subțire",
      "Se multiplică prin diviziune binară",
      "O parte se transformă în chisturi, eliminate prin fecale",
      "Chisturile supraviețuiesc săptămâni în mediul extern",
    ],
    transmission: [
      "Apă contaminată (râuri, lacuri, apă de la robinet insuficient tratată)",
      "Alimente contaminate nespălate sau insuficient preparate termic",
      "Contact fecal-oral (mâini contaminate)",
      "Chisturile rezistă la clorul utilizat în concentrații standard",
    ],
    prevalence:
      "Afectează 2–5% din populația țărilor dezvoltate și până la 20–30% în țările în curs de dezvoltare. La copiii din colectivități: 15–20%.",
    riskFactors: [
      "Consum de apă din surse nesigure",
      "Călătorii în zone endemice",
      "Frecventarea colectivităților (grădinițe)",
      "Igiena deficitară a mâinilor și alimentelor",
    ],
  },
  {
    id: "ascaris",
    name: "Ascaris",
    latinName: "Ascaris lumbricoides",
    popularNames: ["ascarizi", "limbric", "viermele rotund mare"],
    description:
      "Cei mai mari nematode intestinali umani. O femelă poate produce până la 200.000 de ouă pe zi. Larvele au un ciclu de migrare pulmonară (ciclul Löffler) înainte de a se maturiza în intestin.",
    size: "Femela: 20–35 cm, Masculul: 15–30 cm",
    lifecycle: [
      "Ouăle sunt ingerate din sol, alimente sau apă contaminată",
      "Larvele eclozează în intestinul subțire",
      "Migrare pulmonară (ciclul Löffler): larvele trec prin ficat → plămâni",
      "În plămâni, larvele sunt tusate și înghițite din nou",
      "Viermii adulți se maturizează în intestinul subțire",
      "Ciclul complet: aproximativ 2–3 luni; viermii adulți trăiesc 1–2 ani",
    ],
    transmission: [
      "Sol contaminat cu fecale umane (ouăle se maturizează în sol în 2–4 săptămâni)",
      "Alimente cultivate în sol contaminat, nespălate corespunzător",
      "Mâini contaminate cu sol",
      "Apă contaminată",
    ],
    prevalence:
      "Aproximativ 800 milioane–1 miliard de persoane la nivel global. În România, prevalența a scăzut semnificativ, dar cazuri sporadice apar în mediul rural.",
    riskFactors: [
      "Consum de legume și fructe nespălate",
      "Contact cu sol contaminat (grădinărit, joacă în curte)",
      "Zone cu infrastructură sanitară deficitară",
    ],
  },
];

export function getParasite(id: string): Parasite | undefined {
  return parasites.find((p) => p.id === id);
}
