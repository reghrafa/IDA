import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import {observer} from 'mobx-react';
import {useStore} from '../dataLayer/useStore';
import Tabbar from '../components/tabbar/Tabbar';
import FeedNavigator from './FeedNavigator';
import EmergencyNavigator from './EmergencyNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigator: React.FC = () => {
  const store = useStore();
  return (
    <NavigationContainer>
      {store.userStore.loggedIn ? (
        <Tab.Navigator tabBar={Tabbar}>
          <Tab.Screen name={NAV_FEED} component={FeedNavigator} />
          <Tab.Screen name={NAV_EMERGENCY} component={EmergencyNavigator} />
          <Tab.Screen name={NAV_PROFILE} component={ProfileNavigator} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name={NAV_ONBOARDING} component={OnboardingScreen} />
          <Stack.Screen name={NAV_LOGIN} component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default observer(Navigator);

export const NAV_ONBOARDING = 'Onboarding';
export const NAV_LOGIN = 'Login';

export const NAV_FEED = 'Feed';
export const NAV_EMERGENCY = 'Emergency';
export const NAV_PROFILE = 'Profile';
