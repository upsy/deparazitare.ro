import { ParasiteId } from "@/lib/types";

export interface ShoppingProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: string;
  category: "supliment" | "aliment" | "laxativ";
  links: { store: string; url: string }[];
  alternativeNote?: string;
}

export interface ShoppingBundle {
  protocolId: ParasiteId;
  protocolName: string;
  items: {
    productId: string;
    essential: boolean;
    notes: string;
  }[];
}

export const shoppingProducts: ShoppingProduct[] = [
  // --- Suplimente ---
  {
    id: "berberina-zenyth",
    name: "Berberină 500 mg (Zenyth)",
    description: "60 capsule, extract standardizat 98% berberină HCl",
    price: 75.75,
    quantity: "60 capsule (suficient pt 1 cură de 10 zile)",
    category: "supliment",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/metabolism/diabet/berberine-500-mg-60-capsule-zenyth-p360853",
      },
    ],
  },
  {
    id: "probiotice-hepiflor",
    name: "Hepiflor Saccharomyces Boulardii (Terapia)",
    description: "10 capsule, 5 miliarde UFC/capsulă. Probiotic cu S. boulardii — activitate anti-Giardia",
    price: 28.5,
    quantity: "10 capsule (necesar 2–3 cutii pt 1 cură completă)",
    category: "supliment",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/digestie/probiotice-prebiotice-si-simbiotice/hepiflor-saccharomyces-boulardii-10-capsule-terapia-p375745",
      },
      {
        store: "Dr.Max",
        url: "https://www.drmax.ro/hepiflor-saccharomyces-b-10-capsule-terapia",
      },
    ],
    alternativeNote:
      "Alternativă premium: Jarrow Formulas S. boulardii MOS 90 caps (~217 lei) — suficient pt cura completă",
  },
  {
    id: "zinc-walmark",
    name: "Zinc Forte 15 mg (Walmark)",
    description: "30 tablete, zinc gluconat. 1 tabletă/zi adulți",
    price: 26,
    quantity: "30 tablete (suficient pt 1 lună)",
    category: "supliment",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/imunitate/imunitate-adulti/zinc-forte-15mg-30-tablete-walmark-p302625",
      },
    ],
  },
  {
    id: "zinc-copii",
    name: "Zinc cu Vitamina C pentru copii (BioSunLine)",
    description: "30 comprimate de supt. Zinc 2 mg + Vitamina C + Acid Hialuronic",
    price: 17,
    quantity: "30 comprimate",
    category: "supliment",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/imunitate/imunitate-copii/zinc-cu-vitamina-c-si-acid-hialuronic-pentru-copii-30-comprimate-de-supt-biosunline-p352491",
      },
    ],
  },
  {
    id: "papaya-capsule",
    name: "Papaya-kern capsule (Espara)",
    description: "100 capsule, 300 mg pulbere semințe papaya/capsulă. Vegan, fără gluten",
    price: 105,
    quantity: "100 capsule",
    category: "supliment",
    links: [
      {
        store: "Phyto-Sapiens",
        url: "https://magazin.phyto-sapiens.ro/espara/papaya-kern.html",
      },
    ],
    alternativeNote:
      "Alternativă gratuită: semințele din fructul de papaya proaspăt (din supermarket). Se scot, se usucă la aer, se zdrobesc și se amestecă cu miere.",
  },
  // --- Alimente / Ceaiuri ---
  {
    id: "ceai-cimbru",
    name: "Ceai cimbru iarbă R43 (Fares)",
    description: "50 g ceai vrac. Efect antiinfecțios, carminativ, antihelmitic",
    price: 8,
    quantity: "50 g (suficient pt ~3 săptămâni)",
    category: "aliment",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/dieta-si-wellness/ceaiuri/ceai-cimbru-iarba-r43-50-g-fares-p311356",
      },
    ],
  },
  {
    id: "ulei-dovleac",
    name: "Ulei de dovleac 250 ml (Parapharm)",
    description: "Ulei presat la rece din semințe de dovleac. Efect antihelmitic recunoscut",
    price: 31,
    quantity: "250 ml",
    category: "aliment",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/digestie/paraziti-intestinali/ulei-de-dovleac-250-ml-parapharm-p308143",
      },
      {
        store: "Dr.Max",
        url: "https://www.drmax.ro/ulei-de-dovleac-cu-beta-caroten-250ml-parapharm",
      },
    ],
    alternativeNote:
      "Alternativă: semințe de dovleac crude din supermarket/piață (~15 lei/500g). Mai eficace decât uleiul.",
  },
  {
    id: "seminte-dovleac",
    name: "Semințe de dovleac crude, decojite",
    description: "Din supermarket sau piață. Trebuie să fie CRUDE (neprăjite, nesărate). 100–200g/zi adulți",
    price: 15,
    quantity: "~500 g (suficient pt 1 cură de 3 zile)",
    category: "aliment",
    links: [],
    alternativeNote:
      "Disponibile în orice supermarket (Kaufland, Lidl, Carrefour) sau la piață. Asigurați-vă că sunt crude și decojite.",
  },
  {
    id: "usturoi",
    name: "Usturoi crud",
    description: "Din supermarket/piață. 2–3 căței/zi. Cel mai eficace crud, pe stomacul gol",
    price: 5,
    quantity: "~3 căpățâni (suficient pt 1–2 săptămâni)",
    category: "aliment",
    links: [],
    alternativeNote: "Disponibil în orice supermarket sau piață.",
  },
  {
    id: "miere",
    name: "Miere naturală",
    description: "Pentru amestec cu semințe de dovleac/papaya. Face administrarea mai ușoară, mai ales la copii",
    price: 25,
    quantity: "~250 g",
    category: "aliment",
    links: [],
    alternativeNote: "Disponibilă în supermarket, piață, sau de la apicultori locali.",
  },
  // --- Laxative / Agenți eliminare ---
  {
    id: "ulei-ricin",
    name: "Ulei de ricin 100 ml (Tis Farmaceutic)",
    description: "Laxativ puternic, agent de eliminare. Doar adulți. 1–3 linguri la 2–3h după semințe",
    price: 10,
    quantity: "100 ml (suficient pt 3–5 utilizări)",
    category: "laxativ",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/digestie/constipatie/ulei-de-ricin-100-ml-tis-farmaceutic-p316981",
      },
    ],
  },
  {
    id: "citrat-magneziu",
    name: "Citrat de Magneziu 30 capsule (Zenyth)",
    description: "Laxativ osmotic blând. Sigur pt copii. 110 mg magneziu ionic/capsulă",
    price: 45.5,
    quantity: "30 capsule",
    category: "laxativ",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/automated-translation-disabled-p346353",
      },
    ],
  },
  {
    id: "psyllium",
    name: "Psyllium Husk 100 g (Niksen)",
    description: "Fibre solubile — cea mai blândă opțiune de eliminare. Potrivit copii 6+",
    price: 23,
    quantity: "100 g",
    category: "laxativ",
    links: [
      {
        store: "Farmacia Tei",
        url: "https://comenzi.farmaciatei.ro/vitamine-si-suplimente/digestie/constipatie/psyllium-husk-100-g-niksen-p353237",
      },
      {
        store: "Dr.Max",
        url: "https://www.drmax.ro/tarate-de-psyllium-100g-solaris",
      },
    ],
  },
];

function getProduct(id: string) {
  return shoppingProducts.find((p) => p.id === id);
}

export const shoppingBundles: ShoppingBundle[] = [
  {
    protocolId: "oxiuri",
    protocolName: "Protocol Oxiuri",
    items: [
      { productId: "seminte-dovleac", essential: true, notes: "50–100g/zi copii, 100–200g/zi adulți, 3 zile" },
      { productId: "ulei-ricin", essential: true, notes: "Agent eliminare adulți — la 2–3h după semințe" },
      { productId: "citrat-magneziu", essential: true, notes: "Agent eliminare copii — alternativă la ulei ricin" },
      { productId: "probiotice-hepiflor", essential: true, notes: "Pe toată durata curei + 2–4 săpt. după" },
      { productId: "ceai-cimbru", essential: true, notes: "2–3 căni/zi adulți, 1 cană copii" },
      { productId: "zinc-walmark", essential: false, notes: "Susține imunitatea (adulți)" },
      { productId: "zinc-copii", essential: false, notes: "Alternativă zinc pt copii" },
      { productId: "miere", essential: false, notes: "Amestec cu semințe de dovleac" },
    ],
  },
  {
    protocolId: "giardia",
    protocolName: "Protocol Giardia",
    items: [
      { productId: "berberina-zenyth", essential: true, notes: "Prima alegere (nu în alăptare!). 10 zile" },
      { productId: "probiotice-hepiflor", essential: true, notes: "S. boulardii — efect anti-Giardia sinergic. 2–3 cutii necesare" },
      { productId: "usturoi", essential: true, notes: "Alternativă principală la berberină (sigur în alăptare)" },
      { productId: "ceai-cimbru", essential: true, notes: "Adjuvant antiparazitar" },
      { productId: "zinc-walmark", essential: true, notes: "Combate deficitul de zinc cauzat de malabsorbție" },
      { productId: "zinc-copii", essential: false, notes: "Alternativă zinc pt copii" },
      { productId: "miere", essential: false, notes: "Pt administrare usturoi la copii" },
    ],
  },
  {
    protocolId: "ascaris",
    protocolName: "Protocol Ascaris",
    items: [
      { productId: "papaya-capsule", essential: true, notes: "Sau semințe din papaya proaspăt" },
      { productId: "seminte-dovleac", essential: true, notes: "Paralizează viermii — se ia cu papaya" },
      { productId: "ulei-ricin", essential: true, notes: "Agent eliminare adulți — la 2–3h după semințe" },
      { productId: "citrat-magneziu", essential: true, notes: "Agent eliminare copii — alternativă ulei ricin" },
      { productId: "probiotice-hepiflor", essential: true, notes: "Pe toată durata curei + 2–4 săpt. după" },
      { productId: "ceai-cimbru", essential: true, notes: "Adjuvant antiparazitar" },
      { productId: "zinc-walmark", essential: true, notes: "Combate malabsorbția cauzată de Ascaris" },
      { productId: "zinc-copii", essential: false, notes: "Alternativă zinc pt copii" },
      { productId: "miere", essential: false, notes: "Amestec cu semințe" },
    ],
  },
];

export function getBundleTotal(bundle: ShoppingBundle, essentialOnly = false): number {
  return bundle.items
    .filter((item) => !essentialOnly || item.essential)
    .reduce((total, item) => {
      const product = getProduct(item.productId);
      return total + (product?.price ?? 0);
    }, 0);
}

export function getBundleProducts(bundle: ShoppingBundle) {
  return bundle.items
    .map((item) => ({
      ...item,
      product: getProduct(item.productId)!,
    }))
    .filter((item) => item.product);
}

export const shoppingDisclaimer = {
  text: "Prețurile sunt orientative și pot varia. Verificați prețul actual pe site-ul farmaciei înainte de comandă.",
  lastChecked: "martie 2026",
};
