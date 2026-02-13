import Link from "next/link";
import { chapters } from "../parcours/chapters";

export default function ProgrammePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff5e6_0%,_#f4f1ec_55%,_#e8e2d8_100%)] px-6 py-10 text-[var(--ink-700)]">
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-[color:var(--accent-2)] opacity-35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[color:var(--accent-3)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[color:var(--accent-1)] opacity-20 blur-3xl" />
      <div className="fixed left-0 right-0 top-6 z-50 px-6">
        <div className="mx-auto flex w-full max-w-5xl">
          <Link
            href="/"
            className="-ml-16 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_12px_30px_rgba(25,20,14,0.15)] transition hover:-translate-y-0.5"
            aria-label="Retour au menu"
            title="Retour au menu"
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
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
            Programme
          </div>
          <h1 className="mt-4 text-balance font-[var(--font-display)] text-4xl text-[color:var(--ink-700)]">
            Le programme d’onboarding
          </h1>
          <p className="mt-3 text-[color:var(--ink-500)]">
            Un aperçu clair des chapitres, des durées et des objectifs de compréhension.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/parcours"
              className="rounded-full border border-black/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)] transition hover:-translate-y-0.5"
            >
              Accéder au parcours
            </Link>
            <Link
              href="/"
              className="rounded-full border border-black/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)] transition hover:-translate-y-0.5"
            >
              Retour à l’accueil
            </Link>
          </div>
        </header>

        <section className="rounded-[28px] border border-black/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(42,32,24,0.12)]">
          <div className="grid gap-4">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.slug}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/10 bg-[color:var(--card)] px-5 py-4"
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
                  <span className="rounded-full bg-white/80 px-3 py-1 font-semibold text-[color:var(--ink-700)]">
                    {chapter.duration}
                  </span>
                  <Link
                    href={`/parcours/chapitres/${chapter.slug}`}
                    className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)] transition hover:bg-white"
                  >
                    Voir le chapitre
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
