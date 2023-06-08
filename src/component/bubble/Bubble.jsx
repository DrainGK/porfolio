import React, { useRef } from 'react';
import './bubble.css';
import bubbleHover from '../../assets/sounds/bubble_hover.mp3';
import clickedBubble from '../../assets/sounds/clikedBubble.mp3';

const Bubble = ({ image, title, className, onClick }) => {
  const audioRef = useRef(null);
  const clickAudioRef = useRef(null);

  let debounceTimeout;

  const playSound = (audioElement) => {
    if (!audioElement.current.paused) {
      audioElement.current.currentTime = 0;
    } else {
      audioElement.current.volume = 0.05; // Set volume to 0.2 (20%)
      audioElement.current.play().catch(error => {
        console.error('Failed to play sound:', error);
      });
    }
  };

  const debouncedPlaySound = (audioElement) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      playSound(audioElement);
    }, 10); // Adjust the debounce time as needed (e.g., 100 milliseconds)
  };

  const handleMouseOver = () => {
    debouncedPlaySound(audioRef);
  };

  const handleMouseLeave = () => {
    audioRef.current.pause();
  };

  const handleSoundEnd = () => {
    audioRef.current.currentTime = 0;
  };

  const handleClick = () => {
    playSound(clickAudioRef);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <audio ref={audioRef} src={bubbleHover} onEnded={handleSoundEnd} />
      <audio ref={clickAudioRef} src={clickedBubble} />
      <img src={image} alt={title} />
    </div>
  );
};

export default Bubble;
