import { useEffect, useState } from 'react';
import { tabsUrlStack } from '../utils/stack';
import type { urlType } from '../types/types';

export const useHistory = () => {
  const [urls, setUrls] = useState<urlType[]>();
  useEffect(() => {
    setUrls(tabsUrlStack.get());
  }, []);

  console.log(urls);
  return { urls };
};
