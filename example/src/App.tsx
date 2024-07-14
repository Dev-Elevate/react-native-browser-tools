import { useState, useCallback } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { BrowserView } from 'react-native-browser-tools';

export default function App() {
  const [result, setResult] = useState<string>('https://know-rohit.vercel.app');

  const checkUrlValid = useCallback((url: string) => {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        value={result}
        onChangeText={(url) => {
          if (checkUrlValid(url)) {
            setResult(url);
          } else {
            setResult('https://' + url);
          }
        }}
      />
      <BrowserView url={result} />
      {/* <WebView  source={{uri:result}} style={{flex:1}}></WebView> */}
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
