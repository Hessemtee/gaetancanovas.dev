export type BlogArticle = {
  title: string
  slug: string
  category: string
  description: string
  intro: string
  date?: string
  readingTime?: string
  status?: string
  sections: {
    title: string
    body: string[]
  }[]
}

export const blogDetailsFr: BlogArticle[] = [
  {
    title: 'Moderniser un projet front sans tout casser',
    slug: 'moderniser-un-projet-front-sans-tout-casser',
    category: 'Technique',
    date: '2026',
    readingTime: '6 min',
    status: 'Article socle',
    description: 'Pourquoi une migration réussie commence rarement par le choix du framework, mais par une lecture honnête du système existant.',
    intro: 'Une migration front-end réussie commence rarement par le code. Elle commence par la compréhension du système.',
    sections: [
      {
        title: 'La tentation de repartir de zéro',
        body: [
          'Quand un front vieillit, la solution la plus séduisante est souvent la plus dangereuse : tout réécrire. Nouveau framework, nouvelle architecture, nouveau design system, nouvelle stack de build. Sur le papier, tout devient plus propre. Dans la réalité, le produit continue à vivre pendant que l’équipe tente de reconstruire ce qu’elle ne comprend parfois plus complètement.',
          'Le problème d’une réécriture n’est pas seulement son coût. C’est le décalage entre la promesse technique et les contraintes produit : les pages doivent rester accessibles, les équipes éditoriales doivent publier, le SEO ne doit pas décrocher, les intégrations ne doivent pas casser, et les utilisateurs ne doivent pas servir de banc de test.'
        ]
      },
      {
        title: 'Avant le framework, lire le système',
        body: [
          'Une migration commence par une lecture honnête du système existant. Où sont les routes critiques ? Quels composants sont réellement centraux ? Quelles dépendances bloquent les évolutions ? Quelles conventions ne sont écrites nulle part mais structurent toute la base de code ? Où la dette technique est-elle acceptable, et où devient-elle un risque produit ?',
          'Cette étape n’a rien de spectaculaire. Pourtant, elle évite de confondre modernisation et remplacement cosmétique. Une base de code peut être ancienne mais compréhensible. À l’inverse, un projet récent peut déjà être fragile si personne ne sait expliquer ses décisions.'
        ]
      },
      {
        title: 'Cartographier, découper, stabiliser, mesurer',
        body: [
          'J’aime résumer l’approche en quatre verbes : cartographier, découper, stabiliser, mesurer. Cartographier pour savoir où l’on met les pieds. Découper pour éviter le big bang. Stabiliser pour ne pas déplacer la dette. Mesurer pour vérifier que l’effort produit autre chose qu’une impression de modernité.',
          'Le découpage est souvent la partie la plus importante. On peut isoler une famille de pages, un composant transversal, une dépendance, un flux utilisateur ou une convention. L’objectif est de créer des étapes livrables et réversibles, pas de gagner un débat abstrait sur la meilleure architecture possible.'
        ]
      },
      {
        title: 'La modernisation doit améliorer la livraison',
        body: [
          'Un chantier technique a de la valeur s’il rend l’équipe plus capable de livrer demain. Cela peut passer par des composants plus lisibles, une configuration plus simple, un routage plus clair, des scripts de validation, des conventions documentées ou une meilleure séparation des responsabilités.',
          'La question utile n’est donc pas seulement “est-ce plus moderne ?”. Elle est plutôt : “est-ce plus facile à comprendre, plus sûr à modifier, plus stable en production, plus clair pour les personnes qui vont maintenir ce code ?”.'
        ]
      },
      {
        title: 'Où l’IA peut aider',
        body: [
          'L’IA peut être utile dans ce type de chantier, à condition de ne pas lui demander de décider. Elle peut aider à résumer une zone de code, générer une première documentation, comparer plusieurs stratégies de migration, repérer des patterns répétitifs ou produire des scripts de transformation.',
          'Mais elle ne sait pas ce qui est critique pour le produit, ce qui est acceptable pour l’équipe, ni quelles régressions seraient vraiment graves. Elle accélère certaines tâches, pas la responsabilité technique.'
        ]
      },
      {
        title: 'Le bon signal de réussite',
        body: [
          'Une migration réussie n’est pas celle qui change tout le plus vite. C’est celle qui permet au produit de continuer à vivre pendant que le socle devient plus sain. Si l’équipe livre plus sereinement, comprend mieux le système et réduit les régressions, alors la modernisation a produit de la valeur réelle.'
        ]
      }
    ]
  },
  {
    title: 'L’IA comme outil de clarification, pas comme promesse magique',
    slug: 'ia-outil-de-clarification',
    category: 'IA appliquée',
    date: '2026',
    readingTime: '5 min',
    status: 'Article socle',
    description: 'Comment utiliser l’IA pour structurer, prototyper, comparer et documenter sans perdre le sens du problème.',
    intro: 'L’IA est intéressante quand elle aide à mieux poser un problème, pas quand elle ajoute du bruit.',
    sections: [
      {
        title: 'Le piège de la promesse magique',
        body: [
          'L’IA est souvent présentée comme une réponse avant même que la question soit claire. On lui demande de produire plus vite, de générer plus d’idées, d’automatiser davantage. Mais accélérer un problème mal posé ne crée pas forcément de valeur. Cela peut simplement produire plus de bruit, plus vite.',
          'Je préfère l’utiliser comme un outil de clarification. Pas comme une couche magique posée sur un produit, mais comme un partenaire de travail pour découper, reformuler, comparer et rendre visibles les choix implicites.'
        ]
      },
      {
        title: 'Clarifier avant produire',
        body: [
          'Dans un projet, l’IA devient utile quand elle aide à mettre de l’ordre : résumer un contexte, reformuler une contrainte, produire plusieurs angles d’analyse, lister les risques, transformer une intuition vague en options discutables.',
          'Ce travail est parfois plus précieux que la génération directe de code ou de contenu. Une bonne reformulation permet de voir que le sujet n’est pas “ajouter une fonctionnalité”, mais “réduire une friction”, “rendre une décision plus simple” ou “éviter une mauvaise dette”.'
        ]
      },
      {
        title: 'Prototyper sans confondre vitesse et produit',
        body: [
          'L’IA aide beaucoup à prototyper : générer une première interface, écrire des variantes de contenu, produire des données fictives, comparer plusieurs parcours ou obtenir une base de code jetable. C’est très utile pour matérialiser rapidement une idée.',
          'Mais un prototype rapide n’est pas une validation. Il peut donner l’impression qu’un produit existe alors qu’il manque encore l’essentiel : usage réel, contraintes, modèle de données, maintenance, distribution, sécurité, support et arbitrages.'
        ]
      },
      {
        title: 'Garder la décision humaine',
        body: [
          'L’IA peut proposer, mais quelqu’un doit choisir. Elle peut structurer, mais quelqu’un doit décider ce qui est juste, utile, crédible ou publiable. C’est particulièrement vrai sur un site professionnel : le risque n’est pas seulement d’écrire quelque chose de faux, mais d’écrire quelque chose qui sonne vrai sans être vraiment assumé.',
          'Le bon usage consiste donc à garder une boucle critique : pourquoi cette réponse ? qu’est-ce qui manque ? qu’est-ce qui est invérifiable ? qu’est-ce qui relève du style plutôt que du fond ?'
        ]
      },
      {
        title: 'Une IA discrète mais utile',
        body: [
          'Dans mon travail, l’IA m’intéresse moins comme fonctionnalité visible que comme levier discret : préparer une réunion, clarifier un plan, transformer des notes en structure, comparer des options techniques, produire une première documentation ou accélérer une exploration produit.',
          'C’est dans cette discrétion qu’elle devient utile. Elle ne remplace pas le jugement ; elle rend parfois le jugement plus facile à exercer.'
        ]
      }
    ]
  },
  {
    title: 'Pourquoi je garde un atelier d’idées',
    slug: 'pourquoi-je-garde-un-atelier-idees',
    category: 'Produit',
    date: '2026',
    readingTime: '4 min',
    status: 'Note produit',
    description: 'Toutes les idées ne doivent pas devenir des produits, mais certaines méritent d’être structurées.',
    intro: 'Un atelier d’idées permet de tester sans tout transformer en projet actif.',
    sections: [
      {
        title: 'Toutes les idées ne méritent pas un projet',
        body: [
          'Avoir des idées est facile. Leur donner immédiatement le statut de projet est plus dangereux. Un projet demande du temps, de l’attention, des décisions, parfois de l’argent, et surtout une forme d’engagement mental. Si tout devient projet, plus rien n’avance vraiment.',
          'Un atelier d’idées sert justement à éviter cette confusion. Il permet de poser une intuition quelque part sans lui donner trop vite une importance qu’elle n’a pas encore gagnée.'
        ]
      },
      {
        title: 'Structurer pour mieux abandonner',
        body: [
          'Documenter une idée ne veut pas dire qu’on va la faire. Au contraire, cela permet souvent de l’abandonner proprement. Quand on écrit la promesse, le public, le problème, le risque et la première version possible, beaucoup d’idées perdent leur évidence. C’est une bonne chose.',
          'Une idée qui ne survit pas à une page de cadrage n’a probablement pas besoin de plusieurs semaines de développement.'
        ]
      },
      {
        title: 'Un espace entre le brouillon et le produit',
        body: [
          'L’atelier est cet espace intermédiaire. Ce n’est ni une todo list, ni un backlog produit, ni un portfolio. C’est une zone de tri : concepts, prototypes, manifestes, notes, débuts de systèmes, hypothèses à vérifier.',
          'Certaines idées y resteront. D’autres deviendront des chantiers plus sérieux. D’autres seront fusionnées, simplifiées ou oubliées. Ce n’est pas un échec ; c’est le fonctionnement normal d’un espace d’exploration.'
        ]
      },
      {
        title: 'Pourquoi l’exposer sur un site professionnel',
        body: [
          'Afficher un atelier d’idées peut sembler moins propre qu’un portfolio classique. Mais c’est aussi plus honnête. Cela montre une manière de penser : cadrer, trier, nommer, renoncer, reprendre, relier. Pour un profil orienté produit et front-end, cette manière de penser compte autant que la capture finale d’un écran terminé.'
        ]
      }
    ]
  },
  {
    title: 'Ce qu’un site à fort trafic apprend sur la performance',
    slug: 'site-a-fort-trafic-performance',
    category: 'Performance',
    date: '2026',
    readingTime: '5 min',
    status: 'Retour d’expérience',
    description: 'Images, SSR, CMS, scripts tiers, SEO : les vrais problèmes apparaissent quand le trafic rend chaque compromis visible.',
    intro: 'La performance devient concrète quand chaque compromis touche beaucoup d’utilisateurs.',
    sections: [
      {
        title: 'À forte exposition, les détails changent d’échelle',
        body: [
          'Sur un petit site, une image trop lourde ou un script inutile peut sembler secondaire. Sur un site très consulté, ces détails deviennent des coûts répétés des milliers ou millions de fois. Ils pèsent sur le chargement, l’expérience, le SEO, la consommation réseau et parfois même l’infrastructure.',
          'La performance n’est alors plus une obsession de développeur. Elle devient une question produit : combien de personnes subissent cette lenteur, sur quelles pages, à quel moment, et avec quelles conséquences ?'
        ]
      },
      {
        title: 'Le CMS est souvent au centre du problème',
        body: [
          'Beaucoup de sites éditoriaux dépendent d’un CMS. C’est une force pour publier vite, mais aussi une source de complexité : contenus hétérogènes, images envoyées dans des formats différents, embeds, champs optionnels, anciennes pages, nouveaux templates, exceptions éditoriales.',
          'Optimiser le front sans comprendre la chaîne de contenu revient souvent à traiter le symptôme. Il faut aussi regarder comment les contenus sont produits, transformés, rendus et maintenus.'
        ]
      },
      {
        title: 'SSR, hydratation et scripts tiers',
        body: [
          'Le rendu serveur aide le SEO et le chargement initial, mais il ne garantit pas une expérience fluide. L’hydratation, le JavaScript envoyé au client, les composants interactifs et les scripts tiers peuvent annuler une partie du bénéfice.',
          'Les scripts tiers sont particulièrement sensibles. Ils répondent parfois à de vrais besoins métier, mais ils doivent être chargés avec discernement : au bon moment, sur les bonnes pages, avec un impact mesuré.'
        ]
      },
      {
        title: 'Optimiser, c’est choisir',
        body: [
          'On ne peut pas tout optimiser tout le temps. La meilleure démarche consiste à choisir les zones qui comptent : pages les plus vues, templates critiques, parcours SEO, images les plus lourdes, composants les plus répétés, scripts les plus coûteux.',
          'Une optimisation utile est souvent moins spectaculaire qu’une réécriture : quelques images mieux servies, un script différé, un composant simplifié, une condition de chargement, une convention éditoriale mieux documentée.'
        ]
      },
      {
        title: 'Le bon objectif',
        body: [
          'Le bon objectif n’est pas d’obtenir un score parfait partout. C’est de réduire les frictions visibles, de stabiliser ce qui casse souvent, de rendre les arbitrages explicites et de créer un front que l’équipe pourra continuer à faire évoluer sans repartir de zéro.'
        ]
      }
    ]
  }
]
