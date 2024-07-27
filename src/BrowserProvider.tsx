import { useCallback, useState } from 'react';
import { BrowserContext } from './BrowserContext';

export function BrowserProvider({ children }: { children: React.ReactNode }) {
  const [url, setURL] = useState<string>('know-rohit.vercel.app');
  const [metaData, setMetaData] = useState<any>({});
  console.log('metaData', metaData);
  const checkUrlValid = useCallback((url: string) => {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  }, []);
  const attachHttp = useCallback((url: string) => {
    if (!url.includes('http')) {
      return 'https://' + url;
    }
    return url;
  }, []);
  return (
    <BrowserContext.Provider
      value={{ url, setURL, checkUrlValid, attachHttp, metaData, setMetaData }}
    >
      {children}
    </BrowserContext.Provider>
  );
}
