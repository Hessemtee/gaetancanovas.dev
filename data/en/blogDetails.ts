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

export const blogDetailsEn: BlogArticle[] = [
  {
    title: 'Modernizing a front-end project without breaking everything',
    slug: 'modernizing-a-front-end-project-without-breaking-everything',
    category: 'Technical',
    date: '2026',
    readingTime: '6 min',
    status: 'Core article',
    description: 'Why a successful migration rarely starts with a framework choice, but with an honest reading of the existing system.',
    intro: 'A successful front-end migration rarely starts with code. It starts with understanding the system.',
    sections: [
      {
        title: 'The temptation to start over',
        body: [
          'When a front-end gets old, the most tempting solution is often the most dangerous one: rewrite everything. New framework, new architecture, new design system, new build stack. On paper, everything becomes cleaner. In reality, the product keeps living while the team tries to rebuild something it may no longer fully understand.',
          'The problem with a rewrite is not only its cost. It is the gap between the technical promise and product constraints: pages must remain accessible, editorial teams must keep publishing, SEO must not drop, integrations must not break, and users should not become the test bench.'
        ]
      },
      {
        title: 'Before the framework, read the system',
        body: [
          'A migration starts with an honest reading of the existing system. Which routes are critical? Which components are truly central? Which dependencies block progress? Which conventions are never written down but structure the whole codebase? Where is technical debt acceptable, and where has it become a product risk?',
          'This step is not spectacular. Yet it prevents confusing modernization with cosmetic replacement. A codebase can be old but understandable. Conversely, a recent project can already be fragile if nobody can explain its decisions.'
        ]
      },
      {
        title: 'Map, slice, stabilize, measure',
        body: [
          'I like summarizing the approach with four verbs: map, slice, stabilize, measure. Map to know where you stand. Slice to avoid a big bang. Stabilize to avoid moving the debt around. Measure to make sure the effort produces more than an impression of modernity.',
          'Slicing is often the most important part. You can isolate a page family, a shared component, a dependency, a user flow or a convention. The goal is to create shippable and reversible steps, not to win an abstract debate about the best possible architecture.'
        ]
      },
      {
        title: 'Modernization should improve delivery',
        body: [
          'A technical effort creates value if it makes the team more able to ship tomorrow. That can mean clearer components, simpler configuration, better routing, validation scripts, documented conventions or a clearer split of responsibilities.',
          'The useful question is not only “is it more modern?”. It is rather: “is it easier to understand, safer to change, more stable in production, clearer for the people who will maintain it?”.'
        ]
      },
      {
        title: 'Where AI can help',
        body: [
          'AI can be useful in this kind of work, as long as it is not asked to decide. It can summarize a code area, draft documentation, compare migration strategies, detect repetitive patterns or produce transformation scripts.',
          'But it does not know what is critical for the product, what is acceptable for the team, or which regressions would be truly serious. It accelerates certain tasks, not technical responsibility.'
        ]
      },
      {
        title: 'The right signal of success',
        body: [
          'A successful migration is not the one that changes everything fastest. It is the one that lets the product keep living while the foundation becomes healthier. If the team ships more calmly, understands the system better and reduces regressions, then the modernization has created real value.'
        ]
      }
    ]
  },
  {
    title: 'AI as a clarification tool, not a magic promise',
    slug: 'ai-as-a-clarification-tool',
    category: 'Applied AI',
    date: '2026',
    readingTime: '5 min',
    status: 'Core article',
    description: 'How to use AI to structure, prototype, compare and document without losing sight of the problem.',
    intro: 'AI is interesting when it helps frame a problem better, not when it adds noise.',
    sections: [
      {
        title: 'The trap of the magic promise',
        body: [
          'AI is often presented as an answer before the question is clear. It is asked to produce faster, generate more ideas, automate more. But accelerating a poorly framed problem does not necessarily create value. It can simply produce more noise, faster.',
          'I prefer using it as a clarification tool. Not as a magic layer added to a product, but as a working partner to split, rephrase, compare and surface implicit choices.'
        ]
      },
      {
        title: 'Clarify before producing',
        body: [
          'In a project, AI becomes useful when it helps organize things: summarize context, rephrase a constraint, produce several angles, list risks, turn a vague intuition into options that can be discussed.',
          'This work is sometimes more valuable than direct code or content generation. A good rephrasing can reveal that the topic is not “add a feature”, but “reduce friction”, “make a decision easier” or “avoid bad debt”.'
        ]
      },
      {
        title: 'Prototype without confusing speed and product',
        body: [
          'AI helps a lot with prototyping: generating a first interface, writing content variants, producing fake data, comparing user flows or getting a disposable codebase. It is very useful to materialize an idea quickly.',
          'But a quick prototype is not validation. It can make a product feel like it exists while the essentials are still missing: real usage, constraints, data model, maintenance, distribution, security, support and tradeoffs.'
        ]
      },
      {
        title: 'Keep human decision-making',
        body: [
          'AI can suggest, but someone must choose. It can structure, but someone must decide what is right, useful, credible or publishable. This is especially true on a professional website: the risk is not only writing something false, but writing something that sounds true without really being owned.',
          'The right use keeps a critical loop: why this answer? what is missing? what cannot be verified? what is style rather than substance?'
        ]
      },
      {
        title: 'Discreet but useful AI',
        body: [
          'In my work, AI interests me less as a visible feature than as discreet leverage: preparing a meeting, clarifying a plan, turning notes into structure, comparing technical options, drafting documentation or accelerating product exploration.',
          'It is in that discretion that it becomes useful. It does not replace judgment; it sometimes makes judgment easier to exercise.'
        ]
      }
    ]
  },
  {
    title: 'Why I keep an idea workshop',
    slug: 'why-i-keep-an-idea-workshop',
    category: 'Product',
    date: '2026',
    readingTime: '4 min',
    status: 'Product note',
    description: 'Not every idea should become a product, but some deserve to be structured.',
    intro: 'An idea workshop makes it possible to test without turning everything into an active project.',
    sections: [
      {
        title: 'Not every idea deserves a project',
        body: [
          'Having ideas is easy. Giving them project status immediately is more dangerous. A project requires time, attention, decisions, sometimes money, and above all a form of mental commitment. If everything becomes a project, nothing really moves forward.',
          'An idea workshop exists to avoid that confusion. It gives an intuition a place without giving it too much importance too early.'
        ]
      },
      {
        title: 'Structure in order to abandon better',
        body: [
          'Documenting an idea does not mean it will be built. On the contrary, it often makes it possible to abandon it cleanly. When you write the promise, audience, problem, risk and first possible version, many ideas lose their obviousness. That is a good thing.',
          'An idea that does not survive one framing page probably does not need several weeks of development.'
        ]
      },
      {
        title: 'A space between draft and product',
        body: [
          'The workshop is that intermediate space. It is not a todo list, a product backlog or a portfolio. It is a sorting area: concepts, prototypes, manifestos, notes, early systems and hypotheses to verify.',
          'Some ideas will stay there. Others will become more serious work. Others will be merged, simplified or forgotten. That is not a failure; it is the normal behavior of an exploration space.'
        ]
      },
      {
        title: 'Why show it on a professional site',
        body: [
          'Showing an idea workshop can seem less polished than a classic portfolio. But it is also more honest. It shows a way of thinking: framing, sorting, naming, renouncing, resuming, connecting. For a product-minded front-end profile, that way of thinking matters as much as the final screenshot of a finished screen.'
        ]
      }
    ]
  },
  {
    title: 'What high-traffic websites teach about performance',
    slug: 'what-high-traffic-websites-teach-about-performance',
    category: 'Performance',
    date: '2026',
    readingTime: '5 min',
    status: 'Experience note',
    description: 'Images, SSR, CMS, third-party scripts, SEO: the real problems appear when traffic makes every tradeoff visible.',
    intro: 'Performance becomes concrete when each tradeoff affects many users.',
    sections: [
      {
        title: 'At high exposure, details change scale',
        body: [
          'On a small site, a heavy image or an unnecessary script can feel secondary. On a highly visited site, those details become repeated costs thousands or millions of times. They affect loading, experience, SEO, network usage and sometimes infrastructure.',
          'Performance is then no longer a developer obsession. It becomes a product question: how many people experience this slowness, on which pages, at what moment, and with what consequences?'
        ]
      },
      {
        title: 'The CMS is often central',
        body: [
          'Many editorial websites depend on a CMS. That is a strength for publishing quickly, but also a source of complexity: heterogeneous content, images uploaded in different formats, embeds, optional fields, old pages, new templates and editorial exceptions.',
          'Optimizing the front-end without understanding the content chain often treats the symptom. You also need to look at how content is produced, transformed, rendered and maintained.'
        ]
      },
      {
        title: 'SSR, hydration and third-party scripts',
        body: [
          'Server-side rendering helps SEO and initial loading, but it does not guarantee a smooth experience. Hydration, JavaScript sent to the client, interactive components and third-party scripts can cancel part of the benefit.',
          'Third-party scripts are especially sensitive. They sometimes address real business needs, but they should be loaded carefully: at the right time, on the right pages, with measured impact.'
        ]
      },
      {
        title: 'Optimizing means choosing',
        body: [
          'You cannot optimize everything all the time. The best approach is to choose the areas that matter: most viewed pages, critical templates, SEO journeys, heaviest images, most repeated components and most expensive scripts.',
          'Useful optimization is often less spectacular than a rewrite: better-served images, a deferred script, a simplified component, a loading condition, a better documented editorial convention.'
        ]
      },
      {
        title: 'The right goal',
        body: [
          'The goal is not to get a perfect score everywhere. It is to reduce visible friction, stabilize what breaks often, make tradeoffs explicit and create a front-end the team can keep evolving without starting over.'
        ]
      }
    ]
  }
]
