import { createContext } from 'react';

export const BrowserContext = createContext({
  url: '',
  setURL: (url: string) => {},
  checkUrlValid: (url: string): boolean => true,
  attachHttp: (url: string): string => '',
});
