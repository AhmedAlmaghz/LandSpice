import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

function bindSystem(cb) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = (e) => cb(e.matches)
  mq.addEventListener('change', handler)
  return () => mq.removeEventListener('change', handler)
}

function applyTheme(mode) {
  const root = document.documentElement
  const set = (isDark) => {
    root.classList.toggle('dark', isDark)
    root.setAttribute('data-theme', isDark ? 'dark' : 'light')
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', isDark ? '#0b0f14' : '#ffffff')
  }
  if (mode === 'light') { set(false); return () => {} }
  if (mode === 'dark') { set(true); return () => {} }
  // system
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  set(mq.matches)
  return bindSystem(set)
}

export default function ThemeToggle({ showText = true }) {
  const { t } = useTranslation()
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'system')

  useEffect(() => {
    const cleanup = applyTheme(mode)
    localStorage.setItem('theme', mode)
    return cleanup
  }, [mode])

  const cycle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'))
  }

  const icons = {
    light: (
      <motion.div
        key="sun"
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-4 h-4"
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    ),
    dark: (
      <motion.div
        key="moon"
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-4 h-4"
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.754 21.1181 10.0808 20.7461C8.4076 20.3741 6.8699 19.5345 5.66118 18.3258C4.45246 17.1171 3.61294 15.5794 3.24094 13.9062C2.86894 12.233 2.97975 10.4991 3.56052 8.89131C4.14129 7.28351 5.16788 5.87435 6.5203 4.82875C7.87272 3.78314 9.4949 3.14432 11.1971 2.987C10.1658 4.70827 9.69284 6.69421 9.84547 8.67513C9.9981 10.6561 10.7684 12.5241 12.0425 14.0138C13.3167 15.5036 15.0308 16.5383 16.95 16.956C16.6474 17.5942 16.2279 18.1692 15.7141 18.6493C15.2004 19.1294 14.6019 19.5057 13.9537 19.756C14.8653 19.4518 15.7073 18.9633 16.4251 18.3216C17.1429 17.6799 17.7215 16.8989 18.1229 16.0302C18.5243 15.1615 18.7402 14.2237 18.7579 13.2732C18.7756 12.3227 18.5948 11.3803 18.2275 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    ),
    system: (
      <motion.div
        key="monitor"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-4 h-4"
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8 21H16M12 17V21M3 3H21V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H5C4.46957 17 3.96086 16.7893 3.58579 16.4142C3.21071 16.0391 3 15.5304 3 15V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    )
  }

  const labels = {
    light: t('theme_light', 'Light'),
    dark: t('theme_dark', 'Dark'),
    system: t('theme_system', 'System')
  }

  return (
    <motion.button
      onClick={cycle}
      className={`flex items-center justify-center ${showText ? 'px-3 py-1 gap-2' : 'w-10 h-10'} rounded-full border border-[var(--border)] bg-[var(--surface-solid)] hover:bg-[var(--surface-hover)]`}
      aria-label={t('toggle_theme')}
      title={t('toggle_theme')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span className="flex items-center gap-2">
        <div className="w-4 h-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {mode === 'light' && icons.light}
            {mode === 'dark' && icons.dark}
            {mode === 'system' && icons.system}
          </AnimatePresence>
        </div>
        {showText && <span className="text-sm">{labels[mode]}</span>}
      </motion.span>
    </motion.button>
  )
}
