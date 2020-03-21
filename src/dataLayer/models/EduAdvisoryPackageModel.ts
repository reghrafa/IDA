import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduProductModel from "./EduProductModel";

const EduAdvisoryPackageModel = types
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
  .named("EduAdvisoryPackageModel");

export default EduAdvisoryPackageModel;

export interface IEduAdvisoryPackageModel
  extends Instance<typeof EduAdvisoryPackageModel> {}
export interface IEduAdvisoryPackageModelSnapshotIn
  extends SnapshotIn<typeof EduAdvisoryPackageModel> {}
export interface IEduAdvisoryPackageModelSnapshotOut
  extends SnapshotOut<typeof EduAdvisoryPackageModel> {}
