import { createContext } from 'react';

export const BrowserContext = createContext({
  url: '',
  setURL: (url: string) => {},
  metaData: {},
  setMetaData: (metadata: any) => {},
  checkUrlValid: (url: string): boolean => true,
  attachHttp: (url: string): string => '',
});
