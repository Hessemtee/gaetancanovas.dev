import { chantiersFr } from './fr/chantiers'
import { workEn } from './en/work'
import { atelierFr } from './fr/atelier'
import { labEn } from './en/lab'
import { blogFr } from './fr/blog'
import { blogEn } from './en/blog'
import { chantierDetailsFr } from './fr/chantierDetails'
import { workDetailsEn } from './en/workDetails'
import { blogDetailsFr } from './fr/blogDetails'
import { blogDetailsEn } from './en/blogDetails'
import type { LocaleCode } from '~/utils/localizedPaths'

export function getChantiers(locale: LocaleCode) {
  return locale === 'fr' ? chantiersFr : workEn
}

export function getAtelier(locale: LocaleCode) {
  return locale === 'fr' ? atelierFr : labEn
}

export function getBlogPosts(locale: LocaleCode) {
  return locale === 'fr' ? blogFr : blogEn
}

export function getChantierDetail(locale: LocaleCode, slug: string) {
  const items = locale === 'fr' ? chantierDetailsFr : workDetailsEn
  return items.find((item) => item.slug === slug)
}

export function getBlogDetail(locale: LocaleCode, slug: string) {
  const items = locale === 'fr' ? blogDetailsFr : blogDetailsEn
  return items.find((item) => item.slug === slug)
}
