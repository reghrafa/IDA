import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduPackageModel from "./EduAdvisoryPackageModel";
import EduProductModel from "./EduProductModel";

const EduProductSelectionModel = types
  .model({
    selectedPackage: types.safeReference(EduPackageModel),
    selectedAdvisoryPackages: types.array(types.safeReference(EduPackageModel)), // advisory Packages??
    selectedProducts: types.array(types.safeReference(EduProductModel))
  })
  .named("EduProductSelectionModel");

export default EduProductSelectionModel;

export interface IEduProductSelectionModel
  extends Instance<typeof EduProductSelectionModel> {}
export interface IEduProductSelectionModelSnapshotIn
  extends SnapshotIn<typeof EduProductSelectionModel> {}
export interface IEduProductSelectionModelSnapshotOut
  extends SnapshotOut<typeof EduProductSelectionModel> {}
