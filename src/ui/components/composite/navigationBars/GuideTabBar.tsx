import React from "react";
import { View } from "react-native";
import EduText from "../../atomic/text/EduText";
import { NavigationRoute } from "react-navigation";
import Button from "../../atomic/button/Button";
import theme from "../../../../themes/EdubaoTheme";
import ProfileButton from "../profile/ProfileButton";
import { SafeAreaView } from "react-navigation";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

interface IGuideTabBarProps {
  position: number;
}

const GuideTabBar: React.FC<IGuideTabBarProps> = ({ position }) => {
  const { state, navigate } = useNavigation();
  const { routeName, params } = useNavigationState();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors["primary"]
      }}
    >
      <View style={{ height: 64 }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            paddingLeft: 20,
            paddingRight: 8,
            backgroundColor: theme.colors.primary
          }}
        >
          {state.routes.map((route: NavigationRoute, index: number) => (
            <Button
              key={index}
              onPress={() => {
                sendNavigationEvent(routeName, params || {}, route.routeName, {});
                navigate(route.routeName);
              }}
              style={{ padding: 16, alignItems: "center" }}
            >
              <View
                style={{
                  padding: 4,
                  height: 32,
                  borderBottomColor: theme.colors.lightest,
                  borderBottomWidth: state.index === index ? 1 : 0
                }}
              >
                <EduText
                  size="normal18"
                  color="lightest"
                  fontWeight={state.index === index ? "bold" : "regular"}
                  style={{ height: 24 }}
                >
                  {route.routeName}
                </EduText>
              </View>
            </Button>
          ))}
          <View style={{ flex: 1 }} />
          <ProfileButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GuideTabBar;
