import { useEffect, useRef, useState } from 'react';

const useInViewAnimation = (options) => {
  const [isInView, setIsInView] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, [animationRef, options]);

  return [animationRef, isInView];
};

export default useInViewAnimation;