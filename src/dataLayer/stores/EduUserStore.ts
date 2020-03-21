import {
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
  getParent,
  getParentOfType,
  getRoot
} from "mobx-state-tree";
import EduArticleModel, { IEduArticleModel } from "../models/EduArticleModel";
import EduProductSelectionModel from "../models/EduProductSelectionModel";
import EduSettingsStore from "./EduSettingsStore";
import { IEduRootStore } from "./EduRootStore";
import { getBookmarks } from "../api/EduApi";
import EduFormDataStore from "./EduFormDataStore";

const EduUserStore = types
  .model({
    displayName: types.optional(types.string, "User"),
    signInState: types.optional(
      types.enumeration([
        "loggedOut",
        "loggingIn",
        "loggingOut",
        "loggedIn",
        "error"
      ]),
      "loggedOut"
    ),
    image: types.maybe(types.string),
    token: types.maybe(types.string),
    bookmarks: types.array(types.safeReference(EduArticleModel)),
    productSelection: types.maybe(EduProductSelectionModel),
    formData: types.optional(EduFormDataStore, EduFormDataStore.create()),
    settings: types.optional(EduSettingsStore, EduSettingsStore.create())
  })
  .actions(self => ({
    signup() {},
    signout() {},
    setBookmarks(bookmarks: IEduArticleModel[]) {
      self.bookmarks.replace(bookmarks);
    }
  }))
  .views(self => {
    const rootStore: IEduRootStore = getRoot(self);
    const loading = new Set();
    const fetchBookmarks = async () => {
      // we dont check if we allready have the newest bookmarks because we allways want the newest list of bookmarks
      try {
        const bookmarks = await getBookmarks();
        if (bookmarks) {
          self.setBookmarks(bookmarks.map(b => EduArticleModel.create(b)));
        }
      } catch (error) {}
    };
    return {
      get bookmarks() {
        fetchBookmarks();
        return self.bookmarks;
      }
    };
  })
  .named("EduUserStore");

export default EduUserStore;

export interface IEduUserStore extends Instance<typeof EduUserStore> {}
export interface IEduUserStoreSnapshotIn
  extends SnapshotIn<typeof EduUserStore> {}
export interface IEduUserStoreSnapshotOut
  extends SnapshotOut<typeof EduUserStore> {}
