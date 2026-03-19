import { cn } from "@/lib/utils";

export default function DoctorAlert({
  title = "Când trebuie să mergeți la medic",
  conditions,
  className,
}: {
  title?: string;
  conditions: { text: string; urgent: boolean }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-doctor/30 bg-doctor-bg p-6",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">🩺</span>
        <h3 className="text-lg font-bold text-doctor">{title}</h3>
      </div>
      <ul className="space-y-2">
        {conditions.map((c, i) => (
          <li key={i} className="flex items-start gap-2 text-stone-700">
            <span className={cn("mt-0.5 text-sm", c.urgent ? "text-doctor" : "text-stone-400")}>
              {c.urgent ? "🔴" : "🟡"}
            </span>
            <span className={cn(c.urgent && "font-medium")}>{c.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
