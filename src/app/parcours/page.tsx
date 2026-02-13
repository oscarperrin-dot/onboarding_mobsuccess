import Link from "next/link";
import { chapters } from "./chapters";
import ChapterListClient from "./ChapterListClient";
import HomeProgress from "../HomeProgress";
import CompletionOverlay from "./CompletionOverlay";

export default function ParcoursPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[image:var(--page-gradient)] px-4 py-6 text-[var(--ink-700)] sm:px-6 sm:py-10">
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-[color:var(--accent-2)] opacity-35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[color:var(--accent-3)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[color:var(--accent-1)] opacity-20 blur-3xl" />
      <CompletionOverlay />
      <div className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl">
          <Link
            href="/"
            className="-ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--elevated)] shadow-[0_12px_30px_rgba(25,20,14,0.15)] transition hover:-translate-y-0.5 sm:-ml-8 sm:h-12 sm:w-12 lg:-ml-16"
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

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 sm:gap-12">
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
            <span className="rounded-full border border-[color:var(--line)] px-3 py-1">Parcours</span>
          </div>
          <h1 className="mt-6 text-balance font-[var(--font-display)] text-3xl leading-tight text-[color:var(--ink-700)] sm:text-4xl md:text-5xl">
            Parcours de compréhension
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[color:var(--ink-500)] sm:text-lg">
            Chaque chapitre s&apos;appuie sur les documents d&apos;onboarding MobSuccess.
            Les quiz valident la compréhension et font progresser le niveau.
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--surface-2)] p-5 shadow-[0_20px_60px_rgba(42,32,24,0.12)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-[var(--font-display)] text-3xl text-[color:var(--ink-700)]">
                Chapitres
              </h2>
              <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
                {chapters.length} étapes
              </span>
            </div>
            <ChapterListClient chapters={chapters} />
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[24px] border border-[color:var(--line)] bg-[color:var(--card)] shadow-[0_16px_40px_rgba(42,32,24,0.12)]">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipMwPceTgd9ZGURRuIEUphM-I3S-Gt2-l_aDDQzL=s1360-w1360-h1020-rw"
                alt="Ambiance MobSuccess"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[24px] border border-[color:var(--line)] bg-[color:var(--card)] shadow-[0_16px_40px_rgba(42,32,24,0.12)]">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPGve8ntch4E3Ix0uCtTkTu1F7e8L8aAJ4GgT-1=s1360-w1360-h1020-rw"
                alt="Entrée des bureaux de MobSuccess"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--surface-2)] px-5 py-4 text-sm text-[color:var(--ink-500)]">
              <span className="font-semibold text-[color:var(--ink-700)]">
                Entrée des bureaux de MobSuccess
              </span>
              <span className="text-[color:var(--ink-500)]">
                {" "}
                — sur l&apos;image, les noms des trois groupes de travail.
              </span>
            </div>
            <div className="rounded-[20px] border border-[color:var(--line)] bg-[color:var(--surface-2)] px-5 py-4 text-sm text-[color:var(--ink-500)]">
              <HomeProgress />
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[color:var(--line)] bg-[color:var(--surface-2)] p-5 shadow-[0_20px_60px_rgba(42,32,24,0.12)] sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-[var(--font-display)] text-3xl text-[color:var(--ink-700)]">
                Les clés pour t&apos;aider
              </h2>
              <p className="mt-2 text-[color:var(--ink-500)]">
                Une trajectoire claire pour arriver autonome d&apos;ici le jour J.
              </p>
            </div>
            <a
              href="https://www.google.com/search?q=google+maps+mobsuccess"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[color:var(--line)] bg-[color:var(--card)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)]"
            >
              Google Maps MobSuccess
            </a>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
                Mémo RH
              </div>
              <div className="mt-2 text-lg font-semibold text-[color:var(--ink-700)]">
                Infos RH — l’essentiel à retenir
              </div>
              <p className="mt-2 text-sm text-[color:var(--ink-500)]">
                Adresses email RH à utiliser pour toutes les questions liées à la paie,
                la mutuelle, la carte Swile et les demandes d’attestation :
                rh@mobsuccess.com · rh@storysuccess.fr
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
                Toute l&apos;équipe
              </div>
              <div className="mt-2 text-lg font-semibold text-[color:var(--ink-700)]">
                Organigramme MobSuccess
              </div>
              <p className="mt-2 text-sm text-[color:var(--ink-500)]">
                Repère rapidement les interlocuteurs clés et les équipes.
              </p>
              <a
                href="https://pitch.com/v/organigramme-mobsuccess-bvii6i/c7d56d71-867d-49ce-b605-09cc1d84ca26"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-3)]"
              >
                Voir l&apos;organigramme
              </a>
            </div>
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--card)] p-5">
              <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
                Conseils
              </div>
              <div className="mt-2 text-lg font-semibold text-[color:var(--ink-700)]">
                Les bons conseils
              </div>
              <p className="mt-2 text-sm text-[color:var(--ink-500)]">
                Accède à la liste complète des conseils partagés par l’équipe.
              </p>
              <Link
                href="/conseils"
                className="mt-4 inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--elevated)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-700)] transition hover:-translate-y-0.5"
              >
                Voir tous les conseils
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
