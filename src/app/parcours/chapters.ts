export type ChapterQuiz = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const XP_PER_CORRECT = 25;

export type Chapter = {
  slug: string;
  title: string;
  focus: string;
  duration: string;
  intro: string;
  narrative: string[];
  onboardingImpact: string[];
  highlights: string[];
  keyPoints: string[];
  quiz: ChapterQuiz[];
  source: string;
};

export const chapters: Chapter[] = [
  {
    slug: "mot-de-bienvenue",
    title: "Mot de bienvenue",
    focus: "Vision & culture",
    duration: "6 min",
    intro:
      "Bienvenue chez MobSuccess. Ce livret d’accueil pose les bases de l’intégration et rappelle que l’humain, l’entraide et l’intelligence collective sont au cœur du parcours.",
    narrative: [
      "Ce premier chapitre sert de porte d’entrée à l’expérience MobSuccess. Il ne s’agit pas seulement de lire un document, mais de comprendre comment l’entreprise fonctionne au quotidien : par la coopération, l’écoute et la proximité entre les équipes.",
      "L’objectif est de te donner des repères clairs pour te sentir rapidement à l’aise. Le livret annonce un parcours fait de rencontres et d’échanges pour créer des liens utiles dès les premières semaines.",
      "Les podcasts internes complètent cette introduction en racontant un parcours entrepreneurial exigeant : apprendre vite, s’adapter et construire ensemble. C’est l’état d’esprit attendu dès l’onboarding.",
    ],
    onboardingImpact: [
      "Tu n’es pas censé tout savoir immédiatement. Ce qui compte, c’est de poser des questions, d’identifier les bons interlocuteurs et de créer une routine d’échanges.",
      "L’onboarding commence par l’humain : rencontrer, comprendre les rôles et se sentir légitime pour solliciter l’aide des autres.",
    ],
    highlights: [
      "Un parcours d’intégration basé sur des rencontres avec l’ensemble des services.",
      "Des repères pratiques pour comprendre le fonctionnement et les réflexes du quotidien.",
      "Une invitation explicite à demander de l’aide et à créer du lien dès les premières semaines.",
      "La découverte de la raison d’être, de la trajectoire et des ambitions du groupe.",
    ],
    keyPoints: [
      "L’intégration ne se limite pas à la lecture, elle se vit à travers les échanges.",
      "L’intelligence collective est un pilier : on avance mieux à plusieurs.",
      "Les premiers repères servent à comprendre la raison d’être et la trajectoire du groupe.",
      "Les podcasts internes partagent l’état d’esprit entrepreneurial et la résilience qui ont marqué les débuts.",
      "Le livret est un point d’entrée : le vrai onboarding commence dans les rencontres.",
    ],
    quiz: [
      {
        question: "Quel est le pilier mis en avant pour le mode de fonctionnement ?",
        options: ["L’intelligence collective", "La compétition interne", "Le travail en silo"],
        correctIndex: 0,
      },
      {
        question: "Quel est l’objectif principal du livret d’accueil ?",
        options: [
          "Donner des repères et informations pratiques",
          "Évaluer les performances",
          "Présenter les offres commerciales",
        ],
        correctIndex: 0,
      },
      {
        question: "Que souligne le mot de bienvenue pour les premières semaines ?",
        options: [
          "Rencontrer les personnes de tous les services",
          "Travailler uniquement en autonomie",
          "Reporter toutes les questions à la fin du mois",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel est l’objectif principal de ce premier document ?",
        options: [
          "Poser les repères et créer du lien",
          "Lancer une campagne commerciale",
          "Évaluer les résultats financiers",
        ],
        correctIndex: 0,
      },
    ],
    source: "Mot de bienvenue",
  },
  {
    slug: "l-entreprise",
    title: "L'entreprise",
    focus: "Mission & organisation",
    duration: "10 min",
    intro:
      "MobSuccess est née en 2015 avec l’ambition de proposer des solutions publicitaires novatrices, adaptées à la fragmentation des usages digitaux.",
    narrative: [
      "Le document explique pourquoi MobSuccess existe : le digital est fragmenté, les formats se multiplient et les parcours utilisateurs évoluent vite. Les marques doivent piloter des campagnes plus fines, plus personnalisées et plus mesurables.",
      "MobSuccess se positionne comme une réponse structurante pour aider les annonceurs à orchestrer cette complexité. L’entreprise propose une communication digitale unifiée et performante, capable de s’adapter aux usages et à la vitesse des innovations.",
      "Les podcasts rappellent l’ambition d’un groupe en croissance rapide, construit sur la capacité à apprendre et à itérer. L’onboarding vise à rendre cette ambition tangible dans ton quotidien.",
    ],
    onboardingImpact: [
      "Comprendre le contexte marché aide à donner du sens aux choix produits et aux priorités d’équipe.",
      "Cette vision explique pourquoi la performance, la personnalisation et la mesure sont des réflexes attendus chez MobSuccess.",
    ],
    highlights: [
      "Les parcours utilisateurs évoluent vite, avec une diversité de formats et plateformes.",
      "La communication devient plus complexe à piloter et à mesurer pour les annonceurs.",
      "La performance et la personnalisation sont devenues des exigences clés.",
      "Le groupe s’appuie sur des technologies de pointe pour des expériences pertinentes et mesurables.",
      "MobSuccess simplifie l’accès à une communication digitale unifiée et performante.",
    ],
    keyPoints: [
      "L’entreprise répond à un marché digital en mutation rapide.",
      "Les solutions doivent s’adapter à des comportements utilisateurs changeants.",
      "L’efficacité publicitaire passe par la précision et la mesure.",
      "Les podcasts évoquent un parcours entrepreneurial marqué par l’ambition de croissance.",
      "L’organisation s’appuie sur une équipe d’environ 200 collaborateurs.",
    ],
    quiz: [
      {
        question: "Quelle année marque la naissance de MobSuccess ?",
        options: ["2015", "2018", "2020"],
        correctIndex: 0,
      },
      {
        question: "Quel défi principal est mentionné pour les annonceurs ?",
        options: [
          "Communication plus complexe à piloter et mesurer",
          "Manque total de canaux digitaux",
          "Absence de formats publicitaires",
        ],
        correctIndex: 0,
      },
      {
        question: "Quelles attentes deviennent incontournables ?",
        options: ["Personnalisation et performance", "Uniformité et stabilité", "Silence de marque"],
        correctIndex: 0,
      },
      {
        question: "Pourquoi MobSuccess se positionne-t-elle comme une réponse structurante ?",
        options: [
          "Pour simplifier l’accès à une communication digitale unifiée et mesurable",
          "Pour réduire le nombre de canaux digitaux",
          "Pour remplacer les contenus par du print",
        ],
        correctIndex: 0,
      },
    ],
    source: "L'entreprise",
  },
  {
    slug: "ms-en-bref",
    title: "MS en bref",
    focus: "Repères clés",
    duration: "5 min",
    intro:
      "Un aperçu des activités et expertises du groupe, avec un focus sur la production de contenu, le mobile marketing et les campagnes locales.",
    narrative: [
      "Ce chapitre dresse une vue rapide des expertises du groupe. Il montre comment la production de contenu, la diffusion sociale et le mobile marketing se complètent pour renforcer la visibilité des marques.",
      "On y voit une logique d’offres complémentaires : créer, activer, mesurer. L’objectif est de proposer des campagnes efficaces, adaptées aux usages et aux audiences.",
      "Le document souligne une organisation en évolution rapide et un positionnement sur la révolution publicitaire digitale. C’est un repère utile pour comprendre les priorités business du groupe.",
    ],
    onboardingImpact: [
      "Tu dois pouvoir relier ton rôle à au moins une brique clé : contenu, activation, performance ou support.",
      "Cette synthèse t’aide à situer ton équipe dans une chaîne de valeur complète.",
    ],
    highlights: [
      "Accompagnement des marques sur les enjeux de notoriété et de contenu.",
      "Déploiement sur les réseaux sociaux et grands carrefours d’audience.",
      "Positionnement sur la révolution publicitaire digitale.",
      "Des offres complémentaires couvrant contenu, activation et performance.",
      "Le groupe affiche une croissance rapide et une organisation en évolution.",
    ],
    keyPoints: [
      "Le contenu et la distribution sociale sont au cœur des offres.",
      "Le mobile marketing structure une partie des expertises.",
      "Les campagnes locales permettent des activations ciblées par point de vente.",
      "Le groupe se positionne sur des enjeux de visibilité et d’audience.",
      "Le document mentionne un chiffre d’affaires 2024 à 40,3 M€ et une équipe d’environ 200 personnes.",
    ],
    quiz: [
      {
        question: "Quels enjeux sont principalement adressés par les équipes contenu ?",
        options: [
          "Notoriété et contenu",
          "Logistique et supply chain",
          "Comptabilité et audit",
        ],
        correctIndex: 0,
      },
      {
        question: "Sur quels canaux les contenus sont-ils déployés ?",
        options: [
          "Réseaux sociaux et grands carrefours d’audience",
          "Uniquement par email",
          "Exclusivement en print",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel axe est mentionné dans les expertises ?",
        options: ["Mobile marketing", "Téléphonie fixe", "Affichage papier"],
        correctIndex: 0,
      },
      {
        question: "Quel canal est cité pour les campagnes locales ?",
        options: ["Google Ads, Facebook, Instagram", "Télévision uniquement", "Affichage papier"],
        correctIndex: 0,
      },
    ],
    source: "MS en bref",
  },
  {
    slug: "informations-pratiques",
    title: "Informations pratiques",
    focus: "Environnement de travail",
    duration: "12 min",
    intro:
      "Toutes les informations pour bien démarrer : contrat, paie, open space, règles du bureau et formations obligatoires.",
    narrative: [
      "Ce chapitre centralise les informations pratiques pour être opérationnel rapidement : règles de bureau, télétravail, gestion de paie, congés et obligations légales.",
      "Il précise notamment les points clés du forfait jours et rappelle l’importance de respecter les procédures RH pour éviter les erreurs administratives.",
      "C’est un guide de référence à relire dès que tu as un doute sur les pratiques internes.",
    ],
    onboardingImpact: [
      "Les règles claires évitent les frictions : tu sais où poser tes questions et comment déclarer tes informations.",
      "Maîtriser ces basiques te fait gagner du temps et t’aide à rester autonome.",
    ],
    highlights: [
      "Charte Flex-Office et télétravail.",
      "Informations sur les contrats et la gestion de paie.",
      "Formations obligatoires (dont RGPD).",
      "Rappels sur l’obligation d’affichage et les règles de base au bureau.",
    ],
    keyPoints: [
      "Les règles de travail sont centralisées pour faciliter la prise en main.",
      "Les pratiques bureau/télétravail sont clairement cadrées.",
      "La conformité passe par des formations obligatoires.",
      "La gestion de paie et les congés sont expliqués avec des points clés à retenir.",
    ],
    quiz: [
      {
        question: "Quel document encadre le travail hybride ?",
        options: ["Charte Flex-Office et télétravail", "Guide des voyages", "Manuel commercial"],
        correctIndex: 0,
      },
      {
        question: "Quelle formation est explicitement mentionnée ?",
        options: ["RGPD", "Excel avancé", "Design sprint"],
        correctIndex: 0,
      },
      {
        question: "Quel type d’information est regroupé ici ?",
        options: ["Contrat, paie, environnement de travail", "Marketing", "Comptabilité"],
        correctIndex: 0,
      },
      {
        question: "Quel sujet est explicitement listé dans les informations pratiques ?",
        options: ["Gestion de paie", "Plan média", "Partenariats externes"],
        correctIndex: 0,
      },
    ],
    source: "Informations pratiques liées à l’environnement de travail",
  },
  {
    slug: "les-avantages",
    title: "Les avantages",
    focus: "Bénéfices & politique RH",
    duration: "7 min",
    intro:
      "Un focus sur les avantages proposés : carte Swile, prise en charge des transports, mutuelle Alan.",
    narrative: [
      "Ce chapitre liste les avantages qui facilitent le quotidien : repas, transport et couverture santé.",
      "Il rappelle aussi les points de contact RH à utiliser pour toute question liée à ces sujets.",
      "L’objectif est que chacun active rapidement ses droits et sache où trouver l’information.",
    ],
    onboardingImpact: [
      "Tu gagnes en confort dès les premières semaines si tu actives rapidement tes avantages.",
      "Les bons contacts RH permettent de résoudre les questions en quelques minutes.",
    ],
    highlights: [
      "Carte Swile pour les repas et avantages associés.",
      "Frais de transports en commun pris en charge.",
      "Mutuelle Alan pour la couverture santé.",
      "Accès rapide aux démarches RH via les contacts dédiés.",
    ],
    keyPoints: [
      "Les avantages RH sont pensés pour faciliter le quotidien.",
      "La mobilité et la santé sont deux axes centraux.",
      "Les dispositifs sont simples à activer dès l’arrivée.",
      "Les emails RH centralisent les questions liées à Swile, mutuelle et attestations.",
    ],
    quiz: [
      {
        question: "Quel outil est cité pour les repas ?",
        options: ["Carte Swile", "Carte cadeau", "Ticket papier"],
        correctIndex: 0,
      },
      {
        question: "Quelle mutuelle est mentionnée ?",
        options: ["Alan", "AXA", "Harmonie"],
        correctIndex: 0,
      },
      {
        question: "Quel type de frais est pris en charge ?",
        options: ["Transports en commun", "Vacances", "Parking privé"],
        correctIndex: 0,
      },
      {
        question: "À qui poser une question sur la mutuelle ?",
        options: ["Aux contacts RH dédiés", "Au service client externe", "À l’équipe commerciale"],
        correctIndex: 0,
      },
    ],
    source: "Les avantages",
  },
  {
    slug: "organigramme-simplifie",
    title: "Organigramme simplifié",
    focus: "Qui fait quoi",
    duration: "8 min",
    intro:
      "Comprendre la gouvernance et identifier rapidement les responsables clés dans l’organisation.",
    narrative: [
      "Ce chapitre clarifie la gouvernance du groupe et les rôles clés. Il explique comment le comex, le comité stratégique et le comité de direction s’articulent.",
      "L’organigramme simplifié est un outil pratique pour identifier rapidement les bons interlocuteurs selon ton besoin.",
      "Cette clarté évite les allers-retours et accélère la prise de décision.",
    ],
    onboardingImpact: [
      "Savoir à qui s’adresser te permet d’avancer plus vite et d’éviter les blocages.",
      "Tu peux te repérer dans l’organisation sans attendre de “tout connaître”.",
    ],
    highlights: [
      "Un comex piloté par Thomas Fagot (CEO) et Xavier Dupont (DG).",
      "Un comité stratégique avec les principaux actionnaires.",
      "Un comité de direction élargi aux membres du comex.",
      "Un organigramme accessible pour retrouver rapidement les interlocuteurs.",
    ],
    keyPoints: [
      "L’organigramme aide à savoir qui contacter selon les sujets.",
      "La gouvernance est structurée autour de comités complémentaires.",
      "Les rôles clés sont identifiés pour fluidifier les décisions.",
      "Le document liste les responsables par domaines (produit, finance, marketing, commerce, people).",
    ],
    quiz: [
      {
        question: "Quel binôme dirige le comex ?",
        options: [
          "Thomas Fagot (CEO) et Xavier Dupont (DG)",
          "Chloé et Nicolas",
          "Quentin et Chloé",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel comité regroupe les principaux actionnaires ?",
        options: ["Le comité stratégique", "Le comité RH", "Le comité produit"],
        correctIndex: 0,
      },
      {
        question: "Pourquoi consulter l’organigramme ?",
        options: [
          "Identifier rapidement les bons interlocuteurs",
          "Réserver des salles",
          "Créer des campagnes",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel est l’objectif des comités de gouvernance ?",
        options: [
          "Structurer les décisions et responsabilités",
          "Remplacer les équipes",
          "Éviter la collaboration",
        ],
        correctIndex: 0,
      },
    ],
    source: "Organigramme simplifié",
  },
];
