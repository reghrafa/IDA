import AsyncStorage from '@react-native-community/async-storage';

const TOKEN = 'TOKEN';

export const getTokenOrNull = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem(TOKEN);
  if (token) {
    return token;
  }
  return null;
};
export const setToken = (token: string): void => {
  AsyncStorage.setItem(TOKEN, token);
};
