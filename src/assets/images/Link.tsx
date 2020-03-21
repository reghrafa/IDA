import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Circle, Line } from "react-native-svg";

export interface ILinkProps extends IIconProps {}

const Link = (props: ILinkProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
    <G transform="translate(-920 -576)">
      <G transform="translate(618 514)">
        <Circle
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(313 64)"
          fill="none"
          stroke={props.color}
          strokeWidth="2"
        />
        <Circle
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(304 68.5)"
          fill="none"
          stroke={props.color}
          strokeWidth="2"
        />
        <Circle
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(313 73)"
          fill="none"
          stroke={props.color}
          strokeWidth="2"
        />
        <Line
          x1="5.25"
          y2="3"
          transform="translate(307.375 66.625)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Line
          x1="5.25"
          y1="3"
          transform="translate(307.375 70.375)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </G>
    </G>
  </Svg>
);

export default Link;
