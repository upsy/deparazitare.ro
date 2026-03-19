"use client";

import { useState } from "react";
import { Audience } from "@/lib/types";
import { remedies } from "@/data/remedies";
import SafetyBadge from "@/components/shared/SafetyBadge";
import EvidenceBadge from "@/components/shared/EvidenceBadge";

export default function AudienceToggle() {
  const [audience, setAudience] = useState<Audience>("copii");

  const safe = remedies.filter((r) =>
    audience === "copii" ? r.safetyChildren === "safe" : r.safetyBreastfeeding === "safe"
  );
  const caution = remedies.filter((r) =>
    audience === "copii" ? r.safetyChildren === "caution" : r.safetyBreastfeeding === "caution"
  );
  const danger = remedies.filter((r) =>
    audience === "copii" ? r.safetyChildren === "danger" : r.safetyBreastfeeding === "danger"
  );

  return (
    <div>
      {/* Toggle */}
      <div className="mb-8 flex rounded-lg border border-stone-200 bg-white p-1 max-w-xs">
        <button
          onClick={() => setAudience("copii")}
          className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
            audience === "copii"
              ? "bg-primary text-white"
              : "text-stone-600 hover:text-stone-800"
          }`}
        >
          Copii 4+
        </button>
        <button
          onClick={() => setAudience("alaptare")}
          className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
            audience === "alaptare"
              ? "bg-primary text-white"
              : "text-stone-600 hover:text-stone-800"
          }`}
        >
          Alăptare
        </button>
      </div>

      {/* Safe remedies */}
      <section className="mb-8">
        <h3 className="flex items-center gap-2 text-lg font-bold text-green-700 mb-4">
          <span>✅</span> Remedii Sigure
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {safe.map((r) => (
            <div key={r.id} className="rounded-xl border border-green-200 bg-green-50/50 p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-semibold text-stone-900">{r.name}</h4>
                <EvidenceBadge level={r.evidenceLevel} />
              </div>
              <p className="text-sm text-stone-600 mb-2">
                {audience === "copii" ? r.childrenNotes : r.breastfeedingNotes}
              </p>
              <ul className="text-xs text-stone-500 space-y-1">
                {r.usage.slice(0, 2).map((u, i) => (
                  <li key={i}>• {u}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Caution remedies */}
      {caution.length > 0 && (
        <section className="mb-8">
          <h3 className="flex items-center gap-2 text-lg font-bold text-amber-700 mb-4">
            <span>⚠️</span> Cu Precauție
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {caution.map((r) => (
              <div key={r.id} className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-stone-900">{r.name}</h4>
                  <SafetyBadge level="caution" />
                </div>
                <p className="text-sm text-stone-600">
                  {audience === "copii" ? r.childrenNotes : r.breastfeedingNotes}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Danger remedies */}
      {danger.length > 0 && (
        <section>
          <h3 className="flex items-center gap-2 text-lg font-bold text-red-700 mb-4">
            <span>❌</span> Contraindicate
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {danger.map((r) => (
              <div key={r.id} className="rounded-xl border border-red-200 bg-red-50/50 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-stone-900">{r.name}</h4>
                  <SafetyBadge level="danger" />
                </div>
                <p className="text-sm text-stone-600">
                  {audience === "copii" ? r.childrenNotes : r.breastfeedingNotes}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
