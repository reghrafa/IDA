import React from "react";
import { View } from "react-native";
import useTheme from "../../../../themes/useTheme";

export interface IProgressionDotsProps {
  count: number;
  activeIndex: number;
}

const ProgressionDots = (props: IProgressionDotsProps) => {
  const { count, activeIndex } = props;
  const theme = useTheme();
  const arr: string[] = new Array(count).fill("", 0, count);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        height: theme.grid.gridFactor(1.5),
        padding: theme.grid.gridFactor(0.25)
      }}
    >
      {arr.map((e, i) => (
        <View
          key={i}
          style={{
            width: theme.grid.gridFactor(0.5),
            height: theme.grid.gridFactor(0.5),
            margin: theme.grid.gridFactor(0.25),
            borderRadius: theme.grid.gridFactor(0.25),
            borderColor: theme.colors.darker,
            borderWidth: 1,
            backgroundColor:
              i === activeIndex ? theme.colors.darker : "transparent"
          }}
        />
      ))}
    </View>
  );
};

export default ProgressionDots;
