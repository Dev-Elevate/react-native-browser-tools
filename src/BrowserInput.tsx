import { useContext } from 'react';
import { TextInput } from 'react-native';
import { BrowserContext } from './BrowserContext';

export function BrowserInput() {
  const { url, setURL } = useContext(BrowserContext);
  return <TextInput value={url} onChangeText={setURL} />;
}
