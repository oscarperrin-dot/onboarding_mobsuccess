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
      "Tu entres dans l’experience MobSuccess : l’objectif n’est pas de lire passivement, mais de comprendre comment l’entreprise fonctionne au quotidien, avec cooperation, ecoute et proximite entre equipes.",
      "Tu dois prendre rapidement des reperes clairs pour te sentir a l’aise. Ton parcours passe par des rencontres et des echanges qui t’aident a construire des liens utiles des les premieres semaines.",
      "Tu progresses en appliquant trois reflexes : poser des questions vite, demander de l’aide quand c’est utile, et collaborer avec les autres equipes.",
      "Concretement, ton integration est reussie si tu identifies vite les bons interlocuteurs, les canaux de communication internes, et les attentes de ton manager sur les 2 premieres semaines.",
    ],
    onboardingImpact: [
      "Tu n’es pas censé tout savoir immédiatement. Ce qui compte, c’est de poser des questions, d’identifier les bons interlocuteurs et de créer une routine d’échanges.",
      "Ton onboarding commence par l’humain : rencontrer, comprendre les roles et te sentir legitime pour solliciter l’aide des autres.",
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
      "Le livret est un point d’entrée : le vrai onboarding commence dans les rencontres.",
    ],
    quiz: [
      {
        question: "Dans les 2 premieres semaines, quel reflexe est attendu pour bien t'integrer ?",
        options: [
          "Poser tes questions vite et solliciter les bons interlocuteurs",
          "Attendre de tout comprendre seul avant d'echanger",
          "Te limiter a ton perimetre sans rencontrer d'autres equipes",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel est le role du livret d'accueil dans ce chapitre ?",
        options: [
          "Donner des reperes concrets pour demarrer ton integration",
          "Remplacer les echanges avec ton manager et les equipes",
          "Servir d'outil de validation RH annuelle",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel indicateur montre que ton integration avance bien ?",
        options: [
          "Tu identifies vite les interlocuteurs, les canaux internes et les attentes manager",
          "Tu evites les questions pour paraitre autonome",
          "Tu reportes tous les points bloquants a la fin du mois",
        ],
        correctIndex: 0,
      },
      {
        question: "Si tu bloques sur un sujet, quelle attitude correspond a la culture presentee ?",
        options: [
          "Demander de l'aide rapidement pour avancer a plusieurs",
          "Garder le sujet pour toi pour prouver ton autonomie",
          "Escalader directement au COMEX sans passer par l'equipe",
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
    duration: "15 min",
    intro:
      "MobSuccess est née en 2015 avec l’ambition de proposer des solutions publicitaires novatrices, adaptées à la fragmentation des usages digitaux.",
    narrative: [
      "Tu dois comprendre pourquoi MobSuccess existe : le digital est fragmente, les formats se multiplient et les parcours utilisateurs evoluent vite. Les marques ont besoin de campagnes plus fines, personnalisees et mesurables.",
      "Ton role s’inscrit dans une promesse claire : simplifier cette complexite avec une communication digitale unifiee, performante et adaptee a la vitesse des usages.",
      "La vision du groupe : relier data, media et contenu pour produire des experiences utiles, mesurables et lisibles pour les clients finaux.",
      "Tu evolues dans un modele integre a deux familles : solutions Media (Widely, Farly, performance hors app) et solutions Contenu (Story), avec une boucle d’optimisation continue.",
      "Widely porte la publicite locale orientee visites magasin, avec une technologie proprietaire connectee aux leviers majeurs (Meta, Google, Display, CTV, YouTube, Snapchat, DOOH, SMS).",
      "Farly, activite historique, pilote acquisition et activation mobile via un modele performance (CPA), des mecaniques incentives et du conseil operationnel.",
      "Story agit comme content factory augmentee par l’IA : strategie social media, production multi-formats, iterations creatives rapides et mise a l’echelle.",
      "L’ambition que tu dois porter au quotidien : apprendre vite, iterer vite, documenter, et livrer un impact business mesurable.",
      "Dans la pratique, cela veut dire que chaque action doit etre reliee a un resultat observable : visites magasin, leads qualifies, ventes, usage app ou ROAS.",
    ],
    onboardingImpact: [
      "Comprendre le contexte marché aide à donner du sens aux choix produits et aux priorités d’équipe.",
      "Cette vision explique pourquoi la performance, la personnalisation et la mesure sont des réflexes attendus chez MobSuccess.",
      "Tu peux relier ton poste a une boucle claire : idee creative -> activation media -> mesure -> iteration.",
      "Tu comprends plus vite les interactions inter-equipes entre commerce, media, contenu, data, produit et fonctions support.",
      "Dès ton arrivée, tu sais a qui parler selon ton besoin : contenu, media, data, produit ou operations.",
      "Tu comprends comment ton travail contribue directement a un indicateur client (visites, leads, ventes, ROAS).",
    ],
    highlights: [
      "Les parcours utilisateurs évoluent vite, avec une diversité de formats et plateformes.",
      "La communication devient plus complexe à piloter et à mesurer pour les annonceurs.",
      "La performance et la personnalisation sont devenues des exigences clés.",
      "Le groupe s’appuie sur des technologies de pointe pour des expériences pertinentes et mesurables.",
      "MobSuccess simplifie l’accès à une communication digitale unifiée et performante.",
      "Les solutions du groupe couvrent creation de contenu, activation media et mesure de performance.",
      "La logique produit est orientee impact business mesurable, pas seulement volume de diffusion.",
      "Widely repond a des cas d’usage concrets : ouvertures magasin, notoriete locale, operations commerciales, digitalisation du prospectus.",
      "Farly combine acquisition d’app, stimulation d’usage et logique business orientee transactions.",
      "Story mobilise l’IA pour accelerer la creation, la declinaison multi-formats et l’optimisation creative.",
      "Le groupe travaille avec des enseignes majeures et des agences nationales (Publicis, OMD, GroupM, Heroiks).",
      "Synergie cle : les enseignements media nourrissent en retour les equipes creatives pour ameliorer les messages et visuels.",
    ],
    keyPoints: [
      "Contexte marché : fragmentation des plateformes, formats et parcours utilisateurs.",
      "Exigence client : communication personnalisee, pilotable et mesurable.",
      "Raison d'etre : simplifier la complexite digitale pour les annonceurs.",
      "Taille du groupe : environ 200 collaborateurs.",
      "Culture : ambition de croissance, execution rapide et apprentissage continu.",
      "Vision d’entreprise : combiner excellence operationnelle et innovation continue sur les usages digitaux.",
      "Promesse client : des campagnes utiles, performantes, pilotables et coherentes a grande echelle.",
      "Culture d’execution : tester, apprendre vite, corriger vite, documenter.",
      "Fonctions clefs mobilisees : commerce, operations media, contenu, data, produit, people, finance et legal.",
      "Objectif onboarding : comprendre ton role dans la chaine complete de valeur et ses dependances.",
      "Widely : ADN local, interlocuteur unique, studio + trading desk + bidder + conseil, et mesure de visites magasin via donnees GPS.",
      "Farly : strategie acquisition mobile, campagnes CPA, incentives offerwall, remuneration performance ou honoraires selon la mission.",
      "Story : brand strategists, DA, motion designers, realisateurs, chefs de projet, avec outils IA pour scorer, simuler et iterer.",
      "Performance hors app : generation de leads, ventes en ligne, optimisation continue selon CPA, CPL, ROAS.",
      "Le groupe articule Media et Contenu comme une boucle vertueuse de test & learn rapide.",
      "Ambition long terme : simplifier la complexite annonceur et ouvrir de nouveaux modeles donnant plus d’autonomie aux clients.",
      "Cap a venir : adresser aussi des annonceurs intermediaires (SMP/SMB) avec le meme niveau d’exigence performance.",
    ],
    quiz: [
      {
        question: "Pourquoi les annonceurs ont-ils besoin d'un partenaire comme MobSuccess ?",
        options: [
          "Les usages sont fragmentes, les formats se multiplient et la mesure devient plus complexe",
          "Les marques ont arrete de faire de la communication digitale",
          "Les plateformes imposent un seul format standard",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel duo structure le modele integre du groupe ?",
        options: [
          "Solutions Media et Solutions Contenu",
          "Solutions RH et Solutions Juridiques",
          "Solutions Infrastructure et Solutions Comptables",
        ],
        correctIndex: 0,
      },
      {
        question: "Dans le cours, quel est le role de Widely ?",
        options: [
          "Generer des visites magasin via des campagnes locales ciblees",
          "Gerer les contrats de travail des collaborateurs",
          "Produire uniquement des contenus internes",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel role est attribue a Story dans la chaine de valeur ?",
        options: [
          "Concevoir et industrialiser les contenus, avec l'IA, pour notoriete et performance",
          "Remplacer tous les leviers media payants",
          "Gerer uniquement le support informatique",
        ],
        correctIndex: 0,
      },
      {
        question: "Que signifie la boucle Media <-> Contenu decrite dans le cours ?",
        options: [
          "Aligner creation, diffusion et mesure pour accelerer le test & learn",
          "Separer totalement equipes creatives et equipes media",
          "Piloter la performance sans analyser les resultats",
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
      "Tu as ici une vue directe des expertises du groupe : contenu, diffusion sociale et mobile marketing se completent pour renforcer la visibilite des marques.",
      "La logique a retenir pour ton quotidien : creer, activer, mesurer. Chaque equipe contribue a cette chaine avec des objectifs operationnels clairs.",
      "Tu evolues dans une organisation en mouvement, positionnee sur la revolution publicitaire digitale et pilotee par des priorites business concretes.",
      "Le groupe s’articule autour de marques complementaires : Widely (local marketing), Farly (mobile marketing et usage apps), Story (contenu et notoriete).",
      "Les acquisitions renforcent le modele : Story pour accelerer la creation, Vectaury integre a Widely pour le geolocalise, TubeReach pour la video.",
      "Ce repere t’aide a comprendre ou se situe ton equipe dans la chaine de valeur, et avec quelles autres equipes tu dois collaborer au quotidien.",
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
      "Widely : campagnes locales personnalisees pour les enseignes sur les grands carrefours d’audience.",
      "Farly : acquisition mobile, telechargements et stimulation de l’usage applicatif.",
      "Story : production, contenu de marque et deploiement social/video.",
    ],
    keyPoints: [
      "Le contenu et la distribution sociale sont au cœur des offres.",
      "Le mobile marketing structure une partie des expertises.",
      "Les campagnes locales permettent des activations ciblées par point de vente.",
      "Le groupe se positionne sur des enjeux de visibilité et d’audience.",
      "Tu integres un groupe d’environ 200 collaborateurs et un chiffre d’affaires 2024 autour de 40,3 M€.",
      "Repere historique : premiers grands comptes, lancement de Widely, DSP, puis acquisitions strategiques.",
      "Logique d’ecosysteme : chaque marque specialisee renforce une etape differente du funnel marketing.",
      "Lecture onboarding : comprendre comment les equipes se passent le relais entre contenu, media et mesure.",
      "Vision : construire un groupe capable d’absorber la complexite du digital pour la rendre exploitable.",
      "Priorite operationnelle : produire des resultats tangibles, repetables et lisibles pour les clients.",
    ],
    quiz: [
      {
        question: "Quelles marques sont presentees comme complementaires dans le groupe ?",
        options: [
          "Widely, Farly et Story",
          "Payfit, Alan et Swile",
          "Meta, Google et YouTube",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel enchainement est explicitement mis en avant pour ton quotidien ?",
        options: [
          "Creer, activer, mesurer",
          "Planifier, attendre, relancer",
          "Produire, archiver, oublier",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel role principal est attribue a Farly dans ce chapitre ?",
        options: [
          "Acquisition et activation mobile",
          "Gestion des conges et de la paie",
          "Pilotage des comites de gouvernance",
        ],
        correctIndex: 0,
      },
      {
        question: "Quelle acquisition a ete integree a Widely pour le geolocalise ?",
        options: ["Vectaury", "TubeReach", "Story"],
        correctIndex: 0,
      },
      {
        question: "Pourquoi cette vue d'ensemble est importante pour un nouvel arrivant ?",
        options: [
          "Pour comprendre avec quelles equipes collaborer au quotidien",
          "Pour remplacer la feuille de route manager",
          "Pour eviter toute coordination transverse",
        ],
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
      "Tu trouves ici tout le socle pratique pour etre operationnel rapidement : regles bureau/teletravail, paie, conges et obligations legals.",
      "Tu dois appliquer des reflexes concrets : mise a jour de tes coordonnees dans Payfit, arret de travail envoye au RH sous 48h avec manager en copie, et usage des boites RH dediees pour paie, Swile, mutuelle et attestations.",
      "Tu dois aussi retenir les points forfait jours : 218 jours travailles sur l’annee civile, RTT variables selon calendrier et a solder avant le 31 decembre.",
      "Utilise cette base des qu’un doute apparait sur les pratiques internes.",
      "Priorite nouvel arrivant : securiser en premier tes acces, tes infos administratives et les bons contacts RH pour eviter les blocages des la premiere semaine.",
    ],
    onboardingImpact: [
      "Les règles claires évitent les frictions : tu sais où poser tes questions et comment déclarer tes informations.",
      "Maitriser ces basiques te fait gagner du temps et t’aide à rester autonome.",
    ],
    highlights: [
      "Charte Flex-Office et télétravail.",
      "Informations sur les contrats et la gestion de paie.",
      "Formations obligatoires (dont RGPD).",
      "Rappels sur l’obligation d’affichage et les règles de base au bureau.",
      "Adresses RH dediees : rh@mobsuccess.com et rh@storysuccess.fr.",
      "Arret de travail : envoi sous 48h au RH, manager en copie.",
    ],
    keyPoints: [
      "Les règles de travail sont centralisées pour faciliter la prise en main.",
      "Les pratiques bureau/télétravail sont clairement cadrées.",
      "La conformité passe par des formations obligatoires.",
      "La gestion de paie et les congés sont expliqués avec des points clés à retenir.",
      "Payfit sert a mettre a jour adresse, telephone et coordonnees bancaires.",
      "Transport en commun : prise en charge a 100 %, avec une partie au net et une partie au brut sur la paie.",
    ],
    quiz: [
      {
        question: "Pour les regles bureau / teletravail, quel document est la reference ?",
        options: ["Charte Flex-Office et teletravail", "Guide des voyages", "Plan commercial"],
        correctIndex: 0,
      },
      {
        question: "Ou dois-tu mettre a jour ton adresse, telephone ou RIB ?",
        options: ["Dans ton espace collaborateur Payfit", "Par message Slack a ton manager", "Par email a l'equipe commerce"],
        correctIndex: 0,
      },
      {
        question: "En cas d'arret de travail, quel reflexe est attendu ?",
        options: [
          "Envoyer l'arret sous 48h au RH avec manager en copie",
          "Le saisir uniquement dans Payfit sans prevenir personne",
          "Attendre la fin du mois pour l'envoyer",
        ],
        correctIndex: 0,
      },
      {
        question: "Quelle formation obligatoire est citee ?",
        options: ["RGPD", "Excel avance", "Design sprint"],
        correctIndex: 0,
      },
      {
        question: "Quelles boites mail utiliser pour les questions RH (paie, mutuelle, Swile, attestations) ?",
        options: ["rh@mobsuccess.com et rh@storysuccess.fr", "it@mobsuccess.com", "hello@mobsuccess.com"],
        correctIndex: 0,
      },
    ],
    source: "Informations pratiques liées à l’environnement de travail",
  },
  {
    slug: "grandes-etapes-onboarding",
    title: "Étapes de l'onboarding",
    focus: "Timeline d'integration",
    duration: "9 min",
    intro:
      "Ce document decrit le deroule des premiers jours et des premieres semaines pour transformer l'arrivee en prise de poste fluide.",
    narrative: [
      "Ton premier jour suit une sequence explicite : accueil Admin/RH, accueil manager, annonce d'arrivee sur Slack, dejeuner d'equipe et informations pratiques.",
      "Ta mise en conditions operationnelle inclut le materiel fourni par l'equipe IT, la Success Box remise par ton manager, la consultation du livret d'accueil et l'activation des acces outils.",
      "Tes bases d'autonomie : acces Google Workspace, plateformes metier, signature professionnelle et mise a jour du profil LinkedIn.",
      "Cette timeline te donne de la visibilite, reduit le stress d'arrivee et t’aligne avec les rituels de l'entreprise.",
      "Objectif concret du jour 1 : finir la journee avec tes acces actifs, tes interlocuteurs identifies, et une vision claire de ton plan de la semaine.",
    ],
    onboardingImpact: [
      "Tu sais ce qui t'attend avant, pendant et apres le jour 1.",
      "Tu peux verifier rapidement si tous les prerequis d'integration sont bien en place.",
    ],
    highlights: [
      "Jour 1 : accueil RH, accueil manager, annonce Slack et dejeuner equipe.",
      "Materiel et Success Box remis des l'arrivee.",
      "Activation des acces Google Workspace et plateformes professionnelles.",
      "Livret d'accueil a consulter et utiliser comme base de reference.",
    ],
    keyPoints: [
      "Ton onboarding est un parcours sequence, pas une simple check-list administrative.",
      "Le manager et les fonctions support sont co-responsables de la bonne integration.",
      "Les outils de communication interne sont critiques des la premiere semaine.",
      "Le suivi des etapes accelere la montee en autonomie.",
    ],
    quiz: [
      {
        question: "Quel enchainement est prevu le jour 1 dans la timeline ?",
        options: [
          "Accueil RH, accueil manager, annonce Slack, dejeuner d'equipe",
          "Formation budget, audit finance, revue annuelle",
          "Uniquement lecture autonome des documents",
        ],
        correctIndex: 0,
      },
      {
        question: "Qui remet la Success Box le premier jour ?",
        options: ["Le manager", "Le service juridique", "Le service commercial"],
        correctIndex: 0,
      },
      {
        question: "Quel acces doit etre active des le jour d'arrivee ?",
        options: ["Google Workspace (email)", "Acces CRM client admin complet", "Acces paie manager"],
        correctIndex: 0,
      },
      {
        question: "Pourquoi ce chapitre est utile pour un nouvel arrivant ?",
        options: [
          "Il clarifie les etapes et reduit les zones d'incertitude",
          "Il remplace tous les echanges avec l'equipe",
          "Il sert uniquement a la communication externe",
        ],
        correctIndex: 0,
      },
    ],
    source: "Grandes etapes de l'Onboarding",
  },
  {
    slug: "les-avantages",
    title: "Les avantages",
    focus: "Bénéfices & politique RH",
    duration: "7 min",
    intro:
      "Un focus sur les avantages proposés : carte Swile, prise en charge des transports, mutuelle Alan.",
    narrative: [
      "Tu identifies ici les avantages qui facilitent ton quotidien : repas, transport et couverture sante.",
      "Tu retrouves aussi les bons points de contact RH pour chaque question liee a ces sujets.",
      "Ton objectif est d’activer rapidement tes droits et de savoir ou trouver la bonne information.",
      "Le bon reflexe onboarding : activer ces avantages des les premiers jours pour stabiliser ton organisation personnelle et te concentrer sur ta prise de poste.",
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
        question: "Quel dispositif est prevu pour tes repas ?",
        options: ["Carte Swile", "Carte cadeau", "Ticket papier"],
        correctIndex: 0,
      },
      {
        question: "Quelle mutuelle est citee dans le chapitre ?",
        options: ["Alan", "AXA", "Harmonie"],
        correctIndex: 0,
      },
      {
        question: "Quel type de frais est pris en charge dans les avantages presentes ?",
        options: ["Transports en commun", "Vacances", "Parking privé"],
        correctIndex: 0,
      },
      {
        question: "En cas de question sur mutuelle/Swile/attestation, qui contacter en premier ?",
        options: ["Les contacts RH dedies", "Le support client externe", "L’equipe commerciale"],
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
      "Tu clarifies ici la gouvernance du groupe et les roles cles : comex, comite strategique et comite de direction.",
      "L’organigramme simplifie te sert a identifier rapidement les bons interlocuteurs selon ton besoin.",
      "Cette clarte t’evite les allers-retours et accelere les prises de decision.",
      "C’est un accelerateur d’autonomie : tu sais qui decide, qui opere et qui arbitre.",
      "Quand un sujet bloque, verifier l’organigramme est souvent l’action la plus rapide pour trouver le bon owner et debloquer la situation.",
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
      "Des responsables identifies par perimetres : produit, finance, marketing, commerce, people et legal.",
    ],
    keyPoints: [
      "L’organigramme aide à savoir qui contacter selon les sujets.",
      "La gouvernance est structurée autour de comités complémentaires.",
      "Les rôles clés sont identifiés pour fluidifier les décisions.",
      "Tu retrouves les responsables par domaines (produit, finance, marketing, commerce, people).",
      "Bon reflexe onboarding : commencer par ton manager, puis elargir aux referents de ton flux de travail.",
      "Pour un sujet transverse, identifier d’abord le proprietaire metier puis le sponsor decisionnel.",
      "La qualite de coordination entre equipes est un levier direct de performance client.",
      "Vision groupe : aligner toutes les fonctions autour d’une execution rapide et mesurable.",
    ],
    quiz: [
      {
        question: "Pour un nouvel arrivant, a quoi sert d'abord l'organigramme simplifie ?",
        options: [
          "Identifier rapidement les bons interlocuteurs",
          "Remplacer les echanges avec le manager",
          "Definir les objectifs financiers trimestriels",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel binome dirige le COMEX selon le cours ?",
        options: [
          "Thomas Fagot (CEO) et Xavier Dupont (DG)",
          "Chloé et Nicolas",
          "Quentin et Chloé",
        ],
        correctIndex: 0,
      },
      {
        question: "Quel comite regroupe les principaux actionnaires ?",
        options: ["Le comite strategique", "Le comite RH", "Le comite produit"],
        correctIndex: 0,
      },
      {
        question: "Quand tu dois accelerer une demande transverse, quel est le bon reflexe ?",
        options: [
          "Verifier l’organigramme pour contacter la bonne personne",
          "Envoyer le sujet a toute l’entreprise",
          "Attendre la prochaine reunion d’equipe",
        ],
        correctIndex: 0,
      },
    ],
    source: "Organigramme simplifié",
  },
];
