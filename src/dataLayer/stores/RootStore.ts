import {types, Instance, SnapshotIn, SnapshotOut} from 'mobx-state-tree';
import UserStore from './UserStore';

const RootStore = types
  .model({
    userStore: types.optional(UserStore, () => UserStore.create()),
  })
  .named('RootStore');

export default RootStore;

export interface IRootStore extends Instance<typeof RootStore> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {}
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {}
