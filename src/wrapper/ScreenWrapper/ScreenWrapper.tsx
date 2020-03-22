import React from 'react';
import {IScreenWrapperProps} from './IScreenWrapperProps';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

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
    <SafeAreaView style={style.safeArea}>
      <StatusBar
        backgroundColor={color ? color.HEX : '#ffffff'}
        barStyle={statusbarStyle || 'dark-content'}
      />
      {children}
    </SafeAreaView>
  );
};

ScreenWrapper.defaultProps = {
  statusbarStyle: 'dark-content',
};

export default ScreenWrapper;
