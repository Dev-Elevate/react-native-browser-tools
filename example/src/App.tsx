import { useState, useCallback } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import {
  BrowserProvider,
  BrowserInput,
  BrowserView,
  BrowserBackButton,
  BrowserForwardButton,
  BrowserHeader,
  useMetaData,
} from 'react-native-browser-tools';

export default function App() {
  // const [result, setResult] = useState<string>('https://know-rohit.vercel.app');

  // const { pushRoute, goBack, urls } = useRouter();

  // const checkUrlValid = useCallback((url: string) => {
  //   try {
  //     new URL(url);
  //   } catch (e) {
  //     return false;
  //   }
  //   return true;
  // }, []);

  return (
    <View style={styles.container}>
      <BrowserProvider>
        <MetaTitle />
        <BrowserHeader>
          <BrowserBackButton />
          <BrowserInput />
          <BrowserForwardButton />
        </BrowserHeader>
        <BrowserView />
      </BrowserProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

function MetaTitle() {
  const { metaData } = useMetaData();
  // @ts-ignore
  return <Text>{metaData.title}</Text>;
}
