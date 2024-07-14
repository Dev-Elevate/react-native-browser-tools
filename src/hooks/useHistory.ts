import { tabsUrlStack } from '../utils/stack';

export const useHistory = () => {
  const urls = tabsUrlStack.get();
  return urls;
};
