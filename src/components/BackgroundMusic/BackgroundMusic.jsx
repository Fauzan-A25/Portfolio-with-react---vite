import { useState, useEffect, useRef } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    
    // Set initial volume
    audio.volume = volume;
    
    // Audio ready
    const handleCanPlay = () => {
      setLoading(false);
    };
    
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('loadeddata', handleCanPlay);
    
    // Auto play after user interaction
    const handleInteraction = () => {
      if (!hasInteracted.current) {
        audio.play()
          .then(() => {
            setPlaying(true);
            hasInteracted.current = true;
          })
          .catch((error) => {
            console.log('Auto-play blocked:', error);
          });
        
        // Remove listeners after first interaction
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('loadeddata', handleCanPlay);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play()
        .then(() => {
          setPlaying(true);
        })
        .catch((error) => {
          console.error('Play failed:', error);
        });
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src="./audio/teman-ryo.mp3" 
        loop 
        preload="auto"
      />
      
      {/* Music Control */}
      <div className={`music-control ${loading ? 'loading' : ''}`}>
        <button 
          onClick={togglePlay} 
          className="music-toggle"
          disabled={loading}
          aria-label={playing ? 'Pause music' : 'Play music'}
          title={loading ? 'Loading...' : (playing ? 'Pause' : 'Play')}
        >
          {loading ? (
            <i className="bi bi-hourglass-split"></i>
          ) : (
            <i className={`bi ${playing ? 'bi-volume-up-fill' : 'bi-volume-mute-fill'}`}></i>
          )}
        </button>
        
        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            aria-label="Volume control"
          />
          <span className="volume-value">{Math.round(volume * 100)}%</span>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusic;
