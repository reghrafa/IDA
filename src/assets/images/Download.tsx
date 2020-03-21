import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { G, Path } from "react-native-svg";

export interface IDownloadProps extends IIconProps {}

const Download = (props: IDownloadProps) => (
  <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
    <G transform="translate(-920 -72)">
      <G>
        <Path
          d="M920,2782h8"
          transform="translate(4 -2696)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <Path
          d="M920,2766l4,4,4-4"
          transform="translate(4 -2687)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke-width="2"
        />
        <Path
          d="M924,2775v-9"
          transform="translate(4 -2692)"
          fill="none"
          stroke={props.color}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </G>
    </G>
  </Svg>
);

export default Download;
