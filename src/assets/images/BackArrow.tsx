import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path } from "react-native-svg";

export interface IBackArrowProps extends IIconProps {
  rotation?: number;
}

const BackArrow = (props: IBackArrowProps) => (
  <Svg
    width={props.width || "18.414"}
    height={props.height || "18.828"}
    viewBox="0 0 18.414 18.828"
  >
    <G
      transform={`translate(-1206.586 201.414) rotate(${props.rotation ||
        -90})`}
    >
      <Path
        d="M420,6707v-16l8,8"
        transform="translate(-228 -5483)"
        fill="none"
        stroke={props.color || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Path
        d="M412,6699l8-8"
        transform="translate(-228 -5483)"
        fill="none"
        stroke={props.color || "#fff"}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </G>
  </Svg>
);

export default BackArrow;
