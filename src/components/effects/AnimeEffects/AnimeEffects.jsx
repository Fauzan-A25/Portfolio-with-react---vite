import { memo } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import './AnimeEffects.css';

const AnimeEffects = memo(() => {
  const { isAnime } = useTheme();

  // Hanya render kalau anime theme aktif
  if (!isAnime) return null;

  return (
    <div className="anime-effects-wrapper">
      {/* Floating Particles - Sparkles */}
      <div className="anime-particles">
        {[...Array(30)].map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} 
          />
        ))}
      </div>

      {/* Scan Lines Effect */}
      <div className="anime-scanlines" />

      {/* Digital Rain (Matrix-like) */}
      <div className="anime-digital-rain">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`rain-${i}`}
            className="rain-column" 
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.5 ? '01' : '10'}
          </div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="anime-orbs">
        <div className="anime-orb orb-red" />
        <div className="anime-orb orb-cyan" />
        <div className="anime-orb orb-pink" />
      </div>

      {/* Cyber Grid */}
      <div className="anime-cyber-grid" />

      {/* Neon Lines */}
      <div className="anime-neon-lines">
        <div className="neon-line line-horizontal-1" />
        <div className="neon-line line-horizontal-2" />
        <div className="neon-line line-vertical-1" />
        <div className="neon-line line-vertical-2" />
      </div>

      {/* Glitch Overlay (subtle) */}
      <div className="anime-glitch-overlay" />
    </div>
  );
});

AnimeEffects.displayName = 'AnimeEffects';

export default AnimeEffects;
