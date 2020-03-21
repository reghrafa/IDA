import React from "react";
import { Text, View, ScrollView } from "react-native";
import ScreenWrapper from "../../containers/layout/ScreenWrapper";
import Button from "../../components/atomic/button/Button";
import { observer } from "mobx-react";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import {
  getLanguageOrNull,
  getOnboarded,
  getTokenOrNull,
  removeToken,
  removeLanguage,
  removeOnboarded
} from "../../../dataLayer/mappers/asyncStorageWrapper";
import { NAVIGATION_PATH_LANGUAGE_SELECT } from "../../../Constants";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

const OffersScreen = () => {
  const { rootStore } = useStore();
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  return (
    <ScreenWrapper>
      <ScrollView>
        <Text>Debug Control Screen</Text>
        <Button
          style={{ padding: 16, margin: 16, backgroundColor: "yellow" }}
          onPress={() => {
            sendNavigationEvent(
              routeName,
              params || {},
              NAVIGATION_PATH_LANGUAGE_SELECT,
              {}
            );
            navigate(NAVIGATION_PATH_LANGUAGE_SELECT);
          }}
        >
          <Text>DEBUG RESET BACK TO START</Text>
        </Button>
        <View
          style={{
            backgroundColor: rootStore.user.name ? "green" : "red",
            width: 50,
            height: 50,
            borderRadius: 15
          }}
        />
        <Text style={{ color: "black" }}>{rootStore.user.name}</Text>
        <Button
          style={{
            padding: 16,
            margin: 16,
            backgroundColor: "lightblue"
          }}
          onPress={async () => {
            const lang = await getLanguageOrNull();
            const onboarded = await getOnboarded();
            const token = await getTokenOrNull();
            console.error(
              "SHOW LOCAL STORAGE",
              "lang",
              lang,
              "onboarded",
              onboarded,
              "token",
              token
            );
          }}
        >
          <Text>SHOW LOCAL STORAGE</Text>
        </Button>
        <Button
          style={{ padding: 16, margin: 16, backgroundColor: "blue" }}
          onPress={() => {
            console.error("SHOW STORE", rootStore);
          }}
        >
          <Text>SHOW STORE</Text>
        </Button>
        <View>
          <Text>CLEAR LOCAL STORAGE</Text>
          <Button
            style={{ padding: 16, margin: 16, backgroundColor: "blue" }}
            onPress={() => {
              removeToken();
            }}
          >
            <Text>REMOVE TOKEN</Text>
          </Button>

          <Button
            style={{ padding: 16, margin: 16, backgroundColor: "blue" }}
            onPress={() => {
              removeLanguage();
            }}
          >
            <Text>REMOVE LANGUAGE</Text>
          </Button>

          <Button
            style={{ padding: 16, margin: 16, backgroundColor: "blue" }}
            onPress={() => {
              removeOnboarded();
            }}
          >
            <Text>REMOVE ONBOARDED</Text>
          </Button>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default observer(OffersScreen);
