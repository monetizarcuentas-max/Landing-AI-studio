
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';
import TrustPolicy from './components/TrustPolicy';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <NetworkBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <Pricing />
        <HowItWorks />
        <TargetAudience />
        <TrustPolicy />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
