import { Metadata } from "next";
import { parasites } from "@/data/parasites";
import ParasiteCard from "@/components/parasites/ParasiteCard";
import SymptomTable from "@/components/parasites/SymptomTable";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import DisclaimerBanner from "@/components/shared/DisclaimerBanner";

export const metadata: Metadata = {
  title: "Paraziți Intestinali Frecvenți la Copii",
  description:
    "Informații despre cei mai frecvenți paraziți intestinali la copii: oxiuri, giardia și ascaris.",
};

export default function ParazitiPage() {
  return (
    <PageContainer>
      <SectionHeading subtitle="Informații detaliate despre cei trei paraziți intestinali cei mai frecvenți la copii.">
        Paraziți Intestinali Frecvenți
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-3 mb-12">
        {parasites.map((p) => (
          <ParasiteCard key={p.id} parasite={p} />
        ))}
      </div>

      <SectionHeading subtitle="Cum se manifestă fiecare parazit — comparație directă.">
        Tabel Comparativ: Parazit × Simptome
      </SectionHeading>

      <div className="rounded-xl border border-stone-200 bg-white p-4 sm:p-6 mb-8">
        <SymptomTable />
      </div>

      <DisclaimerBanner />
    </PageContainer>
  );
}
