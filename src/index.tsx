import { WebView } from 'react-native-webview';

export function BrowserView({ url }: { url: string }) {
  return <WebView source={{ uri: url }} style={{ flex: 1 }}></WebView>;
}
