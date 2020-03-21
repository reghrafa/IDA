import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduArticleModel from "./EduArticleModel";

const EduSubCategoryModel = types
  .model({
    id: types.identifier,
    title: types.string,
    articles: types.array(types.safeReference(EduArticleModel))
  })
  .actions(self => ({}))
  .named("EduSubCategoryModel");

export default EduSubCategoryModel;

export interface IEduSubCategoryModel
  extends Instance<typeof EduSubCategoryModel> {}
export interface IEduSubCategoryModelSnapshotIn
  extends SnapshotIn<typeof EduSubCategoryModel> {}
export interface IEduSubCategoryModelSnapshotOut
  extends SnapshotOut<typeof EduSubCategoryModel> {}
