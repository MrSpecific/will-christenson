import { useRef, useState, useEffect } from 'react';

const useIntersectionObserver = (options = { root: null, rootMargin: '0px', threshold: 0.1 }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const containerElement = containerRef.current;
    if (containerElement) observer.observe(containerElement);

    return () => {
      if (containerElement) observer.unobserve(containerElement);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useIntersectionObserver;
