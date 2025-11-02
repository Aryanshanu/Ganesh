import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Hero, About, Experience, Competencies, Achievements, Education, TechStack, Blog, Contact } from './components/Sections';
import Footer from './components/Footer';
import { SunIcon, MoonIcon } from './components/Icons';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans selection:bg-accent-blue/20">
      <Header />
      <button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform border border-light-border dark:border-dark-border"
        aria-label="Toggle theme"
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
      <main>
        <Hero />
        <About />
        <Experience />
        <Competencies />
        <Achievements />
        <Education />
        <TechStack />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;