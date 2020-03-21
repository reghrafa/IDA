import React from "react";
import Svg, { G, Rect } from "react-native-svg";

function Icon() {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <G
        fill="none"
        stroke="#0d507a"
        strokeWidth="1.5"
        data-name="Rechteck 1282"
      >
        <Rect width="16" height="16" stroke="none" rx="4"></Rect>
        <Rect width="14.5" height="14.5" x="0.75" y="0.75" rx="3.25"></Rect>
      </G>
    </Svg>
  );
}

export default Icon;
