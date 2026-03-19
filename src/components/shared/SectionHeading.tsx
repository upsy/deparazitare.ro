import { cn } from "@/lib/utils";

export default function SectionHeading({
  children,
  subtitle,
  className,
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-text-light">{subtitle}</p>
      )}
    </div>
  );
}
