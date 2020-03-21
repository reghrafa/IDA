import React from "react";
import { View, TouchableOpacity } from "react-native";
import EduText from "../../atomic/text/EduText";
import useTheme from "../../../../themes/useTheme";

export type TabHeaderListItem = {
  action?: () => void;
  title: string;
  active?: boolean;
};

export interface ITabHeaderProps {
  list: TabHeaderListItem[];
}

const TabHeader = (props: ITabHeaderProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        height: theme.grid.gridFactor(4),
        padding: theme.grid.gridFactor(1),
        justifyContent: "space-evenly"
      }}
    >
      {props.list.map((e, i) => (
        <TouchableOpacity key={i} onPress={e.action}>
          <View
            style={{
              height: theme.grid.gridFactor(2),
              borderBottomColor: theme.colors.primary,
              borderBottomWidth: e.active ? 2 : 0
            }}
          >
            <EduText>{e.title}</EduText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabHeader;
