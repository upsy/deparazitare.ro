import { ParasiteProtocol } from "@/lib/types";
import { remedies } from "@/data/remedies";
import SafetyBadge from "@/components/shared/SafetyBadge";
import EvidenceBadge from "@/components/shared/EvidenceBadge";

const difficultyConfig = {
  "ușor": { label: "Dovezi naturale puternice", className: "bg-emerald-100 text-emerald-800" },
  "moderat": { label: "Dovezi naturale moderate", className: "bg-amber-100 text-amber-800" },
  "dificil": { label: "Dovezi naturale slabe", className: "bg-red-100 text-red-800" },
} as const;

function getRemedy(id: string) {
  return remedies.find((r) => r.id === id);
}

export default function ParasiteProtocolCard({
  protocol,
  audience,
}: {
  protocol: ParasiteProtocol;
  audience?: "copii" | "alaptare";
}) {
  const dc = difficultyConfig[protocol.difficulty];

  return (
    <div id={`protocol-${protocol.parasiteId}`} className="rounded-xl border border-stone-200 bg-white p-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-bold text-stone-900">{protocol.parasiteName}</h3>
          <p className="text-sm text-stone-500 mt-1">{protocol.naturalEfficacy}</p>
        </div>
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${dc.className}`}>
          {dc.label}
        </span>
      </div>

      {/* Phases */}
      <div className="space-y-6 mb-6">
        {protocol.phases.map((phase) => (
          <div key={phase.phase} className="border-l-4 border-primary/30 pl-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {phase.phase}
              </span>
              <div>
                <span className="font-semibold text-stone-800">{phase.name}</span>
                <span className="ml-2 text-sm text-stone-500">{phase.duration}</span>
              </div>
            </div>

            {/* Remedies */}
            <div className="flex flex-wrap gap-2 mb-3">
              {phase.remedies.map((pr) => {
                const remedy = getRemedy(pr.remedyId);
                if (!remedy) return null;

                const safetyLevel = audience === "alaptare"
                  ? remedy.safetyBreastfeeding
                  : remedy.safetyChildren;

                // Skip danger remedies for specific audiences
                if (audience && safetyLevel === "danger") return null;

                return (
                  <div
                    key={pr.remedyId}
                    className={`rounded-lg border p-3 text-sm flex-1 min-w-[200px] ${
                      pr.priority === "primar"
                        ? "border-primary/30 bg-emerald-50/50"
                        : "border-stone-200 bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-medium text-stone-800">
                        {remedy.name}
                        {pr.priority === "primar" && (
                          <span className="ml-1.5 text-xs text-primary font-normal">(primar)</span>
                        )}
                      </span>
                      <SafetyBadge
                        level={safetyLevel}
                        className="text-xs !px-1.5 !py-0"
                      />
                    </div>
                    <p className="text-xs text-stone-600">{pr.notes}</p>
                  </div>
                );
              })}
            </div>

            {/* Steps */}
            <ul className="space-y-1">
              {phase.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="mt-0.5 text-emerald-500 shrink-0">&#10003;</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Repeat cycle */}
      <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 mb-4">
        <p className="font-semibold text-amber-800 text-sm mb-1">
          Repetare: la fiecare {protocol.repeatCycle.interval}, de {protocol.repeatCycle.times} ori
        </p>
        <p className="text-xs text-amber-700">{protocol.repeatCycle.reason}</p>
      </div>

      {/* Conventional note */}
      <div className="rounded-lg bg-sky-50 border border-sky-200 p-4">
        <p className="font-semibold text-sky-800 text-sm mb-1">Când alegeți tratamentul convențional</p>
        <p className="text-xs text-sky-700">{protocol.conventionalNote}</p>
      </div>

      {/* References */}
      {protocol.phases.some((p) =>
        p.remedies.some((pr) => {
          const r = getRemedy(pr.remedyId);
          return r?.references && r.references.length > 0;
        })
      ) && (
        <div className="mt-4 pt-4 border-t border-stone-100">
          <p className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Referințe științifice</p>
          <ul className="space-y-1">
            {protocol.phases
              .flatMap((p) => p.remedies)
              .reduce<{ pmid?: string; text: string }[]>((acc, pr) => {
                const r = getRemedy(pr.remedyId);
                if (r?.references) {
                  for (const ref of r.references) {
                    if (!acc.some((a) => a.pmid === ref.pmid && a.text === ref.text)) {
                      acc.push(ref);
                    }
                  }
                }
                return acc;
              }, [])
              .map((ref, i) => (
                <li key={i} className="text-xs text-stone-500">
                  {ref.pmid ? (
                    <a
                      href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      PMID:{ref.pmid}
                    </a>
                  ) : null}
                  {ref.pmid ? " — " : ""}
                  {ref.text}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
