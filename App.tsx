import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from './src/screens/FeedScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App: React.FC = () => {
  // const [loggedIn, login] = useState<boolean>(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? (
          <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Emergency" component={EmergencyScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        ) : (
          <Stack.Screen name="Auth" component={() => null} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
