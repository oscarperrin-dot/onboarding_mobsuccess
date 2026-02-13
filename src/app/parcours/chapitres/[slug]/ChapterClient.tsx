"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Chapter, ChapterQuiz as ChapterQuizType } from "../../chapters";
import { XP_PER_CORRECT } from "../../chapters";
import ChapterQuiz from "./ChapterQuiz";

type ChapterClientProps = {
  chapter: Chapter;
  nextChapterSlug: string | null;
};

function shuffleQuestionOptions(quiz: ChapterQuizType): ChapterQuizType {
  const indexedOptions = quiz.options.map((option, index) => ({ option, index }));

  for (let i = indexedOptions.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexedOptions[i], indexedOptions[j]] = [indexedOptions[j], indexedOptions[i]];
  }

  return {
    ...quiz,
    options: indexedOptions.map(({ option }) => option),
    correctIndex: indexedOptions.findIndex(({ index }) => index === quiz.correctIndex),
  };
}

export default function ChapterClient({
  chapter,
  nextChapterSlug,
}: ChapterClientProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, number | undefined>>({});
  const [completed, setCompleted] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [retryQuestionIndexes, setRetryQuestionIndexes] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const randomizedQuiz = useMemo(
    () => chapter.quiz.map((quiz) => shuffleQuestionOptions(quiz)),
    [chapter.quiz]
  );

  const score = useMemo(() => {
    const total = randomizedQuiz.length;
    const correct = randomizedQuiz.reduce((acc, quiz, index) => {
      return acc + (answers[index] === quiz.correctIndex ? 1 : 0);
    }, 0);
    return { correct, total };
  }, [answers, randomizedQuiz]);

  return (
    <>
      <section className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--surface-2)] p-5 shadow-[0_20px_60px_rgba(42,32,24,0.12)] sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-[var(--font-display)] text-2xl text-[color:var(--ink-700)] sm:text-3xl">
              Quiz de validation
            </h2>
            <p className="mt-2 text-[color:var(--ink-500)]">
              Réponds aux questions, puis termine le chapitre.
            </p>
            <p className="mt-2 text-sm text-[color:var(--ink-500)]">
              Cours express : lis les sections &quot;Ce que tu dois comprendre&quot; et
              &quot;Ce que ça change pour toi&quot; avant de répondre.
            </p>
          </div>
          <span className="rounded-full border border-[color:var(--line)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
            {randomizedQuiz.length} questions
          </span>
        </div>
        <ChapterQuiz
          questions={randomizedQuiz}
          answers={answers}
          onAnswer={(questionIndex, optionIndex) =>
            setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }))
          }
          showResults={reveal}
          retryQuestionIndexes={retryQuestionIndexes}
        />
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[color:var(--line)] bg-[color:var(--surface-2)] p-5 shadow-[0_20px_60px_rgba(42,32,24,0.12)] sm:p-6">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
            Fin du chapitre
          </div>
          <div className="mt-2 text-lg font-semibold text-[color:var(--ink-700)]">
            {completed
              ? `Résultat : ${score.correct}/${score.total} réponses correctes`
              : "Prêt à passer au chapitre suivant ?"}
          </div>
          {feedback ? (
            <div className="mt-2 text-sm text-[color:var(--ink-500)]">{feedback}</div>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              const wrongIndexes = randomizedQuiz
                .map((quiz, index) => ({ quiz, index }))
                .filter(({ quiz, index }) => answers[index] !== quiz.correctIndex)
                .map(({ index }) => index);

              setCompleted(true);
              setReveal(true);
              if (wrongIndexes.length > 0) {
                setRetryQuestionIndexes(wrongIndexes);
                setAnswers((prev) => {
                  const next = { ...prev };
                  wrongIndexes.forEach((index) => {
                    delete next[index];
                  });
                  return next;
                });
                setFeedback(
                  `${wrongIndexes.length} question(s) à corriger. Réponds à nouveau uniquement aux erreurs.`
                );
                if (typeof window !== "undefined") {
                  window.sessionStorage.removeItem(`chapter:${chapter.slug}:perfect`);
                  window.sessionStorage.removeItem(`chapter:${chapter.slug}:score`);
                }
                return;
              }

              setRetryQuestionIndexes([]);
              setFeedback("Chapitre validé. Passage au chapitre suivant.");
              setShowSuccessModal(true);
              if (typeof window !== "undefined") {
                window.sessionStorage.setItem(`chapter:${chapter.slug}:perfect`, "true");
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
            className="w-full rounded-full bg-[color:var(--ink-700)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:brightness-90 sm:w-auto"
          >
            Terminer
          </button>
        </div>
      </section>

      {showSuccessModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--overlay)] px-4">
          <div className="w-full max-w-md rounded-[28px] border border-[color:var(--line)] bg-[color:var(--elevated)] p-6 shadow-[0_30px_90px_rgba(25,20,14,0.2)] sm:p-8">
            <h3 className="font-[var(--font-display)] text-2xl text-[color:var(--ink-700)]">
              Chapitre validé
            </h3>
            <p className="mt-3 text-sm text-[color:var(--ink-500)]">
              Toutes les réponses sont correctes. Tu peux passer à l&apos;étape suivante.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {nextChapterSlug ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowSuccessModal(false);
                    router.push(`/parcours/chapitres/${nextChapterSlug}`);
                  }}
                  className="rounded-full bg-[color:var(--accent-3)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
                >
                  Aller au chapitre suivant
                </button>
              ) : (
                <Link
                  href="/parcours"
                  className="rounded-full bg-[color:var(--accent-3)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5"
                >
                  Retour au parcours
                </Link>
              )}
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="rounded-full border border-[color:var(--line)] bg-[color:var(--elevated)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)] transition hover:-translate-y-0.5"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
