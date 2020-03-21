import { types, Instance } from "mobx-state-tree";
import ModalStore from "./ModalStore";

const RootUiStore = types
  .model({ modalStore: types.optional(ModalStore, () => ModalStore.create()) })
  .named("RootUiStore");

export default RootUiStore;

export interface IRootUiStore extends Instance<typeof RootUiStore> {}
