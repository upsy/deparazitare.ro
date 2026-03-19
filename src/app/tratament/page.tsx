import { Metadata } from "next";
import { treatmentPhases, cureRepeatInfo } from "@/data/treatment-protocol";
import { remedies } from "@/data/remedies";
import { parasiteProtocols } from "@/data/parasite-protocols";
import PhaseCard from "@/components/treatment/PhaseCard";
import RemedyCard from "@/components/treatment/RemedyCard";
import DietSection from "@/components/treatment/DietSection";
import ParasiteProtocolCard from "@/components/treatment/ParasiteProtocolCard";
import EliminationInfo from "@/components/treatment/EliminationInfo";
import ShoppingList from "@/components/treatment/ShoppingList";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import InfoBox from "@/components/shared/InfoBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratament Natural Antiparazitar — Protocoale per Parazit",
  description:
    "Protocoale de tratament natural antiparazitar specifice per parazit: oxiuri, giardia, ascaris. Remedii cu dovezi științifice.",
};

const parasiteCards = [
  {
    id: "oxiuri",
    name: "Oxiuri",
    icon: "🪱",
    description: "Cel mai frecvent parazit. Igiena este critică.",
    color: "border-red-200 bg-red-50/50 hover:bg-red-50",
  },
  {
    id: "giardia",
    name: "Giardia",
    icon: "🦠",
    description: "Cele mai puternice dovezi naturale (berberină).",
    color: "border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50",
  },
  {
    id: "ascaris",
    name: "Ascaris",
    icon: "🐛",
    description: "Semințe papaya + dovleac + eliminare.",
    color: "border-amber-200 bg-amber-50/50 hover:bg-amber-50",
  },
];

export default function TratamentPage() {
  const mainRemedies = remedies.filter((r) =>
    ["seminte-dovleac", "cimbru", "usturoi", "probiotice", "berberina", "seminte-papaya"].includes(r.id)
  );

  return (
    <PageContainer>
      <SectionHeading subtitle="Protocoale de tratament natural adaptate fiecărui parazit, bazate pe dovezi științifice.">
        Tratament Natural Antiparazitar
      </SectionHeading>

      <DisclaimerBanner className="mb-8" />

      <div className="flex flex-wrap gap-3 mb-8">
        <Link href="/tratament/copii" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-light">
          Ghid specific copii 4+ →
        </Link>
        <Link href="/tratament/alaptare" className="rounded-lg border border-primary text-primary px-4 py-2.5 text-sm font-medium hover:bg-emerald-50">
          Ghid specific alăptare →
        </Link>
      </div>

      {/* Choose protocol */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">Alege Protocolul Potrivit</h2>
        <p className="text-sm text-stone-500 mb-6">
          Fiecare parazit necesită o abordare diferită. Selectează parazitul pentru a vedea protocolul specific.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {parasiteCards.map((p) => (
            <a
              key={p.id}
              href={`#protocol-${p.id}`}
              className={`rounded-xl border-2 p-5 transition-colors ${p.color}`}
            >
              <span className="text-3xl" aria-hidden="true">{p.icon}</span>
              <h3 className="font-bold text-stone-900 mt-2">{p.name}</h3>
              <p className="text-sm text-stone-600 mt-1">{p.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Generic 3 Phases overview */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Structura Generală — 3 Faze</h2>
        <div className="grid gap-6">
          {treatmentPhases.map((phase) => (
            <PhaseCard key={phase.phase} phase={phase} />
          ))}
        </div>
      </section>

      {/* Why repeat */}
      <InfoBox variant="warning" title={cureRepeatInfo.title} className="mb-12">
        <p className="mb-2">{cureRepeatInfo.explanation}</p>
        <ul className="space-y-1">
          {cureRepeatInfo.recommendations.map((r, i) => (
            <li key={i}>• {r}</li>
          ))}
        </ul>
      </InfoBox>

      {/* Per-parasite protocols */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Protocoale Specifice per Parazit</h2>
        <div className="grid gap-8">
          {parasiteProtocols.map((protocol) => (
            <ParasiteProtocolCard key={protocol.parasiteId} protocol={protocol} />
          ))}
        </div>
      </section>

      {/* Elimination */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Eliminarea Paraziților</h2>
        <EliminationInfo />
      </section>

      {/* Shopping list */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">Lista de Cumpărături</h2>
        <p className="text-sm text-stone-500 mb-6">
          Tot ce aveți nevoie pentru fiecare protocol, cu link-uri directe și prețuri orientative.
        </p>
        <ShoppingList />
      </section>

      {/* Key remedies */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Remedii Naturale Principale</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {mainRemedies.map((r) => (
            <RemedyCard key={r.id} remedy={r} />
          ))}
        </div>
        <p className="mt-4 text-sm text-stone-500">
          <Link href="/siguranta" className="text-primary hover:underline">
            Vezi tabelul complet de siguranță al tuturor remediilor →
          </Link>
        </p>
      </section>

      {/* Diet */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Dieta Antiparazitară</h2>
        <DietSection />
      </section>

      {/* Scientific references */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Referințe Științifice</h2>
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <ul className="space-y-2 text-sm text-stone-600">
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/1096596/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:1096596
              </a>{" "}
              — Gupte 1975: Berberină vs metronidazol la 137 copii cu giardioză (~90% eliminare)
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/4555485/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:4555485
              </a>{" "}
              — Choudhry 1972: Berberină anti-Giardia la copii
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/17472487/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:17472487
              </a>{" "}
              — Okeniyi 2007: RCT semințe papaya, 60 copii (76.7% vs 16.7% eliminare paraziți)
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/30526582/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:30526582
              </a>{" "}
              — Studiu Kenya: 326 copii, 63.9% reducere ouă Ascaris cu semințe papaya
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/1875077/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:1875077
              </a>{" "}
              — Soffar 1991: Efect anti-Giardia al usturoiului la 26 copii
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/16798698/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:16798698
              </a>{" "}
              — Besirbellioglu 2006: S. boulardii adjuvant anti-Giardia (RCT)
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/33149763/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:33149763
              </a>{" "}
              — Review de siguranță a berberinei la copii
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/40004099/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:40004099
              </a>{" "}
              — Efect antihelmitic direct al uleiului de ricin (in vitro)
            </li>
          </ul>
        </div>
      </section>
    </PageContainer>
  );
}
