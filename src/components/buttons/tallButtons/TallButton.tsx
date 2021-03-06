import React from 'react';
import {View} from 'react-native';
import Button from '../basicButton/BasicButton';
import EduText from '../text/EduText';

const EduTallButton = (props: ITallButtonProps) => {
  const backgroundColor = props.selected
    ? theme.colors.selected
    : theme.colors.primary;

  const height = 96;
  const borderRadius = theme.grid.gridFactor(1);

  const textFontSize = 18;
  const textContent = props.children || '';
  const textColor = theme.colors.lightest;

  return (
    <Button
      feedbacktype={props.feedbacktype}
      onPress={props.onPress}
      style={{
        flexDirection: 'row',
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
      }}>
      <View
        style={{
          position: 'absolute',
          top: theme.grid.gridFactor(1),
          right: theme.grid.gridFactor(1),
          width: theme.grid.gridFactor(1),
          height: theme.grid.gridFactor(1),
        }}>
        {props.icon ? (
          props.icon
        ) : (
          <View
            style={{
              borderRadius: 50,
              backgroundColor: theme.colors.lightest,
              width: theme.grid.gridFactor(1),
              height: theme.grid.gridFactor(1),
            }}
          />
        )}
      </View>
      <EduText
        translationKey={props.translationKey}
        style={{
          paddingVertical: theme.grid.gridFactor(1),
          paddingLeft: theme.grid.gridFactor(1),
          paddingRight: theme.grid.gridFactor(2),
          fontSize: textFontSize,
          color: textColor,
          alignSelf: 'flex-end',
        }}>
        {textContent}
      </EduText>
    </Button>
  );
};

export default TallButton;
