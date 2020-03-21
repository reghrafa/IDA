import React from "react";
import Svg, { Path, G, Rect } from "react-native-svg";
import { IIconProps } from "./IIconProps";

export interface IGuideIconProps extends IIconProps {}

const GuideIcon = (props: IGuideIconProps) => {
  const w = props.width || 32;
  const h = props.height || 32;
  const c = props.color || "#323232";
  return (
    <Svg width={w} height={h} viewBox="0 0 32 32">
      <G id="Gruppe_890" data-name="Gruppe 890" transform="translate(-72 -120)">
        <Rect
          width="32"
          height="32"
          transform="translate(72 120)"
          fill="none"
        />
        <G transform="translate(6.998 -617.001)">
          <Path
            d="M88,762V744"
            transform="translate(-6.999)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeWidth="2"
          />
          <Path
            d="M78,752H74l-2,2,2,2h4"
            transform="translate(0 -2.399)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <Path
            d="M74,752h4l2,2-2,2H74"
            transform="translate(10.002 -5.2)"
            fill="none"
            stroke={c}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </G>
      </G>
    </Svg>
  );
};

export default GuideIcon;
