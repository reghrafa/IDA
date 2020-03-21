import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduTodoStore from "./EduTodoStore";
import EduGuideStore from "./EduGuideStore";
import EduPremiumStore from "./EduPremiumStore";
import EduUserStore from "./EduUserStore";
import EduUIStore from "./EduUIStore";

const EduRootStore = types
  .model({
    Todo: types.optional(EduTodoStore, () => EduTodoStore.create()),
    Guide: types.optional(EduGuideStore, () => EduGuideStore.create()),
    Premium: types.optional(EduPremiumStore, () => EduPremiumStore.create()),
    User: types.optional(EduUserStore, () => EduUserStore.create()),
    UI: types.optional(EduUIStore, () => EduUIStore.create())
  })
  .named("EduRootStore");

export default EduRootStore;

export interface IEduRootStore extends Instance<typeof EduRootStore> {}
export interface IEduRootStoreSnapshotIn
  extends SnapshotIn<typeof EduRootStore> {}
export interface IEduRootStoreSnapshotOut
  extends SnapshotOut<typeof EduRootStore> {}
