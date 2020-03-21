import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { identifier } from "mobx-state-tree/dist/internal";

const EduCustomerSegmentModel = types
  .model({
    id: identifier,
    name: types.string,
    title: types.string
  })
  .named("EduCustomerSegmentModel");

export default EduCustomerSegmentModel;

export interface IEduCustomerSegmentModel
  extends Instance<typeof EduCustomerSegmentModel> {}
export interface IEduCustomerSegmentModelSnapshotIn
  extends SnapshotIn<typeof EduCustomerSegmentModel> {}
export interface IEduCustomerSegmentModelSnapshotOut
  extends SnapshotOut<typeof EduCustomerSegmentModel> {}
