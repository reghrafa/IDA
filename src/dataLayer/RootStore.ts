import {types} from 'mobx-state-tree';
import UserStore from './UserStore';

const RootStore = types
  .model({
    userStore: types.optional(UserStore, () => UserStore.create()),
  })
  .named('RootStore');

export default RootStore;
