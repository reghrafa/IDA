import React from "react";
import { View, TouchableOpacity } from "react-native";
import useTheme from "../../../../themes/useTheme";
import { IEdubaoTheme } from "../../../../themes/EdubaoTheme";
import EduText from "../../atomic/text/EduText";
import BackArrow from "../../../../assets/images/BackArrow";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { SafeAreaView } from "react-navigation";
import I18n from "i18n-js";
import { NAVIGATION_PATH_FEED } from "../../../../Constants";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

export interface IProfileHeaderProps {
  noBackButton?: boolean;
}

const ProfileHeader = (props: IProfileHeaderProps) => {
  const theme: IEdubaoTheme = useTheme();
  const { goBack, navigate } = useNavigation();
  const { routeName, params } = useNavigationState();

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors["primary"] }}>
      <View
        style={{
          marginTop: theme.grid.gridFactor(1),
          paddingTop: theme.grid.gridFactor(1),
          paddingHorizontal: theme.grid.gridFactor(1.5),
          backgroundColor: theme.colors.light,
          borderTopLeftRadius: theme.grid.gridFactor(1),
          borderTopRightRadius: theme.grid.gridFactor(1),
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        {props.noBackButton ? (
          <View />
        ) : (
            <TouchableOpacity onPress={() => {
              sendNavigationEvent(routeName, params || {}, "BACK", {});
              goBack();
            }}>
              <BackArrow color={theme.colors.primary} />
            </TouchableOpacity>
          )}
        <TouchableOpacity
          onPress={() => {
            if (navigate) {
              sendNavigationEvent(routeName, params || {}, NAVIGATION_PATH_FEED, {});
              navigate(NAVIGATION_PATH_FEED);
            }
          }}
        >
          <EduText
            style={{ height: theme.grid.gridFactor(1.5) }}
            color="bluefont"
            fontWeight="semibold"
          >
            {I18n.t("global.clickable.close")}
          </EduText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHeader;
