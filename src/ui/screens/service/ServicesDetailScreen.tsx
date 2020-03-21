import React from "react";
import useTheme from "../../../themes/useTheme";
import { View } from "react-native";
import Image from "react-native-fast-image";
import EduText from "../../components/atomic/text/EduText";
import { observer } from "mobx-react";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { IServicesInsuranceType } from "../../../dataLayer/models/ServicesInsuranceType";
import ReadMore from "../../components/composite/slider/ReadMore";
import ListableListWithTitle from "../../components/composite/listable/ListableListWithTitle";
import EduTallButton from "../../components/atomic/button/EduTallButton";
import ChatIcon from "../../../assets/images/ChatIcon";
import { Freshchat } from "react-native-freshchat-sdk";
import StickyHeaderAfterScrollingDown from "../../containers/layout/StickyHeaderAfterScrollingDownWrapper/StickyHeaderAfterScrollingDown";
import { NAVIGATION_PATH_PDF } from "../../../Constants";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

const ServicesDetailScreen: React.FC = () => {
  const theme = useTheme();
  const { rootStore } = useStore();
  const { state, navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const articleId = (state.params && state.params.articleId) || "";
  const article: IServicesInsuranceType = rootStore.servicesInsurance.list.find(
    a => a.id === articleId
  );
  return (
    <StickyHeaderAfterScrollingDown
      color="primary"
      SafeAreaBackgroundColor="secondary"
      backgroundColor="secondary"
      SafeAreaFlex={1}
      title={article.title}
      titleColor="primary"
      category="Service"
      contentBackgroundColor="light"
      iconColor="primary"
      imageUri={article.headerImage}
      imageBackgroundColor="secondary"
      noBookmark
      noLink
      no30percentOverlay
    >
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: theme.grid.gridFactor(2) }}>
          {
            // Content
          }
          <EduText
            size="small16"
            fontWeight="semibold"
            style={{
              marginBottom: theme.grid.gridFactor(1.5)
            }}
            color="primary"
          >
            {article.content}
          </EduText>
          {// Partner Logo
          article.partnerLogo && article.partnerLogo.length !== 0 ? (
            <View
              style={{
                height: theme.grid.gridFactor(5)
              }}
            >
              <Image
                source={{
                  uri:
                    "https://cloud.squidex.io/api/assets/edubao/" +
                    article.partnerLogo
                }}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          ) : null}

          {// Benefits
          article.benefits && article.benefits.length !== 0 ? (
            <ListableListWithTitle
              titleTK="services.benefits.title"
              listable={article.benefits}
              checkboxStyled
            />
          ) : null}

          {// How does it work
          article.details && article.details.length !== 0 ? (
            <ListableListWithTitle
              titleTK="services.howdoesitwork.title"
              listable={article.details}
            />
          ) : null}

          {
            // Download and Consultation Buttons
            <View
              style={{
                marginVertical: theme.grid.gridFactor(1.5),
                flexDirection: "row"
              }}
            >
              <View style={{ flex: 1 }}>
                <EduTallButton
                  translationKey="services.termsandconditions.button"
                  onPress={() => {
                    sendNavigationEvent(
                      routeName,
                      params || {},
                      NAVIGATION_PATH_PDF,
                      {
                        title: article.termsAndConditionPdfTitle,
                        url: article.termsAndConditionPdfLink
                      }
                    );
                    navigate(NAVIGATION_PATH_PDF, {
                      title: article.termsAndConditionPdfTitle,
                      url: article.termsAndConditionPdfLink
                    });
                  }}
                />
              </View>
              <View style={{ width: theme.grid.gridFactor(1.5) }}></View>
              <View style={{ flex: 1 }}>
                <EduTallButton
                  icon={
                    <ChatIcon
                      width={theme.grid.gridFactor(1.5)}
                      height={theme.grid.gridFactor(1.5)}
                      color={theme.colors.lightest}
                    />
                  }
                  onPress={() => Freshchat.showConversations()}
                  translationKey="services.askforconsultation.button"
                />
              </View>
            </View>
          }
        </View>
        <View
          style={{
            backgroundColor: theme.colors.light,
            paddingLeft: theme.grid.gridFactor(0.75)
          }}
        >
          <ReadMore />
        </View>
      </View>
    </StickyHeaderAfterScrollingDown>
  );
};

export default observer(ServicesDetailScreen);
