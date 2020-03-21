import { types, Instance } from "mobx-state-tree";
import _ from "lodash";
import { sendArticleEvent } from "../../helpers/analyticsEvents";

const BookmarksStore = types
  .model({
    list: types.array(types.string)
  })
  .actions(self => ({
    add: (newBookmarkId: string) => {
      sendArticleEvent(newBookmarkId, "AddBookmark")
      self.list.push(newBookmarkId)
    },
    removeWithId: (bookmarkId: string) => {
      sendArticleEvent(bookmarkId, "RemoveBookmark")
      self.list.remove(bookmarkId)
    }
  }))
  .named("BookmarksStore");

export default BookmarksStore;

export interface IRootUiStore extends Instance<typeof BookmarksStore> { }
