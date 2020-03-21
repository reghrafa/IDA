import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path, Rect } from "react-native-svg";

export interface IFilterProps extends IIconProps {}

const Filter = (props: IFilterProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
    <G transform="translate(-920 -352)">
      <Rect width="16" height="16" transform="translate(920 352)" fill="none" />
      <Path
        d="M-298,12113h12l-4,3.848V12123h-4.049v-6.152Z"
        transform="translate(1220 -11757.998)"
        fill="none"
        stroke="#252c30"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </G>
  </Svg>
);

export default Filter;
