// import React from 'react';
// import { View } from 'react-native';
// import { Stack, Navigator } from 'expo-router';
// import Slot = Navigator.Slot
// // import ChatsScreen from '../screens/ChatsScreen';

// export default function RouteLayout() {
//   return (
//     <View style ={{width: '100%', height: '100%', backgroundColor: 'green'}}>
//       <Stack initialRouteName="chats">
//         <Stack.Screen name="chats"/>
//         <Stack.Screen name="calls" />
//       </Stack>
//     {/* <Slot>

//     </Slot> */}
//     </View>
//   );
// }


// import { View } from 'react-native';
// import { Stack } from 'expo-router'; // Solo importa Stack si lo necesitas


// export default function RouteLayout() {
//   return (
//     <View style={{ width: '100%', height: '100%', backgroundColor: 'green' }}>
//       <Stack initialRouteName="tabs">
//         <Stack.Screen name="tabs" options={{ headerShown: false }} />
//       </Stack>
//     </View>
//   );
// }


import { View } from 'react-native';
import { Stack } from 'expo-router';

export default function RouteLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <Stack initialRouteName="tabs">
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
        <Stack.Screen name="chats/index" options={{ title: 'Chats' }} />
        <Stack.Screen name="chats/[chatId]" options={{ title: 'Chat' }} />
      </Stack>
    </View>
  );
}
