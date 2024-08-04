// @ts-ignore
import { WebView, WebViewProps } from 'react-native-webview';
import { BrowserContext } from './BrowserContext';
import { useContext, useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import { Button } from 'react-native';

export function BrowserView({ ...props }: WebViewProps) {
  const viewShotRef = useRef(null);
  const [screenshotUri, setScreenshotUri] = useState<string | null>(null);

  const captureScreenshot = async () => {
    if (viewShotRef.current) {
      const uri = await viewShotRef?.current?.capture();
      const filePath = `${RNFS.DocumentDirectoryPath}/${Date.now()}.png`;
      await RNFS.moveFile(uri, filePath);
      setScreenshotUri(`file://${filePath}`);
    }
  };

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

  return (
    <View>
      <Button title="Capture Screenshot" onPress={captureScreenshot} />
      {checkUrlValid(attachHttp(url)) ? (
        <ViewShot
          ref={viewShotRef}
          style={{
            height: 500,
            width: '100%',
          }}
          options={{ format: 'png', quality: 1.0 }}
        >
          <WebView
            source={{ uri: attachHttp(url) }}
            injectedJavaScript={injectedJavaScript}
            onMessage={handleMessage}
            {...props}
            style={[{ flex: 1 }, props.style]}
          ></WebView>
        </ViewShot>
      ) : (
        !url && (
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text>Enter url</Text>
          </View>
        )
      )}
      {screenshotUri && (
        <Image
          resizeMode="contain"
          source={{ uri: screenshotUri }}
          style={{ width: '100%', height: 400, marginTop: 20 }}
        />
      )}
    </View>
  );
}
