import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />
      <About />
      <Skills />
    </main>
  );
};

export default App;