import React from "react";
import Svg, { Path, G, Rect } from "react-native-svg";
import { IIconProps } from "./IIconProps";

export interface IPremiumIconProps extends IIconProps {}

const PremiumIcon = (props: IPremiumIconProps) => {
  const w = props.width || 32;
  const h = props.height || 32;
  const c = props.color || "#323232";
  return (
    <Svg width={w} height={h} viewBox="0 0 16 16">
      <G transform="translate(-112 -120)">
        <G transform="translate(-54 -624)">
          <Path
            d="M88,747.335V744"
            transform="translate(86.001 9.001)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeWidth="1"
          />
          <Path
            d="M88,747.335V744"
            transform="translate(83.001 9.001)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeWidth="1"
          />
          <Path
            d="M88,747.335V744"
            transform="translate(89.002 9.001)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeWidth="1"
          />
          <Path
            d="M168,757.669,174,753l6,4.669h-9"
            transform="translate(0 -7)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          />
          <Path
            d="M168,768h12"
            transform="translate(0 -9.997)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeWidth="1"
          />
        </G>
      </G>
    </Svg>
  );
};

export default PremiumIcon;
