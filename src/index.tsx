import { useCallback, useState, createContext, useContext } from 'react';
import { Text, TextInput, View } from 'react-native';
import { WebView, WebViewProps } from 'react-native-webview';

const BrowserContext = createContext({
  url: '',
  setURL: (url: string) => {},
  checkUrlValid: (url: string): boolean => true,
  attachHttp: (url: string): string => '',
});

export function BrowserView({ ...props }: WebViewProps) {
  const { url, attachHttp, checkUrlValid } = useContext(BrowserContext);
  return checkUrlValid(attachHttp(url)) ? (
    <WebView
      source={{ uri: attachHttp(url) }}
      {...props}
      style={[{ flex: 1 }, props.style]}
    ></WebView>
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Invalid == {url}</Text>
    </View>
  );
}

export function BrowserInput() {
  const { url, setURL } = useContext(BrowserContext);
  return <TextInput value={url} onChangeText={setURL} />;
}

export function BrowerTools({ children }: { children: React.ReactNode }) {
  const [url, setURL] = useState<string>('know-rohit.vercel.app');
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
    <BrowserContext.Provider value={{ url, setURL, checkUrlValid, attachHttp }}>
      {children}
    </BrowserContext.Provider>
  );
}
