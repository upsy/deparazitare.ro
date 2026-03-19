import { Metadata } from "next";
import { symptoms } from "@/data/symptoms";
import SymptomChecker from "@/components/symptoms/SymptomChecker";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import InfoBox from "@/components/shared/InfoBox";

export const metadata: Metadata = {
  title: "Simptome Paraziți Intestinali — Verificator Interactiv",
  description:
    "Verificator interactiv de simptome pentru paraziți intestinali la copii.",
};

export default function SimptomePage() {
  return (
    <PageContainer>
      <SectionHeading subtitle="Răspundeți la întrebări pentru a evalua probabilitatea unei infecții parazitare.">
        Verificator de Simptome
      </SectionHeading>

      <DisclaimerBanner className="mb-8" />

      <SymptomChecker />

      <section className="mt-16">
        <SectionHeading subtitle="Informații detaliate despre cele mai frecvente simptome ale infecțiilor parazitare la copii.">
          Despre Simptome
        </SectionHeading>

        <div className="space-y-6">
          {symptoms.map((s) => (
            <div key={s.id} className="rounded-xl border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-bold text-stone-900 mb-2">{s.name}</h3>
              <p className="text-sm text-stone-600 mb-4 max-w-prose">{s.description}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {(["oxiuri", "giardia", "ascaris"] as const).map((pid) => {
                  const data = s.byParasite[pid];
                  const colors = {
                    high: "border-red-200 bg-red-50",
                    moderate: "border-amber-200 bg-amber-50",
                    low: "border-stone-200 bg-stone-50",
                    none: "border-stone-100 bg-stone-50/50",
                  };
                  return (
                    <div key={pid} className={`rounded-lg border p-3 ${colors[data.severity]}`}>
                      <p className="text-xs font-medium text-stone-500 uppercase mb-1 capitalize">{pid}</p>
                      <p className="text-sm text-stone-700">{data.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <InfoBox variant="info" title="Bruxismul și paraziții" className="mt-8">
        <p>
          Bruxismul (scrâșnitul din dinți) este un simptom multifactorial.
          Infecțiile parazitare reprezintă un factor de risc potențial, dar nu
          sunt cauza unică sau principală. Alți factori (anxietatea, problemele
          dentare, obiceiurile de somn) trebuie evaluați în paralel.
        </p>
      </InfoBox>
    </PageContainer>
  );
}
