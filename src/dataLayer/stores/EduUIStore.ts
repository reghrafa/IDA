import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduModalStore from "./EduModalStore";

const EduUIStore = types
  .model({
    modal: types.optional(EduModalStore, () => EduModalStore.create()),
    profileOpen: types.optional(types.boolean, false)
  })
  .actions(self => ({
    closeProfile: () => {
      self.profileOpen = false;
    },
    openProfile: () => {
      self.profileOpen = true;
    }
  }))
  .named("EduUIStore");

export default EduUIStore;

export interface IEduUIStore extends Instance<typeof EduUIStore> {}
export interface IEduUIStoreSnapshotIn extends SnapshotIn<typeof EduUIStore> {}
export interface IEduUIStoreSnapshotOut
  extends SnapshotOut<typeof EduUIStore> {}
