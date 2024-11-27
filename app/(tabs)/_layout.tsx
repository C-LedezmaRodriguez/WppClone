import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import CallsScreen from './calls';
import UpdatesScreen from './updates';
import CommunitiesScreen from './communities';
import ChatsScreen from './chats';
import SettingsScreen from './settings';
import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { heightSizes, widthSizes } from '@/constants/Sizes';
import { i18n } from '@/i18n';

const Tab = createBottomTabNavigator();

const Layout = () => {
  const backgroundColor = useThemeColor({}, 'backgroundColorTab');
  const tabBarActiveColor = useThemeColor({}, 'tabBarActiveTintColor');
  const tabBarInactiveColor = useThemeColor({}, 'tabBarInactiveTintColor');
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [styles.tabBar, { backgroundColor }],
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: tabBarActiveColor,
        tabBarInactiveTintColor: tabBarInactiveColor,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={i18n.t('chats')}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={widthSizes[24]} color={color} />,
        }}
      />
      <Tab.Screen
        name={i18n.t('calls')}
        component={CallsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="call" size={widthSizes[24]} color={color} />,
        }}
      />
      <Tab.Screen
        name={i18n.t('updates')}
        component={UpdatesScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={widthSizes[24]} color={color} />,
        }}
      />
      <Tab.Screen
        name={i18n.t('communities')}
        component={CommunitiesScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="group" size={widthSizes[24]} color={color} />,
        }}
      />
      <Tab.Screen
        name={i18n.t('settings')}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={widthSizes[24]} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: heightSizes[0],
    paddingTop: widthSizes[20],
    height: heightSizes[80],
  },
  tabBarLabel: {
    fontSize: heightSizes[10],
    marginBottom: heightSizes[0],
  },
});
