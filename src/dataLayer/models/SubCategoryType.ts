import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import CategoryType from "./CategoryType";

export const processSubCategories = (input: any[]): ISubCategoryType[] =>
  input.map(
    (x: any): ISubCategoryType => ({
      id: x.id,
      title: x.data.Title,
      category: x.data.Category[0],
      index: x.data.Index
    })
  );

const SubCategoryType = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    category: types.optional(types.reference(CategoryType), ""),
    index: types.optional(types.number, 99999999)
  })
  .named("SubCategoryType");

export default SubCategoryType;

export interface ISubCategoryType extends Instance<typeof SubCategoryType> {}
export interface ISubCategoryTypeSnapshot
  extends SnapshotIn<typeof SubCategoryType> {}
export interface ISubCategoryTypeSnapshotOut
  extends SnapshotOut<typeof SubCategoryType> {}
