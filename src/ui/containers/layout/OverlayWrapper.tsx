import React, { useState } from "react";
import { View, Dimensions, SafeAreaView, Animated } from "react-native";
import { Renderable } from "../../../types_interfaces/types/basetypes";

export interface IOverlayWrapperProps {
  upperOffset?: number;
  children: Renderable;
}

const OverlayWrapper = (props: IOverlayWrapperProps) => {
  const dim = Dimensions.get("window");
  const topMargin = props.upperOffset ? props.upperOffset : 0;
  const displayAreaHeight = dim.height - topMargin;

  let aV = new Animated.Value(0);
  Animated.timing(aV, {
    toValue: 1,
    duration: 1000
  });

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Animated.View style={{ flex: 1, marginTop: topMargin }}>
          {props.children}
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};
