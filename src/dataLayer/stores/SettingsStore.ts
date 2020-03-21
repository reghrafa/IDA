import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { setOnboarded, setLanguage } from "../mappers/asyncStorageWrapper";

const SettingsStore = types
  .model("Settings", {
    language: types.optional(types.string, "en"),
    onboarded: types.optional(types.boolean, false)
  })
  .actions(self => ({
    setLanguage(lang: string) {
      self.language = lang;
      setLanguage(lang);
    },
    setOnboarded() {
      self.onboarded = true;
      setOnboarded(true);
    }
  }));

export default SettingsStore;

export interface ISettingsStore extends Instance<typeof SettingsStore> {}
export interface ISettingsStoreSnapshotIn
  extends SnapshotIn<typeof SettingsStore> {}
export interface ISettingsStoreSnapshotOut
  extends SnapshotOut<typeof SettingsStore> {}
