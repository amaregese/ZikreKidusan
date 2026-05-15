import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Saints API
export const saintsAPI = {
  getAll: () => api.get('/saints/'),
  getById: (id) => api.get(`/saints/${id}/`),
};

// Devotions API
export const devotionsAPI = {
  getAll: () => api.get('/devotions/'),
  getByDate: (date) => api.get(`/devotions/?date=${date}`),
};

// Mass Readings API
export const readingsAPI = {
  getTypes: () => api.get('/reading-types/'),
  getReadings: (date, type) => {
    let url = '/mass-readings/';
    const params = new URLSearchParams();
    if (date) params.append('date', date);
    if (type) params.append('reading_type', type);
    if (params.toString()) url += '?' + params.toString();
    return api.get(url);
  },
};

// Teachings API
export const teachingsAPI = {
  getAll: () => api.get('/teachings/'),
  getById: (id) => api.get(`/teachings/${id}/`),
};

export default api;
