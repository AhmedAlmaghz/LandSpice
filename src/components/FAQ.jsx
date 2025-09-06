import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(0)
  const qs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
  ]
  return (
    <section id="faq" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">{t('faq.title')}</h2>
        <p className="text-[var(--fg)] opacity-80 mb-6">{t('faq.subtitle')}</p>
        <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)]">
          {qs.map((item, i) => (
            <div key={i}>
              <button
                className="w-full text-start px-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg flex items-center justify-between hover:bg-[var(--surface-hover)] transition"
                aria-expanded={open === i}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-[var(--fg)] opacity-60">{open === i ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-a-${i}`}
                role="region"
                aria-hidden={open === i ? 'false' : 'true'}
                className={`px-4 pb-4 text-[var(--fg)] opacity-80 ${open === i ? 'block' : 'hidden'}`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
