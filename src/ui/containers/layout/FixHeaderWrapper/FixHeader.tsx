import React from 'react';
import IFixHeaderScreenProps from './IFixHeaderProps';
import SafeAreaWrapper from '../SafeAreaWrapper/SafeAreaWrapper';
import StickyHeader from '../../../components/composite/headers/StickyHeader';
import { View } from 'react-native';

const FixHeader: React.FC<IFixHeaderScreenProps> = ({
  title,
  backgroundColor,
  children,
  iconColor,
  SafeAreaFlex,
  SafeAreaBackgroundColor,
  SafeAreaTop,
  SafeAreaBottom,
  translationKey,
  color,
  noBookmark,
  noLink,
  opacity,
  noViewWrapper
}) => {
  return (
    <SafeAreaWrapper
      backgroundColor={SafeAreaBackgroundColor}
      flex={SafeAreaFlex}
      top={SafeAreaTop}
      bottom={SafeAreaBottom}
    >
      <StickyHeader
        title={title}
        translationKey={translationKey}
        opacity={opacity}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
        color={color}
        noBookmark={noBookmark}
        noLink={noLink}
      />
      {
        noViewWrapper ? children : <View style={{ flex: 1 }}>{children}</View>
      }
    </SafeAreaWrapper>
  );
};

export default FixHeader;
