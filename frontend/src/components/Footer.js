import React from 'react';

import { useLanguage } from '../LanguageContext';

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/images/ZikreKidusanLogo.png" alt="Zikre Kidusan Logo" style={{ width: '30px', height: '30px' }} />
          <span style={{ fontWeight: '600' }}>Zikre Kidusan</span>
        </div>
        <p style={{ margin: 0 }}>{t('copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}

export default Footer;
