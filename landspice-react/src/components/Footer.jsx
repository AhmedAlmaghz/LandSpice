import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--surface-solid)]">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-[var(--fg)] opacity-80 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>&copy; {new Date().getFullYear()} LandSpice. {t('footer.rights')}</p>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4">
            <a href="#products" className="hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded">{t('products.title')}</a>
            <a href="#contact" className="hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded">{t('contact.title')}</a>
          </nav>
          <nav className="flex items-center gap-3 flex-wrap justify-center">
            <a href="https://youtube.com/@LandSpice" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-transparent hover:border-[var(--border)] hover:bg-[#FF000010] text-[#FF0000] hover:text-[#FF0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF0000] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-3.5 h-3.5">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.46 3.5 12 3.5 12 3.5s-7.46 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.92.55 9.38.55 9.38.55s7.46 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.81.5-5.81s0-3.93-.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z" />
              </svg>
              <span className="text-sm">YouTube</span>
            </a>
            <a href="https://tiktok.com/@landSpice" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-transparent hover:border-[var(--border)] hover:bg-[#00000005] text-[#000000] hover:text-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-3.5 h-3.5">
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.87 5.58c-.5 4.3 3.32 7.6 7.43 6.72c3.96-.86 6.15-5.25 4.72-9.11c0 0 1.37-.64 2.68-1.92v5.01c0 1.1.9 2 2 2s2-.9 2-2V2h-4.15c.31 1.14.8 2.26 1.15 3.82z" />
              </svg>
              <span className="text-sm">TikTok</span>
            </a>
            <a href="https://facebook.com/LandSpice25" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-transparent hover:border-[var(--border)] hover:bg-[#1877F210] text-[#1877F2] hover:text-[#1877F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-3.5 h-3.5">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
              </svg>
              <span className="text-sm">Facebook</span>
            </a>
            <a href="https://x.com/landSpice25" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-transparent hover:border-[var(--border)] hover:bg-[#00000005] text-[#000000] hover:text-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-3.5 h-3.5">
                <path d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231l5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
              <span className="text-sm">X</span>
            </a>
            <a href="https://whatsapp.com/channel/0029Vb62xmZC6ZvZa3u0Yn0C" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Channel" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-transparent hover:border-[var(--border)] hover:bg-[#25D36610] text-[#25D366] hover:text-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-3.5 h-3.5">
                <path d="M17.5 14.4l-2.5-1.5c-.1-.1-.2-.1-.3-.1-.3 0-.5.2-.5.5v3.1c0 .3-.3.6-.6.6h-3.1c-.3 0-.5-.2-.5-.5v-3.1c0-.1-.1-.2-.1-.3l-1.5-2.5c-.2-.3-.1-.6.2-.8.3-.2.6-.1.8.2l1.1 1.8c.1.1.2.1.3.1h2.8c.1 0 .2-.1.3-.1l1.8-2.8c.2-.3.5-.4.8-.2c.3.2.4.5.2.8z" />
                <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.7 4.1 1.9 5.7l-1.6 4.9c-.1.3 0 .6.2.8c.1.1.3.2.5.2h.1l5-1.7c1.5.9 3.3 1.4 5.1 1.4c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.5c-1.6 0-3.1-.4-4.5-1.2l-.4-.2l-3.2 1.1l1.1-3.2l-.2-.4c-.8-1.3-1.2-2.8-1.2-4.3c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5s-3.8 8.5-8.6 8.5z" />
              </svg>
              <span className="text-sm">WhatsApp</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
