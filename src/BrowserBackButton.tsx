import { StyleSheet, Pressable, Text } from 'react-native';
import { useRouter } from './hooks/useRouter';
import { useContext } from 'react';
import { BrowserContext } from './BrowserContext';

export function BrowserBackButton({ ...props }) {
  const { urls, goBack } = useRouter();
  const { setURL } = useContext(BrowserContext);

  return (
    <Pressable
      onPress={() => {
        goBack();
        if (urls.length > 0)
          // @ts-ignore
          setURL(urls[urls.length - 1]?.url);
      }}
      style={styles.container}
    >
      <Text style={styles.text} {...props}>
        {'<-'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    padding: 6,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});
