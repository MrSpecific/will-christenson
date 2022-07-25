import { useEffect } from 'react';

const DEFAULT_OPTIONS = { attributes: true, characterData: true, childList: true, subtree: true };

const useMutationObserver = (ref, callback, options = DEFAULT_OPTIONS) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, options);

      return () => observer.disconnect();
    }
  }, [callback, options, ref]);
};

export default useMutationObserver;
