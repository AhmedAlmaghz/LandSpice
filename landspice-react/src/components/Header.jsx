import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const [activeSection, setActiveSection] = useState('')

  const toggle = () => {
    const next = isAr ? 'en' : 'ar'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['products', 'quality', 'gallery', 'faq', 'partners', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Initial check
    handleScroll()
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className="sticky top-0 z-10 bg-[var(--surface-solid)] backdrop-blur border-b border-[var(--border)] text-[var(--fg)]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-extrabold"><img src="/logo.png" alt="LandSpice Logo" className="h-10 w-auto max-w-full object-contain drop-shadow" loading="eager" decoding="async" fetchpriority="high" /></Link>
        <nav className="flex items-center gap-3 sm:gap-4">
          <a 
            href="#products" 
            className={`px-3 py-1 rounded transition-colors ${
              activeSection === 'products'
                ? 'bg-red-600 text-white font-medium'
                : 'hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-gray-800'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('products.title')}
          </a>
          <a 
            href="#quality" 
            className={`px-3 py-1 rounded transition-colors ${
              activeSection === 'quality'
                ? 'bg-red-600 text-white font-medium'
                : 'hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-gray-800'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('quality')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('quality.title')}
          </a>
          <a 
            href="#gallery" 
            className={`px-3 py-1 rounded transition-colors ${
              activeSection === 'gallery'
                ? 'bg-red-600 text-white font-medium'
                : 'hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-gray-800'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('gallery.title')}
          </a>
          <a 
            href="#faq" 
            className={`px-3 py-1 rounded transition-colors ${
              activeSection === 'faq'
                ? 'bg-red-600 text-white font-medium'
                : 'hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-gray-800'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('faq.title')}
          </a>
          <a 
            href="#partners" 
            className={`px-3 py-1 rounded transition-colors ${
              activeSection === 'partners'
                ? 'bg-red-600 text-white font-medium'
                : 'hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-gray-800'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('partners.title', 'شركاؤنا')}
          </a>
          <a 
            href="#contact" 
            className={`px-3 py-1 rounded transition-colors ${
              activeSection === 'contact'
                ? 'bg-red-600 text-white font-medium'
                : 'hover:text-[var(--primary)] hover:bg-gray-100 dark:hover:bg-gray-800'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('contact.title')}
          </a>
          {/* Social Media Sidebar - Hidden on mobile */}
          <div className="hidden md:flex fixed left-0 top-0 h-screen items-center z-50">
            <div className="flex flex-col items-center gap-2.5 p-1.5 bg-[var(--surface-solid)] rounded-r-xl shadow-lg border-r border-t border-b border-[var(--border)] mx-1">
              <a 
                href="https://youtube.com/@LandSpice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] hover:bg-red-100 dark:hover:bg-red-900/30 border border-[var(--border)] hover:border-red-500 transition-all duration-300 transform hover:-translate-x-0.5 hover:scale-110"
                title="YouTube"
                aria-label="YouTube"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 group-hover:scale-110 transition-transform">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.46 3.5 12 3.5 12 3.5s-7.46 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.92.55 9.38.55 9.38.55s7.46 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.81.5-5.81s0-3.93-.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z" />
                </svg>
              </a>
              
              <a 
                href="https://tiktok.com/@landSpice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-12 h-12 rounded-full flex items-center justify-center bg-[var(--surface-solid)] hover:bg-black/10 dark:hover:bg-white/10 border border-[var(--border)] hover:border-black dark:hover:border-white transition-all duration-300 transform hover:-translate-x-1 hover:scale-110"
                title="TikTok"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.87 5.58c-.5 4.3 3.32 7.6 7.43 6.72c3.96-.86 6.15-5.25 4.72-9.11c0 0 1.37-.64 2.68-1.92v5.01c0 1.1.9 2 2 2s2-.9 2-2V2h-4.15c.31 1.14.8 2.26 1.15 3.82z" />
                </svg>
              </a>
              
              <a 
                href="https://facebook.com/LandSpice25" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-[var(--border)] hover:border-blue-600 transition-all duration-300 transform hover:-translate-x-0.5 hover:scale-110"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
                </svg>
              </a>
              
              <a 
                href="https://x.com/landSpice25" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-12 h-12 rounded-full flex items-center justify-center bg-[var(--surface-solid)] hover:bg-black/10 dark:hover:bg-white/10 border border-[var(--border)] hover:border-black dark:hover:border-white transition-all duration-300 transform hover:-translate-x-1 hover:scale-110"
                title="X (Twitter)"
                aria-label="X (Twitter)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231l5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </a>
              
              <a 
                href="https://whatsapp.com/channel/0029Vb62xmZC6ZvZa3u0Yn0C" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] hover:bg-green-100 dark:hover:bg-green-900/30 border border-[var(--border)] hover:border-green-500 transition-all duration-300 transform hover:-translate-x-0.5 hover:scale-110"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                  <path d="M17.5 14.4l-2.5-1.5c-.1-.1-.2-.1-.3-.1-.3 0-.5.2-.5.5v3.1c0 .3-.3.6-.6.6h-3.1c-.3 0-.5-.2-.5-.5v-3.1c0-.1-.1-.2-.1-.3l-1.5-2.5c-.2-.3-.1-.6.2-.8.3-.2.6-.1.8.2l1.1 1.8c.1.1.2.1.3.1h2.8c.1 0 .2-.1.3-.1l1.8-2.8c.2-.3.5-.4.8-.2c.3.2.4.5.2.8z" />
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.7 4.1 1.9 5.7l-1.6 4.9c-.1.3 0 .6.2.8c.1.1.3.2.5.2h.1l5-1.7c1.5.9 3.3 1.4 5.1 1.4c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.5c-1.6 0-3.1-.4-4.5-1.2l-.4-.2-3.2 1.1l1.1-3.2l-.2-.4c-.8-1.3-1.2-2.8-1.2-4.3c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5s-3.8 8.5-8.6 8.5z" />
                </svg>
              </a>
              
              <div className="w-8 h-px bg-[var(--border)] my-1"></div>
              
              <button 
                onClick={toggle} 
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-solid)] hover:bg-[var(--surface-hover)] text-sm font-medium transition-transform hover:scale-110"
                aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
                title={isAr ? 'English' : 'عربي'}
              >
                {isAr ? 'EN' : 'ع'}
              </button>
              
              <ThemeToggle showText={false} />
            </div>
          </div>
          {/* Mobile Theme Toggle (only visible on small screens) */}
          <div className="md:hidden flex items-center">
            <ThemeToggle showText={false} />
          </div>
        </nav>
      </div>
    </header>
  )
}
