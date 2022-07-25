import { useRef, useState, useEffect, useCallback } from 'react';

const isElement = (o) => {
  return typeof HTMLElement === 'object'
    ? o instanceof HTMLElement //DOM2
    : o &&
        typeof o === 'object' &&
        o !== null &&
        o.nodeType === 1 &&
        typeof o.nodeName === 'string';
};

const getBreakpoint = (element) => {
  if (!isElement(element)) return null;
  const style = window.getComputedStyle(element);
  return style.getPropertyValue('--breakpoint').trim();
};

const useBreakpoint = (existingRef = null) => {
  const newRef = useRef(null);
  const ref = existingRef || newRef;
  const [value, setValue] = useState(null);

  const updateBreakpoint = useCallback(() => {
    const breakpoint = getBreakpoint(ref.current);
    setValue(breakpoint);
  }, [ref]);

  useEffect(() => {
    updateBreakpoint();
  }, [updateBreakpoint, ref]);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateBreakpoint, { passive: true });
  }

  return [value, ref];
};

export default useBreakpoint;
