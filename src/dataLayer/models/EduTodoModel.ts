import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduArticleModel from "./EduArticleModel";

const EduTodoModel = types
  .model({
    id: types.identifier,
    title: types.string,
    cardText: types.string,
    checked: types.boolean,
    teaserText: types.optional(types.string, ""),
    content: types.optional(types.string, ""),
    headerImage: types.optional(types.string, ""),
    note: types.optional(types.string, ""),
    readmoreTodos: types.array(types.safeReference(EduArticleModel)),
    loadingStatus: types.enumeration("empty", [
      "empty",
      "preview",
      "loading",
      "done"
    ])
  })
  .actions(self => ({}))
  .named("EduTodoModel");

export default EduTodoModel;

export interface IEduTodoModel extends Instance<typeof EduTodoModel> {}
export interface IEduTodoModelSnapshotIn
  extends SnapshotIn<typeof EduTodoModel> {}
export interface IEduTodoModelSnapshotOut
  extends SnapshotOut<typeof EduTodoModel> {}
