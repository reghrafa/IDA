import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduSubCategoryModel from "./EduSubCategoryModel";

const EduCategoryModel = types
  .model({
    id: types.identifier,
    title: types.string,
    sliderImage: types.string,
    headerImage: types.string,
    backgroundImage: types.string,
    subCategorys: types.array(types.safeReference(EduSubCategoryModel))
  })
  .actions(self => ({}))
  .named("EduCategoryModel");

export default EduCategoryModel;

export interface IEduCategoryModel extends Instance<typeof EduCategoryModel> {}
export interface IEduCategoryModelSnapshotIn
  extends SnapshotIn<typeof EduCategoryModel> {}
export interface IEduCategoryModelSnapshotOut
  extends SnapshotOut<typeof EduCategoryModel> {}
