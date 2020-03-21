import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduFormChunkModel from "./EduFormChunkModel";

const EduFormDataModel = types
  .model({
    title: types.string,
    chunks: types.array(types.safeReference(EduFormChunkModel))
  })
  .actions(self => ({}))
  .named("EduFormDataModel");

export default EduFormDataModel;

export interface IEduFormDataModel extends Instance<typeof EduFormDataModel> {}
export interface IEduFormDataModelSnapshotIn
  extends SnapshotIn<typeof EduFormDataModel> {}
export interface IEduFormDataModelSnapshotOut
  extends SnapshotOut<typeof EduFormDataModel> {}
