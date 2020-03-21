import React from "react";
import { useNavigation } from "react-navigation-hooks";
import { View, TouchableOpacity } from "react-native";
import IScreenHeaderProps from "./IScreenHeaderProps";
import useTheme from "../../../../../themes/useTheme";
import Arrow from "../../../../../assets/images/BackArrow";
import Text from "../../../atomic/text/EduText";

const ScreenHeader: React.FC<IScreenHeaderProps> = ({
  title,
  translationKey
}) => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <View style={{ marginHorizontal: theme.grid.gridFactor(2) }}>
      {/* Back and Bookmark Buttons */}
      <View
        style={{
          flexDirection: "row",
          marginTop: theme.grid.gridFactor(1),
          marginBottom: theme.grid.gridFactor(3.5)
        }}
      >
        <TouchableOpacity
          onPress={(): void => {
            goBack();
          }}
        >
          <Arrow
            width={theme.grid.gridFactor(1)}
            height={theme.grid.gridFactor(1)}
          />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text
        style={{
          marginVertical: theme.grid.gridFactor(1),
          height: theme.grid.gridFactor(3.5)
        }}
        size="large21"
        fontWeight="bold"
        color="lightest"
        translationKey={translationKey}
      >
        {title}
      </Text>
    </View>
  );
};

export default ScreenHeader;
