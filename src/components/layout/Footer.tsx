import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-stone-900">
              <span aria-hidden="true">🌿</span> Deparazitare Naturală
            </h3>
            <p className="mt-2 text-sm text-stone-500">
              Ghid informativ despre deparazitarea naturală pentru copii 4+ ani
              și femei care alăptează.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-stone-900">Navigare</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/paraziti" className="text-stone-500 hover:text-primary">Paraziți</Link></li>
              <li><Link href="/simptome" className="text-stone-500 hover:text-primary">Simptome</Link></li>
              <li><Link href="/tratament" className="text-stone-500 hover:text-primary">Tratament</Link></li>
              <li><Link href="/preventie" className="text-stone-500 hover:text-primary">Prevenție</Link></li>
              <li><Link href="/diagnostic" className="text-stone-500 hover:text-primary">Diagnostic</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-stone-900">Ghiduri Specifice</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/tratament/copii" className="text-stone-500 hover:text-primary">Copii 4+ ani</Link></li>
              <li><Link href="/tratament/alaptare" className="text-stone-500 hover:text-primary">Alăptare</Link></li>
              <li><Link href="/siguranta" className="text-stone-500 hover:text-primary">Siguranța Remediilor</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
          <strong>Disclaimer medical:</strong> Informațiile de pe acest site au
          caracter exclusiv informativ și educațional. Nu înlocuiesc consultul
          medical. Consultați întotdeauna un medic înainte de a începe orice
          tratament.
        </div>

        <p className="mt-6 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} deparazitare.ro — Informații validate din surse medicale
        </p>
      </div>
    </footer>
  );
}
