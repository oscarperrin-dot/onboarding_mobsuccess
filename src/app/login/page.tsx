"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      if (!response.ok) {
        const body = (await response.json()) as { message?: string };
        setError(body.message ?? "Connexion impossible.");
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("Connexion impossible. Vérifie ta connexion puis réessaie.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[image:var(--page-gradient)] px-4 py-10 text-[color:var(--ink-700)]">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[color:var(--accent-2)] opacity-35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[color:var(--accent-3)] opacity-30 blur-3xl" />

      <section className="relative w-full max-w-md rounded-[28px] border border-[color:var(--line)] bg-[color:var(--surface-2)] p-6 shadow-[0_20px_60px_rgba(42,32,24,0.12)] sm:p-8">
        <h1 className="font-[var(--font-display)] text-3xl text-[color:var(--ink-700)]">
          Connexion
        </h1>
        <p className="mt-2 text-sm text-[color:var(--ink-500)]">
          Accès réservé à l&apos;équipe MobSuccess.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <label className="grid gap-2 text-sm">
            <span className="text-[color:var(--ink-500)]">Identifiant</span>
            <input
              type="text"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              autoComplete="username"
              className="rounded-xl border border-[color:var(--line)] bg-[color:var(--elevated)] px-4 py-2 text-[color:var(--ink-700)] outline-none transition focus:border-[color:var(--accent-3)]"
              required
            />
          </label>

          <label className="grid gap-2 text-sm">
            <span className="text-[color:var(--ink-500)]">Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              className="rounded-xl border border-[color:var(--line)] bg-[color:var(--elevated)] px-4 py-2 text-[color:var(--ink-700)] outline-none transition focus:border-[color:var(--accent-3)]"
              required
            />
          </label>

          {error ? (
            <p className="rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-700 dark:text-red-200">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-full bg-[color:var(--accent-3)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </section>
    </div>
  );
}
