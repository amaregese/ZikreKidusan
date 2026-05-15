import React, { useState, useEffect } from 'react';
import { teachingsAPI } from '../services/api';
import { useLanguage } from '../LanguageContext';

function Teachings() {
  const [teachings, setTeachings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useLanguage();

  useEffect(() => {
    teachingsAPI.getAll()
      .then(res => setTeachings(res.data))
      .catch(err => setError('Failed to load teachings. Please try again later.'))
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
      <h2 className="page-header">{t('teachingsTitle')}</h2>
      {teachings.length === 0 && !loading && (
        <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '2rem' }}>{t('error')}</p>
      )}
      <div className="cards-grid">
        {teachings.map(teaching => (
          <div key={teaching.id} className="card">
            {teaching.thumbnail && <img src={teaching.thumbnail} alt={teaching.title} className="media-thumbnail" />}
            <h3 className="card-title">{teaching.title}</h3>
            <p className="card-content">{teaching.description.substring(0, 150)}...</p>
            {teaching.audio_file && <audio controls src={teaching.audio_file} className="audio-player" />}
            {teaching.video_url && <p><a href={teaching.video_url} className="video-link" target="_blank" rel="noopener noreferrer">{t('watchVideo')}</a></p>}
            <p className="card-meta">{t('published', { date: teaching.published_date })}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachings;
