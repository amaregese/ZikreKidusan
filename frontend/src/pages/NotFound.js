import React from 'react';

import { useLanguage } from '../LanguageContext';

function NotFound() {
  const { t } = useLanguage();
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{t('notFound')}</h2>
      <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>{t('notFoundText')}</p>
      <a 
        href="/" 
        style={{ 
          background: 'var(--primary)', 
          color: 'white', 
          padding: '0.75rem 2rem', 
          borderRadius: '4px', 
          textDecoration: 'none',
          display: 'inline-block'
        }}
      >
        {t('goHome')}
      </a>
    </div>
  );
}

export default NotFound;
