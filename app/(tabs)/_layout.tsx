import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import CallsScreen from './calls';
import UpdatesScreen from './updates';
import CommunitiesScreen from './communities';
import ChatsScreen from './chats';
import SettingsScreen from './settings'; 
import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

const Tab = createBottomTabNavigator();

const Layout = () => {
  const backgroundColor = useThemeColor({}, 'backgroundColorTab');
  const tabBarActiveColor = useThemeColor({}, 'tabBarActiveTintColor');
  const tabBarInactiveColor=  useThemeColor({}, 'tabBarInactiveTintColor'); 
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [styles.tabBar, {backgroundColor}],
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: tabBarActiveColor,
        tabBarInactiveTintColor: tabBarInactiveColor,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Calls"
        component={CallsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="call" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Updates"
        component={UpdatesScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Communities"
        component={CommunitiesScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="group" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    paddingTop: 15,
    height: 80,
  },
  tabBarLabel: {
    fontSize: 10,
    marginBottom: 0,
  },
});
