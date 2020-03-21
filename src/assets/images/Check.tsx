import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path } from "react-native-svg";

export interface ICheckProps extends IIconProps {}

const Check = (props: ICheckProps) => (
  <Svg
    width={props.width || "12"}
    height={props.height || "12"}
    viewBox="0 0 12 12"
  >
    <G transform="translate(-1048 -408)">
      <Path
        d="M844,3102l-6,6-2-2"
        transform="translate(214 -2691)"
        fill="none"
        stroke={props.color || "#252c30"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </G>
  </Svg>
);

export default Check;
