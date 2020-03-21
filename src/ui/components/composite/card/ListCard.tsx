import React from "react";
import { TouchableOpacity, View } from "react-native";
import EduText from "../../atomic/text/EduText";
import useTheme from "../../../../themes/useTheme";
import Arrow from "../../../../assets/images/Arrow";
import { IEdubaoTheme } from "../../../../themes/EdubaoTheme";

import { Renderable } from "../../../../types_interfaces/types/basetypes";

export interface IListCardItem {
  id: string;
  title: string;
}
export interface ICategoryCardProps {
  title: string;
  items: Array<IListCardItem>;
  onPress: (item: IListCardItem) => void;
  icon?: Renderable;
}

const CategoryCard = (props: ICategoryCardProps) => {
  const theme: IEdubaoTheme = useTheme();

  return (
    <View
      style={{
        borderRadius: theme.grid.gridFactor(1),
        paddingHorizontal: theme.grid.gridFactor(1),
        paddingVertical: theme.grid.gridFactor(1.125),
        backgroundColor: theme.colors.lightest
      }}
    >
      {props.title ? (
        <EduText
          style={{
            marginBottom: theme.grid.gridFactor(0.5)
          }}
          size="small16"
          color="primary"
        >
          {props.title}
        </EduText>
      ) : null}
      {props.items.map(e => (
        <TouchableOpacity
          onPress={(): void => {
            props.onPress(e);
          }}
        >
          <View
            key={e.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: theme.grid.gridFactor(1)
            }}
          >
            <EduText color="primary" size="smaller14">
              {e.title}
            </EduText>
            {props.icon ? (
              props.icon
            ) : (
              <Arrow
                height={theme.grid.gridFactor(1)}
                width={theme.grid.gridFactor(1)}
                color={theme.colors.primary}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryCard;
