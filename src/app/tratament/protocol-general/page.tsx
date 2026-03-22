import { Metadata } from "next";
import { generalProtocol, dailySchedule } from "@/data/general-protocol";
import { remedies } from "@/data/remedies";
import GeneralPhaseCard from "@/components/treatment/GeneralPhaseCard";
import GeneralShoppingList from "@/components/treatment/GeneralShoppingList";
import RemedyCard from "@/components/treatment/RemedyCard";
import DietSection from "@/components/treatment/DietSection";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";
import InfoBox from "@/components/shared/InfoBox";
import DoctorAlert from "@/components/shared/DoctorAlert";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protocol General de Deparazitare Naturală — Cu Bindere",
  description:
    "Protocol unificat de deparazitare naturală în 4 faze, cu bindere pentru eliminarea toxinelor. Cărbune activ, bentonită, zeolite, chlorella, pectină de citrice.",
};

const binderIds = ["carbune-activ", "bentonita", "zeolite", "chlorella", "pectina-citrice"];
const mainRemedyIds = ["seminte-dovleac", "cimbru", "usturoi", "probiotice"];

const categoryColors: Record<string, string> = {
  binder: "bg-indigo-100 text-indigo-800 border-indigo-200",
  antiparazitar: "bg-emerald-100 text-emerald-800 border-emerald-200",
  suport: "bg-stone-100 text-stone-700 border-stone-200",
  probiotic: "bg-sky-100 text-sky-800 border-sky-200",
};

export default function ProtocolGeneralPage() {
  const binderRemedies = remedies.filter((r) => binderIds.includes(r.id));
  const mainRemedies = remedies.filter((r) => mainRemedyIds.includes(r.id));

  return (
    <PageContainer>
      <div className="mb-4">
        <Link href="/tratament" className="text-sm text-primary hover:underline">
          ← Tratament
        </Link>
      </div>

      <SectionHeading subtitle="Protocol unificat în 4 faze cu bindere pentru eliminarea toxinelor — potrivit când nu știi exact ce parazit ai.">
        Protocol General de Deparazitare Naturală
      </SectionHeading>

      <DisclaimerBanner className="mb-8" />

      {/* De ce un protocol general? */}
      <section className="mb-12">
        <InfoBox variant="info" title="De ce un protocol general?">
          <p className="mb-2">
            Acest protocol este conceput pentru persoanele care:
          </p>
          <ul className="space-y-1">
            <li>• Nu știu exact ce parazit au (nu au un diagnostic specific)</li>
            <li>• Vor o abordare generală, cu spectru larg, care acoperă mai mulți paraziți</li>
            <li>• Vor să integreze <strong>bindere</strong> în protocol pentru a reduce efectele secundare ale eliminării paraziților</li>
          </ul>
          <p className="mt-2 text-sm">
            Dacă aveți un diagnostic specific, consultați{" "}
            <Link href="/tratament" className="text-primary font-medium hover:underline">
              protocoalele per parazit →
            </Link>
          </p>
        </InfoBox>
      </section>

      {/* Ce sunt binderele */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Ce Sunt Binderele și De Ce Sunt Necesare?</h2>

        <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-6 mb-6">
          <h3 className="font-bold text-indigo-900 mb-2">{generalProtocol.herxheimerNote.title}</h3>
          <p className="text-sm text-indigo-800 mb-3">
            {generalProtocol.herxheimerNote.explanation}
          </p>
          <h4 className="text-sm font-semibold text-indigo-900 mb-2">Simptome posibile de die-off:</h4>
          <ul className="grid gap-1 sm:grid-cols-2 mb-3">
            {generalProtocol.herxheimerNote.symptoms.map((s, i) => (
              <li key={i} className="text-sm text-indigo-700 flex items-start gap-1.5">
                <span className="text-amber-500 mt-0.5">⚠</span> {s}
              </li>
            ))}
          </ul>
          <div className="rounded-lg bg-indigo-100 p-3">
            <p className="text-sm text-indigo-900 font-medium">
              {generalProtocol.herxheimerNote.solution}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <h3 className="font-bold text-stone-900 mb-3">Cum funcționează binderele?</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-red-50 border border-red-100">
              <span className="text-2xl" aria-hidden="true">☠️</span>
              <p className="text-sm font-medium text-stone-800 mt-2">Paraziții mor</p>
              <p className="text-xs text-stone-600 mt-1">Eliberează toxine, endotoxine și metaboliți în intestin</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-indigo-50 border border-indigo-100">
              <span className="text-2xl" aria-hidden="true">🛡️</span>
              <p className="text-sm font-medium text-stone-800 mt-2">Binderele le captează</p>
              <p className="text-xs text-stone-600 mt-1">Adsorbția toxinelor pe suprafața binderelor previne reabsorbția lor în sânge</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-emerald-50 border border-emerald-100">
              <span className="text-2xl" aria-hidden="true">✅</span>
              <p className="text-sm font-medium text-stone-800 mt-2">Eliminare prin scaun</p>
              <p className="text-xs text-stone-600 mt-1">Toxinele legate de binder sunt eliminate natural, fără a fi reabsorbite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reguli timing */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Reguli de Timing — Când Se Ia Fiecare</h2>

        <InfoBox variant="warning" title="Regula de aur a binderelor" className="mb-6">
          <p>
            Binderele (cărbune activ, bentonită, zeolite) se iau la <strong>MINIM 2 ore distanță</strong> de
            medicamente, suplimente, probiotice și remedii antiparazitare. Dacă sunt luate prea aproape,
            <strong> inactivează</strong> remediile — le absorb înainte să-și facă efectul.
          </p>
          <p className="mt-1">
            Excepție: <strong>Chlorella</strong> și <strong>pectina de citrice</strong> sunt bindere blânde care se pot lua cu mâncarea.
          </p>
        </InfoBox>

        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <h3 className="font-bold text-stone-900 mb-4">Program Zilnic Orientativ (Faza 2 — Tratament Activ)</h3>
          <div className="space-y-2">
            {dailySchedule.map((entry, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-14 text-sm font-mono font-bold text-stone-900">{entry.time}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-stone-800">{entry.action}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded border font-medium ${categoryColors[entry.category]}`}>
                      {entry.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">{entry.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol in 4 faze */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">Protocol în 4 Faze</h2>
        <p className="text-sm text-stone-500 mb-6">
          Durată totală: {generalProtocol.totalDuration}. Fiecare fază are un scop specific și un set de remedii + bindere.
        </p>
        <div className="grid gap-6">
          {generalProtocol.phases.map((phase) => (
            <GeneralPhaseCard key={phase.phase} phase={phase} />
          ))}
        </div>
      </section>

      {/* Repetarea curei */}
      <InfoBox variant="warning" title="Repetarea Curei" className="mb-12">
        <p className="mb-2">{generalProtocol.repeatCycle.reason}</p>
        <ul className="space-y-1">
          <li>• Se repetă fazele 2–3 după o pauză de {generalProtocol.repeatCycle.interval}</li>
          <li>• Număr recomandat de repetări: {generalProtocol.repeatCycle.times}</li>
          <li>• În pauză: mențineți binderele blânde (chlorella, pectină) și probioticele</li>
        </ul>
      </InfoBox>

      {/* Conventional note */}
      <InfoBox variant="info" className="mb-12">
        <p>{generalProtocol.conventionalNote}</p>
      </InfoBox>

      {/* Bindere detaliate */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">Bindere — Detalii Complete</h2>
        <p className="text-sm text-stone-500 mb-6">
          Fiecare binder are proprietăți diferite. Cărbunele activ este cel mai puternic, iar pectina de citrice este cea mai blândă.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {binderRemedies.map((r) => (
            <RemedyCard key={r.id} remedy={r} />
          ))}
        </div>
      </section>

      {/* Remedii antiparazitare principale */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Remedii Antiparazitare Principale</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {mainRemedies.map((r) => (
            <RemedyCard key={r.id} remedy={r} />
          ))}
        </div>
        <p className="mt-4 text-sm text-stone-500">
          <Link href="/siguranta" className="text-primary hover:underline">
            Vezi tabelul complet de siguranță al tuturor remediilor →
          </Link>
        </p>
      </section>

      {/* Dieta */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-6">Dieta Antiparazitară</h2>
        <DietSection />
      </section>

      {/* Shopping list */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-2">Lista de Cumpărături</h2>
        <p className="text-sm text-stone-500 mb-6">
          Tot ce aveți nevoie pentru protocolul general, cu link-uri directe și prețuri orientative.
        </p>
        <GeneralShoppingList />
      </section>

      {/* Referinte stiintifice */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-stone-900 mb-4">Referințe Științifice</h2>
        <div className="rounded-xl border border-stone-200 bg-white p-6">
          <ul className="space-y-2 text-sm text-stone-600">
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/18448706/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:18448706
              </a>{" "}
              — Zhao et al. 2008: Pectină de citrice modificată reduce plumbul din sânge la copii spitalizați
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/15781206/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:15781206
              </a>{" "}
              — Nakano et al. 2005: Chlorella reduce nivelurile de dioxine la femei care alăptează
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/22910218/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:22910218
              </a>{" "}
              — Li et al. 2012: Semințe dovleac — 75% eliminare tenii, 89% combinat (91 pacienți, China)
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/1875077/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:1875077
              </a>{" "}
              — Soffar 1991: Efect anti-Giardia al usturoiului la 26 copii
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/16798698/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:16798698
              </a>{" "}
              — Besirbellioglu 2006: S. boulardii adjuvant anti-Giardia (RCT)
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/20508870/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:20508870
              </a>{" "}
              — Review: Cărbune activ — mecanism de adsorbție și utilizare clinică
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/24675092/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                PMID:24675092
              </a>{" "}
              — Clinoptilolit (zeolit): profil de siguranță și aplicații medicale
            </li>
          </ul>
        </div>
      </section>

      {/* Doctor alert */}
      <DoctorAlert
        title="Mergeți la medic dacă"
        conditions={[
          { text: "Simptomele nu se ameliorează după 2 cure complete (8–10 săptămâni)", urgent: false },
          { text: "Simptomele de die-off sunt severe și nu se ameliorează în 5–7 zile", urgent: false },
          { text: "Apare febră, vărsături persistente sau diaree severă", urgent: true },
          { text: "Observați viermi în scaun sau vărsătură", urgent: true },
          { text: "Dureri abdominale intense sau semne de deshidratare", urgent: true },
          { text: "Pierdere în greutate inexplicabilă", urgent: true },
        ]}
      />
    </PageContainer>
  );
}
