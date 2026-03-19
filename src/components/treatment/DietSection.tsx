import { dietCategories, dietDuration } from "@/data/treatment-protocol";

export default function DietSection() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 mb-6">
        {dietCategories.map((cat) => (
          <div
            key={cat.title}
            className={`rounded-xl border p-5 ${
              cat.type === "recommended"
                ? "border-green-200 bg-green-50/50"
                : "border-red-200 bg-red-50/50"
            }`}
          >
            <h3 className={`font-bold mb-3 ${
              cat.type === "recommended" ? "text-green-700" : "text-red-700"
            }`}>
              {cat.type === "recommended" ? "✅" : "❌"} {cat.title}
            </h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item.name} className="text-sm">
                  <span className="font-medium text-stone-800">{item.name}</span>
                  <span className="text-stone-500"> — {item.reason}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm">
        <p className="font-medium text-sky-800 mb-1">Durata curei dietetice</p>
        <p className="text-sky-700">
          Minimum {dietDuration.minimum}, ideal {dietDuration.ideal}. {dietDuration.reason}.
        </p>
      </div>
    </div>
  );
}
