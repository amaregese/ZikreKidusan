import React, { useState } from 'react';

import { useLanguage } from '../LanguageContext';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <div className="page-header" style={{ background: 'var(--bg-hero)', color: 'var(--text-navbar)', padding: '3rem 2rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h1 style={{ color: 'var(--text-navbar)', marginBottom: '0.5rem' }}>{t('contactTitle')}</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{t('getInTouch')}</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {submitted && (
          <div style={{ background: 'var(--success-bg)', color: 'white', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
            {t('thankYou')}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>{t('name')}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>{t('email')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>{t('subject')}</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#333' }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            style={{ background: '#1a237e', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
            onMouseOver={(e) => e.target.style.background = '#283593'}
            onMouseOut={(e) => e.target.style.background = '#1a237e'}
          >
            Send Message
          </button>
        </form>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--quote-bg)', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>{t('otherWays')}</h3>
          <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> info@zikrekidusan.org</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>{t('phone')}</strong></p>
          <p><strong>{t('address')}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
