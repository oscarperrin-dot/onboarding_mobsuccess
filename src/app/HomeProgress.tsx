"use client";

import { useEffect, useMemo, useState } from "react";
import { chapters, XP_PER_CORRECT } from "./parcours/chapters";

type ProgressState = {
  percent: number;
  xp: number;
  totalXp: number;
};

export default function HomeProgress() {
  const totalXp = useMemo(
    () => chapters.reduce((acc, chapter) => acc + chapter.quiz.length, 0) * XP_PER_CORRECT,
    []
  );
  const [progress, setProgress] = useState<ProgressState>({
    percent: 0,
    xp: 0,
    totalXp,
  });

  useEffect(() => {
    const xp = chapters.reduce((acc, chapter) => {
      const raw = window.sessionStorage.getItem(`chapter:${chapter.slug}:score`);
      if (!raw) return acc;
      try {
        const parsed = JSON.parse(raw) as { xp?: number };
        return acc + (parsed.xp ?? 0);
      } catch {
        return acc;
      }
    }, 0);

    const percent = totalXp > 0 ? Math.min(100, Math.round((xp / totalXp) * 100)) : 0;
    setProgress({ percent, xp, totalXp });
  }, [totalXp]);

  return (
    <>
      <div className="flex items-center justify-between text-sm text-[color:var(--ink-500)]">
        <span>Barre de parcours</span>
        <span>{progress.percent}%</span>
      </div>
      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[color:var(--accent-3)] via-[color:var(--accent-2)] to-[color:var(--accent-1)] transition-all"
          style={{ width: `${progress.percent}%` }}
        />
      </div>
      <div className="mt-3 text-xs text-[color:var(--ink-500)]">
        {progress.xp} XP / {progress.totalXp} XP
      </div>
    </>
  );
}
