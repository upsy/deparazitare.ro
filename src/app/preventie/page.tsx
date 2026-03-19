import { Metadata } from "next";
import ChecklistSection from "@/components/prevention/ChecklistSection";
import PageContainer from "@/components/shared/PageContainer";
import SectionHeading from "@/components/shared/SectionHeading";
import InfoBox from "@/components/shared/InfoBox";

export const metadata: Metadata = {
  title: "Prevenția Paraziților — Checklist Interactiv",
  description:
    "Checklist interactiv de prevenție a paraziților intestinali: igiena mâinilor, igiena alimentară, igiena casei.",
};

export default function PreventiePage() {
  return (
    <PageContainer>
      <SectionHeading subtitle="Bifați măsurile implementate. Progresul se salvează automat.">
        Checklist de Prevenție
      </SectionHeading>

      <InfoBox variant="tip" title="De ce contează prevenția?" className="mb-8">
        <p>
          Prevenția este esențială, mai ales pentru oxiuri și Ascaris, unde
          reinfecția este foarte frecventă. Igiena riguroasă este cel puțin la
          fel de importantă ca tratamentul.
        </p>
      </InfoBox>

      <ChecklistSection />
    </PageContainer>
  );
}
