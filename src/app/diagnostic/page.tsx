import { Metadata } from "next";
import { diagnosisMethods, bloodTests, doctorAlertConditions } from "@/data/diagnosis";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import DoctorAlert from "@/components/shared/DoctorAlert";
import InfoBox from "@/components/shared/InfoBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diagnostic Paraziți Intestinali — Metode și Analize",
  description:
    "Metode de diagnostic pentru paraziți intestinali: scotch test, examen coproparazitologic, teste de antigen.",
};

export default function DiagnosticPage() {
  return (
    <PageContainer>
      <SectionHeading subtitle="Metode de diagnostic, analize recomandate și când trebuie consultat medicul.">
        Diagnostic Paraziți Intestinali
      </SectionHeading>

      <InfoBox variant="warning" title="Nu tratați fără diagnostic" className="mb-8">
        <p>
          Diagnosticul corect este esențial înainte de a începe orice tratament.
          Simptomele infecțiilor parazitare pot fi similare cu alte afecțiuni.
          Consultați medicul pentru analize de laborator.
        </p>
      </InfoBox>

      {/* Per-parasite diagnosis */}
      <section className="mb-12 space-y-8">
        {diagnosisMethods.map((dm) => (
          <div key={dm.parasiteId} className="rounded-xl border border-stone-200 bg-white p-6">
            <h2 className="text-lg font-bold text-stone-900 mb-4">
              <Link href={`/paraziti/${dm.parasiteId}`} className="hover:text-primary">
                {dm.parasiteName}
              </Link>
            </h2>
            <div className="space-y-4">
              {dm.methods.map((m) => (
                <div key={m.name} className="rounded-lg bg-stone-50 p-4">
                  <h3 className="font-semibold text-stone-800">{m.name}</h3>
                  <p className="mt-1 text-sm text-stone-600">{m.description}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs">
                    <span className="text-stone-500">
                      <strong>Sensibilitate:</strong> {m.sensitivity}
                    </span>
                    {m.notes && (
                      <span className="text-stone-500">
                        <strong>Note:</strong> {m.notes}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Blood tests */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Analize de Sânge Complementare</h2>
        <div className="space-y-3">
          {bloodTests.map((t) => (
            <div key={t.name} className="rounded-lg border border-stone-200 bg-white p-4">
              <h3 className="font-semibold text-stone-800">{t.name}</h3>
              <p className="mt-1 text-sm text-stone-600">{t.description}</p>
              {t.notes && (
                <p className="mt-1 text-xs text-stone-500">{t.notes}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Doctor alert */}
      <DoctorAlert conditions={doctorAlertConditions} className="mb-8" />

      <div className="flex flex-wrap gap-3">
        <Link href="/simptome" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-light">
          Verificator de simptome →
        </Link>
        <Link href="/tratament" className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50">
          Opțiuni de tratament →
        </Link>
      </div>
    </PageContainer>
  );
}
