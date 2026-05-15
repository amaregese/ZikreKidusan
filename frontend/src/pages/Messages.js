import React from 'react';

import { useLanguage } from '../LanguageContext';

function Messages() {
  const { t } = useLanguage();
  return (
    <div>
      <div className="page-header" style={{ background: 'var(--bg-hero)', color: 'var(--text-navbar)', padding: '3rem 2rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--text-navbar)', marginBottom: '0.5rem' }}>{t('messages')}</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{t('messages')}</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          Messages content coming soon.
        </p>
      </div>
    </div>
  );
}

export default Messages;
