import { symptoms } from "@/data/symptoms";
import { ParasiteId } from "@/lib/types";
import { cn } from "@/lib/utils";

const severityLabel: Record<string, { text: string; className: string }> = {
  high: { text: "DA", className: "text-red-700 font-bold bg-red-50" },
  moderate: { text: "Posibil", className: "text-amber-700 font-medium bg-amber-50" },
  low: { text: "Rar", className: "text-stone-500 bg-stone-50" },
  none: { text: "Nu", className: "text-stone-400 bg-stone-50" },
};

export default function SymptomTable({ parasiteId }: { parasiteId?: ParasiteId }) {
  return (
    <div className="overflow-x-auto">
      {/* Desktop table */}
      <table className="hidden sm:table w-full text-sm">
        <thead>
          <tr className="border-b border-stone-200">
            <th className="py-3 pr-4 text-left font-semibold text-stone-900">Simptom</th>
            {!parasiteId && (
              <>
                <th className="px-3 py-3 text-center font-semibold text-stone-900">Oxiuri</th>
                <th className="px-3 py-3 text-center font-semibold text-stone-900">Giardia</th>
                <th className="px-3 py-3 text-center font-semibold text-stone-900">Ascaris</th>
              </>
            )}
            {parasiteId && (
              <>
                <th className="px-3 py-3 text-center font-semibold text-stone-900">Prezent</th>
                <th className="px-3 py-3 text-left font-semibold text-stone-900">Detalii</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {symptoms.map((s) => (
            <tr key={s.id} className="border-b border-stone-100">
              <td className="py-3 pr-4 font-medium text-stone-800">{s.name}</td>
              {!parasiteId && (
                (["oxiuri", "giardia", "ascaris"] as ParasiteId[]).map((pid) => {
                  const data = s.byParasite[pid];
                  const sev = severityLabel[data.severity];
                  return (
                    <td key={pid} className={cn("px-3 py-3 text-center rounded", sev.className)}>
                      {sev.text}
                    </td>
                  );
                })
              )}
              {parasiteId && (
                <>
                  <td className={cn("px-3 py-3 text-center rounded", severityLabel[s.byParasite[parasiteId].severity].className)}>
                    {severityLabel[s.byParasite[parasiteId].severity].text}
                  </td>
                  <td className="px-3 py-3 text-stone-600">{s.byParasite[parasiteId].detail}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {symptoms.map((s) => (
          <div key={s.id} className="rounded-lg border border-stone-200 bg-white p-3">
            <p className="font-medium text-stone-800">{s.name}</p>
            {!parasiteId && (
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                {(["oxiuri", "giardia", "ascaris"] as ParasiteId[]).map((pid) => {
                  const data = s.byParasite[pid];
                  const sev = severityLabel[data.severity];
                  return (
                    <div key={pid} className={cn("rounded px-2 py-1 text-center", sev.className)}>
                      <span className="block text-[10px] text-stone-500 capitalize">{pid}</span>
                      {sev.text}
                    </div>
                  );
                })}
              </div>
            )}
            {parasiteId && (
              <p className="mt-1 text-sm text-stone-600">{s.byParasite[parasiteId].detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
