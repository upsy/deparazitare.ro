import { SafetyLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

const config: Record<SafetyLevel, { label: string; icon: string; className: string }> = {
  safe: {
    label: "Sigur",
    icon: "✅",
    className: "bg-safe-bg text-safe border-safe/20",
  },
  caution: {
    label: "Cu precauție",
    icon: "⚠️",
    className: "bg-caution-bg text-caution border-caution/20",
  },
  danger: {
    label: "Contraindicat",
    icon: "❌",
    className: "bg-danger-bg text-danger border-danger/20",
  },
};

export default function SafetyBadge({
  level,
  label,
  className,
}: {
  level: SafetyLevel;
  label?: string;
  className?: string;
}) {
  const c = config[level];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-sm font-medium",
        c.className,
        className
      )}
    >
      <span aria-hidden="true">{c.icon}</span>
      {label ?? c.label}
    </span>
  );
}
