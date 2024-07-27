// @ts-ignore
import { WebView, WebViewProps } from 'react-native-webview';
import { BrowserContext } from './BrowserContext';
import { useContext, useState } from 'react';
import { Text, View } from 'react-native';

export function BrowserView({ ...props }: WebViewProps) {
  const injectedJavaScript = `
    (function() {
      function getMetaContentByName(name) {
        const meta = document.querySelector('meta[name="' + name + '"]');
        return meta ? meta.getAttribute('content') : '';
      }

      function getMetaContentByProperty(property) {
        const meta = document.querySelector('meta[property="' + property + '"]');
        return meta ? meta.getAttribute('content') : '';
      }

      const metadata = {
        title: document.title,
        description: getMetaContentByName('description') || getMetaContentByProperty('og:description'),
        keywords: getMetaContentByName('keywords'),
        ogTitle: getMetaContentByProperty('og:title'),
        ogDescription: getMetaContentByProperty('og:description'),
        ogImage: getMetaContentByProperty('og:image')
      };

      window.ReactNativeWebView.postMessage(JSON.stringify(metadata));
    })();
  `;

  const { url, attachHttp, checkUrlValid, setMetaData } =
    useContext(BrowserContext);
  const handleMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log(data);
    setMetaData(data);
  };

  return checkUrlValid(attachHttp(url)) ? (
    <WebView
      source={{ uri: attachHttp(url) }}
      injectedJavaScript={injectedJavaScript}
      onMessage={handleMessage}
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
