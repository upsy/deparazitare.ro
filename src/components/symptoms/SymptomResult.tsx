import { checkerQuestions } from "@/data/symptoms";
import Link from "next/link";

function getLevel(score: number): {
  level: string;
  color: string;
  message: string;
  recommendation: string;
} {
  if (score >= 12) {
    return {
      level: "Ridicat",
      color: "border-red-300 bg-red-50 text-red-800",
      message:
        "Simptomele raportate sugerează o probabilitate ridicată de infecție parazitară.",
      recommendation:
        "Vă recomandăm să consultați un medic cât mai curând pentru diagnostic (scotch test, examen coproparazitologic).",
    };
  }
  if (score >= 6) {
    return {
      level: "Moderat",
      color: "border-amber-300 bg-amber-50 text-amber-800",
      message:
        "Simptomele raportate sugerează o posibilitate moderată de infecție parazitară.",
      recommendation:
        "Consultați medicul de familie pentru o evaluare. Între timp, puteți implementa măsurile de igienă din secțiunea Prevenție.",
    };
  }
  return {
    level: "Scăzut",
    color: "border-green-300 bg-green-50 text-green-800",
    message:
      "Simptomele raportate nu sugerează în mod deosebit o infecție parazitară.",
    recommendation:
      "Dacă totuși aveți îngrijorări, consultați medicul. Mențineți măsurile de igienă și prevenție.",
  };
}

export default function SymptomResult({
  score,
  answers,
}: {
  score: number;
  answers: Record<string, boolean>;
}) {
  const result = getLevel(score);
  const yesQuestions = checkerQuestions.filter((q) => answers[q.id] === true);

  return (
    <div className={`mt-6 rounded-xl border-2 p-6 ${result.color}`}>
      <div className="mb-4">
        <p className="text-xs font-medium uppercase tracking-wider opacity-70 mb-1">
          Nivel de suspiciune
        </p>
        <p className="text-xl font-bold">{result.level}</p>
      </div>

      <p className="mb-4 leading-relaxed">{result.message}</p>

      <p className="font-medium mb-4">{result.recommendation}</p>

      {yesQuestions.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Simptome prezente:</p>
          <ul className="text-sm space-y-1">
            {yesQuestions.map((q) => (
              <li key={q.id}>• {q.text.replace("?", "")}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="rounded-lg bg-white/50 p-3 text-sm">
        <p className="font-medium mb-1">⚠️ Important</p>
        <p>
          Acest verificator este orientativ și nu înlocuiește consultul medical.
          Doar un medic poate pune un diagnostic pe baza analizelor de laborator.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/diagnostic"
          className="rounded-lg bg-white/80 px-4 py-2 text-sm font-medium hover:bg-white"
        >
          Metode de diagnostic →
        </Link>
        <Link
          href="/preventie"
          className="rounded-lg bg-white/80 px-4 py-2 text-sm font-medium hover:bg-white"
        >
          Prevenție →
        </Link>
      </div>
    </div>
  );
}
