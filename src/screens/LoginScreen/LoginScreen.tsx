import React from 'react';
import Text from '../../components/text/Text';
import ScreenWrapper from '../../wrapper/ScreenWrapper/ScreenWrapper';
import Color from '../../helper/Color';

const LoginScreen: React.FC = () => {
  return (
    <ScreenWrapper
      color={Color.fromHEX('#242424')}
      statusbarStyle="light-content">
      <Text color={Color.fromHEX('#844242')}>LoginScreen</Text>
    </ScreenWrapper>
  );
};

export default LoginScreen;
