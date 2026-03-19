import { cn } from "@/lib/utils";

type Variant = "info" | "warning" | "tip";

const variants: Record<Variant, { icon: string; className: string }> = {
  info: {
    icon: "ℹ️",
    className: "border-sky-200 bg-sky-50 text-sky-800",
  },
  warning: {
    icon: "⚠️",
    className: "border-amber-200 bg-amber-50 text-amber-800",
  },
  tip: {
    icon: "💡",
    className: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
};

export default function InfoBox({
  variant = "info",
  title,
  children,
  className,
}: {
  variant?: Variant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const v = variants[variant];
  return (
    <div className={cn("rounded-lg border p-4", v.className, className)}>
      {title && (
        <p className="mb-2 flex items-center gap-2 font-semibold">
          <span aria-hidden="true">{v.icon}</span>
          {title}
        </p>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
