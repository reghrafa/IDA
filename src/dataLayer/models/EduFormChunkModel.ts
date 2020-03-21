import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduFormFieldModel from "./EduFormFieldModel";

const EduFormChunkModel = types
  .model({
    title: types.string,
    description: types.string,
    fields: types.array(EduFormFieldModel)
  })
  .actions(self => ({}))
  .named("EduFormChunkModel");

export default EduFormChunkModel;

export interface IEduFormChunkModel
  extends Instance<typeof EduFormChunkModel> {}
export interface IEduFormChunkModelSnapshotIn
  extends SnapshotIn<typeof EduFormChunkModel> {}
export interface IEduFormChunkModelSnapshotOut
  extends SnapshotOut<typeof EduFormChunkModel> {}
