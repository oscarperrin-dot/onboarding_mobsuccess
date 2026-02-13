export default function ConseilsPage() {
  const conseils = [
    { text: "Rejoindre #machineagodet.", author: "Mobsie inconnu" },
    { text: "Rejoindre #sport-success.", author: "Mobsie inconnu" },
    { text: "Rejoindre #machineadéjeuner.", author: "Mobsie inconnu" },
    { text: "Venir au bureau voir ses nouveaux collègues.", author: "Mobsie inconnu" },
    {
      text: "Participer à #machine-à-café, ne pas avoir peur d’intervenir.",
      author: "Chloé Pelletier",
    },
    {
      text: "Poser plein de questions, même si tout n’est pas clair au début.",
      author: "Blaise",
    },
    { text: "S’approprier des sujets en fonction de son expertise.", author: "Blaise" },
    {
      text: "Être présent en équipe pour partager et rester au courant des bonnes infos.",
      author: "Blaise",
    },
    { text: "Renseigner birthdaybot.", author: "Chloé Pelletier" },
    {
      text: "Slack = le bureau : rester actif selon le mode (remote ou présentiel).",
      author: "Chloé Pelletier",
    },
    { text: "Venir au bureau le vendredi (viennoiseries).", author: "Chloé Pelletier" },
    { text: "Esprit d’équipe : nous sommes une Fami.ly.", author: "Stéphanie Ta" },
    {
      text: "Aller voir chaque équipe pour comprendre les expertises.",
      author: "Stéphanie Ta",
    },
    {
      text: "Le travail de qualité à distance est possible : être actif sur Slack et créer du lien.",
      author: "Nicolas Saraiva",
    },
    {
      text: "Être curieux, aller vers les collaborateurs, miser sur la bienveillance et l’entraide.",
      author: "Nicolas Saraiva",
    },
    { text: "Sois sérieux, mais pas trop.", author: "Nicolas Saraiva" },
    { text: "Être proactif le plus possible.", author: "Mathieu Boyer" },
    {
      text: "Ne jamais repousser un sujet si tu as du temps.",
      author: "Chloé Pelletier",
    },
    {
      text: "N’hésite pas à poser des questions : les collègues sont là pour aider.",
      author: "Jessica Lessinger",
    },
    {
      text: "Propose tes idées et tes projets : la team se construit avec chacun.",
      author: "Jessica Lessinger",
    },
    { text: "Ne pas oublier un “C” à MOBSUCCESS.", author: "Thomas Fagot" },
    { text: "Consulter le livre d’or : ✨Notion✨.", author: "Noura" },
    {
      text: "Les erreurs sont des leçons, les managers sont à l’écoute.",
      author: "Noura",
    },
    { text: "Par semaine, un spa / massage tu feras !", author: "Gilles Perrin" },
    { text: "Douter c’est avancer, demander c’est accélérer.", author: "Christopher Allène" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#fff5e6_0%,_#f4f1ec_55%,_#e8e2d8_100%)] px-4 py-6 text-[var(--ink-700)] sm:px-6 sm:py-10">
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-[color:var(--accent-2)] opacity-35 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[color:var(--accent-3)] opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[color:var(--accent-1)] opacity-20 blur-3xl" />

      <main className="relative mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="rounded-[32px] border border-black/10 bg-white/70 p-6 shadow-[0_25px_80px_rgba(25,20,14,0.12)] backdrop-blur sm:p-10">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-500)]">
            Conseils
          </div>
          <h1 className="mt-4 text-balance font-[var(--font-display)] text-3xl text-[color:var(--ink-700)] sm:text-4xl">
            Les bons conseils
          </h1>
          <p className="mt-3 text-[color:var(--ink-500)]">
            Une sélection de conseils partagés par l’équipe pour mieux démarrer.
          </p>
        </header>

        <section className="rounded-[28px] border border-black/10 bg-white/80 p-5 shadow-[0_20px_60px_rgba(42,32,24,0.12)] sm:p-8">
          <div className="grid gap-3 text-sm text-[color:var(--ink-700)]">
            {conseils.map((conseil) => (
              <div
                key={conseil.text}
                className="rounded-2xl border border-black/10 bg-[color:var(--card)] px-5 py-4"
              >
                <div className="text-[color:var(--ink-700)]">{conseil.text}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                  {conseil.author}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/parcours"
              className="flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-3 text-[color:var(--ink-700)] transition hover:-translate-y-0.5"
              aria-label="Retour au parcours de compréhension"
              title="Retour au parcours de compréhension"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/60/60793.png"
                alt=""
                className="h-6 w-6"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
