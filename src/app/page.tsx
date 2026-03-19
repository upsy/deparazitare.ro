import HeroSection from "@/components/home/HeroSection";
import NavigationCards from "@/components/home/NavigationCards";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NavigationCards />

      {/* Quick links section */}
      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/simptome", icon: "🔍", label: "Verificator Simptome" },
            { href: "/siguranta", icon: "🛡️", label: "Siguranța Remediilor" },
            { href: "/preventie", icon: "✅", label: "Checklist Prevenție" },
            { href: "/diagnostic", icon: "🩺", label: "Diagnostic" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white p-4 transition-colors hover:border-primary/30 hover:bg-emerald-50/50"
            >
              <span className="text-xl" aria-hidden="true">{link.icon}</span>
              <span className="text-sm font-medium text-stone-700">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6">
        <DisclaimerBanner />
      </div>
    </>
  );
}
