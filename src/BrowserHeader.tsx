// @ts-ignore
import { BrowserContext } from './BrowserContext';
import { View } from 'react-native';

export function BrowserHeader({ ...props }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 10,
      }}
      {...props}
    />
  );
}
