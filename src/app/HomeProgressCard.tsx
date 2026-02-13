"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { chapters, XP_PER_CORRECT } from "./parcours/chapters";

type ProgressSnapshot = {
  xp: number;
  totalXp: number;
  percent: number;
  completedCount: number;
  currentSlug: string;
};

const levels = [
  { name: "Niveau 1", label: "Découverte", minPercent: 0 },
  { name: "Niveau 2", label: "Autonomie", minPercent: 34 },
  { name: "Niveau 3", label: "Impact", minPercent: 67 },
];

export default function HomeProgressCard() {
  const totalXp = useMemo(
    () => chapters.reduce((acc, chapter) => acc + chapter.quiz.length, 0) * XP_PER_CORRECT,
    []
  );
  const [snapshot, setSnapshot] = useState<ProgressSnapshot>({
    xp: 0,
    totalXp,
    percent: 0,
    completedCount: 0,
    currentSlug: chapters[0]?.slug ?? "",
  });

  useEffect(() => {
    const chapterScores = chapters.map((chapter) => {
      const raw = window.sessionStorage.getItem(`chapter:${chapter.slug}:score`);
      if (!raw) return null;
      try {
        return JSON.parse(raw) as { xp?: number };
      } catch {
        return null;
      }
    });
    const completedCount = chapterScores.filter(Boolean).length;
    const xp = chapterScores.reduce((acc, score) => acc + (score?.xp ?? 0), 0);
    const percent = totalXp > 0 ? Math.min(100, Math.round((xp / totalXp) * 100)) : 0;
    const current =
      chapters.find((chapter) => !window.sessionStorage.getItem(`chapter:${chapter.slug}:score`)) ??
      chapters[chapters.length - 1];
    setSnapshot({ xp, totalXp, percent, completedCount, currentSlug: current.slug });
  }, [totalXp]);

  const currentChapter =
    chapters.find((chapter) => chapter.slug === snapshot.currentSlug) ?? chapters[0];

  const level =
    levels
      .slice()
      .reverse()
      .find((item) => snapshot.percent >= item.minPercent) ?? levels[0];

  return (
    <>
      <div className="flex items-center justify-between text-sm text-[color:var(--ink-500)]">
        <span>Barre de parcours</span>
        <span>{snapshot.percent}%</span>
      </div>
      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-white/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[color:var(--accent-3)] via-[color:var(--accent-2)] to-[color:var(--accent-1)] transition-all"
          style={{ width: `${snapshot.percent}%` }}
        />
      </div>
      <div className="mt-3 text-xs text-[color:var(--ink-500)]">
        {snapshot.xp} XP / {snapshot.totalXp} XP
      </div>

      <div className="mt-6 grid gap-4 rounded-2xl bg-white/80 p-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
            Chapitre actuel
          </span>
          <span className="font-semibold">
            {Math.min(snapshot.completedCount + 1, chapters.length)} / {chapters.length}
          </span>
        </div>
        <div className="text-lg font-semibold text-[color:var(--ink-700)]">
          {currentChapter.title} — {currentChapter.focus}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[color:var(--card-strong)] px-3 py-1 text-xs font-semibold">
            {currentChapter.duration} restantes
          </span>
          <span className="rounded-full bg-[color:var(--card-strong)] px-3 py-1 text-xs font-semibold">
            {currentChapter.quiz.length} questions
          </span>
          <span className="rounded-full bg-[color:var(--card-strong)] px-3 py-1 text-xs font-semibold">
            {level.name} · {level.label}
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-2 text-sm text-[color:var(--ink-500)]">
        <div className="flex items-center justify-between">
          <span>Prochaine étape</span>
          <Link
            href={`/parcours/chapitres/${currentChapter.slug}`}
            className="font-semibold text-[color:var(--ink-700)] hover:underline"
          >
            Continuer le chapitre
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <span>Points d&apos;expérience</span>
          <span className="font-semibold text-[color:var(--ink-700)]">
            {snapshot.xp} XP
          </span>
        </div>
      </div>
    </>
  );
}
