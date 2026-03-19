import { eliminationMethods } from "@/data/treatment-protocol";

export default function EliminationInfo({ forChildren }: { forChildren?: boolean }) {
  const methods = forChildren
    ? eliminationMethods.filter((m) => m.forChildren)
    : eliminationMethods;

  return (
    <div className="rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6">
      <h3 className="font-bold text-amber-900 mb-2">De ce este nevoie de eliminare?</h3>
      <p className="text-sm text-amber-800 mb-4">
        Semințele de dovleac <strong>paralizează</strong> viermii intestinali, dar <strong>nu îi ucid</strong>.
        Fără un agent de eliminare (laxativ), paraziții paralizați se pot recupera și reîncepe să se hrănească.
        Administrarea unui laxativ la 2–3 ore după semințe asigură expulzarea lor definitivă.
      </p>

      <div className="space-y-3">
        {methods.map((method) => (
          <div key={method.id} className="rounded-lg bg-white border border-amber-200 p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-stone-800 text-sm">{method.name}</span>
              {method.forChildren && (
                <span className="text-xs bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">
                  Potrivit copii
                </span>
              )}
              {!method.forChildren && (
                <span className="text-xs bg-stone-100 text-stone-600 rounded-full px-2 py-0.5">
                  Doar adulți
                </span>
              )}
            </div>
            <p className="text-xs text-stone-600 mb-1">{method.mechanism}</p>
            <p className="text-xs text-stone-700 font-medium">{method.usage}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-amber-700 mt-4 italic">
        Protocol: se administrează laxativul la 2–3 ore după semințele de dovleac.
        Asigurați hidratare generoasă pe toată durata zilei.
      </p>
    </div>
  );
}
