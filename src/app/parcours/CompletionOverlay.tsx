"use client";

import { useEffect, useMemo, useState } from "react";
import { chapters } from "./chapters";

export default function CompletionOverlay() {
  const [visible, setVisible] = useState(false);

  const chapterKeys = useMemo(
    () => chapters.map((chapter) => `chapter:${chapter.slug}:perfect`),
    []
  );

  useEffect(() => {
    const dismissed = window.sessionStorage.getItem("completion:dismissed") === "true";
    if (dismissed) {
      setVisible(false);
      return;
    }
    const allPerfect = chapterKeys.every(
      (key) => window.sessionStorage.getItem(key) === "true"
    );
    setVisible(allPerfect);
  }, [chapterKeys]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--overlay)] px-6 py-10">
      <div className="animate-pop relative w-full max-w-2xl overflow-hidden rounded-[36px] border border-[color:var(--line)] bg-[color:var(--elevated)] p-10 text-center shadow-[0_30px_90px_rgba(25,20,14,0.2)]">
        <div className="pointer-events-none absolute -left-20 top-6 h-40 w-40 rounded-full bg-[color:var(--accent-2)] opacity-30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-48 w-48 rounded-full bg-[color:var(--accent-3)] opacity-30 blur-3xl" />
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--accent-1)] text-2xl text-white shadow-[0_12px_30px_rgba(255,140,90,0.35)]">
          🎉
        </div>
        <h2 className="text-balance font-[var(--font-display)] text-3xl text-[color:var(--ink-700)]">
          Bravo, tu as tout terminé !
        </h2>
        <p className="mt-3 text-[color:var(--ink-500)]">
          Tu es prêt à rejoindre MobSuccess. Ton parcours est complet, toutes les
          étapes ont été validées sans faute.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              window.sessionStorage.setItem("completion:dismissed", "true");
              setVisible(false);
            }}
            className="rounded-full border border-[color:var(--line)] bg-[color:var(--elevated)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)] transition hover:-translate-y-0.5"
          >
            Fermer
          </button>
        </div>
        <div className="pointer-events-none absolute left-1/2 top-0 h-1 w-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[color:var(--accent-1)] to-transparent opacity-70 animate-shimmer" />
      </div>
    </div>
  );
}
