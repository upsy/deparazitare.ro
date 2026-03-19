import { Metadata } from "next";
import { getParasite } from "@/data/parasites";
import { doctorAlertConditions } from "@/data/diagnosis";
import LifecycleSteps from "@/components/parasites/LifecycleSteps";
import SymptomTable from "@/components/parasites/SymptomTable";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import DoctorAlert from "@/components/shared/DoctorAlert";
import InfoBox from "@/components/shared/InfoBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Giardia (Giardia lamblia) — Ghid Complet",
  description:
    "Informații complete despre giardia la copii: simptome, transmitere prin apă contaminată, diagnostic și opțiuni de tratament.",
};

export default function GiardiaPage() {
  const parasite = getParasite("giardia")!;

  return (
    <PageContainer>
      <div className="mb-4">
        <Link href="/paraziti" className="text-sm text-primary hover:underline">
          ← Toți paraziții
        </Link>
      </div>

      <SectionHeading subtitle={parasite.latinName}>
        {parasite.name}
      </SectionHeading>

      <p className="text-lg text-stone-700 leading-relaxed mb-8 max-w-prose">
        {parasite.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {parasite.popularNames.map((name) => (
          <span key={name} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">
            {name}
          </span>
        ))}
        <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">
          {parasite.size}
        </span>
      </div>

      <InfoBox variant="warning" title="Transmitere principală: apa contaminată" className="mb-8">
        <p>Giardia se transmite predominant prin apă contaminată. Chisturile rezistă la clorul utilizat în concentrații standard pentru tratarea apei.</p>
      </InfoBox>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Ciclul de Viață</h2>
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <LifecycleSteps steps={parasite.lifecycle} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Transmitere</h2>
        <ul className="space-y-2">
          {parasite.transmission.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-stone-700">
              <span className="mt-1 text-primary">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Factori de Risc</h2>
        <ul className="space-y-2">
          {parasite.riskFactors.map((r, i) => (
            <li key={i} className="flex items-start gap-2 text-stone-700">
              <span className="mt-1 text-amber-500">⚠</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Simptome Giardia</h2>
        <div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-6">
          <SymptomTable parasiteId="giardia" />
        </div>
      </section>

      <InfoBox variant="info" title="Despre malabsorbție" className="mb-8">
        <p>Giardia cauzează malabsorbție, în special a grăsimilor și vitaminelor liposolubile (A, D, E, K). Scaunele grase, strălucitoare (steatoree) sunt un semn caracteristic.</p>
      </InfoBox>

      <DoctorAlert conditions={doctorAlertConditions} className="mb-8" />

      <div className="flex flex-wrap gap-3">
        <Link href="/tratament/copii" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-light">
          Tratament pentru copii →
        </Link>
        <Link href="/diagnostic" className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50">
          Metode de diagnostic →
        </Link>
      </div>
    </PageContainer>
  );
}
