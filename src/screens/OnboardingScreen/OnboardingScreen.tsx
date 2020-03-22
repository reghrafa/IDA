import React from 'react';
import {Text, Button} from 'react-native';
import ScreenWrapper from '../../wrapper/ScreenWrapper/ScreenWrapper';
import {useNavigation} from '@react-navigation/native';
import {NAV_LOGIN} from '../../navigation/Navigation';

const OnboardingScreen: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <ScreenWrapper>
      <Text>Onboarding</Text>
      <Button
        onPress={() => {
          navigate(NAV_LOGIN);
        }}
        title="Weiter"
      />
    </ScreenWrapper>
  );
};

export default OnboardingScreen;
