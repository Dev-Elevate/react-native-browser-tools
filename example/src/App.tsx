import { useState, useCallback } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import {
  BrowserProvider,
  BrowserInput,
  BrowserView,
  useRouter,
} from 'react-native-browser-tools';

export default function App() {
  const [result, setResult] = useState<string>('https://know-rohit.vercel.app');

  const { pushRoute, goBack, urls } = useRouter();

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
      <BrowserProvider>
        <BrowserInput />
        <BrowserView />
      </BrowserProvider>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{
            width: 300,
            padding: 4,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            marginTop: 5,
          }}
          value={result}
          onChangeText={(url) => {
            if (checkUrlValid(url)) {
              setResult(url);
            } else {
              setResult('https://' + url);
            }
          }}
        />
        <Pressable
          style={{
            backgroundColor: '#C8E812',
            paddingHorizontal: 4,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
          }}
          onPress={() => {
            pushRoute(result);
          }}
        >
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Push URL
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#C8E812',
            paddingHorizontal: 4,
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
          }}
          onPress={() => {
            goBack();
          }}
        >
          <Text
            style={{
              fontSize: 12,
            }}
          >
            Pop url
          </Text>
        </Pressable>
      </View>
      <Text>{JSON.stringify(urls)}</Text>
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
