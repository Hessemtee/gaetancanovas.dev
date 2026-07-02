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

export const workDetailsEn: DetailPage[] = [
  {
    title: 'High-traffic front-end',
    slug: 'high-traffic-front-end',
    type: 'Anonymized experience note',
    description: 'An anonymized experience note about front-end constraints on high-traffic websites: SSR, headless CMS, performance, SEO, images and technical tradeoffs.',
    intro: 'What highly exposed websites teach about performance, SSR, images, CMS constraints and front-end tradeoffs.',
    facts: [
      { label: 'Context', value: 'High-exposure web project' },
      { label: 'Focus', value: 'Performance, SEO, rendering, content' },
      { label: 'Stack', value: 'Vue / Nuxt, SSR, headless CMS' },
      { label: 'Format', value: 'Anonymized note' }
    ],
    sections: [
      {
        title: 'Transparency',
        body: ['This content is intentionally anonymized. It does not include proprietary code, confidential figures or anything that would identify the project precisely. It focuses on reusable problems, decisions and lessons.']
      },
      {
        title: 'What changes at scale',
        body: ['At small scale, many front-end issues stay invisible. With high exposure, they become concrete: a heavy image slows down a page seen by many visitors, a third-party script can degrade a whole experience, an SSR regression can affect SEO, and a fragile CMS integration can block an editorial team.']
      },
      {
        title: 'Typical constraints',
        bullets: [
          'Many editorial pages, heterogeneous content and a need for fast publishing.',
          'Strong SEO constraints: indexing, metadata, server rendering, internal linking and stable URLs.',
          'Many images and media assets with a direct impact on perceived loading speed.',
          'Third-party scripts, ads, embeds or tags that may contradict performance goals.',
          'Existing technical debt: legacy components, implicit conventions and progressive migrations.'
        ]
      },
      {
        title: 'How I approach it',
        body: ['I prefer starting with a simple map: which pages really matter, which areas are heavy, which components are critical, which scripts are necessary, and which regressions are the most costly. Only then does prioritization make sense: remove, defer, compress, split, document or stabilize.']
      },
      {
        title: 'Takeaway',
        body: ['Good front-end optimization is not just chasing scores. It is about identifying what actually hurts users, search engines, editorial teams or engineering teams, then prioritizing what creates the most impact with the least risk.']
      },
      {
        title: 'What I reuse elsewhere',
        bullets: [
          'Always distinguish measured performance, perceived performance and maintainability.',
          'Do not treat SEO as a final layer: it often depends on front-end architecture.',
          'Prefer progressive, verifiable improvements over spectacular rewrites.',
          'Document tradeoffs so the same issues do not reappear six months later.'
        ]
      }
    ]
  },
  {
    title: 'Modernizing an existing front-end',
    slug: 'modernizing-existing-front-end',
    type: 'Technical playbook',
    description: 'A playbook to modernize an existing front-end: Vue/Nuxt migration, technical debt, stabilization, mapping, slicing and progressive delivery.',
    intro: 'Modernizing an existing front-end is not only about changing framework or rewriting code.',
    facts: [
      { label: 'Method', value: 'Map · Slice · Stabilize · Measure' },
      { label: 'Field', value: 'Vue, Nuxt, React, existing projects' },
      { label: 'Goal', value: 'Ship without an unnecessary big bang' }
    ],
    sections: [
      {
        title: 'The real topic',
        body: ['The framework is often only the visible part. The real topic is the system: routes, stores, conventions, critical components, API integrations, business behavior, dependencies, missing tests and team habits. A migration that ignores this can produce more modern code but a less stable product.']
      },
      {
        title: '1. Map',
        body: ['Before touching the code, I try to understand what keeps the project standing. Which pages are critical? Which dependencies are actually used? Where are the side effects? Which components are reused everywhere? Which files does nobody understand anymore?'],
        bullets: [
          'List critical routes, layouts, stores, plugins and modules.',
          'Identify sensitive areas: payment, forms, SEO, login, high-traffic pages.',
          'Spot dependencies that block an upgrade or migration.',
          'Write a simple system map instead of an endless audit.'
        ]
      },
      {
        title: '2. Slice',
        body: ['A good modernization effort looks for natural seams. You isolate a page, a component family, a flow, a dependency or a convention. The goal is to ship useful, testable and reversible pieces.']
      },
      {
        title: '3. Stabilize',
        body: ['Modernizing without stabilizing just moves the debt. Each step should make the project easier to understand through conventions, short documentation, clearer components, contribution rules, validation scripts and checkpoints before production.']
      },
      {
        title: '4. Measure',
        body: ['What matters is not only the number of migrated files. I look at the ability to ship, fewer regressions, performance, readability, remaining debt and team confidence in the system.']
      },
      {
        title: 'AI',
        body: ['AI can help explore a codebase, draft documentation, compare approaches or generate migration scripts. But it does not replace product knowledge, critical reading or responsibility for what ships to production.']
      }
    ]
  },
  {
    title: 'Game Backlog',
    slug: 'game-backlog',
    type: 'Finished desktop app',
    description: 'Game Backlog is an Electron desktop app to organize, filter and track a personal video game library.',
    intro: 'A desktop app to organize a video game library without turning leisure into a spreadsheet.',
    facts: [
      { label: 'Status', value: 'Finished desktop app' },
      { label: 'Format', value: 'Electron, local use' },
      { label: 'Data', value: 'Personal library, filters, statuses' },
      { label: 'Next proof', value: 'Real screenshots + short video' }
    ],
    media: {
      title: 'Visual proof to add',
      description: 'The page is ready for real screenshots, a short video and, later, a simplified web demo with fake data. No fake screenshot is published in this version.',
      items: [
        {
          title: 'Short video',
          kind: 'video',
          description: 'Suggested flow: open the app, show the main view, filters, game detail and status change. Target length: 45 to 60 seconds.'
        },
        {
          title: 'Commented screenshots',
          kind: 'screenshot',
          description: 'Slots for 4 to 6 screenshots: main board, game detail, filters, editing, statuses and possible stats.'
        },
        {
          title: 'Simplified web demo',
          kind: 'demo',
          description: 'V1.5 option: a browser version with fake data to explain the product without downloading the desktop app.'
        }
      ]
    },
    sections: [
      {
        title: 'The problem',
        body: ['A video game library grows quickly: sales, subscriptions, games started then abandoned, 100% goals, multiplayer titles and games kept for later. The risk is not only not knowing what to launch, but losing track of what you wanted to do with each game.']
      },
      {
        title: 'Product intent',
        body: ['Game Backlog does not try to become a social network, a Steam clone or a cloud service. It is a personal tool: open, sort, decide, resume context. The product should help answer one simple question: “what do I actually want to play now, and why?”']
      },
      {
        title: 'What the app enables',
        bullets: [
          'Create and organize a personal game library.',
          'Use statuses that match real usage: to play, playing, finished, 100%, platinum, multiplayer, paused, abandoned or long-term.',
          'Filter quickly by mood, platform, status or goal type.',
          'Keep personal notes to avoid returning to a game without context.',
          'Turn a confusing list into a lightweight decision tool.'
        ]
      },
      {
        title: 'Why a desktop app',
        body: ['Electron matches the use case: a personal local tool opened when organizing a library or deciding what to play next. The project does not need to be a SaaS or store personal data online to be useful.']
      },
      {
        title: 'Intentional decisions',
        bullets: [
          'Prioritize local use over user accounts.',
          'Avoid social mechanics or scoring systems that turn leisure into obligation.',
          'Build a clear management interface before adding advanced features.',
          'Keep public download secondary until builds, signing and distribution are clean.'
        ]
      },
      {
        title: 'What it shows',
        bullets: [
          'Ability to design and finish a complete personal tool.',
          'Product thinking around a real recurring use case.',
          'Management UI, filters, statuses and detail views.',
          'A pragmatic desktop choice for local use.',
          'Ability to present a finished project without pretending it is a SaaS.'
        ]
      },
      {
        title: 'Before V1 publication',
        body: ['The page still needs real assets: screenshots, short video and a possible poster. The structure is ready, but it is better not to publish fictional visuals for a project presented as finished.']
      }
    ]
  },
  {
    title: 'TNSFC — fictional media club',
    slug: 'tnsfc',
    type: 'Product prototype',
    description: 'TNSFC is a product prototype around a fictional club: media website, data, sports storytelling, premium content and fan experience.',
    intro: 'A free playground to design a modern club website: media, data, storytelling, membership, merchandising and fan experience.',
    facts: [
      { label: 'Status', value: 'Editorial prototype to frame' },
      { label: 'Goal', value: 'Modern narrative club website' },
      { label: 'Interest', value: 'Product, media, data, fan experience' }
    ],
    sections: [
      {
        title: 'Why this project',
        body: ['TNSFC is a public sandbox. The point is not to showcase a real client, but to design a complete product without confidentiality constraints: a club, a season, a content base, data, fan journeys and editorial surfaces.']
      },
      {
        title: 'What the prototype explores',
        bullets: [
          'A product-oriented home: tickets, season, membership, merch, media and data.',
          'A full fan journey: match center, archives, data hub and premium content.',
          'An editorial logic: telling the story of a season, a club, a territory and a community.',
          'How AI can help structure or enrich fictional editorial content without replacing editorial direction.'
        ]
      },
      {
        title: 'What this work can prove',
        body: ['Once materialized, this prototype can show the ability to think beyond a page: information architecture, editorial components, sports data, commercial hierarchy and recurring supporter experience.']
      }
    ]
  },
  {
    title: 'File Requester',
    slug: 'file-requester',
    type: 'Product exploration',
    description: 'File Requester is a product exploration around a minimal SaaS to request, receive and track client files with less friction.',
    intro: 'A minimal SaaS concept: replacing confusing file exchanges with a clear, reusable and easy-to-understand link.',
    facts: [
      { label: 'Status', value: 'Product exploration' },
      { label: 'Promise', value: 'One link, one upload, one follow-up' },
      { label: 'Risk to avoid', value: 'Turning a simple tool into a factory' }
    ],
    sections: [
      {
        title: 'The problem',
        body: ['Requesting files seems simple until exchanges pile up: missing documents, wrong formats, reminders, lost emails and no clear tracking. The cost is not technical at first, it is mostly organizational.']
      },
      {
        title: 'The promise',
        body: ['One link. One upload. One confirmation. Nothing more.']
      },
      {
        title: 'What the concept explores',
        bullets: [
          'An ultra-short sender journey.',
          'A clear interface for the person receiving the files.',
          'A simple tracking logic: requested, received, reminded, done.',
          'Useful automation without turning a simple tool into a factory.',
          'Concrete use cases: freelancers, agencies, admin tasks, client onboarding and supporting documents.'
        ]
      },
      {
        title: 'Status',
        body: ['Framed concept, prototype to come. It is not yet a public commercial product, but a good example of thinking around a minimal and useful tool.']
      }
    ]
  }
]
