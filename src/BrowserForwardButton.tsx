import { StyleSheet, View, Text } from 'react-native';

export function BrowserForwardButton({ ...props }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} {...props}>
        {'->'}
      </Text>
    </View>
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
