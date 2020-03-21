import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

export const processPricingInformations = (
  input: any[]
): IPricingInformationType[] =>
  input.map(
    (x: any): IPricingInformationType => ({
      id: x.id,
      title: x.data.Title,
      pricingDetail: x.data.PricingDetail,
      disclaimer: x.data.Disclaimer,
      recurrence: x.data.Recurrence
    })
  );

const PricingInformationType = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    pricingDetail: types.optional(types.string, ""),
    disclaimer: types.optional(types.string, ""),
    recurrence: types.optional(types.string, "")
  })
  .named("PricingInformationType");

export default PricingInformationType;

export interface IPricingInformationType
  extends Instance<typeof PricingInformationType> {}
export interface IPricingInformationTypeSnapshot
  extends SnapshotIn<typeof PricingInformationType> {}
export interface IPricingInformationTypeSnapshotOut
  extends SnapshotOut<typeof PricingInformationType> {}
