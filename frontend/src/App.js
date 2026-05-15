import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Saints from './pages/Saints';
import Devotions from './pages/Devotions';
import MassReadings from './pages/MassReadings';
import Teachings from './pages/Teachings';
import Messages from './pages/Messages';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saints" element={<Saints />} />
          <Route path="/devotions" element={<Devotions />} />
          <Route path="/mass-readings" element={<MassReadings />} />
          <Route path="/teachings" element={<Teachings />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
