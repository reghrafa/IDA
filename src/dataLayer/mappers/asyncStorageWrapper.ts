import AsyncStorage from "@react-native-community/async-storage";
import { stringToBoolean, booleanToString } from "../../helpers/toBoolean";
import languages from "../../translations/languages";

const TOKEN = "TOKEN";
const ONBOARDED = "ONBOARDED";
const LANG = "LANG";

export const getTokenOrNull = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem(TOKEN);
  if (token) {
    return token;
  }
  return null;
};
export const getOnboarded = async (): Promise<boolean> => {
  const onboarded = await AsyncStorage.getItem(ONBOARDED);
  if (!onboarded) {
    await AsyncStorage.setItem(ONBOARDED, "false");
    return false;
  } else {
    return stringToBoolean(onboarded, false);
  }
};
export const getLanguageOrNull = async (): Promise<string | null> => {
  const lang = await AsyncStorage.getItem(LANG);
  if (lang) {
    return lang;
  }
  return null;
};

export const setToken = (token: string): void => {
  AsyncStorage.setItem(TOKEN, token);
};
export const removeToken = (): void => {
  AsyncStorage.removeItem(TOKEN);
};
export const setOnboarded = (onboarded: boolean): void => {
  AsyncStorage.setItem(ONBOARDED, booleanToString(onboarded));
};
export const removeOnboarded = () => {
  AsyncStorage.removeItem(ONBOARDED);
};
export const setLanguage = (lang: string): void => {
  if (languages.map(e => e.code).includes(lang)) {
    AsyncStorage.setItem(LANG, lang);
  }
};
export const removeLanguage = () => {
  AsyncStorage.removeItem(LANG);
};
