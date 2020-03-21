import Auth0 from "react-native-auth0";

const auth0 = new Auth0({
  domain: "edubao.eu.auth0.com",
  clientId: "YUqpZi56BjRMnCFXqs1MvgWDNjw6E8Si"
});

export const authenticate = async (): Promise<string> => {
  const credentials = await auth0.webAuth
    .authorize({ scope: "openid profile email" })
    .catch(error => console.log(error));
  return credentials.idToken;
};

export const parseToken = async (token: string) => {
  const parsed = await auth0.auth.userInfo({ token });
  // console.warn("token parsed: ", parsed);
  return parsed;
};

export const logout = async () => {
  await auth0.webAuth.clearSession().catch(() => {
    return false;
  });
  return true;
};
