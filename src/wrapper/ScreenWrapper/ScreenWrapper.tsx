import React from 'react';
import {IScreenWrapperProps} from './IScreenWrapperProps';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';

const ScreenWrapper: React.FC<IScreenWrapperProps> = ({
  children,
  color,
  statusbarStyle,
}) => {
  const style = StyleSheet.create({
    safeArea: {
      backgroundColor: color ? color.HEX : '#ffffff',
      flex: 1,
    },
    statusBar: {},
  });

  return (
    <>
      <StatusBar
        backgroundColor={color ? color.HEX : '#ffffff'}
        barStyle={statusbarStyle || 'dark-content'}
      />
      <SafeAreaView style={style.safeArea}>{children}</SafeAreaView>
    </>
  );
};

ScreenWrapper.defaultProps = {
  statusbarStyle: 'dark-content',
};

export default ScreenWrapper;
