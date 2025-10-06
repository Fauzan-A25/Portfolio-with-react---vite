import { lazy, Suspense } from 'react';

import AnimeEffects from './components/effects/AnimeEffects/AnimeEffects';
import Navbar from './components/layout/Navbar/Navbar';
import LoadingScreen from './components/layout/LoadingScreen/LoadingScreen';
import Hero from './components/sections/Hero/Hero';
import ScrollToTop from './components/core/ScrollToTop/ScrollToTop';
import ThemeToggle from './components/core/ThemeToggle/ThemeToggle';

// ✨ Import Background Music ONLY
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';

const About = lazy(() => import('./components/sections/About/About'));
const Skills = lazy(() => import('./components/sections/Skills/Skills'));
const Experience = lazy(() => import('./components/sections/Experience/Experience'));
const Certifications = lazy(() => import('./components/sections/Certifications/Certifications'));
const Projects = lazy(() => import('./components/sections/Projects/Projects'));
const Contact = lazy(() => import('./components/sections/Contact/Contact'));
const Footer = lazy(() => import('./components/layout/Footer/Footer'));

function App() {
  return (
    <>
      <LoadingScreen />
      <BackgroundMusic />
      {/* ✨ Background Music Only */}
      <Navbar />
      <ThemeToggle />
      {/* <AnimeEffects /> */}
      <ScrollToTop />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
