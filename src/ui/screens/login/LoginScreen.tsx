import React, { Component, useState } from "react";
import { View } from "react-native";
import ScreenWrapper from "../../containers/layout/ScreenWrapper";
import LogoHeader from "../../components/composite/headers/LogoHeader";
import BottomButtons from "../../components/composite/bottombuttons/BottomButtons";
import EduTextInput from "../../components/atomic/input/EduTextInput";
import EduText from "../../components/atomic/text/EduText";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { observer } from "mobx-react";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

interface ILoginScreenProps { }
const LoginScreen = observer((props: ILoginScreenProps) => {
  const [pw, setPw] = useState();
  const [mail, setMail] = useState();

  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  //console.error(data);

  const loginUser = () => {
    if (mail) {
      //data.user.setName(mail);
      sendNavigationEvent(routeName, params || {}, "App", {});
      navigate("App");
    }
  };

  return (
    <ScreenWrapper>
      <LogoHeader />
      <EduText
        size="large21"
        color="primary"
        style={{ marginHorizontal: 32, marginTop: 32, marginBottom: 88 }}
        translationKey="onboarding.login.text"
      />
      <EduTextInput
        labelTK="global.label.email"
        value={mail}
        onChange={(text: string) => setMail(text)}
        placeholderTK="global.placeholder.email"
      />
      <EduTextInput
        password
        labelTK="global.label.password"
        value={pw}
        onChange={(text: string) => setPw(text)}
        placeholderTK="global.placeholder.password"
      />
      <View style={{ flex: 1 }} />
      <BottomButtons
        data={[
          { translationKey: "global.button.login", action: loginUser },
          {
            translationKey: "login.clickable.forgotpassword",
            action: () => null,
            extraprops: {
              inverted: true,
              transparent: true,
              fontWeight: "regular"
            }
          }
        ]}
      />
    </ScreenWrapper>
  );
});

export default LoginScreen;
