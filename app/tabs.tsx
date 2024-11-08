import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import CallsScreen from './calls'; 
import UpdatesScreen from './updates'; 
import CommunitiesScreen from './communities';
import { StyleSheet } from 'react-native';
import ChatsScreen from './chats/index';
import SettingsScreen from './settings';
import Header from '@/components/Header';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header:() => <Header/>,
        // headerShown: false,
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
        name="updates" 
        component={UpdatesScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={20} color={color} />,
        }}
      />
      <Tab.Screen 
        name="communities" 
        component={CommunitiesScreen}  
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="group" size={20} color={color} />,
        }}
      />
      <Tab.Screen 
        name="settings" 
        component={SettingsScreen}  
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={20} color={color} />,
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
