import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { app } from './firebase/config';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

// Track page views
const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const analytics = getAnalytics(app);
        logEvent(analytics, 'page_view', {
          page_path: location.pathname + location.search,
        });
      } catch (error) {
        console.error("Firebase Analytics error:", error);
      }
    }
  }, [location]);

  return null;
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <TrackPageViews />
        <ScrollToTop />
        <Helmet>
          <title>LandSpice</title>
          <meta name="description" content="شركة يمنية لمنتجات غذائية عالية الجودة: شطة، كاتشب، صلصة (مسحوق الطماطم) والبسباس." />
          <meta property="og:site_name" content="LandSpice" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:description" content="أصالة يمنية وجودة تستحق الاختيار." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="LandSpice – الطعم البلدي اليمني بجودة عالمية" />
          <meta property="og:title" content="LandSpice – الطعم البلدي اليمني بجودة عالمية" />
          <meta name="twitter:description" content="أصالة يمنية وجودة تستحق الاختيار." />
        </Helmet>
        
        <Header />
        
        <main className="min-h-[calc(100vh-200px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
