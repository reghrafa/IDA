import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'ambhub.eu.auth0.com',
  clientId: 'f4T5ACt0vsivD6R3rld6R4LKiAKaw2e0',
});

export const authenticate = async (): Promise<string> => {
  const credentials = await auth0.webAuth
    .authorize({scope: 'openid profile email'})
    .catch(error => console.log(error));
  return credentials.idToken;
};

export const parseToken = async (token: string) => {
  const parsed = await auth0.auth.userInfo({token});
  // console.warn("token parsed: ", parsed);
  return parsed;
};

export const logout = async () => {
  await auth0.webAuth.clearSession().catch(() => {
    return false;
  });
  return true;
};

export interface ICredentialsDto {
  'https://api.edubao.org/geoip': {
    country_code: string;
    country_code3: string;
    country_name: string;
    city_name: string;
    latitude: string;
    longitude: string;
    time_zone: string;
    continent_code: string;
  };
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  exp: number;
}
