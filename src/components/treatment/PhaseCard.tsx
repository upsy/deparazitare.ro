import { TreatmentPhase } from "@/lib/types";

export default function PhaseCard({ phase }: { phase: TreatmentPhase }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
          {phase.phase}
        </div>
        <div>
          <h3 className="font-bold text-stone-900">{phase.name}</h3>
          <p className="text-sm text-stone-500">{phase.duration}</p>
        </div>
      </div>
      <p className="text-sm text-primary font-medium mb-4">{phase.goal}</p>
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
