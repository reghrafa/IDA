import {types, flow} from 'mobx-state-tree';
import jwtDecode from 'jwt-decode';
import {authenticate, ICredentialsDto} from '../api/auth0API';
import {getTokenOrNull, setToken} from '../storage/asyncStorageWrapper';

const UserStore = types
  .model({
    name: types.optional(types.string, 'User'),
    streamtoken: types.maybe(types.string),
    auth0token: types.maybe(types.string),
  })
  .actions(self => ({
    afterCreate() {
      getTokenOrNull().then(toN => {
        if (toN) {
          const {nickname} = jwtDecode<ICredentialsDto>(toN);
          self.auth0token = toN;
          self.name = nickname;
        }
      });
    },
    authenticate: flow(function*() {
      try {
        const token = yield authenticate();
        self.auth0token = token;
        const {nickname} = jwtDecode<ICredentialsDto>(token);
        self.name = nickname;
        setToken(token);
      } catch (error) {
        console.warn('Failed to fetch', error);
      }
    }),
  }))
  .views(self => ({
    get loggedIn() {
      return !!self.auth0token;
    },
  }))
  .named('UserStore');

export default UserStore;
