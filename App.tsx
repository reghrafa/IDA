import React, { useEffect, useState } from "react";
import AuthNavigator from "./src/navigations/auth/AuthNavigator";
import { ThemeProvider } from "styled-components";
import { Provider } from "mobx-react";
import RootStore, { IRootStore } from "./src/dataLayer/stores/RootStore";
import theme from "./src/themes/EdubaoTheme";
import { FreshchatConfig, Freshchat } from "react-native-freshchat-sdk";
import { APP_ID, APP_KEY } from "./src/Constants";
import SplashScreen from "react-native-splash-screen";
import codePush from "react-native-code-push";
import {
  getTokenOrNull,
  getOnboarded,
  getLanguageOrNull
} from "./src/dataLayer/mappers/asyncStorageWrapper";
import { createUserStore } from "./src/dataLayer/stores/User";
const App = () => {
  const [store, setStore] = useState<IRootStore | null>(null);
  useEffect(() => {
    if (store === null) {
      (async () => {
        const token = await getTokenOrNull();
        const onboarded = await getOnboarded();
        const lang = await getLanguageOrNull();
        const rootStore = RootStore.create({
          settings: { language: lang ? lang : undefined, onboarded: onboarded },
          user: createUserStore(token ? token : undefined)
        });
        await rootStore.getInitialData(lang || "en");
        SplashScreen.hide();
        setStore(rootStore);
      })();
    }
  });
  const freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
  Freshchat.init(freshchatConfig);
  return store ? (
    <Provider rootStore={store}>
      <ThemeProvider theme={theme}>
        <AuthNavigator />
      </ThemeProvider>
    </Provider>
  ) : null;
};

export default codePush()(App);
