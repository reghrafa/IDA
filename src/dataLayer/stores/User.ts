import {
  types,
  flow,
  Instance,
  SnapshotIn,
  SnapshotOut,
  onSnapshot
} from "mobx-state-tree";
import { authenticate, logout } from "../api/auth";
import jwtDecode from "jwt-decode";
import { removeToken, setToken } from "../mappers/asyncStorageWrapper";
import { warn } from "../../helpers/debughelper";

export interface ISignInProps {
  token?: string;
  successAction?: () => any;
  failAction?: () => any;
}

export interface ICredentialsDto {
  "https://api.edubao.org/geoip": {
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

const User = types
  .model({
    name: types.optional(types.string, ""),
    img: types.maybe(types.string),
    token: types.maybe(types.string),
    signInState: types.optional(
      types.enumeration("SignInState", [
        "loggedOut",
        "loggingIn",
        "loggingOut",
        "loggedIn",
        "error"
      ]),
      "loggedOut"
    )
  })
  .actions(self => ({
    logOut: flow(function*() {
      self.signInState = "loggingOut";
      try {
        const success = yield logout();
        if (!success) {
          self.signInState = "loggedIn";
        } else {
          self.signInState = "loggedOut";
          removeToken();
        }
      } catch (error) {
        self.signInState = "loggedIn";
      }
    }),
    signIn: flow(function*(props: ISignInProps) {
      self.signInState = "loggingIn";
      let token = props.token;
      if (!token) {
        try {
          token = yield authenticate();
        } catch (error) {
          warn("Failed to fetch", error);
          self.signInState = "error";
          props.failAction && props.failAction();
        }
      }
      if (token) {
        self.token = token;
        setToken(token);
        const decodedToken = jwtDecode<ICredentialsDto>(token);
        self.name = decodedToken?.name;
        self.img = decodedToken?.picture;
        self.signInState = "loggedIn";
        props.successAction && props.successAction();
      }
    }),
    setToken: (token: string) => {
      self.token = token;
      self.signInState = "loggedIn";
    }
  }))
  .views(self => ({
    get isLoggedIn(): boolean {
      return self.signInState === "loggedIn";
    }
  }))
  .named("User");

export default User;

export interface IUser extends Instance<typeof User> {}
export interface IUserSnapshotIn extends SnapshotIn<typeof User> {}
export interface IUserSnapshotOut extends SnapshotOut<typeof User> {}

export const createUserStore = (token?: string): IUser => {
  if (!token) {
    return User.create();
  }
  const decodedToken = jwtDecode<ICredentialsDto>(token);
  return User.create({
    token: token,
    signInState: "loggedIn",
    name: decodedToken?.name,
    img: decodedToken?.picture
  });
};
