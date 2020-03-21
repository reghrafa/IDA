import React from "react";
import Svg, { Path } from "react-native-svg";
import { IIconProps } from "./IIconProps";

export interface IChatIconProps extends IIconProps {}

const ChatIcon = (props: IChatIconProps) => {
  const w = props.width || 32;
  const h = props.height || 32;
  const c = props.color || "#323232";
  return (
    <Svg width={w} height={h} viewBox="0 0 32 32">
      <Path
        d="M4.5,0h9A4.5,4.5,0,0,1,18,4.5V9a4.5,4.5,0,0,1-4.5,4.5h-9L0,18V4.5A4.5,4.5,0,0,1,4.5,0Z"
        transform="translate(6.997 7)"
        fill="none"
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
};

export default ChatIcon;
