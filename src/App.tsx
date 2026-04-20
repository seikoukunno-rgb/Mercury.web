import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link,
  useLocation
} from 'react-router-dom';
import { 
  Menu, 
  X, 
  ShieldCheck,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Pages
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const MERCURY_APP_URL = "https://study-tracker-rzbj.vercel.app";

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${className} relative flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-200 rounded-2xl overflow-hidden shadow-xs border border-slate-200`}>
        <svg viewBox="0 0 100 100" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M35 65V35L50 50L65 35V65" stroke="#64748b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`${className} relative flex items-center justify-center bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-100`}>
      <img 
        src="/logo.png" 
        alt="Mercury Logo" 
        className="w-full h-full object-contain p-1"
        onError={() => setError(true)}
      />
    </div>
  );
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-mercury-blue/20 blur-lg rounded-full group-hover:bg-mercury-blue/40 transition-all"></div>
            <Logo className="relative w-12 h-12 rounded-2xl shadow-xl border border-white/50 bg-white/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-2xl font-display font-black tracking-tighter text-mercury-text leading-none">Mercury</span>
            <span className="text-[10px] font-bold text-mercury-blue uppercase tracking-[0.2em] opacity-60">Study Ecosystem</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-mercury-muted">
          {isHome && (
            <>
              <a href="#features" className="hover:text-mercury-blue transition-colors">{t('nav.features')}</a>
              <a href="#trust" className="hover:text-mercury-blue transition-colors">{t('nav.trust')}</a>
              <a href="#faq" className="hover:text-mercury-blue transition-colors">{t('nav.faq')}</a>
            </>
          )}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 py-1.5 px-3 rounded-full hover:bg-slate-100 transition-all text-mercury-text font-bold"
          >
            <Globe size={18} />
            {language === 'ja' ? 'English' : '日本語'}
          </button>

          <a href={MERCURY_APP_URL} target="_blank" rel="noopener noreferrer" className="bg-mercury-text text-white px-6 py-2 rounded-full font-bold hover:bg-mercury-blue transition-all hover:scale-105 active:scale-95 shadow-md">
            {t('nav.start')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <button 
            onClick={toggleLanguage}
            className="p-2 hover:bg-slate-100 rounded-full transition-all text-mercury-text"
          >
            <Globe size={22} />
          </button>
          <button className="text-mercury-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-black/5 py-8 px-6 flex flex-col gap-6 items-center text-center shadow-xl"
          >
            {isHome && (
              <>
                <a href="#features" className="text-lg text-mercury-text" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.features')}</a>
                <a href="#trust" className="text-lg text-mercury-text" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.trust')}</a>
                <a href="#faq" className="text-lg text-mercury-text" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.faq')}</a>
              </>
            )}
            <a href={MERCURY_APP_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-linear-to-r from-mercury-blue to-mercury-cyan text-white py-4 rounded-xl font-bold">
              {t('nav.start')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-20 border-t border-slate-100 px-6 bg-white shrink-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-8 h-8 rounded-lg bg-white border border-slate-100" />
              <span className="text-2xl font-display font-bold tracking-tight text-mercury-text">Mercury</span>
            </div>
            <p className="text-mercury-muted max-w-sm mb-8 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-mercury-text">{t('footer.product')}</h5>
            <ul className="space-y-4 text-sm text-mercury-muted font-medium">
              <li><a href="/#features" className="hover:text-mercury-blue transition-colors">{t('nav.features')}</a></li>
              <li><a href="/#trust" className="hover:text-mercury-blue transition-colors">{t('nav.trust')}</a></li>
              <li><a href="/#faq" className="hover:text-mercury-blue transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-mercury-text">{t('footer.company')}</h5>
            <ul className="space-y-4 text-sm text-mercury-muted font-medium">
              <li><Link to="/terms" className="hover:text-mercury-blue transition-colors">{t('footer.terms')}</Link></li>
              <li><Link to="/privacy" className="hover:text-mercury-blue transition-colors">{t('footer.privacy')}</Link></li>
              <li><a href="mailto:support@mercury-study.io" className="hover:text-mercury-blue transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-100 text-xs text-slate-400 gap-4">
          <p>© 2026 Mercury Project. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><ShieldCheck size={12}/> Verified for Google Drive</span>
            <span>Made with ❤️ for Learners</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="bg-mercury-light overflow-x-hidden min-h-screen text-mercury-text flex flex-col">
          <Nav />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home Logo={Logo} />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}
