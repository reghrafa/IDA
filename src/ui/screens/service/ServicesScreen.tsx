import React from "react";
import ScreenWrapper from "../../containers/layout/ScreenWrapper";
import { View, Dimensions } from "react-native";
import Logo from "../../../assets/images/Logo";
import EduText from "../../components/atomic/text/EduText";
import { TouchableOpacity } from "react-native";
import useTheme from "../../../themes/useTheme";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import BackArrow from "../../../assets/images/BackArrow";
import { observer } from "mobx-react";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import { IServicePackageType } from "../../../dataLayer/models/ServicePackageType";
import { IServiceGroupType } from "../../../dataLayer/models/ServiceGroupType";
import { ScrollView } from "react-native-gesture-handler";
import { IServicesInsuranceType } from "../../../dataLayer/models/ServicesInsuranceType";
import FastImage from "react-native-fast-image";
import EduCardSmall from "../../components/composite/card/EduCardSmall";
import EduButton from "../../components/atomic/button/EduButton";
import EduPackageCard from "../../components/composite/card/EduPackageCard";
import { NAVIGATION_PATH_SERVICES_DETAIL } from "../../../Constants";
import { IEdubaoTheme } from "../../../themes/IEdubaoTheme";
import { getContentTypeFromString } from "../../../types_interfaces/types/basetypes";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

const ServicesScreen: React.FC = ({}) => {
  const theme: IEdubaoTheme = useTheme();
  const headerHeight: number = theme.grid.gridFactor(3.5);
  const { state, goBack, navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const { rootStore } = useStore();
  const packageGroupId: string = (state.params && state.params.pGId) || "";
  const packageId: string = (state.params && state.params.packageId) || "";
  const packageGroup: IServiceGroupType = rootStore.serviceGroup.list.find(
    (element: IServiceGroupType) => element.id === packageGroupId
  );
  const selectedPackage: IServicePackageType = rootStore.servicePackage.list.find(
    (element: IServicePackageType) => element.id === packageId
  );
  const includeServices: IServicesInsuranceType[] | undefined =
    selectedPackage.servicesArticle; // packageGroup.getIncludedServices(packageId);
  const notIncludedPackages: IServicePackageType[] | undefined = []; //packageGroup.getPackagesAbove(packageId);
  return (
    <ScreenWrapper
      safeAreaBackgroundColor={selectedPackage.color}
      customBackgroundColor={theme.colors.light}
    >
      <View
        style={{
          height: headerHeight,
          backgroundColor: selectedPackage.color,
          alignItems: "flex-start",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            marginHorizontal: theme.grid.gridFactor(1),
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              marginHorizontal: theme.grid.gridFactor(1)
            }}
            onPress={() => goBack()}
          >
            <BackArrow
              color={selectedPackage.fontColor}
              width={theme.grid.gridFactor(1)}
              height={theme.grid.gridFactor(1)}
            />
          </TouchableOpacity>
          <View
            style={{
              marginLeft: theme.grid.gridFactor(0.5),
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Logo color={selectedPackage.fontColor} />
            <EduText
              style={{
                marginLeft: theme.grid.gridFactor(1),
                color: selectedPackage.fontColor
              }}
              fontWeight="bold"
              size="normal18"
            >
              {selectedPackage.title}
            </EduText>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          marginHorizontal: theme.grid.gridFactor(0.5),
          backgroundColor: theme.colors.light
        }}
      >
        {// includeServices
        includeServices ? (
          <View>
            <EduText
              style={{
                marginTop: theme.grid.gridFactor(1),
                marginBottom: theme.grid.gridFactor(0.5),
                marginHorizontal: theme.grid.gridFactor(1)
              }}
              size="large21"
              color="primary"
              translationKey="service.overview.included.title"
            />
            {includeServices?.map((e, i) => {
              return (
                <View
                  key={i}
                  style={{
                    marginVertical: theme.grid.gridFactor(0.5),
                    marginHorizontal: theme.grid.gridFactor(0.5)
                  }}
                >
                  <TouchableOpacity
                    //underlayColor="#F9FAFF"
                    onPress={() => {
                      sendNavigationEvent(
                        routeName,
                        params || {},
                        NAVIGATION_PATH_SERVICES_DETAIL,
                        { articleId: e.id }
                      );
                      navigate(NAVIGATION_PATH_SERVICES_DETAIL, {
                        articleId: e.id
                      });
                    }}
                  >
                    <EduCardSmall
                      noMargin
                      shadow={5}
                      height={134}
                      leftSideCard={
                        Dimensions.get("screen").width > 320 ? (
                          <FastImage
                            source={{
                              uri:
                                "https://cloud.squidex.io/api/assets/edubao/" +
                                e.cardImage
                            }}
                            resizeMode="cover"
                            style={{
                              borderBottomLeftRadius: theme.grid.gridFactor(1),
                              borderTopLeftRadius: theme.grid.gridFactor(1),
                              //padding: theme.grid.gridFactor(1),
                              //width: theme.grid.gridFactor(8.375)
                              width: 104
                            }}
                          />
                        ) : (
                          undefined
                        )
                      }
                      contentType={getContentTypeFromString(e.serviceCategory)}
                      text={e.teaserText}
                      title={e.title}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        ) : null}
        {// notIncludedPackages
        notIncludedPackages && notIncludedPackages.length !== 0 ? (
          <View>
            <EduText
              style={{
                marginTop: theme.grid.gridFactor(1.5),
                marginHorizontal: theme.grid.gridFactor(1)
              }}
              size="large21"
              color="primary"
              translationKey="service.overview.notincluded.title"
            />
            {notIncludedPackages?.map(servicePackage => {
              return (
                <View
                  style={{
                    marginVertical: theme.grid.gridFactor(0.5)
                  }}
                >
                  <EduPackageCard
                    servicePackage={servicePackage}
                    servicePackageGroupId={packageGroupId}
                  />
                </View>
              );
            })}
          </View>
        ) : null}

        <View
          style={{
            marginVertical: theme.grid.gridFactor(1.5),
            marginHorizontal: theme.grid.gridFactor(1)
          }}
        >
          <EduButton
            textColor={selectedPackage.fontColor}
            backgroundColor={selectedPackage.color}
            fontWeight="bold"
            fontSize="normal18"
            noMargin
            noWidth
            translationKey="service.overview.choose.button"
            interpolations={{ "0_placeholder": selectedPackage.title }}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default observer(ServicesScreen);
