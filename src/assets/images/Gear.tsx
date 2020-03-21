import React from "react";
import { IIconProps } from "./IIconProps";
import Svg, { Rect, G, Circle, Line } from "react-native-svg";

export interface IGearProps extends IIconProps {}

const Gear = (props: IGearProps) => {
  return (
    <Svg
      width={props.width || "12"}
      height={props.height || "12"}
      viewBox="0 0 12 12"
    >
      <G transform="translate(-1048 -856)">
        <Rect
          width="12"
          height="12"
          transform="translate(1048 856)"
          fill="none"
        />
        <G transform="translate(744 216)">
          <G
            transform="translate(306 642)"
            fill="none"
            stroke="#252c30"
            stroke-width="2"
          >
            <Circle cx="4" cy="4" r="4" stroke="none" />
            <Circle cx="4" cy="4" r="3" fill="none" />
          </G>
          <G
            transform="translate(309 645)"
            fill="none"
            stroke="#252c30"
            stroke-width="2"
          >
            <Circle cx="1" cy="1" r="1" stroke="none" />
            <Circle cx="1" cy="1" fill="none" />
          </G>
          <Line
            x2="1.333"
            transform="translate(309.333 642)"
            fill="none"
            stroke="#252c30"
            stroke-linecap="round"
            stroke-width="2"
          />
          <Line
            x2="1.333"
            transform="translate(309.333 650)"
            fill="none"
            stroke="#252c30"
            stroke-linecap="round"
            stroke-width="2"
          />
          <Line
            y2="1.333"
            transform="translate(306 645.333)"
            fill="none"
            stroke="#252c30"
            stroke-linecap="round"
            stroke-width="2"
          />
          <Line
            y2="1.333"
            transform="translate(314 645.333)"
            fill="none"
            stroke="#252c30"
            stroke-linecap="round"
            stroke-width="2"
          />
          <Line
            y2="1.333"
            transform="translate(313.138 643.805) rotate(135)"
            fill="none"
            stroke="#252c30"
            stroke-linecap="round"
            stroke-width="2"
          />
          <Line
            y2="1.333"
            transform="translate(307.805 649.138) rotate(135)"
            fill="none"
            stroke="#252c30"
            stroke-linecap="round"
            stroke-width="2"
          />
          <Line
            y2="1.333"
            transform="translate(307.805 642.862) rotate(45)"
            fill="none"
            stroke="#252c30"
            stroke-linecap="round"
            stroke-width="2"
          />
          <Line
            y2="1.333"
            transform="translate(313.138 648.195) rotate(45)"
            fill="none"
            stroke="#252c30"
            stroke-linecap="round"
            stroke-width="2"
          />
        </G>
      </G>
    </Svg>
  );
};

export default Gear;
