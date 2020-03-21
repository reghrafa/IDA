import React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";

function Icon() {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <G
        strokeWidth="1.5"
        data-name="Gruppe 119504"
        transform="translate(-16 -172)"
      >
        <G
          fill="#0d507a"
          stroke="#0d507a"
          data-name="Rechteck 1284"
          transform="translate(16 172)"
        >
          <Rect width="16" height="16" stroke="none" rx="4"></Rect>
          <Rect
            width="14.5"
            height="14.5"
            x="0.75"
            y="0.75"
            fill="none"
            rx="3.25"
          ></Rect>
        </G>
        <Path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 179.999l4 4 8-8"
          data-name="Pfad 57956"
        />
      </G>
    </Svg>
  );
}

export default Icon;
