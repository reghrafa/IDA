import React from 'react';
import {Text} from 'react-native';
import IOnboardingScreenProps from './IOnboardingScreenProps';
import ScreenWrapper from '../../wrapper/ScreenWrapper/ScreenWrapper';

const OnboardingScreen: React.FC<IOnboardingScreenProps> = ({login}) => {
  return (
    <ScreenWrapper>
      <Text>Onboarding</Text>
    </ScreenWrapper>
  );
};

export default OnboardingScreen;
