import { GeneralProtocolPhase, RemedyCategory } from "@/lib/types";
import { remedies } from "@/data/remedies";

const categoryConfig: Record<RemedyCategory, { label: string; border: string; bg: string; icon: string }> = {
  antiparazitar: { label: "Antiparazitare", border: "border-emerald-200", bg: "bg-emerald-50", icon: "🌿" },
  binder: { label: "Bindere (adsorbante)", border: "border-indigo-200", bg: "bg-indigo-50", icon: "🛡️" },
  probiotic: { label: "Probiotice", border: "border-sky-200", bg: "bg-sky-50", icon: "🦠" },
  suport: { label: "Suport nutrițional", border: "border-stone-200", bg: "bg-stone-50", icon: "💊" },
};

const phaseColors = [
  "bg-emerald-600",
  "bg-amber-600",
  "bg-red-600",
  "bg-sky-600",
];

export default function GeneralPhaseCard({ phase }: { phase: GeneralProtocolPhase }) {
  const grouped = phase.remedies.reduce<Record<RemedyCategory, typeof phase.remedies>>((acc, r) => {
    (acc[r.category] ??= []).push(r);
    return acc;
  }, {} as Record<RemedyCategory, typeof phase.remedies>);

  const categories = (Object.keys(categoryConfig) as RemedyCategory[]).filter(
    (cat) => grouped[cat]?.length > 0
  );

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${phaseColors[phase.phase - 1] ?? "bg-primary"} text-lg font-bold text-white`}>
          {phase.phase}
        </div>
        <div>
          <h3 className="font-bold text-stone-900">{phase.name}</h3>
          <p className="text-sm text-stone-500">{phase.duration}</p>
        </div>
      </div>

      <p className="text-sm text-primary font-medium mb-5">{phase.goal}</p>

      {/* Remedies grouped by category */}
      <div className="space-y-4 mb-5">
        {categories.map((cat) => {
          const config = categoryConfig[cat];
          return (
            <div key={cat} className={`rounded-lg border ${config.border} ${config.bg} p-4`}>
              <h4 className="text-sm font-semibold text-stone-700 mb-2">
                <span aria-hidden="true">{config.icon}</span> {config.label}
              </h4>
              <div className="space-y-2">
                {grouped[cat].map((rem) => {
                  const remedy = remedies.find((r) => r.id === rem.remedyId);
                  return (
                    <div key={rem.remedyId} className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-sm text-stone-800">
                          {remedy?.name ?? rem.remedyId}
                        </span>
                        <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${rem.priority === "primar" ? "bg-emerald-100 text-emerald-800" : "bg-stone-100 text-stone-600"}`}>
                          {rem.priority}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600">{rem.notes}</p>
                      {rem.timing && (
                        <p className="text-xs text-indigo-700 font-medium">
                          ⏱ {rem.timing}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Binder timing note */}
      {phase.binderTiming && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 mb-5">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Timing bindere:</span> {phase.binderTiming}
          </p>
        </div>
      )}

      {/* Steps */}
      <ul className="space-y-2">
        {phase.steps.map((step, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
            <span className="mt-1 text-emerald-500">✓</span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
