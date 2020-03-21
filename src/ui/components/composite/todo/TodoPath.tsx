import React from "react";
import Svg, { Circle, Path, SvgProps, Line, G } from "react-native-svg";
import { ViewStyle, View } from "react-native";
import useTheme from "../../../../themes/useTheme";

export interface ITodoPathProps {
  color?: string;
  prevTodoColor?: string;
  backgroundColor?: string;
  checkColor?: string;
  height?: number;
  width?: number;
  active?: boolean;
  begin?: boolean;
  style?: ViewStyle;
  onPress?: () => void;
}

export interface ITodoPathSpecialProps {
  dir: "ltr" | "rtl";
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle;
  button?: "minus" | "plus";
  buttonAction?: () => void;
}

export const TodoPathSpecial = (props: ITodoPathSpecialProps) => {
  const theme = useTheme();
  let w = props.width || 120;
  let h = props.height || 100;
  if (w < 120) w = 120;
  if (h < 100) h = 100;
  const hline = w - 120;

  const d =
    props.dir === "ltr"
      ? `M12,2c0,24,24,48,48,48h${hline}c24,0,48,24,48,48v${h - 100}`
      : `M${w - 12},0v16c0,24,-24,48,-48,48h-${hline}c-24,0,-48,24,-48,48v${h -
          100}`;
  return (
    <Svg height={h} width={w} viewBox={`0 0 ${w} ${h}`}>
      <Path
        stroke={props.color || "#000"}
        d={d}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        strokeDasharray="4 8"
      />
      {props.button && (
        <G translateX={props.dir === "ltr" ? w - 12 : 12} translateY={50 - 12}>
          <Circle
            x={0}
            y={0}
            r={12}
            fill={theme.colors.primary}
            onPress={props.buttonAction}
          ></Circle>
          <Line
            x1={-7}
            y1={0}
            x2={7}
            y2={0}
            strokeWidth={2}
            strokeLinecap="round"
            stroke={theme.colors.lightest}
            onPress={props.buttonAction}
          />
          {props.button === "plus" && (
            <Line
              x1={0}
              y1={-7}
              x2={0}
              y2={7}
              strokeWidth={2}
              strokeLinecap="round"
              stroke={theme.colors.lightest}
              onPress={props.buttonAction}
            />
          )}
        </G>
      )}
    </Svg>
  );
};

export const TodoPathPart = (props: { height: number; color: string }) => (
  <Svg viewBox={`0 0 4 ${props.height}`} width={4} height={props.height}>
    <Path
      d="M2,2 v66"
      fill="none"
      stroke={props.color || "#000000"}
      strokeLinecap="round"
      strokeWidth="4"
      strokeDasharray="4 8"
    />
  </Svg>
);

export const CollapsedTodoPath = (props: ITodoPathProps) => (
  <Svg style={props.style} viewBox={"0 0 16 16"} width={16} height={16}>
    <Circle
      onPress={props.onPress}
      cx="8"
      cy={"8"}
      r="7"
      stroke={props.color || "#000000"}
      strokeWidth="2"
      fill={
        props.active ? props.color || "#000" : props.backgroundColor || "#fff"
      }
    />
    {props.active && (
      <Path
        d={"M5,11l4,4l8,-8"}
        fill="none"
        stroke={props.checkColor || "#ffffff"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        scale={3 / 4}
      />
    )}
  </Svg>
);

const TodoPath = (props: ITodoPathProps) => (
  <Svg
    style={props.style}
    viewBox={"0 0 24 152"}
    width={props.width || 24}
    height={props.height || 152}
  >
    {!props.begin && (
      <Path
        d="M12,2 v66"
        fill="none"
        stroke={props.prevTodoColor || "#000000"}
        strokeLinecap="round"
        strokeWidth="4"
        strokeDasharray="4 8"
      />
    )}
    <Path
      d="M12,82 v66"
      fill="none"
      stroke={props.color || "#000000"}
      strokeLinecap="round"
      strokeWidth="4"
      strokeDasharray="4 8"
    />
    <Circle
      onPress={props.onPress}
      cx="12"
      cy={"76"}
      r="11"
      stroke={props.color || "#000000"}
      strokeWidth="2"
      fill={
        props.active ? props.color || "#000" : props.backgroundColor || "#fff"
      }
    />
    {props.active && (
      <Path
        d={"M6,76l4,4l8,-8"}
        fill="none"
        stroke={props.checkColor || "#ffffff"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    )}
  </Svg>
);

export default TodoPath;
