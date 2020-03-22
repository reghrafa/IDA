import React from 'react';
import Text from '../../components/text/Text';
import ScreenWrapper from '../../wrapper/ScreenWrapper/ScreenWrapper';
import {Button} from 'react-native';
import {useStore} from '../../dataLayer/useStore';

const LoginScreen: React.FC = () => {
  const store = useStore();
  return (
    <ScreenWrapper>
      <Text>LoginScreen</Text>
      <Button
        onPress={() => {
          store.userStore.authenticate();
        }}
        title="Continue"
      />
    </ScreenWrapper>
  );
};

export default LoginScreen;
