import { Remedy } from "@/lib/types";
import SafetyBadge from "@/components/shared/SafetyBadge";
import EvidenceBadge from "@/components/shared/EvidenceBadge";

export default function RemedyCard({ remedy }: { remedy: Remedy }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="text-lg font-bold text-stone-900">{remedy.name}</h3>
          {remedy.latinName && (
            <p className="text-sm italic text-stone-500">{remedy.latinName}</p>
          )}
        </div>
        <EvidenceBadge level={remedy.evidenceLevel} />
      </div>

      <p className="text-sm text-stone-600 mb-3">
        <span className="font-medium">Substanță activă:</span> {remedy.activeSubstance}
      </p>

      <p className="text-sm text-stone-600 mb-4">{remedy.mechanism}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <SafetyBadge level={remedy.safetyChildren} label={`Copii: ${remedy.safetyChildren === "safe" ? "Sigur" : remedy.safetyChildren === "caution" ? "Precauție" : "Contraindicat"}`} />
        <SafetyBadge level={remedy.safetyBreastfeeding} label={`Alăptare: ${remedy.safetyBreastfeeding === "safe" ? "Sigur" : remedy.safetyBreastfeeding === "caution" ? "Precauție" : "Contraindicat"}`} />
      </div>

      <div className="mb-3">
        <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
          Mod de utilizare
        </p>
        <ul className="text-sm text-stone-700 space-y-1">
          {remedy.usage.map((u, i) => (
            <li key={i}>• {u}</li>
          ))}
        </ul>
      </div>

      {remedy.warnings && remedy.warnings.length > 0 && (
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 mt-3">
          <p className="text-xs font-medium text-amber-700 mb-1">⚠️ Atenție</p>
          <ul className="text-xs text-amber-700 space-y-0.5">
            {remedy.warnings.map((w, i) => (
              <li key={i}>• {w}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
