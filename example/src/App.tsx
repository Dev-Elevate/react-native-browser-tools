import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import {
  BrowserView,
  BrowerTools,
  BrowserInput,
} from 'react-native-browser-tools';

export default function App() {
  const [url, setURL] = useState<string>('know-rohit.vercel.app');
  const [error, setError] = useState<string>('No Error');
  const [nativeEvent, setNativeEvent] = useState<any>();
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
    <View style={styles.container}>
      <BrowerTools>
        <BrowserInput />
        <BrowserView />
      </BrowerTools>
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
