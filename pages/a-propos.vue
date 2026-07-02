<script setup lang="ts">
import { staticPaths, type LocaleCode } from '~/utils/localizedPaths'

definePageMeta({
  i18n: {
    paths: {
      fr: '/a-propos',
      en: '/about'
    }
  }
})

const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value as LocaleCode)

useSiteSeo({
  title: currentLocale.value === 'fr' ? 'À propos' : 'About',
  description: currentLocale.value === 'fr'
    ? 'À propos de Gaëtan Canovas, développeur front-end orienté produit, performance et modernisation.'
    : 'About Gaëtan Canovas, product-minded front-end developer focused on performance and modernization.'
})
</script>

<template>
  <main>
    <PageHero
      :title="currentLocale === 'fr' ? 'À propos' : 'About'"
      :description="currentLocale === 'fr' ? 'Je suis développeur front-end avec une forte sensibilité produit.' : 'I am a front-end developer with strong product sensitivity.'"
    />

    <section class="section">
      <div class="container prose">
        <template v-if="currentLocale === 'fr'">
          <h2>Interface, produit, performance</h2>
          <p>J’aime les projets où l’interface n’est pas seulement une couche visuelle, mais un point de rencontre entre contraintes techniques, contenu, performance, SEO, métier et expérience utilisateur.</p>
          <p>Mon parcours m’a amené à travailler sur des environnements web exigeants : sites éditoriaux, projets à fort trafic, migrations, dette technique, intégration CMS, SSR et optimisation front-end.</p>
          <h2>IA comme levier</h2>
          <p>Je m’intéresse moins à l’IA comme argument marketing qu’à l’IA comme outil de travail : clarifier, automatiser, analyser, prototyper et mieux structurer l’information.</p>
          <p>L’IA m’intéresse quand elle réduit une friction réelle, pas quand elle ajoute une couche magique à un problème mal posé.</p>
        </template>
        <template v-else>
          <h2>Interface, product, performance</h2>
          <p>I like projects where the interface is not just a visual layer, but a meeting point between engineering constraints, content, performance, SEO, business needs and user experience.</p>
          <p>My work has led me to demanding web environments: editorial websites, high-traffic projects, migrations, technical debt, CMS integration, SSR and front-end optimization.</p>
          <h2>AI as leverage</h2>
          <p>I am less interested in AI as a marketing argument than as a working tool: clarifying, automating, analyzing, prototyping and better structuring information.</p>
          <p>AI interests me when it reduces real friction, not when it adds a magic layer to a poorly framed problem.</p>
        </template>


        <div class="about-cv card">
          <span class="icon-box icon-box--warm"><InlineIcon name="file" /></span>
          <div>
            <h2>{{ currentLocale === 'fr' ? 'Besoin d’un format CV ?' : 'Need a resume format?' }}</h2>
            <p>{{ currentLocale === 'fr' ? 'Le site montre l’approche, les preuves et les explorations. Le CV synthétise le parcours dans un format plus pratique pour recruteurs, clients ou opportunités ponctuelles.' : 'The site shows the approach, proof and explorations. The resume summarizes the background in a more practical format for recruiters, clients or occasional opportunities.' }}</p>
            <div class="cluster about-cv__actions">
              <BaseButton :to="staticPaths.cv[currentLocale]" variant="secondary">
                {{ t('cta.viewCv') }} <InlineIcon name="chevron-right" />
              </BaseButton>
              <BaseButton :href="currentLocale === 'fr' ? '/documents/gaetan-canovas-cv-fr.pdf' : '/documents/gaetan-canovas-resume-en.pdf'">
                {{ t('cta.downloadCv') }} <InlineIcon name="file" />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<style scoped>
.about-cv {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding: clamp(1.25rem, 4vw, 2rem);
}
.about-cv h2 {
  margin-top: 0;
}
.about-cv p {
  color: var(--color-muted);
}
.about-cv__actions {
  margin-top: 1rem;
}
@media (max-width: 700px) {
  .about-cv { flex-direction: column; }
}
</style>
