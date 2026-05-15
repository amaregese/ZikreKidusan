import React from 'react';

import { useLanguage } from '../LanguageContext';

function About() {
  const { t } = useLanguage();
  return (
    <div>
      <div className="page-header" style={{ background: 'var(--bg-hero)', color: 'var(--text-navbar)', padding: '3rem 2rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--text-navbar)', marginBottom: '0.5rem' }}>{t('aboutTitle')}</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{t('mission')} & {t('vision')}</p>
      </div>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('mission')}</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            {t('missionText')}
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('whatWeOffer')}</h2>
          <div className="features-grid" style={{ marginTop: '1.5rem' }}>
            <div className="feature-card">
              <h3>Daily Devotions</h3>
              <p>Start each day with spiritual reflections and prayers from the rich tradition of the Church.</p>
            </div>
            <div className="feature-card">
              <h3>Saints' Lives</h3>
              <p>Learn from the examples of holy men and women who have walked the path of faith.</p>
            </div>
            <div className="feature-card">
              <h3>Mass Readings</h3>
              <p>Follow the daily liturgy with readings from Scripture for each day's Mass.</p>
            </div>
            <div className="feature-card">
              <h3>Audio & Video Teachings</h3>
              <p>Access Gospel teachings in multimedia formats for deeper understanding.</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('vision')}</h2>
          <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            {t('visionText')}
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
