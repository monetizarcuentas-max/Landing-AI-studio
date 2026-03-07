
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Pricing />
        <HowItWorks />
        <TargetAudience />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
