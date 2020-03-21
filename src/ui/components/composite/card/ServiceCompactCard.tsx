import React from "react";
import { Alert, View } from "react-native";
import _ from "lodash";

// ASSETS
import Logo from "../../../../assets/images/Logo";
// MODELS
import { IServicePackageType } from "../../../../dataLayer/models/ServicePackageType";
import { IServicesInsuranceType } from "../../../../dataLayer/models/ServicesInsuranceType";
// HELPERS
import useTheme from "../../../../themes/useTheme";
// ATOMIC
import EduText from "../../atomic/text/EduText";

const CURRENCY = "€";

const pricingString = (recurrence: string, currency: string = CURRENCY) => {
  switch (recurrence) {
    case "OneTime":
      return currency;
    case "Monthly":
      return `${currency} /month`;
    default:
      return `${currency} /year`;
  }
};

const priceComponent = (item: IServicePackageType) => {
  return `${item.price}${pricingString(
    _.get(item, "pricingInformation.recurrence", "")
  )}`;
};

export interface IServiceCompactProps {
  width: number;
  includedServices: any;
  // includedServices: IServicesInsuranceType[]
  item: any;
  // item: IServicePackageType
}

const ServiceCompactCard = (props: IServiceCompactProps) => {
  const { width, item, includedServices } = props;
  const theme = useTheme();
  const dividerComponent = () => {
    return (
      <View
        style={{
          marginVertical: theme.grid.gridFactor(0.5),
          borderBottomColor: "#1D2F57", // new color from design
          borderBottomWidth: 2
        }}
      />
    );
  };

  return (
    <View
      style={{
        width: width - theme.grid.gridFactor(5),
        marginHorizontal: theme.grid.gridFactor(0.5),
        marginTop: theme.grid.gridFactor(0.5),
        flex: 1,
        backgroundColor: "#C8EDFF"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: theme.grid.gridFactor(0.5),
          backgroundColor: item.color
        }}
      >
        <Logo color={item.fontColor} />
        <EduText
          fontWeight="bold"
          style={{ marginLeft: theme.grid.gridFactor(0.5) }}
          customColor={item.fontColor}
          ellipsizeMode={"tail"}
        >
          {item.title}
        </EduText>
      </View>
      <View
        style={{
          padding: theme.grid.gridFactor(1),
          flex: 1
        }}
      >
        {includedServices?.map((e: any) => {
          return (
            <View
              key={e?.title}
              style={{
                flexDirection: "row",
                marginVertical: theme.grid.gridFactor(0.5),
                height: 19,
                alignItems: "center"
              }}
            >
              <EduText
                customColor={item.fontColor}
                fontWeight="bold"
                size="normal18"
                style={{
                  textDecorationLine: "none",
                  marginLeft: theme.grid.gridFactor(1)
                }}
              >
                {e?.title}
              </EduText>
            </View>
          );
        })}
        {dividerComponent()}
        <View
          style={{
            marginLeft: theme.grid.gridFactor(1),
            marginBottom: theme.grid.gridFactor(0.5)
          }}
        >
          <EduText
            size="larger24"
            fontWeight="bold"
            customColor={item.fontColor}
          >
            {priceComponent(item)}
          </EduText>
          <EduText
            size="smallest12"
            fontWeight="regular"
            customColor={item.fontColor}
          >
            drawn directly from your Blocked account
          </EduText>
          <View
            style={{
              marginVertical: theme.grid.gridFactor(0.5)
            }}
          >
            <EduText
              size="smallest12"
              fontWeight="regular"
              customColor={item.fontColor}
              style={{
                letterSpacing: 0
              }}
            >
              *Period of notice: 3 months Minimum term: 1 year, gets extended
              year by year
            </EduText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceCompactCard;
