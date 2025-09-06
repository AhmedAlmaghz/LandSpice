import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const [activeSection, setActiveSection] = useState('')
  const [isPinned, setIsPinned] = useState(() => {
    if (typeof window === 'undefined') return false
    try {
      return localStorage.getItem('socialSidebarPinned') === 'true'
    } catch {
      return false
    }
  })
  const [isHovering, setIsHovering] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  // Persist pin state
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('socialSidebarPinned', String(isPinned))
      }
    } catch {}
  }, [isPinned])

  const expanded = isPinned || isHovering
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-[var(--surface-solid)] backdrop-blur border-b border-[var(--border)] text-[var(--fg)]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-center md:justify-between">
        <Link to="/" className="font-extrabold mx-auto md:mx-0"><img src="/logo.png" alt="LandSpice Logo" className="h-10 w-auto max-w-full object-contain drop-shadow" loading="eager" decoding="async" fetchpriority="high" /></Link>
        <nav className="hidden md:flex items-center gap-3 sm:gap-4">
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
          {/* Social Media Sidebar - visible on all screens (collapsed by default on small screens) */}
          <div className={`flex fixed ${isAr ? 'left-0' : 'right-0'} top-0 h-screen items-center z-40`}>
            <div
              className={`group/sidebar flex flex-col items-stretch gap-2.5 p-1.5 bg-[var(--surface-solid)] ${isAr ? 'rounded-r-xl border-r' : 'rounded-l-xl border-l'} shadow-lg border-t border-b border-[var(--border)] mx-1 transition-all duration-300 ${expanded ? 'w-56 translate-x-0' : isAr ? 'w-12 -translate-x-2' : 'w-12 translate-x-2'}`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onTouchStart={() => setIsHovering(true)}
              onTouchEnd={() => setIsHovering(false)}
              onFocusCapture={() => setIsHovering(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setIsHovering(false)
              }}
              aria-expanded={expanded}
            >
              {/* Pin toggle */}
              <button
                onClick={() => setIsPinned((p) => !p)}
                className={`relative flex items-center gap-2 overflow-hidden rounded-full border-0 border-[var(--border)] bg-[var(--surface-solid)] hover:bg-[var(--surface-hover)] transition-colors ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} ${isPinned ? 'text-red-700 ring-2 ring-red-600/40' : 'text-[var(--fg)]'}`}
                aria-pressed={isPinned}
                title={isPinned ? (isAr ? 'إلغاء التثبيت' : 'Unpin') : (isAr ? 'تثبيت' : 'Pin')}
              >
                <span className={`w-9 h-9 inline-flex items-center justify-center rounded-full border ${isPinned ? 'border-red-600 bg-red-100 dark:bg-red-900/30' : 'border-[var(--border)]'}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform">
                    <path d="M14 2l8 8-3 3-1.5-1.5-3.5 3.5V22h-2v-6.5L7.5 22 2 16.5 8.5 11H2V9h8l3.5-3.5L12 4l2-2z" />
                  </svg>
                </span>
                {/* Pin state indicator dot */}
                {isPinned && (
                  <span className={`absolute ${isAr ? 'right-0' : 'left-0'} -top-1 w-3 h-3 rounded-full bg-red-600 border-2 border-[var(--surface-solid)]`}></span>
                )}
                <span
                  className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`}
                  aria-hidden={!expanded}
                >
                  {isPinned ? (isAr ? 'مثبّت' : 'Pinned') : (isAr ? 'تثبيت' : 'Pin')}
                </span>
                {/* Tooltip for pin when collapsed */}
                {!expanded && (
                  <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isPinned ? (isAr ? 'إلغاء التثبيت' : 'Unpin') : (isAr ? 'تثبيت' : 'Pin')}</span>
                )}
              </button>

              {/* YouTube */}
              <a
                href="https://youtube.com/@LandSpice"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-red-100 dark:hover:bg-red-900/30`}
                title="YouTube"
                aria-label="YouTube"
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-red-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 group-hover:scale-110 transition-transform">
                    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.46 3.5 12 3.5 12 3.5s-7.46 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.92.55 9.38.55 9.38.55s7.46 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.81.5-5.81s0-3.93-.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z" />
                  </svg>
                </span>
                <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                  {isAr ? 'يوتيوب' : 'YouTube'}
                </span>
                {!expanded && (
                  <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'يوتيوب' : 'YouTube'}</span>
                )}
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@landSpice"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-black/10 dark:hover:bg-white/10`}
                title="TikTok"
                aria-label="TikTok"
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-black dark:group-hover:border-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                    <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.87 5.58c-.5 4.3 3.32 7.6 7.43 6.72c3.96-.86 6.15-5.25 4.72-9.11c0 0 1.37-.64 2.68-1.92v5.01c0 1.1.9 2 2 2s2-.9 2-2V2h-4.15c.31 1.14.8 2.26 1.15 3.82z" />
                  </svg>
                </span>
                <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                  {isAr ? 'تيك توك' : 'TikTok'}
                </span>
                {!expanded && (
                  <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'تيك توك' : 'TikTok'}</span>
                )}
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/LandSpice25"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-blue-100 dark:hover:bg-blue-900/30`}
                title="Facebook"
                aria-label="Facebook"
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-blue-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
                  </svg>
                </span>
                <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                  {isAr ? 'فيسبوك' : 'Facebook'}
                </span>
                {!expanded && (
                  <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'فيسبوك' : 'Facebook'}</span>
                )}
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/landSpice25"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-black/10 dark:hover:bg-white/10`}
                title="X (Twitter)"
                aria-label="X (Twitter)"
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-black dark:group-hover:border-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                    <path d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231l5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                </span>
                <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                  {isAr ? 'إكس' : 'X'}
                </span>
                {!expanded && (
                  <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'إكس' : 'X'}</span>
                )}
              </a>

              {/* WhatsApp */}
              <a
                href="https://whatsapp.com/channel/0029Vb62xmZC6ZvZa3u0Yn0C"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-green-100 dark:hover:bg-green-900/30`}
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-green-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                    <path d="M17.5 14.4l-2.5-1.5c-.1-.1-.2-.1-.3-.1-.3 0-.5.2-.5.5v3.1c0 .3-.3.6-.6.6h-3.1c-.3 0-.5-.2-.5-.5v-3.1c0-.1-.1-.2-.1-.3l-1.5-2.5c-.2-.3-.1-.6.2-.8.3-.2.6-.1.8.2l1.1 1.8c.1.1.2.1.3.1h2.8c.1 0 .2-.1.3-.1l1.8-2.8c.2-.3.5-.4.8-.2c.3.2.4.5.2.8z" />
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.7 4.1 1.9 5.7l-1.6 4.9c-.1.3 0 .6.2.8c.1.1.3.2.5.2h.1l5-1.7c1.5.9 3.3 1.4 5.1 1.4c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.5c-1.6 0-3.1-.4-4.5-1.2l-.4-.2-3.2 1.1l1.1-3.2l-.2-.4c-.8-1.3-1.2-2.8-1.2-4.3c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5s-3.8 8.5-8.6 8.5z" />
                  </svg>
                </span>
                <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                  {isAr ? 'واتساب' : 'WhatsApp'}
                </span>
                {!expanded && (
                  <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'واتساب' : 'WhatsApp'}</span>
                )}
              </a>

              <div className="w-8 h-px bg-[var(--border)] my-1 self-center"></div>

              {/* Language toggle */}
              <button
                onClick={toggle}
                className={`flex items-center gap-2 overflow-hidden rounded-full border-0 border-[var(--border)] bg-[var(--surface-solid)] hover:bg-[var(--surface-hover)] text-sm font-medium transition-colors ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'}`}
                aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
                title={isAr ? 'English' : 'عربي'}
              >
                <span className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-[var(--border)]">
                  {isAr ? 'EN' : 'ع'}
                </span>
                <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                  {isAr ? 'اللغة' : 'Language'}
                </span>
              </button>

              {/* Theme toggle */}
              <div className={`flex ${expanded ? 'justify-start' : 'justify-center'}`}>
                <ThemeToggle showText={false} />
              </div>
            </div>
          </div>
          {/* Mobile menu trigger (floating) and overlay */}
          {/* Floating button visible only on small screens */}
          <button
            className={`md:hidden fixed ${isAr ? 'right-3' : 'left-3'} top-3 z-50 w-12 h-10 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/60`}
            onClick={() => setMobileMenuOpen((o) => !o)}
            onMouseEnter={() => setMobileMenuOpen(true)}
            onTouchStart={(e) => { e.preventDefault(); setMobileMenuOpen(true) }}
            onFocus={() => setMobileMenuOpen(true)}
            aria-label={isAr ? (mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة') : (mobileMenuOpen ? 'Close menu' : 'Open menu')}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.41 6.29 6.29-6.29 6.3 1.4 1.41 6.3-6.3 6.29 6.3 1.41-1.41-6.3-6.3 6.3-6.29z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            )}
          </button>
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 z-50" aria-modal="true" role="dialog">
              <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
              <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'}  h-full w-72 bg-[var(--surface-solid)] border-[var(--border)] ${isAr ? 'border-r' : 'border-l'} shadow-xl p-4 flex flex-col gap-2 animate-[slideIn_0.2s_ease]`}
                   style={{
                     animation: 'slideIn 0.2s ease',
                   }}
                   onMouseLeave={() => setMobileMenuOpen(false)}
              >
                <div className={`text-[var(--fg)] font-semibold mb-2 `}>{isAr ? 'القائمة' : 'Menu'}</div>
                <div className="bg-[var(--surface-solid)] flex flex-col gap-2">
                {[
                  { id: 'products', labelAr: 'منتجاتنا', labelEn: 'Products' },
                  { id: 'quality', labelAr: 'الجودة', labelEn: 'Quality' },
                  { id: 'gallery', labelAr: 'المعرض', labelEn: 'Gallery' },
                  { id: 'faq', labelAr: 'الأسئلة', labelEn: 'FAQ' },
                  { id: 'partners', labelAr: 'شركاؤنا', labelEn: 'Partners' },
                  { id: 'contact', labelAr: 'تواصل', labelEn: 'Contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    className={` px-3 py-2 ${isAr ? 'text-right' : 'text-left'} rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[var(--fg)]`}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {isAr ? item.labelAr : item.labelEn}
                  </button>
                ))}
                <div className="h-px bg-[var(--border)] my-2"></div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggle}
                    className="px-3 py-2 rounded border border-[var(--border)] hover:bg-[var(--surface-hover)]"
                  >
                    {isAr ? 'English' : 'عربي'}
                  </button>
                  <ThemeToggle showText={false} />
                </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      {/* Mobile-only social sidebar and menu trigger placed outside nav to ensure visibility */}
      <div className="md:hidden">
        {/* Social Media Sidebar - mobile only */}
        <div className={`flex fixed ${isAr ? 'left-0' : 'right-0'} top-0 h-screen items-center z-40`}>
          <div
            className={`group/sidebar flex flex-col items-stretch gap-2.5 p-1.5 bg-[var(--surface-solid)] ${isAr ? 'rounded-r-xl border-r' : 'rounded-l-xl border-l'} shadow-lg border-t border-b border-[var(--border)] mx-1 transition-all duration-300 ${expanded ? 'w-56 translate-x-0' : isAr ? 'w-12 -translate-x-2' : 'w-12 translate-x-2'}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
            onFocusCapture={() => setIsHovering(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setIsHovering(false)
            }}
            aria-expanded={expanded}
          >
            {/* Pin toggle */}
            <button
              onClick={() => setIsPinned((p) => !p)}
              className={`relative flex items-center gap-2 overflow-hidden rounded-full border-0 border-[var(--border)] bg-[var(--surface-solid)] hover:bg-[var(--surface-hover)] transition-colors ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} ${isPinned ? 'text-red-700 ring-2 ring-red-600/40' : 'text-[var(--fg)]'}`}
              aria-pressed={isPinned}
              title={isPinned ? (isAr ? 'إلغاء التثبيت' : 'Unpin') : (isAr ? 'تثبيت' : 'Pin')}
            >
              <span className={`w-9 h-9 inline-flex items-center justify-center rounded-full border ${isPinned ? 'border-red-600 bg-red-100 dark:bg-red-900/30' : 'border-[var(--border)]'}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform">
                  <path d="M14 2l8 8-3 3-1.5-1.5-3.5 3.5V22h-2v-6.5L7.5 22 2 16.5 8.5 11H2V9h8l3.5-3.5L12 4l2-2z" />
                </svg>
              </span>
              {/* Pin state indicator dot */}
              {isPinned && (
                <span className={`absolute ${isAr ? 'right-0' : 'left-0'} -top-1 w-3 h-3 rounded-full bg-red-600 border-2 border-[var(--surface-solid)]`}></span>
              )}
              <span
                className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`}
                aria-hidden={!expanded}
              >
                {isPinned ? (isAr ? 'مثبّت' : 'Pinned') : (isAr ? 'تثبيت' : 'Pin')}
              </span>
              {/* Tooltip for pin when collapsed */}
              {!expanded && (
                <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isPinned ? (isAr ? 'إلغاء التثبيت' : 'Unpin') : (isAr ? 'تثبيت' : 'Pin')}</span>
              )}
            </button>

            {/* YouTube */}
            <a
              href="https://youtube.com/@LandSpice"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-red-100 dark:hover:bg-red-900/30`}
              title="YouTube"
              aria-label="YouTube"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-red-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-600 group-hover:scale-110 transition-transform">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.46 3.5 12 3.5 12 3.5s-7.46 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.92.55 9.38.55 9.38.55s7.46 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14c.5-1.88.5-5.81.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z" />
                </svg>
              </span>
              <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                {isAr ? 'يوتيوب' : 'YouTube'}
              </span>
              {!expanded && (
                <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'يوتيوب' : 'YouTube'}</span>
              )}
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@landSpice"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-black/10 dark:hover:bg-white/10`}
              title="TikTok"
              aria-label="TikTok"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-black dark:group-hover:border-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.87 5.58c-.5 4.3 3.32 7.6 7.43 6.72c3.96-.86 6.15-5.25 4.72-9.11c0 0 1.37-.64 2.68-1.92v5.01c0 1.1.9 2 2 2s2-.9 2-2V2h-4.15c.31 1.14.8 2.26 1.15 3.82z" />
                </svg>
              </span>
              <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                {isAr ? 'تيك توك' : 'TikTok'}
              </span>
              {!expanded && (
                <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'تيك توك' : 'TikTok'}</span>
              )}
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/LandSpice25"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-blue-100 dark:hover:bg-blue-900/30`}
              title="Facebook"
              aria-label="Facebook"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-blue-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
                </svg>
              </span>
              <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                {isAr ? 'فيسبوك' : 'Facebook'}
              </span>
              {!expanded && (
                <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'فيسبوك' : 'Facebook'}</span>
              )}
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/landSpice25"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-black/10 dark:hover:bg-white/10`}
              title="X (Twitter)"
              aria-label="X (Twitter)"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-black dark:group-hover:border-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231l5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
              </span>
              <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                {isAr ? 'إكس' : 'X'}
              </span>
              {!expanded && (
                <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'إكس' : 'X'}</span>
              )}
            </a>

            {/* WhatsApp */}
            <a
              href="https://whatsapp.com/channel/0029Vb62xmZC6ZvZa3u0Yn0C"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-2 overflow-hidden rounded-full transition-all duration-300 ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'} hover:bg-green-100 dark:hover:bg-green-900/30`}
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--surface-solid)] border border-[var(--border)] group-hover:border-green-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-600 dark:text-green-500 group-hover:scale-110 transition-transform">
                  <path d="M17.5 14.4l-2.5-1.5c-.1-.1-.2-.1-.3-.1-.3 0-.5.2-.5.5v3.1c0 .3-.3.6-.6.6h-3.1c-.3 0-.5-.2-.5-.5v-3.1c0-.1-.1-.2-.1-.3l-1.5-2.5c-.2-.3-.1-.6.2-.8.3-.2.6-.1.8.2l1.1 1.8c.1.1.2.1.3.1h2.8c.1 0 .2-.1.3-.1l1.8-2.8c.2-.3.5-.4.8-.2c.3.2.4.5.2.8z" />
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 2.1.7 4.1 1.9 5.7l-1.6 4.9c-.1.3 0 .6.2.8c.1.1.3.2.5.2h.1l5-1.7c1.5.9 3.3 1.4 5.1 1.4c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.5c-1.6 0-3.1-.4-4.5-1.2l-.4-.2-3.2 1.1l1.1-3.2l-.2-.4c-.8-1.3-1.2-2.8-1.2-4.3c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5s-3.8 8.5-8.6 8.5z" />
                </svg>
              </span>
              <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                {isAr ? 'واتساب' : 'WhatsApp'}
              </span>
              {!expanded && (
                <span className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-full ml-2' : 'right-full mr-2'} text-xs bg-black/80 text-white px-2 py-1 rounded shadow-lg`}>{isAr ? 'واتساب' : 'WhatsApp'}</span>
              )}
            </a>

            <div className="w-8 h-px bg-[var(--border)] my-1 self-center"></div>

            {/* Language toggle */}
            <button
              onClick={toggle}
              className={`flex items-center gap-2 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-solid)] hover:bg-[var(--surface-hover)] text-sm font-medium transition-colors ${expanded ? 'justify-start px-2 py-1' : 'justify-center p-1'}`}
              aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
              title={isAr ? 'English' : 'عربي'}
            >
              <span className="w-9 h-9 inline-flex items-center justify-center rounded-full border-0 border-[var(--border)]">
                {isAr ? 'EN' : 'ع'}
              </span>
              <span className={`text-sm whitespace-nowrap transition-all ${expanded ? 'opacity-100 w-auto pr-1' : 'opacity-0 w-0 pr-0'}`} aria-hidden={!expanded}>
                {isAr ? 'اللغة' : 'Language'}
              </span>
            </button>

            {/* Theme toggle */}
            <div className={`flex ${expanded ? 'justify-start' : 'justify-center'}`}>
              <ThemeToggle showText={false} />
            </div>
          </div>
        </div>

        {/* Mobile menu trigger (floating) and overlay */}
        {/* Floating button visible only on small screens */}
        <button
          className={`fixed top-1 bottom-1 ${isAr ? 'right-3': 'left-3'} z-50 w-12 h-12 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/60`}
          onClick={() => setMobileMenuOpen((o) => !o)}
          onMouseEnter={() => setMobileMenuOpen(true)}
          onTouchStart={(e) => { e.preventDefault(); setMobileMenuOpen(true) }}
          onFocus={() => setMobileMenuOpen(true)}
          aria-label={isAr ? (mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة') : (mobileMenuOpen ? 'Close menu' : 'Open menu')}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
              <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.41 6.29 6.29-6.29 6.3 1.4 1.41 6.3-6.3 6.29 6.3 1.41-1.41-6.3-6.3 6.3-6.29z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          )}
        </button>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 " aria-modal="true" role="dialog">
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`absolute top-0 ${isAr ? 'right-2': 'left-0'} bg-[var(--surface-solid)] border-[var(--border)] ${isAr ? 'border-r' : 'border-l'} shadow-xl  p-4`}
                 style={{
                   animation: 'slideIn 0.2s ease',
                 }}
                 onMouseLeave={() => setMobileMenuOpen(false)}
            >
              <div className={`text-[var(--fg)] font-semibold mb-2`}>{isAr ? 'القائمة' : 'Menu'}</div>
              <div className={`h-full w-72 bg-[var(--surface-solid)] border-[var(--border)] ${isAr ? 'border-r' : 'border-l'} shadow-xl p-4 flex flex-col gap-2 animate-[slideIn_0.2s_ease] `}>
              {[
                { id: 'products', labelAr: 'منتجاتنا', labelEn: 'Products' },
                { id: 'quality', labelAr: 'الجودة', labelEn: 'Quality' },
                { id: 'gallery', labelAr: 'المعرض', labelEn: 'Gallery' },
                { id: 'faq', labelAr: 'الأسئلة', labelEn: 'FAQ' },
                { id: 'partners', labelAr: 'شركاؤنا', labelEn: 'Partners' },
                { id: 'contact', labelAr: 'تواصل', labelEn: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  className={` px-3 py-2 ${isAr ? 'text-right' : 'text-left'} rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-[var(--fg)]`}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {isAr ? item.labelAr : item.labelEn}
                </button>
              ))}
              <div className="h-px bg-[var(--border)] my-2"></div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggle}
                  className="px-3 py-2 rounded border border-[var(--border)] hover:bg-[var(--surface-hover)]"
                >
                  {isAr ? 'English' : 'عربي'}
                </button>
                <ThemeToggle showText={false} />
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
