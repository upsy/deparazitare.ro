import { cn } from "@/lib/utils";

export default function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12", className)}>
      {children}
    </main>
  );
}
