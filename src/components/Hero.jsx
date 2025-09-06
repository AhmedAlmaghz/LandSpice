import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-muted)] to-[var(--bg)] pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--accent)] opacity-40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-relaxed text-[var(--fg)] [line-height:1.25] rtl:leading-[1.5]" style={{ wordSpacing: '0.1em' }}>
            {t('hero_name')}
            </h1>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-relaxed text-[var(--fg)] [line-height:1.25] rtl:leading-[1.5]" style={{ wordSpacing: '0.1em' }}>
              {t('hero_title')}
            </h1>
            <p className="mt-4 text-[var(--fg)] opacity-80">
              {t('hero_desc')}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-700)] shadow-sm hover:shadow-md transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] active:translate-y-px">
                {t('hero_contact_cta')}
              </a>
              <a href="#products" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-[var(--accent)] bg-[var(--surface-solid)] text-[var(--accent-700)] hover:bg-[var(--surface-hover)] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] active:translate-y-px">
                {t('hero_products_cta')}
              </a>
            </div>
          </div>
          <div className="justify-self-center">
            <img src="/landSpiceLogo.png" alt="LandSpice Logo" className="h-28 sm:h-32 md:h-40 w-auto max-w-full object-contain drop-shadow" loading="eager" decoding="async" fetchpriority="high" />
          </div>
        </div>
      </div>
    </section>
  )
}
