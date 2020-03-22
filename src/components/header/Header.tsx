import React from 'react';
import {View} from 'react-native';
import IHeader from './IHeader';
import Text from '../text/Text';

const Header: React.FC<IHeader> = () => {
  return (
    <View>
      <Text>Ambassador Hub</Text>
    </View>
  );
};

export default Header;
