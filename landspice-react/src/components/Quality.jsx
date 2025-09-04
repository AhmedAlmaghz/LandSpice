import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Quality() {
  const { t } = useTranslation()
  const items = [
    { id: 1, title: t('quality.cards.a.title'), desc: t('quality.cards.a.desc'), emoji: '🧡' },
    { id: 2, title: t('quality.cards.b.title'), desc: t('quality.cards.b.desc'), emoji: '✅' },
    { id: 3, title: t('quality.cards.c.title'), desc: t('quality.cards.c.desc'), emoji: '⭐' },
  ]
  return (
    <section id="quality" className="py-16 bg-[var(--surface-muted)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">{t('quality.title')}</h2>
        <p className="text-[var(--fg)] opacity-80 mb-8">{t('quality.subtitle')}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((q) => (
            <div
              key={q.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-5 shadow-sm transition-colors transition-shadow duration-200 motion-safe:transform-gpu motion-safe:hover:-translate-y-0.5 hover:bg-[var(--surface-hover)] hover:border-[var(--primary)] hover:shadow-md"
            >
              <div className="text-3xl">{q.emoji}</div>
              <h3 className="mt-3 font-semibold text-lg">{q.title}</h3>
              <p className="text-[var(--fg)] opacity-80 mt-1">{q.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
