import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from './src/screens/FeedScreen/FeedScreen';
import EmergencyScreen from './src/screens/EmergencyScreen/EmergencyScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {Provider} from 'mobx-react';
import RootStore from './src/dataLayer/RootStore';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: React.FC = () => {
  const rootStore = RootStore.create();
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        {rootStore.userStore.loggedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Emergency" component={EmergencyScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
