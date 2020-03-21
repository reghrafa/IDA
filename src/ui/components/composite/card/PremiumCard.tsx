import React from "react";
import { View, Alert } from "react-native";
import Logo from "../../../../assets/images/Logo";
import { EduButton } from "../../atomic/button/EduButton";
import EduText from "../../atomic/text/EduText";
import { IServicePackageType } from "../../../../dataLayer/models/ServicePackageType";
import useTheme from "../../../../themes/useTheme";
import Check from "../../../../assets/images/Check";
import I18n from "i18n-js";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { IServicesInsuranceType } from "../../../../dataLayer/models/ServicesInsuranceType";
import FastImage from "react-native-fast-image";
import OffersIcon from "../../../../assets/images/OffersIcon";
import Button from "../../atomic/button/Button";
import { NAVIGATION_PATH_SERVICES_OVERVIEW } from "../../../../Constants";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

export interface IPremiumCardProps {
  width: number;
  notIncludedServices?: IServicesInsuranceType[];
  includedServices?: IServicesInsuranceType[];
  item: IServicePackageType;
  packageGroupId: string;
}

const PremiumCard: React.FC<IPremiumCardProps> = ({
  width,
  item,
  notIncludedServices,
  includedServices,
  packageGroupId
}) => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const pricingString = item.pricingInformation
    ? item.pricingInformation.recurrence === "OneTime"
      ? "€"
      : item.pricingInformation.recurrence === "Monthly"
        ? "€/month"
        : "€/year"
    : "";
  return (
    <View
      style={{
        minHeight: theme.grid.gridFactor(25),
        width: width - theme.grid.gridFactor(5),
        borderRadius: theme.grid.gridFactor(1),
        marginHorizontal: theme.grid.gridFactor(0.5),
        marginTop: theme.grid.gridFactor(0.5),
        flex: 1
      }}
    >
      <View
        style={{
          borderRadius: theme.grid.gridFactor(1),
          padding: theme.grid.gridFactor(1),
          flex: 1,
          backgroundColor: item.color
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: theme.grid.gridFactor(0.5)
          }}
        >
          <Logo color={item.fontColor} />
          <EduText
            fontWeight="bold"
            style={{ marginLeft: theme.grid.gridFactor(0.5) }}
            customColor={item.fontColor}
          >
            {item.title}
          </EduText>
        </View>
        <View
          style={{
            alignItems: "center",
            margin: theme.grid.gridFactor(1),
            height: theme.grid.gridFactor(8.5)
          }}
        >
          <FastImage
            source={{
              uri: "https://cloud.squidex.io/api/assets/edubao/" + item.image
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        {// Included Services
          includedServices?.map((e, i) => {
            return (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  marginHorizontal: theme.grid.gridFactor(2),
                  marginVertical: theme.grid.gridFactor(0.5),
                  height: 19,
                  alignItems: "center"
                }}
              >
                <Check
                  width={theme.grid.gridFactor(1)}
                  height={theme.grid.gridFactor(1)}
                  color={item.fontColor}
                />

                <EduText
                  customColor={item.fontColor}
                  fontWeight="bold"
                  size="smaller14"
                  style={{
                    textDecorationLine: "none",
                    marginLeft: theme.grid.gridFactor(1)
                  }}
                >
                  {e.title}
                </EduText>
              </View>
            );
          })}
        {// notIncludeServices
          notIncludedServices?.map((e, i) => {
            return (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  marginHorizontal: theme.grid.gridFactor(2),
                  marginVertical: theme.grid.gridFactor(0.5),
                  height: 19,
                  alignItems: "center"
                }}
              >
                <EduText
                  customColor={item.fontColor}
                  fontWeight="bold"
                  size="smaller14"
                  style={{
                    textDecorationLine: "line-through",
                    marginLeft: theme.grid.gridFactor(2)
                  }}
                >
                  {e.title}
                </EduText>
              </View>
            );
          })}
        <View style={{ flex: 1 }} />
        <Button
          style={{
            marginHorizontal: theme.grid.gridFactor(1),
            marginVertical: theme.grid.gridFactor(0.5),
            justifyContent: "center",
            flexDirection: "row",
            height: theme.grid.gridFactor(3)
          }}
          onPress={() => {
            item.pricingInformation
              ? Alert.alert(
                //title
                item.pricingInformation.title,
                //body
                item.pricingInformation.pricingDetail +
                "\n" +
                item.pricingInformation.disclaimer,
                [{ text: "OK" }],
                { cancelable: true }
              )
              : null;
          }}
        >
          <EduText
            size="larger24"
            fontWeight="bold"
            customColor={item.fontColor}
          >
            {item.price.toString() + " " + pricingString}
          </EduText>

          <View
            style={{
              alignItems: "flex-start"
            }}
          >
            <OffersIcon
              color={item.fontColor}
              height={theme.grid.gridFactor(1.5)}
              width={theme.grid.gridFactor(1.5)}
            />
          </View>
        </Button>
        <EduButton
          textColor={theme.colors.darker}
          inverted
          fontWeight="bold"
          fontSize="normal18"
          noMargin
          noWidth
          onPress={() => {
            sendNavigationEvent(routeName, params || {}, NAVIGATION_PATH_SERVICES_OVERVIEW, { pGId: packageGroupId, packageId: item.id });
            navigate(NAVIGATION_PATH_SERVICES_OVERVIEW, { pGId: packageGroupId, packageId: item.id });
          }}
        >
          {I18n.t("global.button.moredetails")}
        </EduButton>
      </View>
    </View>
  );
};

export default PremiumCard;
