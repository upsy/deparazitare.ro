import { Metadata } from "next";
import { remedies } from "@/data/remedies";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import SafetyBadge from "@/components/shared/SafetyBadge";
import DoctorAlert from "@/components/shared/DoctorAlert";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import InfoBox from "@/components/shared/InfoBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratament Natural în Perioada de Alăptare",
  description:
    "Ghid de deparazitare naturală sigură pentru femei care alăptează.",
};

export default function AlaptatePage() {
  const safeRemedies = remedies.filter((r) => r.safetyBreastfeeding === "safe");
  const cautionRemedies = remedies.filter((r) => r.safetyBreastfeeding === "caution");
  const dangerRemedies = remedies.filter((r) => r.safetyBreastfeeding === "danger");

  return (
    <PageContainer>
      <div className="mb-4">
        <Link href="/tratament" className="text-sm text-primary hover:underline">
          ← Tratament General
        </Link>
      </div>

      <SectionHeading subtitle="Remedii compatibile cu alăptarea, precauții importante și când este nevoie de tratament convențional.">
        Ghid pentru Femei care Alăptează
      </SectionHeading>

      <DisclaimerBanner className="mb-8" />

      <InfoBox variant="info" title="Principiu de bază" className="mb-8">
        <p>
          Multe substanțe trec în laptele matern și pot afecta sugarul.
          Siguranța sugarului este prioritară. Prima alegere sunt remediile cu
          profil de siguranță dovedit.
        </p>
      </InfoBox>

      {/* Safe */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-green-700 mb-4">✅ Remedii Sigure în Alăptare</h2>
        <div className="overflow-x-auto">
          <table className="hidden sm:table w-full text-sm">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="py-3 pr-4 text-left font-semibold">Remediu</th>
                <th className="px-3 py-3 text-center font-semibold">Siguranță</th>
                <th className="px-3 py-3 text-left font-semibold">Observații</th>
              </tr>
            </thead>
            <tbody>
              {safeRemedies.map((r) => (
                <tr key={r.id} className="border-b border-stone-100">
                  <td className="py-3 pr-4 font-medium text-stone-800">{r.name}</td>
                  <td className="px-3 py-3 text-center"><SafetyBadge level="safe" /></td>
                  <td className="px-3 py-3 text-stone-600">{r.breastfeedingNotes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden space-y-3">
            {safeRemedies.map((r) => (
              <div key={r.id} className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-stone-800">{r.name}</span>
                  <SafetyBadge level="safe" />
                </div>
                <p className="text-sm text-stone-600">{r.breastfeedingNotes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caution */}
      {cautionRemedies.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-amber-700 mb-4">⚠️ Cu Precauție</h2>
          <div className="space-y-3">
            {cautionRemedies.map((r) => (
              <div key={r.id} className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-stone-800">{r.name}</span>
                  <SafetyBadge level="caution" />
                </div>
                <p className="text-sm text-amber-800">{r.breastfeedingNotes}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Danger */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-red-700 mb-4">❌ Contraindicate în Alăptare</h2>
        <div className="space-y-3">
          {dangerRemedies.map((r) => (
            <div key={r.id} className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-stone-800">{r.name}</span>
                <SafetyBadge level="danger" />
              </div>
              <p className="text-sm text-red-700">{r.breastfeedingNotes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conventional option */}
      <InfoBox variant="info" title="Opțiunea convențională — de știut" className="mb-8">
        <p className="mb-2">
          Deși acest ghid se concentrează pe abordări naturale, medicamentele
          convenționale pot fi mai sigure pentru infecții confirmate:
        </p>
        <ul className="space-y-1">
          <li>
            <strong>Albendazol (doză unică):</strong> OMS îl consideră
            compatibil cu alăptarea — cantitatea care trece în lapte este
            minimă.
          </li>
          <li>
            <strong>Mebendazol:</strong> Compatibil cu alăptarea — absorbție
            sistemică sub 10%. Studiu pe 45 de mame: niciun efect advers la
            sugari.
          </li>
        </ul>
      </InfoBox>

      {/* Pragmatic conclusion */}
      <div className="rounded-xl border-2 border-primary/30 bg-emerald-50 p-6 mb-8">
        <h3 className="font-bold text-primary mb-2">Abordarea pragmatică</h3>
        <p className="text-sm text-stone-700 leading-relaxed">
          Pentru infecții ușoare sau simptome minore, cura naturală (semințe de
          dovleac, cimbru, dietă, probiotice) este o opțiune rezonabilă și
          sigură. Pentru infecții confirmate sau simptome moderate-severe,
          tratamentul convențional sub ghidaj medical poate fi mai sigur decât
          protocoale agresive pe bază de plante.
        </p>
      </div>

      <DoctorAlert
        conditions={[
          { text: "Simptome persistente mai mult de 2 săptămâni", urgent: false },
          { text: "Pierdere în greutate sau oboseală cronică", urgent: false },
          { text: "Diaree severă sau persistentă", urgent: true },
          { text: "Febră asociată simptomelor digestive", urgent: true },
          { text: "Observați viermi în scaun", urgent: true },
          { text: "Sugarul refuză sânul sau prezintă simptome neobișnuite", urgent: true },
        ]}
      />
    </PageContainer>
  );
}
