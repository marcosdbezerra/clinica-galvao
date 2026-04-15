import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import AboutCEO from './components/sections/AboutCEO';
import Specialties from './components/sections/Specialties';
import Environment from './components/sections/Environment';
import Team from './components/sections/Team';
import Location from './components/sections/Location';
import WhatsAppButton from './components/shared/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutCEO />
        <Specialties />
        <Environment />
        <Team />
        <Location />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
