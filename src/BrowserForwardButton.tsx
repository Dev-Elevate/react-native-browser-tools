import { StyleSheet, Pressable, Text } from 'react-native';
// import { useRouter } from './hooks/useRouter';
// import { useContext } from 'react';
// import { BrowserContext } from './BrowserContext';
import { useBrowserNavigation } from './hooks/useRouter';

export function BrowserForwardButton({ ...props }) {
  // const { goForward } = useRouter();
  const { goForward } = useBrowserNavigation();

  // const { setURL } = useContext(BrowserContext);

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        goForward();
        // if (urls.length > 0)
        //   // @ts-ignore
        //   setURL(urls[urls.length - 1]?.url);
      }}
    >
      <Text style={styles.text} {...props}>
        {'->'}
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
