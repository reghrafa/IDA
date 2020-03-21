import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

export const processCategories = (input: any[]): ICategoryType[] =>
  input.map(
    (x: any): ICategoryType => ({
      id: x.id,
      title: x.data.Title,
      previewImageSmall: x.data.PreviewImageSmall[0],
      previewImageMedium: x.data.PreviewImageMedium[0],
      previewImageLarge: x.data.PreviewImageLarge[0],
      index: x.data.Index
    })
  );

const CategoryType = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    previewImageSmall: types.optional(types.string, ""),
    previewImageMedium: types.optional(types.string, ""),
    previewImageLarge: types.optional(types.string, ""),
    index: types.optional(types.number, 99999999)
  })
  .named("CategoryType");

export default CategoryType;

export interface ICategoryType extends Instance<typeof CategoryType> {}
export interface ICategoryTypeSnapshot
  extends SnapshotIn<typeof CategoryType> {}
export interface ICategoryTypeSnapshotOut
  extends SnapshotOut<typeof CategoryType> {}
