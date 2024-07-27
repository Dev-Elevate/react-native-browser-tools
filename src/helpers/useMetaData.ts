import { useContext } from 'react';
import { BrowserContext } from '../BrowserContext';
export function useMetaData() {
  const { metaData } = useContext(BrowserContext);

  return {
    metaData,
  };
}
