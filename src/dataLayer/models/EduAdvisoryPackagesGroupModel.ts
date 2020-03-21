import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduAdvisoryPackageModel from "./EduAdvisoryPackageModel";

const EduAdvisoryPackagesGroupModel = types
  .model({
    id: types.identifier,
    title: types.string,
    description: types.string,
    promotedPackage: types.safeReference(EduAdvisoryPackageModel),
    packageList: types.array(types.safeReference(EduAdvisoryPackageModel))
  })
  .named("EduAdvisoryPackagesGroupModel");

export default EduAdvisoryPackagesGroupModel;

export interface IEduAdvisoryPackagesGroupModel
  extends Instance<typeof EduAdvisoryPackagesGroupModel> {}
export interface IEduAdvisoryPackagesGroupModelSnapshotIn
  extends SnapshotIn<typeof EduAdvisoryPackagesGroupModel> {}
export interface IEduAdvisoryPackagesGroupModelSnapshotOut
  extends SnapshotOut<typeof EduAdvisoryPackagesGroupModel> {}
