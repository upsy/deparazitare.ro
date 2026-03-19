// Safety levels for remedies
export type SafetyLevel = "safe" | "caution" | "danger";

// Evidence levels
export type EvidenceLevel =
  | "solid"
  | "preliminary"
  | "traditional"
  | "none";

// Parasite types
export type ParasiteId = "oxiuri" | "giardia" | "ascaris";

// Audience types
export type Audience = "copii" | "alaptare";

// Parasite data
export interface Parasite {
  id: ParasiteId;
  name: string;
  latinName: string;
  popularNames: string[];
  description: string;
  size: string;
  lifecycle: string[];
  transmission: string[];
  prevalence: string;
  riskFactors: string[];
}

// Symptom data
export interface Symptom {
  id: string;
  name: string;
  description: string;
  byParasite: Record<ParasiteId, {
    present: boolean;
    severity: "high" | "moderate" | "low" | "none";
    detail: string;
    evidence: EvidenceLevel;
  }>;
}

// Checker question
export interface CheckerQuestion {
  id: string;
  text: string;
  relatedSymptoms: string[];
  weight: number;
}

// Remedy data
export interface Remedy {
  id: string;
  name: string;
  latinName?: string;
  activeSubstance: string;
  mechanism: string;
  efficacy: string;
  evidenceLevel: EvidenceLevel;
  safetyChildren: SafetyLevel;
  safetyBreastfeeding: SafetyLevel;
  childrenNotes: string;
  breastfeedingNotes: string;
  usage: string[];
  warnings?: string[];
}

// Treatment phase
export interface TreatmentPhase {
  phase: number;
  name: string;
  duration: string;
  goal: string;
  steps: string[];
}

// Prevention checklist
export interface PreventionCategory {
  id: string;
  title: string;
  icon: string;
  items: PreventionItem[];
}

export interface PreventionItem {
  id: string;
  text: string;
  detail?: string;
}

// Diagnosis method
export interface DiagnosisMethod {
  parasiteId: ParasiteId;
  parasiteName: string;
  methods: {
    name: string;
    description: string;
    sensitivity: string;
    notes?: string;
  }[];
}

// Doctor alert condition
export interface DoctorAlertCondition {
  text: string;
  urgent: boolean;
}

// Glossary entry
export interface GlossaryEntry {
  term: string;
  definition: string;
}

// Navigation
export interface NavItem {
  href: string;
  label: string;
  children?: NavItem[];
}

export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

// Diet section
export interface DietCategory {
  title: string;
  type: "recommended" | "avoid";
  items: { name: string; reason: string }[];
}
