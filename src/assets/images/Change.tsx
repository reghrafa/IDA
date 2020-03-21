import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path } from "react-native-svg";

export interface IChangeProps extends IIconProps {}

const Change = (props: IChangeProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
    <G transform="translate(-920 -744)">
      <G transform="translate(522 852) rotate(-90)">
        <G transform="translate(94 400)">
          <Path
            d="M2432,6002.045l2.769-3.046,2.771,3.046"
            transform="translate(-2432 -5999)"
            fill="none"
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <Path
            d="M2440,5996.539V5991"
            transform="translate(-2437.23 -5990.54)"
            fill="none"
            stroke={props.color}
            strokeLinecap="round"
            strokeWidth="2"
          />
        </G>
        <G transform="translate(106 412) rotate(180)">
          <Path
            d="M0,3.046,2.768,0,5.539,3.046"
            fill="none"
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <Path
            d="M0,5.539V0"
            transform="translate(2.77 0.461)"
            fill="none"
            stroke={props.color}
            strokeLinecap="round"
            strokeWidth="2"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export default Change;
