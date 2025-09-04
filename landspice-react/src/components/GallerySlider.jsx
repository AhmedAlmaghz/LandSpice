import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ImageModal from './ImageModal'

const ADV_IMAGES = [
  '/img/adv/Cafeeh.jpg',
  '/img/adv/Family.jpg',
  '/img/adv/OldSanaa.jpg',
  '/img/adv/resturent.jpg',
  // '/img/adv/FamilyYemen.jpeg',
  '/img/adv/FamilyYemenNew.png'
]

export default function GallerySlider({ title, interval = 3500 }) {
  const { t, i18n } = useTranslation()
  const reduced = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])
  const isRTL = () => (document.documentElement.getAttribute('dir') || i18n.dir() || 'rtl') === 'rtl'

  const safeImages = ADV_IMAGES

  const [index, setIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const timerRef = useRef(null)

  const show = (i) => {
    const total = safeImages.length
    if (!total) return
    const next = ((i % total) + total) % total
    setIndex(next)
  }
  const next = () => show(index + 1)
  const prev = () => show(index - 1)

  const startAuto = () => {
    if (reduced || timerRef.current || safeImages.length < 2) return
    timerRef.current = setInterval(() => {
      if (isRTL()) prev(); else next()
    }, interval)
  }
  const stopAuto = () => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }

  useEffect(() => {
    show(0)
    if (!reduced) startAuto()
    const onVis = () => { if (document.hidden) stopAuto(); else startAuto() }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      document.removeEventListener('visibilitychange', onVis)
      stopAuto()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeImages.length])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); isRTL() ? prev() : next() }
    if (e.key === 'ArrowLeft') { e.preventDefault(); isRTL() ? next() : prev() }
  }

  const ariaLabel = title || t('section.gallery.title', { defaultValue: 'معرض المنتجات' })

  return (
    <section id="gallery" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{t('gallery.title')}</h2>
        <p className="text-[var(--fg)] opacity-80">{t('gallery.subtitle')}</p>
      </div>

        <div
          className="relative rounded-2xl overflow-hidden bg-[var(--surface-muted)] border border-[var(--border)]"
          role="region"
          aria-roledescription="carousel"
          aria-label={ariaLabel}
          tabIndex={0}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          onFocus={stopAuto}
          onBlur={startAuto}
          onKeyDown={onKeyDown}
        >
          <div className="relative h-[32rem] sm:h-[40rem] md:h-[48rem] rounded-xl overflow-hidden">
            {safeImages.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={i === index ? 'false' : 'true'}
              >
                <img
                  src={src}
                  alt={t(`gallery.slide${i + 1}`, `Gallery Image ${i + 1}`)}
                  className="w-full h-full object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchpriority={i === 0 ? 'high' : 'auto'}
                  decoding="async"
                  onError={(e)=>{ e.currentTarget.src='/logo.png' }}
                  onClick={() => {
                    setCurrentImageIndex(i)
                    setIsModalOpen(true)
                    stopAuto()
                  }}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="slider__btn prev absolute top-1/2 -translate-y-1/2 left-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface-solid)] shadow hover:bg-[var(--surface-hover)] text-xl text-[var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            aria-label={t('aria.prev', { defaultValue: 'السابق' })}
            onClick={() => { stopAuto(); prev(); startAuto() }}
          >
            ‹
          </button>
          <button
            type="button"
            className="slider__btn next absolute top-1/2 -translate-y-1/2 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--surface-solid)] shadow hover:bg-[var(--surface-hover)] text-xl text-[var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            aria-label={t('aria.next', { defaultValue: 'التالي' })}
            onClick={() => { stopAuto(); next(); startAuto() }}
          >
            ›
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal
          src={safeImages[currentImageIndex]}
          alt={t(`gallery.slide${currentImageIndex + 1}`, `Gallery Image ${currentImageIndex + 1}`)}
          onClose={() => {
            setIsModalOpen(false)
            startAuto()
          }}
        />
      )}
    </section>
  )
}
