import { tabsUrlStack } from '../utils/stack';

export const useRouter = () => {
  function pushRoute(url: string) {
    tabsUrlStack.push({ url: url, timestamp: Date.now() });
  }

  function goBack() {
    tabsUrlStack.pop();
  }

  return { pushRoute, goBack };
};
