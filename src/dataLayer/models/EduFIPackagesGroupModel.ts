import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduFIPackageModel from "./EduFIPackageModel";

const EduFIPackagesGroupModel = types
  .model({
    id: types.identifier,
    title: types.string,
    description: types.string,
    packageList: types.array(types.safeReference(EduFIPackageModel))
  })
  .named("EduFIPackagesGroupModel");

export default EduFIPackagesGroupModel;

export interface IEduFIPackagesGroupModel
  extends Instance<typeof EduFIPackagesGroupModel> {}
export interface IEduFIPackagesGroupModelSnapshotIn
  extends SnapshotIn<typeof EduFIPackagesGroupModel> {}
export interface IEduFIPackagesGroupModelSnapshotOut
  extends SnapshotOut<typeof EduFIPackagesGroupModel> {}
