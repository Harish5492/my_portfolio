import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollNavigation } from './hooks/useScrollNavigation';

const sectionOrder = ['home', 'about', 'projects', 'resume', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  useScrollNavigation(setActiveSection);

  useEffect(() => {
    const handler = (e: CustomEvent<{ direction: string, section?: string }>) => {
      const idx = sectionOrder.indexOf(activeSection);
      if (e.detail.direction === 'down' && idx < sectionOrder.length - 1) {
        setActiveSection(sectionOrder[idx + 1]);
      } else if (e.detail.direction === 'up' && idx > 0) {
        setActiveSection(sectionOrder[idx - 1]);
      } else if (e.detail.direction === 'goto' && e.detail.section && sectionOrder.includes(e.detail.section)) {
        setActiveSection(e.detail.section);
      }
    };
    window.addEventListener('navigateSection', handler as EventListener);
    return () => window.removeEventListener('navigateSection', handler as EventListener);
  }, [activeSection]);

  const sectionComponents: Record<string, JSX.Element> = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    resume: <Resume />,
    contact: <Contact />,
  };

  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <section className="min-h-screen">
          {sectionComponents[activeSection] || <Home />}
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;