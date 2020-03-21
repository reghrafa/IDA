import React from "react";
import { View, TouchableOpacity } from "react-native";
import useTheme from "../../../../themes/useTheme";
import { IEdubaoTheme, Colorstrings } from "../../../../themes/EdubaoTheme";
import EduText from "../../atomic/text/EduText";
import Arrow from "../../../../assets/images/Arrow";

export interface IProfileLinkSectionProps {
  title?: string;
  titleTK?: string;
  links: {
    label?: string;
    labelTK?: string;
    hide?: boolean;
    action: () => void;
    color?: Colorstrings;
  }[];
}

const ProfileLinkSection: React.FC<IProfileLinkSectionProps> = ({
  title,
  titleTK,
  links
}) => {
  const theme: IEdubaoTheme = useTheme();
  if (links.filter(e => !e.hide).length === 0) {
    return null;
  }
  return (
    <View
      style={{
        marginTop: theme.grid.gridFactor(2),
        marginHorizontal: theme.grid.gridFactor(2)
      }}
    >
      <EduText
        fontWeight="semibold"
        translationKey={titleTK}
        color="primary"
        size="large21"
        style={{
          marginBottom: theme.grid.gridFactor(0.5)
        }}
      >
        {title}
      </EduText>
      {links.map((e, i) => {
        const colorstring: Colorstrings = e.color ? e.color : "primary";
        const color = theme.colors[colorstring];
        if (e.hide) return null;
        return (
          <TouchableOpacity
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: theme.grid.gridFactor(1)
            }}
            onPress={e.action}
          >
            <EduText
              size="small16"
              color={colorstring}
              translationKey={e.labelTK}
            >
              {e.label}
            </EduText>
            <Arrow color={color} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProfileLinkSection;
