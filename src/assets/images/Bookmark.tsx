import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path } from "react-native-svg";

export interface IBookmarkProps extends IIconProps {
  active?: boolean;
}

const Bookmark = (props: IBookmarkProps) => {
  console.warn("Bookmark", props);
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
      <G transform="translate(-920 -520)">
        <Path
          d="M1248,3008v12l6-6,6,6v-12Z"
          transform="translate(-326 -2486)"
          fill={props.active ? props.color : "none"}
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </G>
    </Svg>
  );
};

export default Bookmark;
