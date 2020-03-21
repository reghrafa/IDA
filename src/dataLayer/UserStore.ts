import {types} from 'mobx-state-tree';

const UserStore = types
  .model({
    name: types.optional(types.string, 'User'),
    loggedIn: types.optional(types.boolean, false),
    streamtoken: types.maybe(types.string),
    auth0token: types.maybe(types.string),
  })
  .named('UserStore');

export default UserStore;
