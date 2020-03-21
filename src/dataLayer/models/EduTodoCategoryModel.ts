import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { identifier } from "mobx-state-tree/dist/internal";
import EduTodoModel from "./EduTodoModel";

const EduTodoCategoryModel = types
  .model({
    id: types.identifier,
    image: types.string,
    todos: types.array(types.safeReference(EduTodoModel))
  })
  .actions(self => ({}))
  .named("EduTodoCategoryModel");

export default EduTodoCategoryModel;

export interface IEduTodoCategoryModel
  extends Instance<typeof EduTodoCategoryModel> {}
export interface IEduTodoCategoryModelSnapshotIn
  extends SnapshotIn<typeof EduTodoCategoryModel> {}
export interface IEduTodoCategoryModelSnapshotOut
  extends SnapshotOut<typeof EduTodoCategoryModel> {}
