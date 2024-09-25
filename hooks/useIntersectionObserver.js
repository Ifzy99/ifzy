// import { useEffect, useRef } from 'react';

// const useIntersectionObserver = (options) => {
//   const elementRef = useRef(null);

//   useEffect(() => {

//     // Ensure this runs only in the browser
//     if (typeof window === 'undefined' || !elementRef.current) return;

//     const observer = new IntersectionObserver((entries) => {
//       const currentElement = elementRef.current;

//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate');  // Add animation class
//         } else {
//           entry.target.classList.remove('animate');
//         }
//       });
//     }, options);

//     observer.observe(currentElement);

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, [options]);

//   return typeof window !== 'undefined' ? elementRef : null; // Return null if server-side
// };

// export default useIntersectionObserver;


import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback = () => {}, options) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !elementRef.current) return;

    const observer = new IntersectionObserver(callback, options);
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
      console.log("Observing:", currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
        console.log("Stopped observing:", currentElement);
      }
    };
  }, [callback, options]);

  return typeof window !== 'undefined' ? elementRef : null;
};

export default useIntersectionObserver;
