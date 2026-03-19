export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-emerald-200 text-sm font-medium uppercase tracking-wider mb-3">
          Ghid informativ validat
        </p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Deparazitare Naturală
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-100 sm:text-xl">
          Ghid complet pentru părinți cu copii 4+ ani și femei care alăptează.
          Informații despre paraziți intestinali, simptome, tratamente naturale
          sigure și prevenție.
        </p>
        <div className="mt-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-sm text-emerald-100 max-w-xl mx-auto">
          <p>
            ⚠️ <strong>Acest site nu înlocuiește consultul medical.</strong>{" "}
            Consultați un medic înainte de a începe orice tratament.
          </p>
        </div>
      </div>
    </section>
  );
}
