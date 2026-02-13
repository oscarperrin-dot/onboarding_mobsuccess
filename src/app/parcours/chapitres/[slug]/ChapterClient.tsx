"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Chapter } from "../../chapters";
import { XP_PER_CORRECT } from "../../chapters";
import ChapterQuiz from "./ChapterQuiz";

type ChapterClientProps = {
  chapter: Chapter;
};

export default function ChapterClient({ chapter }: ChapterClientProps) {
  const [answers, setAnswers] = useState<Record<number, number | undefined>>({});
  const [completed, setCompleted] = useState(false);
  const [reveal, setReveal] = useState(false);

  const score = useMemo(() => {
    const total = chapter.quiz.length;
    const correct = chapter.quiz.reduce((acc, quiz, index) => {
      return acc + (answers[index] === quiz.correctIndex ? 1 : 0);
    }, 0);
    return { correct, total };
  }, [answers, chapter.quiz]);

  const allAnswered = useMemo(
    () => Object.keys(answers).length === chapter.quiz.length,
    [answers, chapter.quiz.length]
  );
  const allCorrect = useMemo(
    () => allAnswered && score.correct === score.total,
    [allAnswered, score]
  );

  return (
    <>
      <section className="rounded-[28px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(42,32,24,0.12)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-[var(--font-display)] text-3xl text-[color:var(--ink-700)]">
              Quiz de validation
            </h2>
            <p className="mt-2 text-[color:var(--ink-500)]">
            Réponds aux questions, puis termine le chapitre pour voir ton score.
            </p>
          </div>
          <span className="rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
            {chapter.quiz.length} questions
          </span>
        </div>
        <ChapterQuiz
          questions={chapter.quiz}
          answers={answers}
          onAnswer={(questionIndex, optionIndex) =>
            setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }))
          }
          showResults={reveal}
        />
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(42,32,24,0.12)]">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
            Fin du chapitre
          </div>
          <div className="mt-2 text-lg font-semibold text-[color:var(--ink-700)]">
            {completed
              ? `Résultat : ${score.correct}/${score.total} réponses correctes`
              : "Prêt à passer au chapitre suivant ?"}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setCompleted(false);
            }}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)] transition hover:-translate-y-0.5"
          >
            <img
              src="https://st4.depositphotos.com/34984980/37844/v/450/depositphotos_378440594-stock-illustration-refresh-icon-isolated-white-background.jpg"
              alt="Recommencer"
              className="h-4 w-4 rounded-full"
            />
            Recommencer
          </button>
          <button
            type="button"
            onClick={() => {
              setCompleted(true);
              setReveal(true);
              if (allCorrect && typeof window !== "undefined") {
                window.sessionStorage.setItem(
                  `chapter:${chapter.slug}:perfect`,
                  "true"
                );
              }
              if (typeof window !== "undefined") {
                const payload = {
                  correct: score.correct,
                  total: score.total,
                  xp: score.correct * XP_PER_CORRECT,
                };
                window.sessionStorage.setItem(
                  `chapter:${chapter.slug}:score`,
                  JSON.stringify(payload)
                );
              }
            }}
            className="rounded-full bg-[color:var(--ink-700)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-black"
          >
            Terminer
          </button>
        </div>
      </section>
    </>
  );
}
