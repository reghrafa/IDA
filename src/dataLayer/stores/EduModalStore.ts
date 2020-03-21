import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

const EduModalStore = types
  .model({})
  .actions(self => ({}))
  .named("EduModalStore");

export default EduModalStore;

export interface IEduModalStore extends Instance<typeof EduModalStore> {}
export interface IEduModalStoreSnapshotIn
  extends SnapshotIn<typeof EduModalStore> {}
export interface IEduModalStoreSnapshotOut
  extends SnapshotOut<typeof EduModalStore> {}
