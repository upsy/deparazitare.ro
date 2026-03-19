"use client";

import { useState, useEffect } from "react";
import { preventionCategories } from "@/data/prevention";

const STORAGE_KEY = "deparazitare-checklist";

export default function ChecklistSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
      } catch {}
    }
  }, [checked, loaded]);

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function resetAll() {
    setChecked({});
  }

  const totalItems = preventionCategories.reduce((s, c) => s + c.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  if (!loaded) return null;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6 rounded-lg border border-stone-200 bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-stone-700">
            Progres: {checkedCount}/{totalItems} completate
          </span>
          <span className="text-sm font-bold text-primary">{progress}%</span>
        </div>
        <div className="h-2.5 rounded-full bg-stone-200">
          <div
            className="h-2.5 rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        {checkedCount > 0 && (
          <button
            onClick={resetAll}
            className="mt-2 text-xs text-stone-500 hover:text-stone-700"
          >
            Resetează tot
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {preventionCategories.map((cat) => {
          const catChecked = cat.items.filter((item) => checked[item.id]).length;
          return (
            <div key={cat.id} className="rounded-xl border border-stone-200 bg-white p-4 sm:p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-stone-900 mb-1">
                <span aria-hidden="true">{cat.icon}</span>
                {cat.title}
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                {catChecked}/{cat.items.length} completate
              </p>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-stone-50"
                  >
                    <input
                      type="checkbox"
                      checked={!!checked[item.id]}
                      onChange={() => toggle(item.id)}
                      className="mt-0.5 h-5 w-5 shrink-0 rounded border-stone-300 text-primary accent-primary"
                    />
                    <div>
                      <span className={`text-sm ${checked[item.id] ? "text-stone-400 line-through" : "text-stone-700"}`}>
                        {item.text}
                      </span>
                      {item.detail && (
                        <p className="mt-0.5 text-xs text-stone-500">{item.detail}</p>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
