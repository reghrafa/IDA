import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

export const processTodoCategories = (input: any[]): ITodoCategoryType[] =>
  input.map(
    (x: any): ITodoCategoryType => ({
      id: x.id,
      title: x.data.Title,
      imageActive: x.data.ImageActive[0],
      imageMonochrome: x.data.ImageMonochrome[0],
      index: x.data.Index
    })
  );

const TodoCategoryType = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    imageActive: types.optional(types.string, ""),
    imageMonochrome: types.optional(types.string, ""),
    index: types.optional(types.number, 999999999)
  })
  .named("TodoCategoryType");

export default TodoCategoryType;

export interface ITodoCategoryType extends Instance<typeof TodoCategoryType> {}
export interface ITodoCategoryTypeSnapshot
  extends SnapshotIn<typeof TodoCategoryType> {}
export interface ITodoCategoryTypeSnapshotOut
  extends SnapshotOut<typeof TodoCategoryType> {}
