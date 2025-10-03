import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (texts, speed = 50, deleteSpeed = 30, delay = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Handle array of texts (rotating) or single text
    const textArray = Array.isArray(texts) ? texts : [texts];
    const currentText = textArray[currentIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, speed);
        } else {
          // Finished typing current text
          setIsComplete(true);
          
          // If multiple texts, wait then start deleting
          if (textArray.length > 1) {
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(true);
              setIsComplete(false);
            }, delay);
          }
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deleteSpeed);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, delay]);

  return { displayText, isComplete, currentIndex };
};
