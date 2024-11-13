import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

export default function RouteLayout() {
  return (
    <View style={styles.index}>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
const styles = StyleSheet.create({
  index:{
  flex: 1,
   backgroundColor: 'green'
  },
})
