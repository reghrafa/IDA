import React from "react";
import { View, ScrollView } from "react-native";
import ProfileHeader from "../../components/composite/navigationBars/ProfileHeader";
import theme from "../../../themes/EdubaoTheme";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import EduText from "../../components/atomic/text/EduText";
import ProfileLinkSection, {
  IProfileLinkSectionProps
} from "../../components/composite/profile/ProfileLinkSection";
import { SvgCss } from "react-native-svg";
import DefaultProfilePic from "../../../assets/images/Illustrations/02_Feed/Guide_Feed_DefaultUser";
import { observer } from "mobx-react";
import FastImage from "react-native-fast-image";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import {
  NAVIGATION_PATH_CHANGE_LANGUAGE,
  NAVIGATION_PATH_IMPRINT,
  APP_VERSION
} from "../../../Constants";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

const ProfileScreen = () => {
  const { rootStore } = useStore();
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const profilePictureCircumference = theme.grid.gridFactor(5.5);

  const links: IProfileLinkSectionProps[] = [
    { titleTK: "global.profile.title", links: [] }, // should be "profile.profile.title"
    { titleTK: "profile.settings.title", links: [] }
  ];
  links[0].links.push({
    label: "Sign up",
    labelTK: "profile.userUnknown.clickable.signup",
    hide: rootStore.user.isLoggedIn,
    action: () => {
      rootStore.user.signIn({ successAction: () => {}, failAction: () => {} });
    },
    color: "secondary"
  });
  // links[0].links.push({
  //   label: "Personal Data",
  //   labelTK: "profile.personaldata.title",
  //   hide: !rootStore.user.isLoggedIn,
  //   action: () => { }
  // });
  // links[0].links.push({
  //   label: "Contact details",
  //   labelTK: "profile.contactdetails.title",
  //   hide: !rootStore.user.isLoggedIn,
  //   action: () => { }
  // });
  // links[0].links.push({
  //   label: "Home Adress",
  //   labelTK: "profile.homeadress.title",
  //   hide: !rootStore.user.isLoggedIn,
  //   action: () => { }
  // });
  // links[0].links.push({
  //   label: "German adress",
  //   labelTK: "profile.germanadress.title",
  //   hide: !rootStore.user.isLoggedIn,
  //   action: () => { }
  // });
  // links[0].links.push({
  //   label: "German university",
  //   labelTK: "profile.germanuniversity.title",
  //   hide: !rootStore.user.isLoggedIn,
  //   action: () => { }
  // });

  links[1].links.push({
    label: "Language",
    labelTK: "profile.language.title",
    action: () => {
      sendNavigationEvent(
        routeName,
        params || {},
        NAVIGATION_PATH_CHANGE_LANGUAGE,
        {}
      );
      navigate(NAVIGATION_PATH_CHANGE_LANGUAGE);
    }
  });
  // links[1].links.push({
  //   label: "Privacy settings",
  //   labelTK: "profile.clickable.personaldata",
  //   action: () => { }
  // });
  links[1].links.push({
    label: "Imprint",
    labelTK: "profile.imprint.title",
    action: () => {
      sendNavigationEvent(routeName, params || {}, NAVIGATION_PATH_IMPRINT, {});
      navigate(NAVIGATION_PATH_IMPRINT);
    }
  });
  links[1].links.push({
    label: "Logout",
    labelTK: "profile.signedin.clickable.logout",
    hide: !rootStore.user.isLoggedIn,
    action: () => {
      rootStore.user.logOut();
    },
    color: "tertiary"
  });

  return (
    <React.Fragment>
      <ProfileHeader noBackButton />
      <View style={{ flex: 1, backgroundColor: theme.colors.light }}>
        {rootStore.user.isLoggedIn && (
          <View
            style={{
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <View
              style={{
                width: profilePictureCircumference,
                height: profilePictureCircumference,
                borderRadius: profilePictureCircumference / 2,
                backgroundColor: theme.colors.dark,
                marginBottom: theme.grid.gridFactor(1),
                marginTop: theme.grid.gridFactor(0.5)
              }}
            >
              {rootStore.user.img ? (
                <FastImage
                  style={{
                    width: profilePictureCircumference,
                    height: profilePictureCircumference,
                    borderRadius: profilePictureCircumference / 2
                  }}
                  source={{ uri: rootStore.user.img }}
                />
              ) : (
                <SvgCss
                  width={profilePictureCircumference}
                  height={profilePictureCircumference}
                  xml={DefaultProfilePic}
                />
              )}
            </View>
            {rootStore.user.name ? (
              <EduText size="large21" color="primary" fontWeight="bold">
                {rootStore.user.name}
              </EduText>
            ) : null}
          </View>
        )}
        <ScrollView>
          {links.map((e, i) => (
            <ProfileLinkSection key={i} {...e} />
          ))}
          <View
            style={{
              marginTop: theme.grid.gridFactor(4.25),
              marginBottom: theme.grid.gridFactor(2),
              height: 22,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <EduText
              color="grey"
              size="small16"
              translationKey="global.version"
            />
            <EduText color="grey" size="small16">
              {"  " + APP_VERSION}
            </EduText>
          </View>
        </ScrollView>
      </View>
    </React.Fragment>
  );
};

export default observer(ProfileScreen);
