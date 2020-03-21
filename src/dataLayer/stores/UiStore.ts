import { types, Instance, SnapshotOut, SnapshotIn } from "mobx-state-tree";

const UiStore = types
  .model({
    profileOpen: false,
    feedSearchText: types.optional(types.string, "")
  })
  .actions(self => ({
    openProfile(open: boolean) {
      self.profileOpen = open;
    },
    closeProfile(open: boolean) {
      self.profileOpen = open;
    },
    updateFeedSearchText(newText: string) {
      self.feedSearchText = newText;
    },
    clearFeedSearchText() {
      self.feedSearchText = "";
    }
  }))
  .named("UiStore");

export default UiStore;

export interface IUiStore extends Instance<typeof UiStore> {}
export interface IUiStoreSnapshotIn extends SnapshotIn<typeof UiStore> {}
export interface IUiStoreSnapshotOut extends SnapshotOut<typeof UiStore> {}
