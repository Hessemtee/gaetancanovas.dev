import { writeFileSync } from 'node:fs'

const siteUrl = 'https://gaetancanovas.dev'
const lastmod = '2026-06-29'

const pairs = [
  ['/', '/en'],
  ['/chantiers', '/en/work'],
  ['/atelier', '/en/lab'],
  ['/blog', '/en/blog'],
  ['/a-propos', '/en/about'],
  ['/contact', '/en/contact'],
  ['/cv', '/en/resume'],
  ['/confidentialite', '/en/privacy'],
  ['/chantiers/front-end-fort-trafic', '/en/work/high-traffic-front-end'],
  ['/chantiers/moderniser-front', '/en/work/modernizing-existing-front-end'],
  ['/chantiers/backlog-jv', '/en/work/game-backlog'],
  ['/chantiers/tnsfc', '/en/work/tnsfc'],
  ['/chantiers/file-requester', '/en/work/file-requester'],
  ['/blog/moderniser-un-projet-front-sans-tout-casser', '/en/blog/modernizing-a-front-end-project-without-breaking-everything'],
  ['/blog/ia-outil-de-clarification', '/en/blog/ai-as-a-clarification-tool'],
  ['/blog/pourquoi-je-garde-un-atelier-idees', '/en/blog/why-i-keep-an-idea-workshop'],
  ['/blog/site-a-fort-trafic-performance', '/en/blog/what-high-traffic-websites-teach-about-performance']
]

function absolute(path) {
  return `${siteUrl}${path === '/' ? '/' : path}`
}

function urlEntry(path, frPath, enPath) {
  return `  <url>
    <loc>${absolute(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="fr-FR" href="${absolute(frPath)}" />
    <xhtml:link rel="alternate" hreflang="en-US" href="${absolute(enPath)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(frPath)}" />
  </url>`
}

const entries = []
for (const [frPath, enPath] of pairs) {
  entries.push(urlEntry(frPath, frPath, enPath))
  entries.push(urlEntry(enPath, frPath, enPath))
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', sitemap)
console.log(`Generated public/sitemap.xml with ${entries.length} URLs.`)
