"use client";

import { useState } from "react";
import {
  ShoppingBundle,
  getBundleProducts,
  getBundleTotal,
  shoppingBundles,
  shoppingDisclaimer,
} from "@/data/shopping";

const categoryLabels = {
  supliment: "Suplimente",
  aliment: "Alimente / Ceaiuri",
  laxativ: "Laxative / Eliminare",
} as const;

const categoryIcons = {
  supliment: "💊",
  aliment: "🌿",
  laxativ: "🧹",
} as const;

function BundleCard({ bundle }: { bundle: ShoppingBundle }) {
  const items = getBundleProducts(bundle);
  const totalAll = getBundleTotal(bundle, false);
  const totalEssential = getBundleTotal(bundle, true);

  const grouped = items.reduce<
    Record<string, typeof items>
  >((acc, item) => {
    const cat = item.product.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-6">
      <h3 className="text-lg font-bold text-stone-900 mb-1">{bundle.protocolName}</h3>
      <p className="text-sm text-stone-500 mb-4">
        Esențiale: ~{totalEssential.toFixed(0)} lei | Cu opționale: ~{totalAll.toFixed(0)} lei
      </p>

      {(["supliment", "aliment", "laxativ"] as const).map((cat) => {
        const catItems = grouped[cat];
        if (!catItems || catItems.length === 0) return null;
        return (
          <div key={cat} className="mb-4 last:mb-0">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
              <span aria-hidden="true">{categoryIcons[cat]}</span>{" "}
              {categoryLabels[cat]}
            </p>
            <div className="space-y-2">
              {catItems.map((item) => (
                <div
                  key={item.productId}
                  className={`rounded-lg border p-3 ${
                    item.essential
                      ? "border-primary/20 bg-emerald-50/30"
                      : "border-stone-100 bg-stone-50/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-stone-800 truncate">
                          {item.product.name}
                        </span>
                        {!item.essential && (
                          <span className="shrink-0 text-xs bg-stone-200 text-stone-600 rounded-full px-2 py-0.5">
                            opțional
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {item.product.description}
                      </p>
                      <p className="text-xs text-primary mt-0.5 font-medium">
                        {item.notes}
                      </p>
                    </div>
                    <span className="shrink-0 font-bold text-sm text-stone-900">
                      {item.product.price > 0
                        ? `${item.product.price.toFixed(item.product.price % 1 === 0 ? 0 : 2)} lei`
                        : "~"}
                    </span>
                  </div>

                  {/* Links */}
                  {item.product.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.product.links.map((link) => (
                        <a
                          key={link.store}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline bg-white border border-primary/20 rounded px-2 py-0.5"
                        >
                          {link.store} ↗
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Alternative note */}
                  {item.product.alternativeNote && (
                    <p className="text-xs text-amber-700 mt-1.5 italic">
                      {item.product.alternativeNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Total */}
      <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between">
        <span className="text-sm font-medium text-stone-600">Total estimat (esențiale)</span>
        <span className="text-lg font-bold text-primary">~{totalEssential.toFixed(0)} lei</span>
      </div>
    </div>
  );
}

export default function ShoppingList() {
  const [activeBundle, setActiveBundle] = useState<string>(shoppingBundles[0].protocolId);
  const currentBundle = shoppingBundles.find((b) => b.protocolId === activeBundle)!;

  return (
    <div>
      {/* Protocol selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {shoppingBundles.map((bundle) => (
          <button
            key={bundle.protocolId}
            onClick={() => setActiveBundle(bundle.protocolId)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeBundle === bundle.protocolId
                ? "bg-primary text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {bundle.protocolName}
          </button>
        ))}
      </div>

      {/* Bundle card */}
      <BundleCard bundle={currentBundle} />

      {/* Disclaimer */}
      <p className="text-xs text-stone-400 mt-4 italic">
        {shoppingDisclaimer.text} Prețuri verificate: {shoppingDisclaimer.lastChecked}.
      </p>
    </div>
  );
}
