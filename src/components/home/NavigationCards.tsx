import Link from "next/link";

const cards = [
  {
    href: "/tratament/copii",
    icon: "👶",
    title: "Am un copil 4+ ani",
    description:
      "Ghid specific pentru deparazitarea naturală a copiilor. Remedii sigure, dozaje adaptate și forme prietenoase de administrare.",
    color: "border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/50",
  },
  {
    href: "/tratament/alaptare",
    icon: "🤱",
    title: "Alăptez",
    description:
      "Remedii naturale compatibile cu alăptarea. Ce este sigur, ce trebuie evitat și când este nevoie de tratament convențional.",
    color: "border-sky-200 hover:border-sky-400 hover:bg-sky-50/50",
  },
  {
    href: "/paraziti",
    icon: "📚",
    title: "Vreau să mă informez",
    description:
      "Informații detaliate despre paraziți intestinali frecvenți, simptome, metode de diagnostic și prevenție.",
    color: "border-amber-200 hover:border-amber-400 hover:bg-amber-50/50",
  },
];

export default function NavigationCards() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl mb-8">
        Ce vă interesează?
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`group rounded-xl border-2 bg-white p-6 transition-all ${card.color}`}
          >
            <span className="text-3xl" aria-hidden="true">{card.icon}</span>
            <h3 className="mt-3 text-lg font-semibold text-stone-900 group-hover:text-primary">
              {card.title}
            </h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
