import { useState } from 'react';
import { tabsUrlStack, tabsPopedUrlStack } from '../utils/stack';
import type { urlType } from '../types/types';

export const useRouter = () => {
  const [urls, setUrls] = useState<urlType[]>([]);

  function pushRoute(url: string) {
    const payload = { url: url, timestamp: Date.now() };
    tabsUrlStack.push(payload);
    setUrls([...tabsUrlStack.get()]);
  }

  function goBack() {
    tabsPopedUrlStack.push(tabsUrlStack.peek() ?? { url: '', timestamp: 0 });
    tabsUrlStack.pop();
    setUrls([...tabsUrlStack.get()]);
  }
  function goForward() {
    const lastTab = tabsPopedUrlStack.pop();
    tabsUrlStack.push(lastTab ?? { url: '', timestamp: 0 });
    setUrls([...tabsUrlStack.get()]);
  }

  return { pushRoute, goBack, urls, goForward };
};
