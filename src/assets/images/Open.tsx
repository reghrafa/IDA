import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path, Rect } from "react-native-svg";

export interface IOpenProps extends IIconProps {}

const Open = (props: IOpenProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
    <G transform="translate(-920 -800)">
      <G transform="translate(603 162)">
        <G transform="translate(319 640)">
          <Path
            d="M291,642h-3v10.5h10.5v-3"
            transform="translate(-288 -640.5)"
            fill="none"
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <Path
            d="M302.25,640H297"
            transform="translate(-290.25 -640)"
            fill="none"
            stroke={props.color}
            strokeLinecap="round"
            strokeWidth="2"
          />
          <Path
            d="M5.25,0H0"
            transform="translate(12) rotate(90)"
            fill="none"
            stroke={props.color}
            strokeLinecap="round"
            strokeWidth="2"
          />
        </G>
        <Path
          d="M326,640l-6,6"
          transform="translate(5)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </G>
    </G>
  </Svg>
);

export default Open;
