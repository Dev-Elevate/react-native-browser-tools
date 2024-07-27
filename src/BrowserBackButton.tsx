import { StyleSheet, Pressable, Text } from 'react-native';
import { useRouter } from './hooks/useRouter';

export function BrowserBackButton({ ...props }) {
  const { goBack, urls } = useRouter();
  return (
    <Pressable
      onPress={() => {
        goBack();
        console.log(urls);
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
