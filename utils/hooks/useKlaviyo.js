import { useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';

const useKlaviyo = ({ id, trigger, options = { useCookie: true } }) => {
  const [formId, setFormId] = useState(id);

  if (typeof window === 'undefined') return {};

  window._klOnsite = window._klOnsite || [];

  const openForm = () => {
    if (!formId) return;

    window._klOnsite.push(['openForm', formId]);
  };

  const handleTriggerOpen = () => {
    if (!formId) return;

    const cookie = `kl_${formId}_${trigger}`;

    if (options?.useCookie) {
      const cookieVal = hasCookie(cookie);

      if (cookieVal) return;
    }

    openForm();

    if (options?.useCookie) {
      setCookie(cookie, true);
    }
  };

  if (trigger) {
    switch (trigger) {
      case 'pageLoad':
        handleTriggerOpen();
        break;
      case 'delay':
        setTimeout(handleTriggerOpen, options?.delay || 1000);
        break;
    }
  }

  return { openForm, setFormId };
};

export default useKlaviyo;
