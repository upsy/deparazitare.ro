import { Metadata } from "next";
import { remedies } from "@/data/remedies";
import AudienceToggle from "@/components/treatment/AudienceToggle";
import SafetyBadge from "@/components/shared/SafetyBadge";
import EvidenceBadge from "@/components/shared/EvidenceBadge";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Siguranța Remediilor Naturale — Tabel Complet",
  description:
    "Tabel complet de siguranță pentru remedii naturale antiparazitare.",
};

export default function SigurantaPage() {
  return (
    <PageContainer>
      <SectionHeading subtitle="Tabel complet cu nivelul de siguranță al fiecărui remediu pentru copii și femei care alăptează.">
        Siguranța Remediilor Naturale
      </SectionHeading>

      <DisclaimerBanner className="mb-8" />

      {/* Master table - desktop */}
      <div className="hidden sm:block rounded-xl border border-stone-200 bg-white p-6 mb-12">
        <h2 className="text-lg font-bold text-stone-900 mb-4">Tabel Master — Toate Remediile</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-200">
                <th className="py-3 pr-4 text-left font-semibold">Remediu</th>
                <th className="px-3 py-3 text-left font-semibold">Substanță activă</th>
                <th className="px-3 py-3 text-center font-semibold">Copii 4+</th>
                <th className="px-3 py-3 text-center font-semibold">Alăptare</th>
                <th className="px-3 py-3 text-center font-semibold">Nivel evidență</th>
              </tr>
            </thead>
            <tbody>
              {remedies.map((r) => (
                <tr key={r.id} className="border-b border-stone-100">
                  <td className="py-3 pr-4">
                    <span className="font-medium text-stone-800">{r.name}</span>
                    {r.latinName && (
                      <span className="block text-xs italic text-stone-400">{r.latinName}</span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-stone-600">{r.activeSubstance}</td>
                  <td className="px-3 py-3 text-center">
                    <SafetyBadge level={r.safetyChildren} />
                  </td>
                  <td className="px-3 py-3 text-center">
                    <SafetyBadge level={r.safetyBreastfeeding} />
                  </td>
                  <td className="px-3 py-3 text-center">
                    <EvidenceBadge level={r.evidenceLevel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards for master table */}
      <div className="sm:hidden mb-12">
        <h2 className="text-lg font-bold text-stone-900 mb-4">Toate Remediile</h2>
        <div className="space-y-3">
          {remedies.map((r) => (
            <div key={r.id} className="rounded-lg border border-stone-200 bg-white p-4">
              <p className="font-medium text-stone-800">{r.name}</p>
              {r.latinName && <p className="text-xs italic text-stone-400">{r.latinName}</p>}
              <p className="mt-1 text-xs text-stone-500">{r.activeSubstance}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <SafetyBadge level={r.safetyChildren} label={`Copii: ${r.safetyChildren === "safe" ? "Sigur" : r.safetyChildren === "caution" ? "Precauție" : "Contraindicat"}`} />
                <SafetyBadge level={r.safetyBreastfeeding} label={`Alăptare: ${r.safetyBreastfeeding === "safe" ? "Sigur" : r.safetyBreastfeeding === "caution" ? "Precauție" : "Contraindicat"}`} />
              </div>
              <div className="mt-2">
                <EvidenceBadge level={r.evidenceLevel} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive filter */}
      <section>
        <h2 className="text-xl font-bold text-stone-900 mb-4">Filtrare după Audiență</h2>
        <p className="text-sm text-stone-500 mb-6">
          Selectați pentru a vedea remediile grupate pe nivel de siguranță.
        </p>
        <AudienceToggle />
      </section>
    </PageContainer>
  );
}
