import { NavItem, PageMeta } from "@/lib/types";

export const mainNav: NavItem[] = [
  { href: "/", label: "Acasă" },
  {
    href: "/paraziti",
    label: "Paraziți",
    children: [
      { href: "/paraziti/oxiuri", label: "Oxiuri" },
      { href: "/paraziti/giardia", label: "Giardia" },
      { href: "/paraziti/ascaris", label: "Ascaris" },
    ],
  },
  { href: "/simptome", label: "Simptome" },
  {
    href: "/tratament",
    label: "Tratament",
    children: [
      { href: "/tratament/protocol-general", label: "Protocol General" },
      { href: "/tratament/copii", label: "Copii 4+" },
      { href: "/tratament/alaptare", label: "Alăptare" },
    ],
  },
  { href: "/siguranta", label: "Siguranță" },
  { href: "/preventie", label: "Prevenție" },
  { href: "/diagnostic", label: "Diagnostic" },
];

export const pages: Record<string, PageMeta> = {
  "/": {
    title: "Deparazitare Naturală — Ghid pentru Părinți",
    description:
      "Ghid complet de deparazitare naturală pentru copii 4+ ani și femei care alăptează. Informații validate despre paraziți intestinali, simptome, tratamente naturale și prevenție.",
    path: "/",
  },
  "/paraziti": {
    title: "Paraziți Intestinali Frecvenți la Copii",
    description:
      "Informații despre cei mai frecvenți paraziți intestinali la copii: oxiuri, giardia și ascaris. Ciclul de viață, transmitere și prevalență.",
    path: "/paraziti",
  },
  "/paraziti/oxiuri": {
    title: "Oxiuri (Enterobius vermicularis) — Ghid Complet",
    description:
      "Tot ce trebuie să știți despre oxiuri la copii: simptome, transmitere, diagnostic și tratament natural. Cel mai frecvent parazit intestinal la copii.",
    path: "/paraziti/oxiuri",
  },
  "/paraziti/giardia": {
    title: "Giardia (Giardia lamblia) — Ghid Complet",
    description:
      "Informații complete despre giardia la copii: simptome, transmitere prin apă contaminată, diagnostic și opțiuni de tratament.",
    path: "/paraziti/giardia",
  },
  "/paraziti/ascaris": {
    title: "Ascaris (Ascaris lumbricoides) — Ghid Complet",
    description:
      "Ghid complet despre ascarizi la copii: ciclul de viață, migrarea pulmonară, simptome, diagnostic și tratament.",
    path: "/paraziti/ascaris",
  },
  "/simptome": {
    title: "Simptome Paraziți Intestinali — Verificator Interactiv",
    description:
      "Verificator interactiv de simptome pentru paraziți intestinali la copii. Bruxism, agitație nocturnă, dureri abdominale și alte semne.",
    path: "/simptome",
  },
  "/tratament": {
    title: "Tratament Natural Antiparazitar — Protocol în 3 Faze",
    description:
      "Protocol de tratament natural antiparazitar în 3 faze: pregătire, tratament activ și refacere. Remedii naturale sigure și eficiente.",
    path: "/tratament",
  },
  "/tratament/protocol-general": {
    title: "Protocol General de Deparazitare Naturală — Cu Bindere",
    description:
      "Protocol unificat de deparazitare naturală în 4 faze, cu bindere pentru eliminarea toxinelor. Cărbune activ, bentonită, zeolite, chlorella, pectină de citrice.",
    path: "/tratament/protocol-general",
  },
  "/tratament/copii": {
    title: "Tratament Natural pentru Copii 4+ Ani",
    description:
      "Ghid specific de deparazitare naturală pentru copii peste 4 ani. Dozaje adaptate, forme prietenoase și remedii sigure.",
    path: "/tratament/copii",
  },
  "/tratament/alaptare": {
    title: "Tratament Natural în Perioada de Alăptare",
    description:
      "Ghid de deparazitare naturală sigură pentru femei care alăptează. Remedii compatibile cu alăptarea și precauții importante.",
    path: "/tratament/alaptare",
  },
  "/siguranta": {
    title: "Siguranța Remediilor Naturale — Tabel Complet",
    description:
      "Tabel complet de siguranță pentru remedii naturale antiparazitare: sigure, cu precauție sau contraindicate pentru copii și alăptare.",
    path: "/siguranta",
  },
  "/preventie": {
    title: "Prevenția Paraziților — Checklist Interactiv",
    description:
      "Checklist interactiv de prevenție a paraziților intestinali: igiena mâinilor, igiena alimentară, igiena casei și deparazitarea animalelor.",
    path: "/preventie",
  },
  "/diagnostic": {
    title: "Diagnostic Paraziți Intestinali — Metode și Analize",
    description:
      "Metode de diagnostic pentru paraziți intestinali: scotch test, examen coproparazitologic, teste de antigen. Când trebuie consultat medicul.",
    path: "/diagnostic",
  },
};
