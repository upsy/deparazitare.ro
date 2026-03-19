export default function LifecycleSteps({ steps }: { steps: string[] }) {
  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            {i + 1}
          </div>
          <p className="pt-0.5 text-sm text-stone-700 leading-relaxed">{step}</p>
        </div>
      ))}
    </div>
  );
}
