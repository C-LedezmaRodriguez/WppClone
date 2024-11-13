import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import CallsScreen from './calls';
import UpdatesScreen from './updates';
import CommunitiesScreen from './communities';
import ChatsScreen from './chats';
import SettingsScreen from './settings'; 
import Header from '@/components/Header';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const Layout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => <Header />,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray',
      }}
    >
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Calls"
        component={CallsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="call" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Updates"
        component={UpdatesScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Communities"
        component={CommunitiesScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="group" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Layout;

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
