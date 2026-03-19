import { Metadata } from "next";
import { remedies } from "@/data/remedies";
import { doctorAlertConditions } from "@/data/diagnosis";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import SafetyBadge from "@/components/shared/SafetyBadge";
import DoctorAlert from "@/components/shared/DoctorAlert";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import InfoBox from "@/components/shared/InfoBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratament Natural pentru Copii 4+ Ani",
  description:
    "Ghid specific de deparazitare naturală pentru copii peste 4 ani. Dozaje adaptate și remedii sigure.",
};

const friendlyForms = [
  { name: "Semințe de dovleac zdrobite în miere sau iaurt", icon: "🎃" },
  { name: "Ceai de cimbru cu miere — călduț sau rece", icon: "🍵" },
  { name: "Usturoi în supă cremă sau piure de cartofi", icon: "🧄" },
  { name: "Morcovi cruzi tăiați în forme atractive", icon: "🥕" },
  { name: "Smoothie: morcov + miere + semințe dovleac + iaurt", icon: "🥤" },
];

export default function CopiiPage() {
  const safeRemedies = remedies.filter((r) => r.safetyChildren === "safe");
  const dangerRemedies = remedies.filter((r) => r.safetyChildren === "danger");

  return (
    <PageContainer>
      <div className="mb-4">
        <Link href="/tratament" className="text-sm text-primary hover:underline">
          ← Tratament General
        </Link>
      </div>

      <SectionHeading subtitle="Dozaje adaptate, forme prietenoase și remedii sigure pentru copii peste 4 ani.">
        Ghid pentru Copii 4+ Ani
      </SectionHeading>

      <DisclaimerBanner className="mb-8" />

      <InfoBox variant="info" title="Principii de dozare" className="mb-8">
        <ul className="space-y-1">
          <li>• Dozele pentru copii sunt orientativ 50% din dozele de adult</li>
          <li>• Se începe întotdeauna cu doza minimă și se crește treptat</li>
          <li>• Se monitorizează toleranța digestivă</li>
        </ul>
      </InfoBox>

      {/* Friendly forms */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Forme Prietenoase de Administrare</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {friendlyForms.map((f) => (
            <div key={f.name} className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white p-4">
              <span className="text-2xl" aria-hidden="true">{f.icon}</span>
              <span className="text-sm text-stone-700">{f.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Safe remedies */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Remedii Sigure pentru Copii 4+</h2>
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
                  <td className="px-3 py-3 text-stone-600">{r.childrenNotes}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {safeRemedies.map((r) => (
              <div key={r.id} className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-stone-800">{r.name}</span>
                  <SafetyBadge level="safe" />
                </div>
                <p className="text-sm text-stone-600">{r.childrenNotes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Danger remedies */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-red-700 mb-4">❌ Contraindicate la Copii</h2>
        <div className="space-y-3">
          {dangerRemedies.map((r) => (
            <div key={r.id} className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-stone-800">{r.name}</span>
                <SafetyBadge level="danger" />
              </div>
              <p className="text-sm text-red-700">{r.childrenNotes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hygiene */}
      <InfoBox variant="tip" title="Igiena — la fel de importantă ca tratamentul" className="mb-8">
        <p className="mb-2">
          Mai ales pentru oxiuri, reinfecția este regulă, nu excepție.
        </p>
        <ul className="space-y-1">
          <li>• Spălatul mâinilor: cu apă și săpun, minimum 20 secunde</li>
          <li>• Tăiatul unghiilor scurt — sub unghii se acumulează ouăle</li>
          <li>• Schimbarea lenjeriei de pat zilnic, spălare la 60°C</li>
          <li>• Baia dimineața (nu seara) — îndepărtează ouăle depuse noaptea</li>
        </ul>
        <p className="mt-2">
          <Link href="/preventie" className="font-medium text-emerald-700 hover:underline">
            Checklist complet de prevenție →
          </Link>
        </p>
      </InfoBox>

      <DoctorAlert
        title="Mergeți la medic dacă"
        conditions={[
          { text: "Simptomele nu se ameliorează după 2–3 săptămâni de cură naturală", urgent: false },
          { text: "Copilul pierde în greutate sau refuză alimentele", urgent: true },
          { text: "Apare febră, vărsături persistente sau diaree severă", urgent: true },
          { text: "Observați viermi în scaun sau vărsătură", urgent: true },
          { text: "Copilul are dureri abdominale intense", urgent: true },
          { text: "Semne de deshidratare (buze uscate, urinare rară, apatie)", urgent: true },
          { text: "Bruxismul se intensifică sau apar probleme dentare", urgent: false },
        ]}
      />
    </PageContainer>
  );
}
