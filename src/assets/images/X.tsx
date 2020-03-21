import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path } from "react-native-svg";

export interface IXprops extends IIconProps {}

const X = (props: IXprops) => (
  <Svg
    width={props.width || "12"}
    height={props.height || "12"}
    viewBox="0 0 12 12"
  >
    <G id="Gruppe_949" data-name="Gruppe 949" transform="translate(-326 -54)">
      <Path
        d="M328,56l8,8"
        fill="none"
        stroke={props.color || "#252c30"}
        strokeLinecap="round"
        strokeWidth="2"
      />
      <Path
        d="M336,56l-8,8"
        fill="none"
        stroke={props.color || "#252c30"}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </G>
  </Svg>
);

export default X;
