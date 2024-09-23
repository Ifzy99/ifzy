import React, { useState, useEffect, useRef } from 'react';

const AnimatedText = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const textRef = useRef(null);
  const animationTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationTriggeredRef.current) {
          setShouldAnimate(true);
          animationTriggeredRef.current = true;
        } else if (!entries[0].isIntersecting) {
          setDisplayedText('');
          animationTriggeredRef.current = false;
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(intervalId);
          setShouldAnimate(false);
        }
      }, 120); // Adjust this value to control the speed of the reveal

      return () => clearInterval(intervalId);
    }
  }, [shouldAnimate, text]);

  return <span ref={textRef} className={className}>{displayedText}</span>;
};

export default AnimatedText;