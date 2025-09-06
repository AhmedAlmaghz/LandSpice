import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero.jsx'
import Products from '../components/Products.jsx'
import GallerySlider from '../components/GallerySlider.jsx'
import Quality from '../components/Quality.jsx'
import Partners from '../components/Partners.jsx'
import FAQ from '../components/FAQ.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>{t('hero_title')}</title>
        <meta name="description" content={t('hero_desc')} />
        <meta property="og:locale" content={document?.documentElement?.lang === 'ar' ? 'ar_AR' : 'en_US'} />
      </Helmet>
      <Hero />
      <Products />
      <GallerySlider images={[
        '/img/Product/BigHotSauce.jpg',
        '/img/Product/TomatoPowder.jpg',
        '/img/Product/hotSauce10.jpg',
        '/img/Product/pasbas.jpg',
      ]} />
      <Quality />
      <Partners />
      <FAQ />
      <Contact />
    </>
  )
}
