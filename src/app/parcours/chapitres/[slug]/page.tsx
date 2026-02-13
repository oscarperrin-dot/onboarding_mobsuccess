import Link from "next/link";
import type { ReactNode } from "react";
import { chapters } from "../../chapters";
import ChapterClient from "./ChapterClient";
import HomeProgress from "../../../HomeProgress";

type ChapterPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const rawSlug = decodeURIComponent(slug || "");
  const normalizeSlug = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  const normalizedSlug = normalizeSlug(rawSlug);
  const chapter = chapters.find((item) => {
    const slugMatch = normalizeSlug(item.slug) === normalizedSlug;
    const titleMatch = normalizeSlug(item.title) === normalizedSlug;
    return slugMatch || titleMatch;
  });
  const chapterIndex = chapter
    ? chapters.findIndex((item) => item.slug === chapter.slug)
    : -1;
  const nextChapterSlug =
    chapterIndex >= 0 && chapterIndex < chapters.length - 1
      ? chapters[chapterIndex + 1].slug
      : null;
  const chapterNumber = chapterIndex + 1;

  const importantTerms = [
    "MobSuccess",
    "Widely",
    "Farly",
    "Story",
    "Vectaury",
    "TubeReach",
    "Publicis",
    "OMD",
    "GroupM",
    "Heroiks",
    "COMEX",
    "comite strategique",
    "comite de direction",
    "Meta",
    "Google",
    "YouTube",
    "Snapchat",
    "Display",
    "CTV",
    "DOOH",
    "SMS",
    "Payfit",
    "RGPD",
    "Swile",
    "Alan",
    "Google Workspace",
    "Slack",
  ];
  const escapedTerms = importantTerms
    .sort((a, b) => b.length - a.length)
    .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const importantTermsRegex = new RegExp(`(${escapedTerms.join("|")})`, "gi");
  const emphasizeImportantTerms = (text: string): ReactNode[] =>
    text.split(importantTermsRegex).map((part, index) => {
      if (!part) return part;
      const isImportant = importantTerms.some(
        (term) => term.toLowerCase() === part.toLowerCase()
      );
      return isImportant ? <strong key={`${part}-${index}`}>{part}</strong> : part;
    });

  if (!chapter) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[image:var(--page-gradient)] px-4 py-6 text-[var(--ink-700)] sm:px-6 sm:py-10">
        <main className="relative mx-auto flex w-full max-w-4xl flex-col gap-8">
          <header className="rounded-[32px] border border-[color:var(--line)] bg-[color:var(--surface-1)] p-6 shadow-[0_25px_80px_rgba(25,20,14,0.12)] backdrop-blur sm:p-10">
            <div className="text-sm uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
              Chapitre introuvable
            </div>
            <h1 className="mt-4 text-balance font-[var(--font-display)] text-4xl text-[color:var(--ink-700)]">
              Ce chapitre n&apos;existe pas encore.
            </h1>
            <p className="mt-3 text-[color:var(--ink-500)]">
              L&apos;URL demandée ne correspond à aucun chapitre actif. Choisis un
              chapitre dans la liste ci-dessous.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/parcours"
                className="rounded-full bg-[color:var(--ink-700)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                Retour au parcours
              </Link>
            </div>
          </header>

          <section className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--surface-2)] p-8 shadow-[0_20px_60px_rgba(42,32,24,0.12)]">
            <h2 className="font-[var(--font-display)] text-2xl text-[color:var(--ink-700)]">
              Chapitres disponibles
            </h2>
            <div className="mt-4 grid gap-3">
              {chapters.map((item) => (
                <Link
                  key={item.slug}
                  href={`/parcours/chapitres/${item.slug}`}
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] px-5 py-4 text-sm font-semibold text-[color:var(--ink-700)] transition hover:bg-[color:var(--elevated-hover)]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }

  const summaryPoints = [...chapter.highlights, ...chapter.onboardingImpact].slice(0, 6);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[image:var(--page-gradient)] px-4 py-6 text-[var(--ink-700)] sm:px-6 sm:py-10">
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-[color:var(--accent-2)] opacity-35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[color:var(--accent-3)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[color:var(--accent-1)] opacity-20 blur-3xl" />
      <div className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
          <Link
            href="/parcours"
            className="-ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--elevated)] shadow-[0_12px_30px_rgba(25,20,14,0.15)] transition hover:-translate-y-0.5 sm:-ml-8 sm:h-12 sm:w-12 lg:-ml-16"
            aria-label="Retour au parcours"
            title="Retour au parcours"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
              alt=""
              className="h-6 w-6"
            />
          </Link>
          {nextChapterSlug ? (
            <Link
              href={`/parcours/chapitres/${nextChapterSlug}`}
              className="mr-0 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--elevated)] text-lg font-semibold text-[color:var(--ink-700)] shadow-[0_12px_30px_rgba(25,20,14,0.15)] transition hover:-translate-y-0.5 sm:-mr-8 sm:h-12 sm:w-12 lg:-mr-16"
              aria-label="Chapitre suivant"
              title="Chapitre suivant"
            >
              &rarr;
            </Link>
          ) : (
            <Link
              href="/parcours"
              className="mr-0 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--elevated)] text-lg font-semibold text-[color:var(--ink-700)] shadow-[0_12px_30px_rgba(25,20,14,0.15)] transition hover:-translate-y-0.5 sm:-mr-8 sm:h-12 sm:w-12 lg:-mr-16"
              aria-label="Fin du parcours"
              title="Fin du parcours"
            >
              ✓
            </Link>
          )}
        </div>
      </div>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 sm:gap-10">
        <section className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--surface-2)] p-4 shadow-[0_12px_30px_rgba(25,20,14,0.08)]">
          <HomeProgress />
        </section>

        <header className="rounded-[32px] border border-[color:var(--line)] bg-[color:var(--surface-1)] p-6 shadow-[0_25px_80px_rgba(25,20,14,0.12)] backdrop-blur sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
            <span className="flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-1">
              <img
                src="https://static.wixstatic.com/media/f86955_6adbcb99dcf142aab73c37855f4408d3~mv2.webp/v1/fill/w_256,h_256,al_c,q_80,enc_avif,quality_auto/logo-groupe-mobsucess.webp"
                alt="Logo MobSuccess"
                className="h-5 w-5"
              />
              MobSuccess
            </span>
            <span className="rounded-full border border-[color:var(--line)] px-3 py-1">Chapitre</span>
            <span className="rounded-full border border-[color:var(--line)] px-3 py-1">
              {chapterNumber}/{chapters.length}
            </span>
            <span className="rounded-full border border-[color:var(--line)] px-3 py-1">{chapter.source}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-balance font-[var(--font-display)] text-3xl text-[color:var(--ink-700)] sm:text-4xl md:text-5xl">
                {chapter.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base text-[color:var(--ink-500)] sm:text-lg">
                {emphasizeImportantTerms(chapter.intro)}
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] px-5 py-4 text-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
                Focus
              </div>
              <div className="mt-2 font-semibold text-[color:var(--ink-700)]">
                {chapter.focus}
              </div>
              <div className="mt-1 text-xs text-[color:var(--ink-500)]">
                Durée estimée · {chapter.duration}
              </div>
            </div>
          </div>
        </header>

        <section className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--surface-2)] p-5 shadow-[0_20px_60px_rgba(42,32,24,0.12)] sm:p-8">
          <h2 className="font-[var(--font-display)] text-3xl text-[color:var(--ink-700)]">
            Ce que tu dois comprendre
          </h2>
          <div className="mt-5 space-y-5 text-[color:var(--ink-500)]">
            {chapter.narrative.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7">
                {emphasizeImportantTerms(paragraph)}
              </p>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--card)] p-5 shadow-[0_20px_60px_rgba(42,32,24,0.12)] sm:p-8">
          <h2 className="font-[var(--font-display)] text-2xl text-[color:var(--ink-700)]">
            Résumé
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--ink-700)]">
            {summaryPoints.map((point) => {
              const [label, ...rest] = point.split(":");
              if (rest.length === 0) {
                return <li key={point}>{emphasizeImportantTerms(point)}</li>;
              }
              return (
                <li key={point}>
                  <strong>{label.trim()} :</strong> {emphasizeImportantTerms(rest.join(":").trim())}
                </li>
              );
            })}
          </ul>
        </section>

        <ChapterClient chapter={chapter} nextChapterSlug={nextChapterSlug} />
      </main>
    </div>
  );
}
