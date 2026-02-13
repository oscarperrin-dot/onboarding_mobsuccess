import Link from "next/link";
import { chapters } from "../../chapters";
import ChapterClient from "./ChapterClient";

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

  if (!chapter) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff5e6_0%,_#f4f1ec_55%,_#e8e2d8_100%)] px-6 py-10 text-[var(--ink-700)]">
        <main className="relative mx-auto flex w-full max-w-4xl flex-col gap-8">
          <header className="rounded-[32px] border border-black/10 bg-white/70 p-10 shadow-[0_25px_80px_rgba(25,20,14,0.12)] backdrop-blur">
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

          <section className="rounded-[28px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(42,32,24,0.12)]">
            <h2 className="font-[var(--font-display)] text-2xl text-[color:var(--ink-700)]">
              Chapitres disponibles
            </h2>
            <div className="mt-4 grid gap-3">
              {chapters.map((item) => (
                <Link
                  key={item.slug}
                  href={`/parcours/chapitres/${item.slug}`}
                  className="rounded-2xl border border-black/10 bg-[color:var(--card)] px-5 py-4 text-sm font-semibold text-[color:var(--ink-700)] transition hover:bg-white"
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff5e6_0%,_#f4f1ec_55%,_#e8e2d8_100%)] px-6 py-10 text-[var(--ink-700)]">
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-[color:var(--accent-2)] opacity-35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[color:var(--accent-3)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[color:var(--accent-1)] opacity-20 blur-3xl" />
      <div className="fixed left-0 right-0 top-6 z-50 px-6">
        <div className="mx-auto flex w-full max-w-5xl">
          <Link
            href="/parcours"
            className="-ml-16 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_12px_30px_rgba(25,20,14,0.15)] transition hover:-translate-y-0.5"
            aria-label="Retour au parcours"
            title="Retour au parcours"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
              alt=""
              className="h-6 w-6"
            />
          </Link>
        </div>
      </div>

      <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="rounded-[32px] border border-black/10 bg-white/70 p-10 shadow-[0_25px_80px_rgba(25,20,14,0.12)] backdrop-blur">
          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
            <span className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-1">
              <img
                src="https://static.wixstatic.com/media/f86955_6adbcb99dcf142aab73c37855f4408d3~mv2.webp/v1/fill/w_256,h_256,al_c,q_80,enc_avif,quality_auto/logo-groupe-mobsucess.webp"
                alt="Logo MobSuccess"
                className="h-5 w-5"
              />
              MobSuccess
            </span>
            <span className="rounded-full border border-black/10 px-3 py-1">Chapitre</span>
            <span className="rounded-full border border-black/10 px-3 py-1">{chapter.source}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-balance font-[var(--font-display)] text-4xl text-[color:var(--ink-700)] md:text-5xl">
                {chapter.title}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-[color:var(--ink-500)]">
                {chapter.intro}
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-[color:var(--card)] px-5 py-4 text-sm">
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

        <section className="rounded-[28px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(42,32,24,0.12)]">
          <h2 className="font-[var(--font-display)] text-3xl text-[color:var(--ink-700)]">
            Ce que tu dois comprendre
          </h2>
          <div className="mt-5 space-y-5 text-[color:var(--ink-500)]">
            {chapter.narrative.map((paragraph) => (
              <p key={paragraph} className="text-base leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-black/10 bg-[color:var(--card)] p-8 shadow-[0_20px_60px_rgba(42,32,24,0.12)]">
            <h2 className="font-[var(--font-display)] text-2xl text-[color:var(--ink-700)]">
              Ce que ça change pour toi
            </h2>
            <div className="mt-4 space-y-4 text-sm text-[color:var(--ink-500)]">
              {chapter.onboardingImpact.map((point) => (
                <p key={point} className="rounded-2xl bg-white/80 px-4 py-3 leading-6">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(42,32,24,0.12)]">
            <h2 className="font-[var(--font-display)] text-2xl text-[color:var(--ink-700)]">
              Les essentiels à retenir
            </h2>
            <div className="mt-4 grid gap-3 text-sm text-[color:var(--ink-500)]">
              {chapter.highlights.map((item) => (
                <div key={item} className="rounded-2xl bg-[color:var(--card)] px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ChapterClient chapter={chapter} />
      </main>
    </div>
  );
}
