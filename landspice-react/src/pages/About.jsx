import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

export default function About() {
  const { t } = useTranslation()
  return (
    <section className="py-16">
      <Helmet>
        <title>{t('nav_about')} – LandSpice</title>
        <meta name="description" content={t('about.meta')} />
        <meta property="og:locale" content={document?.documentElement?.lang === 'ar' ? 'ar_AR' : 'en_US'} />
      </Helmet>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">{t('nav_about')}</h2>
        <p className="text-[var(--fg)] opacity-80">{t('about.body')}</p>
      </div>
    </section>
  )
}
