import React from 'react';
import {IScreenWrapperProps} from './IScreenWrapperProps';
import {StatusBar, SafeAreaView} from 'react-native';

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({children}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>{children}</SafeAreaView>
    </>
  );
};

ScreenWrapper.defaultProps = {
  statusbarStyle: 'dark-content',
};

export default ScreenWrapper;
