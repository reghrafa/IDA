import React from "react";
import { View, TouchableOpacity } from "react-native";
import EduText from "../../atomic/text/EduText";
import useTheme from "../../../../themes/useTheme";
import { IServicePackageType } from "../../../../dataLayer/models/ServicePackageType";
import Logo from "../../../../assets/images/Logo";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import EduCardSmall from "./EduCardSmall";
import FastImage from "react-native-fast-image";
import EduButton from "../../atomic/button/EduButton";
import {
  NAVIGATION_PATH_SERVICES_DETAIL,
  NAVIGATION_PATH_SERVICES_OVERVIEW
} from "../../../../Constants";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

export interface IEduPackageCardProps {
  servicePackage: IServicePackageType;
  servicePackageGroupId: string;
}

const EduPackageCard = (props: IEduPackageCardProps) => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const servicePackage = props.servicePackage;
  const PackageGroupId = props.servicePackageGroupId;
  return (
    <View
      style={{
        borderRadius: theme.grid.gridFactor(1),
        backgroundColor: servicePackage.color,
        paddingVertical: theme.grid.gridFactor(1.5)
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginBottom: theme.grid.gridFactor(2),
          marginHorizontal: theme.grid.gridFactor(1.5),
          alignItems: "center"
        }}
      >
        <Logo color={servicePackage.fontColor} />
        <EduText
          fontWeight="bold"
          style={{ marginLeft: theme.grid.gridFactor(1) }}
          customColor={servicePackage.fontColor}
        >
          {servicePackage.title}
        </EduText>
      </View>
      <View>
        {servicePackage.servicesArticle.map(servicesArticle => {
          return (
            <View
              style={{
                flex: 1,
                marginHorizontal: theme.grid.gridFactor(0.5),
                marginVertical: theme.grid.gridFactor(0.5)
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  sendNavigationEvent(routeName, params || {}, NAVIGATION_PATH_SERVICES_DETAIL, { articleId: servicesArticle.id });
                  navigate(NAVIGATION_PATH_SERVICES_DETAIL, { articleId: servicesArticle.id });
                }}
              >
                <EduCardSmall
                  noMargin
                  leftSideCard={
                    <FastImage
                      source={{
                        uri:
                          "https://cloud.squidex.io/api/assets/edubao/" +
                          servicesArticle.cardImage
                      }}
                      resizeMode="cover"
                      style={{
                        borderBottomLeftRadius: theme.grid.gridFactor(1),
                        borderTopLeftRadius: theme.grid.gridFactor(1),
                        padding: theme.grid.gridFactor(1),
                        width: theme.grid.gridFactor(8.375)
                      }}
                    />
                  }
                  contentType={servicesArticle.serviceCategory}
                  text={servicesArticle.teaserText}
                  title={servicesArticle.title}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View
        style={{
          marginTop: theme.grid.gridFactor(0.5),
          marginHorizontal: theme.grid.gridFactor(2.5)
        }}
      >
        <EduButton
          textColor={theme.colors.darker}
          inverted
          fontWeight="bold"
          fontSize="normal18"
          noMargin
          noWidth
          onPress={() => {
            sendNavigationEvent(routeName, params || {}, NAVIGATION_PATH_SERVICES_OVERVIEW, { pGId: PackageGroupId, packageId: servicePackage.id });
            navigate(NAVIGATION_PATH_SERVICES_OVERVIEW, { pGId: PackageGroupId, packageId: servicePackage.id });
          }}
        >
          {"Upgrade to " + servicePackage.title}
        </EduButton>
      </View>
    </View>
  );
};

export default EduPackageCard;
