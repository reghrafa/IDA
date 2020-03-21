import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
import { IIconProps } from "./IIconProps";

export interface OOffersIconProps extends IIconProps {}

const OffersIcon = (props: OOffersIconProps) => {
  const w = props.width || 32;
  const h = props.height || 32;
  const c = props.color || "#323232";
  return (
    <Svg width={w} height={h} viewBox="0 0 32 32">
      <G transform="translate(-152 -120)">
        <G transform="translate(920.997 -72.997) rotate(90)">
          <Path
            d="M428,5333h6l12-12-6-6-12,12Z"
            transform="translate(-228 -4571)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <G
            transform="translate(202 755.997)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <Circle cx="2" cy="2" r="2" stroke="none" />
            <Circle cx="2" cy="2" r="1" fill="none" />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default OffersIcon;
