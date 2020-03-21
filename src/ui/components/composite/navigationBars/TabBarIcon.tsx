import React from "react";
import { TabBarIconProps } from "react-navigation";
import GuideIcon from "../../../../assets/images/GuideIcon";

export interface ITabBarIconProps extends TabBarIconProps {}

const TabBarIcon = (props: ITabBarIconProps) => {
  const {} = props;
  return <GuideIcon />;
};

export default TabBarIcon;
