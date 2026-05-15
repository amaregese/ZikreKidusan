import React, { useState, useEffect } from 'react';
import { devotionsAPI } from '../services/api';
import { useLanguage } from '../LanguageContext';

function Devotions() {
  const [devotions, setDevotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    devotionsAPI.getAll()
      .then(res => setDevotions(res.data))
      .catch(err => setError('Failed to load devotions. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="loading">
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
      {t('loading')}
    </div>
  );

  if (error) return (
    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--error-text)' }}>
      <p>{error}</p>
      <button 
        onClick={() => window.location.reload()} 
        style={{ marginTop: '1rem', padding: '0.5rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        {t('retry')}
      </button>
    </div>
  );

  return (
    <div>
      <h2 className="page-header">Daily Devotions</h2>
      <div className="cards-grid">
        {devotions.map(devotion => (
          <div key={devotion.id} className="card">
            <h3 className="card-title">{devotion.title}</h3>
            <p className="card-meta">{t('date', { date: devotion.date })}</p>
            {devotion.saint_name && <p className="card-meta">{t('saint', { name: devotion.saint_name })}</p>}
            <p className="card-content">{devotion.content.substring(0, 200)}...</p>
            {devotion.prayer && <div className="card-quote">
              <strong>{t('prayer')}:</strong> {devotion.prayer.substring(0, 150)}...
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Devotions;
