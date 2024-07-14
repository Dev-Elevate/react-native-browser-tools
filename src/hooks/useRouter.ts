import { useState } from 'react';
import { tabsUrlStack } from '../utils/stack';
import type { urlType } from '../types/types';

export const useRouter = () => {
  const [urls, setUrls] = useState<urlType[]>([]);

  function pushRoute(url: string) {
    const payload = { url: url, timestamp: Date.now() };
    tabsUrlStack.push(payload);
    setUrls([...tabsUrlStack.get()]);
  }

  function goBack() {
    tabsUrlStack.pop();
    setUrls([...tabsUrlStack.get()]);
  }

  return { pushRoute, goBack, urls };
};
