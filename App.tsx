import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from './src/screens/FeedScreen/FeedScreen';
import EmergencyScreen from './src/screens/EmergencyScreen/EmergencyScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Emergency" component={EmergencyScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        ) : (
          <Stack.Screen
            name="Onboarding"
            component={() => (
              <OnboardingScreen login={() => setLoggedIn(true)} />
            )}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
