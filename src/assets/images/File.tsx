import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path, Rect } from "react-native-svg";

export interface ICheckProps extends IIconProps {}

const Check = (props: ICheckProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
    <G transform="translate(-920 -688)">
      <G transform="translate(634 50)">
        <Path
          d="M294,640h-6v12h12v-6"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Rect
          width="6"
          height="3"
          transform="translate(291 643)"
          strokeWidth="2"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </G>
    </G>
  </Svg>
);

export default Check;
