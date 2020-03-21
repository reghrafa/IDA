import { types, SnapshotOut, Instance, SnapshotIn } from "mobx-state-tree";

const modalKeys = types.enumeration(["glossary"]);
export type ModalKey = SnapshotOut<typeof modalKeys>;

interface IVolatileModalStore {
  activeParameters: any | undefined;
}

const ModalStore = types
  .model({ activeModal: types.maybe(modalKeys) })
  .named("ModalStore")
  .volatile(_self => ({ activeParameters: undefined } as IVolatileModalStore))
  .views(self => ({
    modalVisible(modalKey: ModalKey): boolean {
      return self.activeModal === modalKey;
    },
    getActiveParameters<T>(): T | undefined {
      return self.activeParameters;
    }
  }))
  .actions(self => ({
    openModal(modalToOpen: ModalKey, parameters?: any): void {
      self.activeModal = modalToOpen;
      self.activeParameters = parameters;
    },
    closeModal(): void {
      self.activeModal = undefined;
      self.activeParameters = undefined;
    }
  }));

export default ModalStore;

export interface IModalStore extends Instance<typeof ModalStore> {}
export interface IModalStoreSnapshot extends SnapshotIn<typeof ModalStore> {}
