import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduProductModel from "./EduProductModel";

const EduFIPackageModel = types
  .model({
    id: types.identifier,
    name: types.string,
    image: types.string,
    packageColor: types.string,
    fontColor: types.string,
    includedProducts: types.array(types.safeReference(EduProductModel)),
    price: types.number,
    disclaimer: types.string,
    pricingDetail: types.string,
    recurrence: types.boolean
  })
  .named("EduFIPackageModel");

export default EduFIPackageModel;

export interface IEduFIPackageModel
  extends Instance<typeof EduFIPackageModel> {}
export interface IEduFIPackageModelSnapshotIn
  extends SnapshotIn<typeof EduFIPackageModel> {}
export interface IEduFIPackageModelSnapshotOut
  extends SnapshotOut<typeof EduFIPackageModel> {}
