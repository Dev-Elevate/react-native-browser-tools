// @ts-ignore
import { WebView, WebViewProps } from 'react-native-webview';
import { BrowserContext } from './BrowserContext';
import { useContext } from 'react';
import { Text, View } from 'react-native';

export function BrowserView({ ...props }: WebViewProps) {
  const { url, attachHttp, checkUrlValid } = useContext(BrowserContext);
  return checkUrlValid(attachHttp(url)) ? (
    <WebView
      source={{ uri: attachHttp(url) }}
      {...props}
      style={[{ flex: 1 }, props.style]}
    ></WebView>
  ) : (
    !url && (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Enter url</Text>
      </View>
    )
  );
}
