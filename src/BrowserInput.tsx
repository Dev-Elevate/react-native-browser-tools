import { useContext, useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { BrowserContext } from './BrowserContext';
import { useRouter } from './hooks/useRouter';

export function BrowserInput() {
  const { setURL } = useContext(BrowserContext);
  const [localUrl, setLocalURL] = useState<string>('');
  const { pushRoute } = useRouter();
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
        setURL(localUrl);
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
