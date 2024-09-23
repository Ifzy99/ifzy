import { useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window === 'undefined' || !elementRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');  // Add animation class
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return typeof window !== 'undefined' ? elementRef : null; // Return null if server-side
};

export default useIntersectionObserver;