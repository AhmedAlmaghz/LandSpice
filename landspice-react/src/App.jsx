import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <ScrollToTop />
      <Helmet>
        <title>LandSpice</title>
        <meta name="description" content="شركة يمنية لمنتجات غذائية عالية الجودة: شطة، كاتشب، صلصة (مسحوق الطماطم) والبسباس." />
        <meta property="og:site_name" content="LandSpice" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:title" content="LandSpice – الطعم البلدي اليمني بجودة عالمية" />
        <meta property="og:description" content="أصالة يمنية وجودة تستحق الاختيار." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LandSpice – الطعم البلدي اليمني بجودة عالمية" />
        <meta name="twitter:description" content="أصالة يمنية وجودة تستحق الاختيار." />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="canonical" href={typeof window!== 'undefined' ? window.location.origin + window.location.pathname : '/'} />
      </Helmet>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
