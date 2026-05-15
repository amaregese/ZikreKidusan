import React, { useState, useEffect } from 'react';
import { readingsAPI } from '../services/api';
import { useLanguage } from '../LanguageContext';

function MassReadings() {
  const [readings, setReadings] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    readingsAPI.getTypes()
      .then(res => setTypes(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    readingsAPI.getReadings(selectedDate, selectedType)
      .then(res => setReadings(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [selectedDate, selectedType]);

  if (loading) return (
    <div className="loading">
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
      {t('loading')}
    </div>
  );

  return (
    <div>
      <h2 className="page-header">{t('massReadingsTitle')}</h2>
      <div className="filters">
        <input 
          type="date" 
          value={selectedDate} 
          onChange={e => setSelectedDate(e.target.value)}
          className="filter-input"
          placeholder={t('selectDate')}
        />
        <select 
          value={selectedType} 
          onChange={e => setSelectedType(e.target.value)}
          className="filter-select"
        >
          <option value="">{t('allTypes')}</option>
          {types.map(type => (
            <option key={type.id} value={type.id}>{type.name}</option>
          ))}
        </select>
      </div>
      <div className="cards-grid">
        {readings.map(reading => (
          <div key={reading.id} className="card">
            <h3 className="card-title">{reading.title}</h3>
            <p className="card-meta">{t('type', { type: reading.reading_type_name })}</p>
            <p className="card-meta">{t('source', { source: reading.source })}</p>
            <p className="card-content">{reading.content.substring(0, 200)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MassReadings;
