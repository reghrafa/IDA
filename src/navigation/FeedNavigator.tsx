import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen/FeedScreen';

const Stack = createStackNavigator();

export const NAV_FEED_SCREEN = 'Nav_Feed_Screen';

const FeedNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={NAV_FEED_SCREEN} component={FeedScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
