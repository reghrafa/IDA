import React from 'react';
import {IScreenWrapperProps} from './IScreenWrapperProps';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({children}) => {
  return (
    <>
      <StatusBar backgroundColor="#242424" barStyle="light-content" />
      <SafeAreaView style={style.safeArea}>{children}</SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  safeArea: {
    backgroundColor: '#242424',
  },
  statusBar: {},
});

ScreenWrapper.defaultProps = {
  statusbarStyle: 'dark-content',
};

export default ScreenWrapper;
