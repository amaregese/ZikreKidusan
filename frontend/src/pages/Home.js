import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import api from '../services/api';

function Home() {
  const { t } = useLanguage();
  const [dailyContent, setDailyContent] = useState(null);
  const [commemoration, setCommemoration] = useState(null);

  useEffect(() => {
    api.get('/daily-content/today/')
      .then(res => setDailyContent(res.data))
      .catch(() => {});
    api.get('/commemorations/today/')
      .then(res => setCommemoration(res.data))
      .catch(() => {});
  }, []);

  const fiveItems = t('fiveThingsList').split('\n').map(item => item.trim());
  const nineItems = t('nineWaysList').split('\n').map(item => item.trim());

  return (
    <div>
      <div className="hero">
        <img src="/images/ZikreKidusanLogo.png" alt="Zikre Kidusan Logo" style={{ width: '150px', height: '150px', marginBottom: '1rem' }} />
        <h1>{t('welcome')}</h1>
        <p>{t('subtitle')}</p>
        <p className="hero-author">
          <img src="/images/AbbaGiorgisZegasicha.png" alt="" className="hero-author-img" />
          {t('subtitleAuthor')}
        </p>
      </div>

      <div className="features-grid" style={{ marginTop: '3rem' }}>
        <Link to="/saints" className="feature-card-link">
          <div className="feature-card">
            <h3>{t('saints')}</h3>
            <p>{t('learnSaints')}</p>
          </div>
        </Link>
        <Link to="/devotions" className="feature-card-link">
          <div className="feature-card">
            <h3>{t('dailyDevotions')}</h3>
            <p>{t('readReflections')}</p>
          </div>
        </Link>
        <Link to="/mass-readings" className="feature-card-link">
          <div className="feature-card">
            <h3>{t('massReadings')}</h3>
            <p>{t('massReadingsDesc')}</p>
          </div>
        </Link>
        <Link to="/teachings" className="feature-card-link">
          <div className="feature-card">
            <h3>{t('teachings')}</h3>
            <p>{t('teachingsDesc')}</p>
          </div>
        </Link>
      </div>

      {/* Daily Wisdom Section */}
      <div className="daily-wisdom">
        <div className="daily-wisdom-header">
          <h2>{t('dailyWisdom')}</h2>
        </div>

        <div className="daily-wisdom-body">
          {dailyContent?.image && (
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <img 
                src={dailyContent.image} 
                alt="Daily" 
                style={{ maxWidth: '100%', borderRadius: '12px', maxHeight: '350px' }}
              />
            </div>
          )}

          <div className="wisdom-columns">
            <div className="wisdom-block">
              <p className="wisdom-title">{t('fiveThings')}</p>
              <div className="wisdom-list">
                {fiveItems.map((item, i) => (
                  <div key={i} className="wisdom-item">{item}</div>
                ))}
              </div>
            </div>

            <div className="wisdom-block">
              <p className="wisdom-title">{t('nineWays')}</p>
              <div className="wisdom-inner-columns">
                <div className="wisdom-list">
                  {nineItems.slice(0, 5).map((item, i) => (
                    <div key={i} className="wisdom-item">{item}</div>
                  ))}
                </div>
                <div className="wisdom-list">
                  {nineItems.slice(5).map((item, i) => (
                    <div key={i} className="wisdom-item">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="wisdom-quote-section">
            <div className="wisdom-quote-icon">"</div>
            <p className="wisdom-quote">{t('repentance')}</p>
            <p className="wisdom-author">{t('saintMacarius')}</p>
          </div>
        </div>

        <div className="wisdom-footer">
          <p className="wisdom-remembrance">{t('remembrance')}</p>
        </div>
      </div>

      {/* Daily Commemoration Section */}
      {commemoration && (
        <div className="commemoration">
          {commemoration.title_am && (
            <div className="commemoration-header">
              <h2>{commemoration.title_am}</h2>
            </div>
          )}
          <div className="commemoration-body">
            {commemoration.images && commemoration.images.length > 0 && (
              <div className="commemoration-images">
                {commemoration.images.map((img, i) => (
                  <div key={img.id || i} className="commemoration-image-wrap">
                    <img src={img.image} alt={img.caption || ''} />
                  </div>
                ))}
              </div>
            )}
            {commemoration.sections && commemoration.sections.length > 0 && (
              <div className="commemoration-text">
                {commemoration.sections.map((section) => {
                  const paragraphs = section.content.split('\n').filter(p => p.trim());
                  if (paragraphs.length === 0) return null;

                  switch (section.section_type) {
                    case 'heading':
                      return paragraphs.map((p, i) => (
                        <p key={`${section.id}-${i}`} className="com-line com-heading">{p}</p>
                      ));
                    case 'subheading':
                      return paragraphs.map((p, i) => (
                        <p key={`${section.id}-${i}`} className="com-line com-subheading">{p}</p>
                      ));
                    case 'quote':
                      return (
                        <div key={section.id} className="com-quote-inline">
                          {paragraphs.map((p, i) => (
                            <p key={i} className="com-quote-inline-text">{p}</p>
                          ))}
                        </div>
                      );
                    case 'sub':
                      return paragraphs.map((p, i) => (
                        <p key={`${section.id}-${i}`} className="com-line com-sub">{p}</p>
                      ));
                    default:
                      return paragraphs.map((p, i) => (
                        <p key={`${section.id}-${i}`} className="com-line">{p}</p>
                      ));
                  }
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
