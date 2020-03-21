import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path, Line } from "react-native-svg";

export interface IFreezeProps extends IIconProps {}

const Freeze = (props: IFreezeProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
    <G transform="translate(-920 -184)">
      <G transform="translate(802 -454)">
        <Path
          d="M660,16667v12"
          transform="translate(-534 -16027)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Path
          d="M664,16675H652"
          transform="translate(-532 -16029)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          y1="1.5"
          transform="translate(123 641.5)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          y2="1.5"
          transform="translate(123 649)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          y1="1.5"
          transform="translate(129 641.5)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          y2="1.5"
          transform="translate(129 649)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          x2="1.5"
          transform="translate(121.5 643)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          x2="1.5"
          transform="translate(121.5 649)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          x1="1.5"
          transform="translate(129 643)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          x1="1.5"
          transform="translate(129 649)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Path
          d="M0,0V9"
          transform="translate(129.182 642.818) rotate(45)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Path
          d="M9,0H0"
          transform="translate(122.818 642.818) rotate(45)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </G>
    </G>
  </Svg>
);

export default Freeze;
