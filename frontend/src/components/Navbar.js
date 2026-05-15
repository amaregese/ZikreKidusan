import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/images/ZikreKidusanLogo.png" alt="Zikre Kidusan Logo" style={{ width: '40px', height: '40px' }} />
          <span>{language === 'am' ? 'ዝክረ ቅዱሳን' : 'Zikre Kidusan'}</span>
        </Link>
        <div className="navbar-links">
          <div className="navbar-nav">
            <Link to="/" className={`navbar-link${location.pathname === '/' ? ' active' : ''}`}>{t('home')}</Link>
            <Link to="/saints" className={`navbar-link${location.pathname === '/saints' ? ' active' : ''}`}>{t('saints')}</Link>
            <Link to="/devotions" className={`navbar-link${location.pathname === '/devotions' ? ' active' : ''}`}>{t('devotions')}</Link>
            <Link to="/mass-readings" className={`navbar-link${location.pathname === '/mass-readings' ? ' active' : ''}`}>{t('massReadings')}</Link>
            <Link to="/teachings" className={`navbar-link${location.pathname === '/teachings' ? ' active' : ''}`}>{t('teachings')}</Link>
            <Link to="/messages" className={`navbar-link${location.pathname === '/messages' ? ' active' : ''}`}>{t('messages')}</Link>
            <Link to="/about" className={`navbar-link${location.pathname === '/about' ? ' active' : ''}`}>{t('about')}</Link>
            <Link to="/contact" className={`navbar-link${location.pathname === '/contact' ? ' active' : ''}`}>{t('contact')}</Link>
          </div>
          <div className="navbar-toggles">
            <button 
              className="theme-toggle" 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? t('lightMode') : t('darkMode')}
            </button>
            <button 
              className="theme-toggle" 
              onClick={toggleLanguage}
              aria-label="Toggle language"
              style={{ fontWeight: 'bold' }}
            >
              {language === 'en' ? 'አማ' : 'ENG'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
