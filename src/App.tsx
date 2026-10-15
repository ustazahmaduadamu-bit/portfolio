import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Workflow } from './components/Workflow';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceSubject, setSelectedServiceSubject] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceSubject(`Inquiry: ${serviceTitle} Project`);
  };

  const handleContactCTA = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Navigation */}
      <Navbar onContactClick={handleContactCTA} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services onSelectService={handleSelectService} />
        <Workflow />
        <Experience />
        <Contact initialSubject={selectedServiceSubject} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
