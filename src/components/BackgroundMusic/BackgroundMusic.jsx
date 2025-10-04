import { useState, useEffect, useRef } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(true); // ← State untuk expand/collapse
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const hasInteracted = useRef(false);
  const animationRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
    
    const handleCanPlay = () => {
      setLoading(false);
      setupAudioContext();
    };
    
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('loadeddata', handleCanPlay);
    
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
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [volume]);

  const setupAudioContext = () => {
    if (!audioContextRef.current) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaElementSource(audioRef.current);
      
      analyser.fftSize = 64;
      source.connect(analyser);
      analyser.connect(audioContext.destination);
      
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      
      visualize();
    }
  };

  const visualize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const analyser = analyserRef.current;
    
    if (!analyser) return;
    
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      
      analyser.getByteFrequencyData(dataArray);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = (canvas.width / bufferLength) * 1.5;
      let x = 0;
      
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
        
        const gradient = ctx.createLinearGradient(0, canvas.height - barHeight, 0, canvas.height);
        gradient.addColorStop(0, '#00d4aa');
        gradient.addColorStop(0.5, '#00a8e8');
        gradient.addColorStop(1, '#7b2cbf');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
        
        x += barWidth;
      }
    };
    
    draw();
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    
    if (playing) {
      audio.pause();
      setPlaying(false);
      if (audioContextRef.current) {
        audioContextRef.current.suspend();
      }
    } else {
      audio.play()
        .then(() => {
          setPlaying(true);
          if (audioContextRef.current) {
            audioContextRef.current.resume();
          }
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

  // ← Toggle expand/collapse
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="./audio/teman-ryo.mp3" 
        loop 
        preload="auto"
        crossOrigin="anonymous"
      />
      
      {/* Music Control with Expand/Collapse */}
      <div className={`music-control ${loading ? 'loading' : ''} ${expanded ? 'expanded' : 'collapsed'}`}>
        {/* Play/Pause Button */}
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
        
        {/* Expandable Content */}
        <div className="expandable-content">
          {/* Audio Visualizer Canvas */}
          <canvas 
            ref={canvasRef} 
            className="audio-visualizer"
            width="120"
            height="40"
          />
          
          {/* Volume Control */}
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
        
        {/* Toggle Expand/Collapse Button */}
        <button 
          onClick={toggleExpand}
          className="expand-toggle"
          aria-label={expanded ? 'Collapse' : 'Expand'}
          title={expanded ? 'Collapse' : 'Expand'}
        >
          <i className={`bi bi-chevron-${expanded ? 'left' : 'right'}`}></i>
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;
