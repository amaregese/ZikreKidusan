import React, { useState, useEffect } from 'react';
import { saintsAPI } from '../services/api';
import { useLanguage } from '../LanguageContext';

function SaintCard({ saint, onClick }) {
  const { t, language } = useLanguage();
  return (
    <div 
      className="saint-card" 
      onClick={() => onClick(saint)}
      style={{ cursor: 'pointer' }}
    >
      {saint.image ? (
        <div className="saint-card-image-container">
          <img 
            src={saint.image} 
            alt={saint.name}
            className="saint-card-image"
          />
        </div>
      ) : (
        <div className="saint-card-placeholder">
          <span style={{ fontSize: '3rem' }}>✝️</span>
        </div>
      )}
        <div className="saint-card-overlay">
        <h3 className="saint-card-name">{saint.name}</h3>
        {saint.feast_day && (
          <p className="saint-card-feast">{t('feastDay', { date: new Date(saint.feast_day).toLocaleDateString(language === 'am' ? 'am-ET' : 'en-US', { month: 'long', day: 'numeric' }) })}</p>
        )}
      </div>
    </div>
  );
}

function SaintModal({ saint, onClose }) {
  const { t, language } = useLanguage();
  if (!saint) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          {saint.image ? (
            <div className="modal-image-container">
              <img src={saint.image} alt={saint.name} className="modal-image-full" />
            </div>
          ) : (
            <div className="modal-image-placeholder">
              <span style={{ fontSize: '4rem' }}>✝️</span>
            </div>
          )}
          <div className="modal-title-section">
            <h2 className="modal-title">{saint.name}</h2>
            {saint.feast_day && (
              <p className="modal-feast">{t('feastDay', { date: new Date(saint.feast_day).toLocaleDateString(language === 'am' ? 'am-ET' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' }) })}</p>
            )}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>{t('mission')}</h3>
            <p className="modal-bio">{saint.biography}</p>
          </div>

          {saint.quote && (
            <div className="modal-quote">
              <blockquote>"{saint.quote}"</blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Saints() {
  const [saints, setSaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [todaysFeasts, setTodaysFeasts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSaint, setSelectedSaint] = useState(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    saintsAPI.getAll()
      .then(res => {
        const allSaints = res.data.results || res.data;
        setSaints(allSaints);

        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();

        const feasts = allSaints.filter(saint => {
          if (!saint.feast_day) return false;
          const feastDate = new Date(saint.feast_day);
          return feastDate.getMonth() + 1 === currentMonth && feastDate.getDate() === currentDay;
        });

        setTodaysFeasts(feasts.length > 0 ? feasts : [...allSaints].sort(() => Math.random() - 0.5).slice(0, 6));
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load saints. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []);

  const nextSaint = () => {
    setCurrentIndex((prev) => (prev + 1) % todaysFeasts.length);
  };

  const prevSaint = () => {
    setCurrentIndex((prev) => (prev - 1 + todaysFeasts.length) % todaysFeasts.length);
  };

  const filteredSaints = saints.filter(saint => 
    saint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    saint.biography.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <h2 className="page-header">{t('saintsTitle')}</h2>

      {/* Today's Feasts Section */}
      {todaysFeasts.length > 0 && (
        <div className="featured-saints-section" style={{ marginTop: 0, marginBottom: '2rem' }}>
          <div className="section-header">
            <h2 className="section-title">{t('todayFeasts')}</h2>
            <p className="section-subtitle">{t('clickToRead')}</p>
          </div>

          <div className="saints-carousel">
            <button className="carousel-btn carousel-prev" onClick={prevSaint}>‹</button>
            <div className="carousel-view">
              <SaintCard 
                saint={todaysFeasts[currentIndex]} 
                onClick={setSelectedSaint}
              />
            </div>
            <button className="carousel-btn carousel-next" onClick={nextSaint}>›</button>
          </div>

          <div className="carousel-indicators">
            {todaysFeasts.map((saint, idx) => (
              <button
                key={saint.id}
                className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View ${saint.name}`}
              />
            ))}
          </div>
        </div>
      )}

      <SaintModal saint={selectedSaint} onClose={() => setSelectedSaint(null)} />
      
      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder={t('searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--input-border)', borderRadius: '4px', fontSize: '1rem', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
        />
      </div>

      <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>{t('showingSaints', { count: filteredSaints.length, plural: filteredSaints.length !== 1 ? 's' : '' })}</p>

      <div className="cards-grid">
        {filteredSaints.map(saint => (
          <div key={saint.id} className="card">
            <h3 className="card-title">{saint.name}</h3>
            {saint.feast_day && <p className="card-meta">{t('feastDay', { date: new Date(saint.feast_day).toLocaleDateString(language === 'am' ? 'am-ET' : 'en-US', { month: 'long', day: 'numeric' }) })}</p>}
            <p className="card-content">{saint.biography.substring(0, 150)}...</p>
            {saint.quote && <blockquote className="card-quote">
              "{saint.quote}"
            </blockquote>}
          </div>
        ))}
      </div>

      {filteredSaints.length === 0 && !loading && (
        <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '2rem' }}>{t('error')}</p>
      )}
    </div>
  );
}

export default Saints;
