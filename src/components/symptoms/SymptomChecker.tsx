"use client";

import { useState } from "react";
import { checkerQuestions } from "@/data/symptoms";
import SymptomResult from "./SymptomResult";

export default function SymptomChecker() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === checkerQuestions.length;

  function handleAnswer(questionId: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setShowResult(false);
  }

  function handleReset() {
    setAnswers({});
    setShowResult(false);
  }

  const score = Object.entries(answers).reduce((total, [qId, val]) => {
    if (!val) return total;
    const q = checkerQuestions.find((q) => q.id === qId);
    return total + (q?.weight ?? 0);
  }, 0);

  return (
    <div>
      <div className="space-y-4 mb-6">
        {checkerQuestions.map((q, i) => (
          <div
            key={q.id}
            className="rounded-lg border border-stone-200 bg-white p-4"
          >
            <p className="text-sm font-medium text-stone-800 mb-3">
              <span className="text-stone-400 mr-2">{i + 1}.</span>
              {q.text}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleAnswer(q.id, true)}
                className={`min-h-[44px] rounded-lg border px-5 py-2 text-sm font-medium transition-colors ${
                  answers[q.id] === true
                    ? "border-primary bg-emerald-50 text-primary"
                    : "border-stone-200 text-stone-600 hover:border-stone-300"
                }`}
              >
                Da
              </button>
              <button
                onClick={() => handleAnswer(q.id, false)}
                className={`min-h-[44px] rounded-lg border px-5 py-2 text-sm font-medium transition-colors ${
                  answers[q.id] === false
                    ? "border-primary bg-emerald-50 text-primary"
                    : "border-stone-200 text-stone-600 hover:border-stone-300"
                }`}
              >
                Nu
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setShowResult(true)}
          disabled={!allAnswered}
          className="min-h-[44px] rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Vezi rezultatul ({answeredCount}/{checkerQuestions.length})
        </button>
        {answeredCount > 0 && (
          <button
            onClick={handleReset}
            className="min-h-[44px] rounded-lg border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-50"
          >
            Resetează
          </button>
        )}
      </div>

      {showResult && allAnswered && (
        <SymptomResult score={score} answers={answers} />
      )}
    </div>
  );
}
