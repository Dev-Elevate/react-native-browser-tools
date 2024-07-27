import { useContext, useEffect, useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { BrowserContext } from './BrowserContext';
import { useRouter } from './hooks/useRouter';

export function BrowserInput() {
  const { setURL, url } = useContext(BrowserContext);
  const [localUrl, setLocalURL] = useState<string>('');
  const { pushRoute } = useRouter();

  useEffect(() => {
    setLocalURL(url);
  }, [url]);
  return (
    <TextInput
      style={style.input}
      value={localUrl}
      onChange={(nativeEvent) => {
        const { text } = nativeEvent.nativeEvent;
        setLocalURL(text);
      }}
      returnKeyType="search"
      onSubmitEditing={() => {
        if (
          !(localUrl.startsWith('http://') || localUrl.startsWith('https://'))
        ) {
          setLocalURL('https://' + localUrl);
        }
        if (url !== localUrl) setURL(localUrl);
        console.log('Pusshing', localUrl);

        pushRoute(localUrl);
      }}
    />
  );
}

const style = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
