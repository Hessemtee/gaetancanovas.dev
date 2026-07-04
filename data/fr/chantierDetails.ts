export type DetailSection = {
  title: string
  body?: string[]
  bullets?: string[]
}

export type DetailFact = {
  label: string
  value: string
}

export type DetailMediaItem = {
  title: string
  description: string
  kind: 'video' | 'screenshot' | 'demo' | 'note'
}

export type DetailMedia = {
  title: string
  description: string
  items: DetailMediaItem[]
}

export type DetailPage = {
  title: string
  slug: string
  type: string
  description: string
  intro: string
  facts?: DetailFact[]
  media?: DetailMedia
  sections: DetailSection[]
  cta?: {
    label: string
    to: string
  }
}

export const chantierDetailsFr: DetailPage[] = [
  {
    title: 'Front-end à fort trafic',
    slug: 'front-end-fort-trafic',
    type: 'Retour d’expérience anonymisé',
    description: 'Retour d’expérience anonymisé sur les contraintes front-end de sites à fort trafic : SSR, CMS headless, performance, SEO, images et arbitrages techniques.',
    intro: 'Ce que les sites très exposés apprennent sur la performance, le SSR, les images, les CMS et les arbitrages front-end.',
    facts: [
      { label: 'Contexte', value: 'Projet web à forte exposition' },
      { label: 'Focus', value: 'Performance, SEO, rendu, contenus' },
      { label: 'Stack', value: 'Vue / Nuxt, SSR, CMS headless' },
      { label: 'Format', value: 'Retour anonymisé' }
    ],
    sections: [
      {
        title: 'Transparence',
        body: ['Ce contenu est volontairement anonymisé. Il ne contient ni code propriétaire, ni chiffres confidentiels, ni éléments permettant d’identifier précisément le projet. Il se concentre sur les problèmes, les décisions et les enseignements réutilisables.']
      },
      {
        title: 'Ce qui change à fort trafic',
        body: ['À petite échelle, beaucoup de problèmes front-end restent invisibles. À forte exposition, ils deviennent concrets : une image trop lourde ralentit une page consultée massivement, un script tiers peut dégrader une expérience entière, une régression SSR peut toucher le SEO, et une intégration CMS fragile peut bloquer une équipe éditoriale.'],
      },
      {
        title: 'Contraintes typiques',
        bullets: [
          'Pages éditoriales nombreuses, contenus hétérogènes et besoin de publication rapide.',
          'Contraintes SEO fortes : indexation, balisage, rendu serveur, maillage et stabilité des URLs.',
          'Images et médias nombreux, avec un impact direct sur le chargement perçu.',
          'Scripts tiers, publicités, embeds ou tags qui peuvent contredire les objectifs de performance.',
          'Dette technique existante : composants historiques, conventions implicites, migrations progressives.'
        ]
      },
      {
        title: 'Ma manière d’aborder le sujet',
        body: ['Je préfère partir d’une cartographie simple : quelles pages comptent vraiment, quelles zones pèsent le plus, quels composants sont critiques, quels scripts sont indispensables, quelles régressions sont les plus coûteuses. Ensuite seulement, on peut prioriser les actions : supprimer, différer, compresser, découper, documenter ou stabiliser.'],
      },
      {
        title: 'Ce que j’en retiens',
        body: ['Une bonne optimisation front-end n’est pas seulement une chasse aux scores. Elle consiste à identifier ce qui gêne réellement l’utilisateur, le moteur de recherche, l’équipe éditoriale ou l’équipe technique, puis à prioriser ce qui produit le plus d’impact avec le moins de risque.']
      },
      {
        title: 'Ce que je réutilise ailleurs',
        bullets: [
          'Toujours distinguer performance mesurée, performance ressentie et maintenabilité.',
          'Ne pas traiter le SEO comme une couche finale : il dépend souvent de l’architecture front.',
          'Préférer les améliorations progressives et vérifiables aux réécritures spectaculaires.',
          'Documenter les arbitrages pour éviter que les mêmes problèmes réapparaissent six mois plus tard.'
        ]
      }
    ]
  },
  {
    title: 'Moderniser un front existant',
    slug: 'moderniser-front',
    type: 'Playbook technique',
    description: 'Playbook pour moderniser un front-end existant : migration Vue/Nuxt, dette technique, stabilisation, cartographie, découpage et livraison progressive.',
    intro: 'Moderniser un front existant ne consiste pas seulement à changer de framework ou à réécrire du code.',
    facts: [
      { label: 'Méthode', value: 'Cartographier · Découper · Stabiliser · Mesurer' },
      { label: 'Terrain', value: 'Vue, Nuxt, React, projets existants' },
      { label: 'Objectif', value: 'Livrer sans big bang inutile' }
    ],
    sections: [
      {
        title: 'Le vrai sujet',
        body: ['Le framework n’est souvent que la partie visible. Le vrai sujet, c’est le système : routes, stores, conventions, composants critiques, intégrations API, comportements métier, dépendances, tests manquants et habitudes d’équipe. Une migration qui ignore cela peut produire un code plus moderne, mais un produit moins stable.']
      },
      {
        title: '1. Cartographier',
        body: ['Avant de toucher au code, je cherche à comprendre ce qui tient le projet debout. Quelles pages sont critiques ? Quelles dépendances sont réellement utilisées ? Où sont les effets de bord ? Quels composants sont réutilisés partout ? Quels fichiers ne sont plus compris par personne ?'],
        bullets: [
          'Lister les routes, layouts, stores, plugins et modules critiques.',
          'Identifier les zones sensibles : paiement, formulaires, SEO, login, pages très consultées.',
          'Repérer les dépendances qui bloquent une montée de version ou une migration.',
          'Écrire une carte simple du système plutôt qu’un audit interminable.'
        ]
      },
      {
        title: '2. Découper',
        body: ['Une bonne modernisation cherche des coutures naturelles. On isole une page, une famille de composants, un flux, une dépendance ou une convention. L’objectif est de livrer des morceaux utiles, testables et réversibles.'],
      },
      {
        title: '3. Stabiliser',
        body: ['Moderniser sans stabiliser revient à déplacer la dette. Chaque étape doit améliorer la lisibilité du projet : conventions, documentation courte, composants mieux nommés, règles de contribution, scripts de validation et points de contrôle avant mise en production.']
      },
      {
        title: '4. Mesurer',
        body: ['Ce qui compte n’est pas seulement le nombre de fichiers migrés. Je regarde la capacité à livrer, la réduction des régressions, la performance, la lisibilité, la dette restante et la confiance de l’équipe dans le système.']
      },
      {
        title: 'IA',
        body: ['L’IA peut aider à explorer une base de code, produire une première documentation, comparer plusieurs approches ou générer des scripts de migration. Mais elle ne remplace ni la connaissance produit, ni la lecture critique, ni la responsabilité de valider ce qui part en production.']
      }
    ]
  },
  {
    title: 'Backlog JV',
    slug: 'backlog-jv',
    type: 'Application desktop terminée',
    description: 'Backlog JV est une application desktop Electron pour organiser, filtrer et suivre une bibliothèque personnelle de jeux vidéo.',
    intro: 'Une application desktop pour organiser une bibliothèque de jeux vidéo sans transformer le loisir en tableur.',
    facts: [
      { label: 'Statut', value: 'Application desktop terminée' },
      { label: 'Format', value: 'Electron, usage local' },
      { label: 'Données', value: 'Bibliothèque personnelle, filtres, statuts' },
      { label: 'À ajouter', value: 'Captures réelles + vidéo courte' }
    ],
    media: {
      title: 'Démo visuelle',
      description: 'Cette page accueillera les vraies captures de l’application, une courte vidéo de démonstration et, plus tard, une éventuelle mini-démo web avec données fictives.',
      items: [
        {
          title: 'Vidéo courte',
          kind: 'video',
          description: 'Parcours recommandé : ouverture de l’app, vue principale, filtres, fiche jeu, changement de statut. Objectif : 45 à 60 secondes.'
        },
        {
          title: 'Captures commentées',
          kind: 'screenshot',
          description: 'Captures prévues : vue principale, fiche jeu, filtres, édition, statuts et éventuelles statistiques.'
        },
        {
          title: 'Démo web simplifiée',
          kind: 'demo',
          description: 'Piste future : une version navigateur avec données fictives pour comprendre le produit sans télécharger l’app desktop.'
        }
      ]
    },
    sections: [
      {
        title: 'Le problème',
        body: ['Une bibliothèque de jeux vidéo grossit vite : achats en promotion, abonnements, jeux commencés puis abandonnés, envies de 100%, titres multi, jeux à garder pour plus tard. Le risque n’est pas seulement de ne pas savoir quoi lancer : c’est de perdre le fil de ce qu’on voulait faire avec chaque jeu.']
      },
      {
        title: 'L’intention produit',
        body: ['Backlog JV n’essaie pas de devenir un réseau social, un clone de Steam ou un service cloud. C’est un outil personnel : ouvrir, trier, décider, reprendre le fil. Le produit doit aider à répondre à une question simple : “à quoi j’ai envie de jouer maintenant, et pourquoi ?”']
      },
      {
        title: 'Ce que l’application permet',
        bullets: [
          'Créer et organiser une bibliothèque personnelle de jeux.',
          'Associer des statuts adaptés à l’usage réel : à faire, en cours, terminé, 100%, platiné, multi, pause, abandonné ou long terme.',
          'Filtrer rapidement selon l’envie, la plateforme, le statut ou le type d’objectif.',
          'Garder des notes personnelles pour éviter de reprendre un jeu sans contexte.',
          'Transformer une liste confuse en outil de décision léger.'
        ]
      },
      {
        title: 'Pourquoi une app desktop',
        body: ['Le choix Electron correspond à l’usage : un outil personnel, local, lancé quand on organise sa bibliothèque ou quand on veut décider quoi lancer. Le projet n’a pas besoin d’être un SaaS, ni de stocker des données personnelles en ligne pour être utile.']
      },
      {
        title: 'Décisions assumées',
        bullets: [
          'Privilégier l’usage local plutôt qu’un compte utilisateur.',
          'Éviter les mécaniques sociales ou de scoring qui transforment le loisir en obligation.',
          'Faire une interface de gestion claire avant d’ajouter des fonctionnalités avancées.',
          'Garder le téléchargement public secondaire tant que les builds signés et la distribution ne sont pas propres.'
        ]
      },
      {
        title: 'Ce que ce projet montre',
        bullets: [
          'Capacité à concevoir un outil personnel complet et terminé.',
          'Réflexion produit autour d’un usage réel et récurrent.',
          'Interface de gestion, filtres, statuts et fiches détaillées.',
          'Choix pragmatique d’une app desktop pour un usage local.',
          'Capacité à finir un projet et à le rendre présentable sans en faire un faux SaaS.'
        ]
      },
      {
        title: 'Visuels à venir',
        body: ['Les captures, la courte vidéo et l’éventuel poster seront ajoutés à partir de vrais exports de l’application. Le projet est terminé ; la présentation publique doit rester aussi honnête que le produit.']
      }
    ]
  },
  {
    title: 'TNSFC — club média fictif',
    slug: 'tnsfc',
    type: 'Prototype produit',
    description: 'TNSFC est un prototype produit autour d’un club fictif : site média, data, storytelling sportif, contenus premium et expérience fan.',
    intro: 'Un terrain libre pour concevoir un site de club moderne : média, data, storytelling, membership, merchandising et expérience fan.',
    facts: [
      { label: 'Statut', value: 'Prototype éditorial à cadrer' },
      { label: 'Objectif', value: 'Site de club moderne et narratif' },
      { label: 'Intérêt', value: 'Produit, média, data, fan experience' }
    ],
    sections: [
      {
        title: 'Pourquoi ce projet',
        body: ['TNSFC sert de bac à sable public. L’intérêt n’est pas de montrer un vrai client, mais de concevoir un produit complet sans contrainte de confidentialité : un club, une saison, une base de contenus, des données, des parcours fan et des surfaces éditoriales.']
      },
      {
        title: 'Ce que le prototype explore',
        bullets: [
          'Une home orientée produit : billetterie, saison, membership, merch, média et données.',
          'Un parcours fan complet : match center, archives, data hub, contenus premium.',
          'Une logique éditoriale : raconter une saison, un club, un territoire et une communauté.',
          'Une réflexion sur la manière dont l’IA peut aider à structurer ou enrichir des contenus fictifs sans remplacer la direction éditoriale.'
        ]
      },
      {
        title: 'Ce que ce chantier peut montrer',
        body: ['Une fois matérialisé, ce prototype permettra de montrer une capacité à penser au-delà de la page : architecture d’information, composants éditoriaux, données sportives, hiérarchie commerciale et expérience récurrente pour des supporters.']
      }
    ]
  },
  {
    title: 'File Requester',
    slug: 'file-requester',
    type: 'Exploration produit',
    description: 'File Requester est une exploration produit autour d’un SaaS minimal pour demander, recevoir et suivre des fichiers clients sans friction.',
    intro: 'Un concept SaaS minimal : remplacer les échanges de fichiers confus par un lien clair, réutilisable et facile à comprendre.',
    facts: [
      { label: 'Statut', value: 'Exploration produit' },
      { label: 'Promesse', value: 'Un lien, un dépôt, un suivi' },
      { label: 'Risque à éviter', value: 'Transformer un outil simple en usine à gaz' }
    ],
    sections: [
      {
        title: 'Le problème',
        body: ['Demander des fichiers semble simple, jusqu’au moment où les échanges s’accumulent : pièces manquantes, mauvais formats, relances, emails perdus et absence de suivi clair. Le coût n’est pas technique au départ, il est surtout organisationnel.']
      },
      {
        title: 'La promesse',
        body: ['Un lien. Un dépôt. Une confirmation. Rien de plus.']
      },
      {
        title: 'Ce que le concept explore',
        bullets: [
          'Un parcours ultra-court pour l’expéditeur.',
          'Une interface claire pour celui qui reçoit les fichiers.',
          'Une logique de suivi simple : demandé, reçu, relancé, terminé.',
          'Des automatisations utiles, sans transformer un outil simple en usine à gaz.',
          'Des cas d’usage concrets : freelance, agence, administratif, onboarding client, pièces justificatives.'
        ]
      },
      {
        title: 'Statut',
        body: ['Concept cadré, prototype à venir. Ce n’est pas encore un produit commercial public, mais un bon exemple de réflexion autour d’un outil minimal et utile.']
      }
    ]
  }
]
