import React from "react";
import useTheme from "../../../../themes/useTheme";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { View, TouchableOpacity } from "react-native";
import Gear from "../../../../assets/images/Gear";
import { SvgCss } from "react-native-svg";
import DefaultProfilePic from "../../../../assets/images/Illustrations/02_Feed/Guide_Feed_DefaultUser";
import FastImage from "react-native-fast-image";
import { observer } from "mobx-react";
import { NAVIGATION_PATH_PROFILE } from "../../../../Constants";
import { IEdubaoTheme } from "../../../../themes/IEdubaoTheme";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

const ProfileButton = () => {
  const theme: IEdubaoTheme = useTheme();
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const { rootStore } = useStore();
  const size = theme.grid.gridFactor(2);
  const margin = theme.grid.gridFactor(1);

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        margin: margin
      }}
    >
      <TouchableOpacity
        onPress={() => {
          sendNavigationEvent(
            routeName,
            params || {},
            NAVIGATION_PATH_PROFILE,
            {}
          );
          navigate(NAVIGATION_PATH_PROFILE);
        }}
      >
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: theme.colors.lightest
          }}
        >
          {!!rootStore.user.token ? (
            <View style={{ height: size, width: size, borderRadius: size / 2 }}>
              {rootStore.user.img ? (
                <FastImage
                  style={{ width: size, height: size, borderRadius: size / 2 }}
                  source={{ uri: rootStore.user.img }}
                />
              ) : (
                <SvgCss width={size} height={size} xml={DefaultProfilePic} />
              )}
            </View>
          ) : (
            <Gear height={size} width={size} color={theme.colors.primary} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default observer(ProfileButton);
