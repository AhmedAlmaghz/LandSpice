import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [toast, setToast] = useState('')

  const showToast = (msg) => {
    setToast(msg)
    window.clearTimeout(window.__toastTimer)
    window.__toastTimer = window.setTimeout(() => setToast(''), 1600)
  }

  const waNumber = '967776209864'
  const email = 'landspices2025@gmail.com'

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      showToast(t('toast.copy_success'))
    } catch (e) {
      showToast(t('toast.copy_fail'))
    }
  }

  useEffect(() => () => window.clearTimeout(window.__toastTimer), [])

  return (
    <section id="contact" className="py-16 bg-[var(--surface-muted)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">{t('contact.title')}</h2>
        <p className="text-[var(--fg)] opacity-80 mb-8">{t('contact.subtitle')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-6 shadow-sm">
            <h3 className="font-semibold mb-3">{t('contact.whatsapp_title')}</h3>
            <a
              href={`https://wa.me/${waNumber.replace(/[^\d]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-700)] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {t('contact.whatsapp_cta')}
            </a>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-6 shadow-sm">
            <h3 className="font-semibold mb-3">{t('contact.email_title')}</h3>
            <div className="flex items-center gap-3">
              <span className="text-[var(--fg)] select-all">{email}</span>
              <button
                onClick={() => copy(email)}
                className="text-[var(--primary)] hover:text-[var(--primary-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded p-1"
                aria-label={t('contact.email_copy')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center mt-4 px-4 py-2 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-700)] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              {t('contact.email_send')}
            </a>
          </div>
        </div>

        {toast && (
          <div className="fixed bottom-6 inset-x-0 flex justify-center px-4">
            <div className="max-w-sm w-full rounded-full bg-[var(--surface-solid)] border border-[var(--border)] text-[var(--fg)] text-sm px-4 py-2 text-center shadow">
              {toast}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
