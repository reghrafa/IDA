import React from "react";
import { View, ViewStyle } from "react-native";
import FastImage, { FastImageSource } from "react-native-fast-image";

export interface ICenteredImageProps {
  source?: FastImageSource;
  imageHeight?: number;
  imageWidth?: number;
  style?: ViewStyle;
}

const CenteredImage = (props: ICenteredImageProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        ...(props.style || {})
      }}
    >
      <FastImage source={props.source || {}} />
    </View>
  );
};

export default CenteredImage;
