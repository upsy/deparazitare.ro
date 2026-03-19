import { EvidenceLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

const config: Record<EvidenceLevel, { label: string; className: string }> = {
  solid: {
    label: "Dovezi clinice solide",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  preliminary: {
    label: "Dovezi preliminare",
    className: "bg-sky-50 text-sky-700 border-sky-200",
  },
  traditional: {
    label: "Utilizare tradițională",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  none: {
    label: "Fără dovezi",
    className: "bg-stone-100 text-stone-500 border-stone-200",
  },
};

export default function EvidenceBadge({
  level,
  className,
}: {
  level: EvidenceLevel;
  className?: string;
}) {
  const c = config[level];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        c.className,
        className
      )}
    >
      {c.label}
    </span>
  );
}
