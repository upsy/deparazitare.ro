import { Metadata } from "next";
import { treatmentPhases, cureRepeatInfo } from "@/data/treatment-protocol";
import { remedies } from "@/data/remedies";
import PhaseCard from "@/components/treatment/PhaseCard";
import RemedyCard from "@/components/treatment/RemedyCard";
import DietSection from "@/components/treatment/DietSection";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import InfoBox from "@/components/shared/InfoBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratament Natural Antiparazitar — Protocol în 3 Faze",
  description:
    "Protocol de tratament natural antiparazitar în 3 faze: pregătire, tratament activ și refacere.",
};

export default function TratamentPage() {
  const mainRemedies = remedies.filter((r) =>
    ["seminte-dovleac", "cimbru", "usturoi", "probiotice"].includes(r.id)
  );

  return (
    <PageContainer>
      <SectionHeading subtitle="Protocol orientativ de cură antiparazitară naturală în 3 faze.">
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

      {/* 3 Phases */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Cele 3 Faze ale Curei</h2>
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
    </PageContainer>
  );
}
