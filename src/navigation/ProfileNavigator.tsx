import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator();

export const NAV_PROFILE_SCREEN = 'Nav_Profile_Screen';

const ProfileNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={NAV_PROFILE_SCREEN} component={ProfileScreen} />
  </Stack.Navigator>
);

export default ProfileNavigator;
