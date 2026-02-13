"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Chapter } from "./chapters";

type ChapterListClientProps = {
  chapters: Chapter[];
};

export default function ChapterListClient({ chapters }: ChapterListClientProps) {
  const [perfect, setPerfect] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const next: Record<string, boolean> = {};
    chapters.forEach((chapter) => {
      const key = `chapter:${chapter.slug}:perfect`;
      next[chapter.slug] = window.sessionStorage.getItem(key) === "true";
    });
    setPerfect(next);
  }, [chapters]);

  return (
    <div className="mt-6 grid gap-4">
      {chapters.map((chapter, index) => (
        <div
          key={chapter.title}
          className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] px-5 py-4"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
              Chapitre {index + 1}
            </div>
            <div className="mt-1 text-lg font-semibold text-[color:var(--ink-700)]">
              {chapter.title}
            </div>
            <div className="mt-1 text-sm text-[color:var(--ink-500)]">
              {chapter.focus}
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            {perfect[chapter.slug] ? (
              <div className="flex items-center gap-2 rounded-full bg-[color:var(--surface-2)] px-3 py-1 text-xs font-semibold text-[color:var(--ink-700)]">
                <img
                  src="https://as2.ftcdn.net/jpg/04/76/88/75/1000_F_476887551_To06orGUP2FCthNrqHnfNsuNXkXNjfTT.jpg"
                  alt="Réussite parfaite"
                  className="h-5 w-5 rounded-full object-cover"
                />
                Sans faute
              </div>
            ) : null}
            <span className="rounded-full bg-[color:var(--surface-2)] px-3 py-1 font-semibold text-[color:var(--ink-700)]">
              {chapter.duration}
            </span>
            <Link
              href={`/parcours/chapitres/${chapter.slug}`}
              className="rounded-full border border-[color:var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)] transition hover:bg-[color:var(--elevated-hover)]"
            >
              Ouvrir
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
