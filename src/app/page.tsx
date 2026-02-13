import Link from "next/link";
import HomeProgressCard from "./HomeProgressCard";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff5e6_0%,_#f4f1ec_55%,_#e8e2d8_100%)] px-4 py-6 text-[var(--ink-700)] sm:px-6 sm:py-10">
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-[color:var(--accent-2)] opacity-35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[color:var(--accent-3)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[color:var(--accent-1)] opacity-20 blur-3xl" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-12">
        <header className="grid gap-6 rounded-[32px] border border-black/10 bg-white/70 p-6 shadow-[0_25px_80px_rgba(25,20,14,0.12)] backdrop-blur sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
              <span className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-1">
                <img
                  src="https://static.wixstatic.com/media/f86955_6adbcb99dcf142aab73c37855f4408d3~mv2.webp/v1/fill/w_256,h_256,al_c,q_80,enc_avif,quality_auto/logo-groupe-mobsucess.webp"
                  alt="Logo MobSuccess"
                  className="h-5 w-5"
                />
                MobSuccess
              </span>
              <span className="rounded-full border border-black/10 px-3 py-1">Serious Game</span>
            </div>
            <h1 className="text-balance font-[var(--font-display)] text-3xl leading-tight text-[color:var(--ink-700)] sm:text-4xl md:text-5xl">
              L&apos;onboarding qui transforme la compréhension en progression réelle.
            </h1>
            <p className="max-w-xl text-base text-[color:var(--ink-500)] sm:text-lg">
              Un parcours pensé comme un jeu sérieux&nbsp;: des chapitres courts, des
              quiz ciblés et des niveaux qui montent au fil des étapes de
              compréhension.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/parcours"
                className="rounded-full bg-[color:var(--accent-3)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#2f6f90]"
              >
                Démarrer le parcours
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[color:var(--card)] p-6 shadow-[0_20px_60px_rgba(42,32,24,0.16)]">
            <HomeProgressCard />
          </div>
        </header>
      </main>
    </div>
  );
}
