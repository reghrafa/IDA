import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmergencyScreen from '../screens/Emergency/EmergencyScreen/EmergencyScreen';

const Stack = createStackNavigator();

export const NAV_EMERGENCY_SCREEN = 'Nav_Emergency_Screen';

const EmergencyNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={NAV_EMERGENCY_SCREEN} component={EmergencyScreen} />
  </Stack.Navigator>
);

export default EmergencyNavigator;
