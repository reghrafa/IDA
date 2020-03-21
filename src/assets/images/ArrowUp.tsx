import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path } from "react-native-svg";

export interface IArrowUpProps extends IIconProps {}

const ArrowUp = (props: IArrowUpProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 12 12">
    <G transform="translate(-1048 -632)">
      <G transform="translate(866 -574)">
        <Path
          d="M420,6699v-8l4,4"
          transform="translate(-232 -5483)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <Path
          d="M412,6695l4-4"
          transform="translate(-228 -5483)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </G>
    </G>
  </Svg>
);

export default ArrowUp;
