import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path, Circle } from "react-native-svg";

export interface ISearchProps extends IIconProps {}

const Search = (props: ISearchProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
    <G transform="translate(-920 -128)">
      <G transform="translate(594.001 26)">
        <Circle
          cx="5.249"
          cy="5.249"
          r="5.249"
          transform="translate(328 104)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Path
          d="M569.338,5600.337l-2.452-2.452"
          transform="translate(-229.339 -5484.339)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </G>
    </G>
  </Svg>
);

export default Search;
