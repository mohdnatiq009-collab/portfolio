import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Journey } from './sections/Journey';
import { Education } from './sections/Education';
import { SkillsUniverse } from './sections/SkillsUniverse';
import { Projects } from './sections/Projects';
import { HowIThink } from './sections/HowIThink';
import { Strengths } from './sections/Strengths';
import { LearningLab } from './sections/LearningLab';
import { Achievements } from './sections/Achievements';
import { InteractiveTerminal } from './sections/InteractiveTerminal';
import { ResumeSection } from './sections/ResumeSection';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ComicModal } from './components/ComicModal';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [comicModalOpen, setComicModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // Sync theme class with HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-midnight-950 text-slate-100 transition-colors duration-300 relative selection:bg-brand-blue selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onOpenComic={() => setComicModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenComic={() => setComicModalOpen(true)} />
        <About />
        <Journey onOpenComic={() => setComicModalOpen(true)} />
        <Education />
        <SkillsUniverse />
        <Projects />
        <HowIThink />
        <Strengths />
        <LearningLab />
        <Achievements />
        <InteractiveTerminal />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* 8-Panel Visual Storyboard Comic Modal */}
      <ComicModal 
        isOpen={comicModalOpen} 
        onClose={() => setComicModalOpen(false)} 
      />
    </div>
  );
};

export default App;
