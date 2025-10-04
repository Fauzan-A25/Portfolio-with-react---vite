import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import LoadingScreen from './components/layout/LoadingScreen/LoadingScreen';
import Hero from './components/sections/Hero/Hero';
import ScrollToTop from './components/core/ScrollToTop/ScrollToTop';
import ThemeToggle from './components/core/ThemeToggle/ThemeToggle';

// ✨ Import Background Music ONLY
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';

const About = lazy(() => import('./components/sections/About/About'));
const Skills = lazy(() => import('./components/sections/Skills/Skills'));
const Projects = lazy(() => import('./components/sections/Projects/Projects'));
const Contact = lazy(() => import('./components/sections/Contact/Contact'));
const Footer = lazy(() => import('./components/layout/Footer/Footer'));

function App() {
  return (
    <>
      <LoadingScreen />
      
      {/* ✨ Background Music Only */}
      <BackgroundMusic />
      
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="loading-section">Loading...</div>}>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <ThemeToggle />
      <ScrollToTop />
    </>
  );
}

export default App;
