"use client";

import type { ChapterQuiz as ChapterQuizType } from "../../chapters";

type ChapterQuizProps = {
  questions: ChapterQuizType[];
  answers: Record<number, number | undefined>;
  onAnswer: (questionIndex: number, optionIndex: number) => void;
  showResults: boolean;
  retryQuestionIndexes: number[];
};

export default function ChapterQuiz({
  questions,
  answers,
  onAnswer,
  showResults,
  retryQuestionIndexes,
}: ChapterQuizProps) {
  return (
    <div className="mt-6 grid gap-4">
      {questions.map((quiz, index) => {
        const selected = answers[index];
        return (
          <div
            key={quiz.question}
            className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
              Question {index + 1}
            </div>
            <div className="mt-2 text-lg font-semibold text-[color:var(--ink-700)]">
              {quiz.question}
            </div>
            <div className="mt-4 grid gap-2 text-sm text-[color:var(--ink-500)]">
              {quiz.options.map((option, optionIndex) => {
                const isSelected = selected === optionIndex;
                const canRetryThisQuestion =
                  retryQuestionIndexes.length === 0 ||
                  retryQuestionIndexes.includes(index);
                const disabled = selected !== undefined || !canRetryThisQuestion;
                const isCorrect = optionIndex === quiz.correctIndex;
                const showCorrect =
                  showResults &&
                  isSelected &&
                  isCorrect &&
                  !retryQuestionIndexes.includes(index);
                return (
                  <button
                    key={option}
                    type="button"
                    disabled={disabled}
                    onClick={() => onAnswer(index, optionIndex)}
                    className={`rounded-full border px-4 py-2 text-left transition ${
                      disabled
                        ? "border-[color:var(--line)] opacity-80"
                        : "border-[color:var(--line)] hover:border-[color:var(--ink-500)] hover:bg-[color:var(--elevated-hover)]"
                    } ${
                      isSelected ? "text-[color:var(--ink-700)]" : "text-[color:var(--ink-500)]"
                    } ${
                      showCorrect
                        ? "border-emerald-600 bg-emerald-300 text-emerald-950"
                        : isSelected
                          ? "bg-[#f6c453b3]"
                          : "bg-[color:var(--surface-2)]"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
