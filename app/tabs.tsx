import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CallsScreen from './calls'; 
import StatusScreen from './status'; 
import ChatsStack from './chats/chatStack'; 
import { StyleSheet } from 'react-native';
import ChatsScreen from './chats/index';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar, 
        tabBarLabelStyle: styles.tabBarLabel, 
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray', 
      }}
    >
      <Tab.Screen 
        name="chats" 
        component={ChatsScreen}  
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={20} color={color} />,
        }}
      />
      <Tab.Screen 
        name="calls" 
        component={CallsScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="call" size={20} color={color} />,
        }}
      />
      <Tab.Screen 
        name="status" 
        component={StatusScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#075E54', 
    borderTopWidth: 0, 
    paddingTop: 15,
    height: 80, 
  },
  tabBarLabel: {
    fontSize: 14, 
    marginBottom: 0, 
  },
});
