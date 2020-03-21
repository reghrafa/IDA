import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import EduText from "../../atomic/text/EduText";
import GuideIcon from "../../../../assets/images/GuideIcon";
import PremiumIcon from "../../../../assets/images/PremiumIcon";
import OffersIcon from "../../../../assets/images/OffersIcon";
import ChatIcon from "../../../../assets/images/ChatIcon";
import useTheme from "../../../../themes/useTheme";
import { Freshchat } from "react-native-freshchat-sdk";
import { Colorstrings } from "../../../../themes/EdubaoTheme";
import {
  NAVIGATION_PATH_OFFERS,
  NAVIGATION_PATH_PREMIUM_NAVIGATOR,
  NAVIGATION_PATH_GUIDE_NAVIGATOR
} from "../../../../Constants";

export interface IMainTabBarProps {
  renderIcon?: any;
  getLabelText?: any;
  activeTintColor?: any;
  inactiveTintColor?: any;
  onTabPress?: any;
  onTabLongPress?: any;
  getAccessibilityLabel?: any;
  navigation?: any;
}

interface IMainTabBarItemProps {
  labelTK: string;
  onPress: () => void;
  onLongPress?: () => void;
  accessibilityLabel: string;
  icon: any;
  color: Colorstrings;
}

const MainTabBarItem: React.FC<IMainTabBarItemProps> = ({
  onPress,
  onLongPress,
  accessibilityLabel,
  labelTK,
  icon,
  color
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress || onPress}
      accessibilityLabel={accessibilityLabel}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {icon}
      <EduText color={color} size="tiny10" translationKey={labelTK} />
    </TouchableOpacity>
  );
};

const MainTabBar: React.FC<IMainTabBarProps> = ({
  getLabelText,
  onTabPress,
  onTabLongPress,
  getAccessibilityLabel,
  navigation
}) => {
  const { routes, index: activeRouteIndex } = navigation.state;
  const theme = useTheme();
  const iconPadding = 3;
  return (
    <SafeAreaView
      forceInset={{ top: "never", bottom: "always" }}
      style={{ backgroundColor: theme.colors["lightest"] }}
    >
      <View
        style={{
          backgroundColor: theme.colors.lightest,
          height: theme.grid.gridFactor(4),
          left: 0,
          right: 0,
          flexDirection: "row"
        }}
      >
        {routes.map((route: any, routeIndex: number) => {
          const active = routeIndex === activeRouteIndex;
          const color: Colorstrings = active ? "selected" : "darker";
          const label = getLabelText({ route });
          let icon = null;
          let labelTK = "";
          if (label === NAVIGATION_PATH_GUIDE_NAVIGATOR) {
            labelTK = "navbar.guide.label";
            icon = (
              <View style={{ padding: iconPadding }}>
                <GuideIcon
                  width={theme.grid.gridFactor(2) - iconPadding * 2}
                  height={theme.grid.gridFactor(2) - iconPadding * 2}
                  color={theme.colors[color]}
                />
              </View>
            );
          }
          if (label === NAVIGATION_PATH_PREMIUM_NAVIGATOR) {
            labelTK = "navbar.premium.label";
            icon = (
              <View style={{ padding: iconPadding }}>
                <PremiumIcon
                  width={theme.grid.gridFactor(2) - iconPadding * 2}
                  height={theme.grid.gridFactor(2) - iconPadding * 2}
                  color={theme.colors[color]}
                />
              </View>
            );
          }
          if (label === NAVIGATION_PATH_OFFERS) {
            labelTK = "navbar.offers.label";
            icon = (
              <View style={{ padding: iconPadding }}>
                <OffersIcon
                  width={theme.grid.gridFactor(2) - iconPadding * 2}
                  height={theme.grid.gridFactor(2) - iconPadding * 2}
                  color={theme.colors[color]}
                />
              </View>
            );
          }

          return (
            <MainTabBarItem
              key={routeIndex}
              labelTK={labelTK}
              accessibilityLabel={getAccessibilityLabel({ route })}
              icon={icon}
              onPress={() => onTabPress({ route })}
              onLongPress={() => onTabLongPress({ route })}
              color={color}
            />
          );
        })}
        <MainTabBarItem
          labelTK={"navbar.chat.label"}
          accessibilityLabel={"Chat"}
          color={"darker"}
          icon={
            <View style={{ padding: iconPadding }}>
              <ChatIcon
                width={theme.grid.gridFactor(2) - iconPadding * 2}
                height={theme.grid.gridFactor(2) - iconPadding * 2}
                color={theme.colors.darker}
              />
            </View>
          }
          onPress={() => Freshchat.showConversations()}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainTabBar;
