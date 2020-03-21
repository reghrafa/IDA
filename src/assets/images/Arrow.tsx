import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path } from "react-native-svg";

export interface IArrowProps extends IIconProps {}

const Arrow = (props: IArrowProps) => (
  <Svg
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
  >
    <G transform="translate(-800 -464)">
      <Path
        d="M-47,3868l8,8-8,8"
        transform="translate(855 -3400)"
        fill="none"
        stroke={props.color || "#252c30"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </G>
  </Svg>
);

export default Arrow;
