import Link from "next/link";
import { Parasite } from "@/lib/types";

export default function ParasiteCard({ parasite }: { parasite: Parasite }) {
  return (
    <Link
      href={`/paraziti/${parasite.id}`}
      className="group rounded-xl border border-stone-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md"
    >
      <h3 className="text-xl font-bold text-stone-900 group-hover:text-primary">
        {parasite.name}
      </h3>
      <p className="mt-1 text-sm italic text-stone-500">{parasite.latinName}</p>
      <p className="mt-3 text-sm text-stone-600 leading-relaxed">
        {parasite.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {parasite.popularNames.map((name) => (
          <span
            key={name}
            className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-600"
          >
            {name}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm font-medium text-primary">
        Citește mai mult →
      </p>
    </Link>
  );
}
