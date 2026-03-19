import { PreventionCategory } from "@/lib/types";

export const preventionCategories: PreventionCategory[] = [
  {
    id: "igiena-mainilor",
    title: "Igiena Mâinilor",
    icon: "🧼",
    items: [
      { id: "im1", text: "Spălat cu apă și săpun minimum 20 de secunde", detail: "Cea mai importantă măsură de prevenție." },
      { id: "im2", text: "Înainte de fiecare masă" },
      { id: "im3", text: "După fiecare utilizare a toaletei" },
      { id: "im4", text: "După joacă afară sau contact cu animale" },
      { id: "im5", text: "Dezinfectantul pe bază de alcool NU este eficient împotriva ouălor de paraziți", detail: "Spălatul cu apă și săpun este superior gelului dezinfectant." },
    ],
  },
  {
    id: "igiena-alimentara",
    title: "Igiena Alimentară",
    icon: "🥗",
    items: [
      { id: "ia1", text: "Spălarea temeinică a fructelor și legumelor sub jet de apă" },
      { id: "ia2", text: "Legumele crude: ținute în apă cu oțet (1 lingură/litru) 10–15 minute" },
      { id: "ia3", text: "Prepararea termică adecvată a cărnii" },
      { id: "ia4", text: "Evitarea consumului de apă din surse nesigure" },
    ],
  },
  {
    id: "igiena-casei",
    title: "Igiena Casei",
    icon: "🏠",
    items: [
      { id: "ic1", text: "Aspirat și șters umed regulat, mai ales dormitoarele" },
      { id: "ic2", text: "Spălat lenjeria de pat la minimum 60°C" },
      { id: "ic3", text: "Dezinfectarea jucăriilor partajate" },
      { id: "ic4", text: "Curățarea și dezinfectarea toaletei zilnic în perioada de infecție" },
      { id: "ic5", text: "Schimbat lenjeria de pat zilnic în perioada de tratament" },
    ],
  },
  {
    id: "igiena-personala",
    title: "Igiena Personală (în timpul tratamentului)",
    icon: "🧒",
    items: [
      { id: "ip1", text: "Tăiat unghiile scurt", detail: "Sub unghii se acumulează ouăle de oxiuri." },
      { id: "ip2", text: "Schimbat chiloții zilnic, dimineața" },
      { id: "ip3", text: "Baia dimineața (nu seara)", detail: "Îndepărtează ouăle depuse pe zona perianală în cursul nopții." },
      { id: "ip4", text: "Evitarea partajării prosoapelor și lenjeriei" },
    ],
  },
  {
    id: "animale",
    title: "Deparazitarea Animalelor",
    icon: "🐾",
    items: [
      { id: "an1", text: "Deparazitare internă regulată (la fiecare 3–6 luni)" },
      { id: "an2", text: "Spălatul mâinilor după contactul cu animale" },
      { id: "an3", text: "Evitarea accesului animalelor în dormitoare" },
      { id: "an4", text: "Oxiurii sunt specifici umani — dar Toxocara și Giardia pot veni de la animale" },
    ],
  },
  {
    id: "colectivitati",
    title: "Prevenție în Colectivități",
    icon: "🏫",
    items: [
      { id: "co1", text: "Informarea grădiniței/școlii în caz de infecție confirmată" },
      { id: "co2", text: "Tratarea simultană a tuturor membrilor familiei" },
      { id: "co3", text: "Verificarea regulată a igienei unghiilor la copii" },
    ],
  },
];
