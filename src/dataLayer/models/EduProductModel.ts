import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

const EduProductModel = types
  .model({
    id: types.identifier,
    title: types.string,
    serviceCategory: types.string,
    cardText: types.string,
    cardImage: types.string,
    productImage: types.string,
    teaserText: types.optional(types.string, ""),
    content: types.optional(types.string, ""),
    partnerLogoImage: types.optional(types.string, ""),
    headerImage: types.optional(types.string, ""),
    tags: types.array(types.string),
    benefits: types.array(types.string),
    details: types.array(types.string),
    termsAndConditionTitle: types.optional(types.string, ""),
    termsAndConditionPdfLink: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    disclaimer: types.optional(types.string, ""),
    pricingDetail: types.optional(types.string, ""),
    recurrence: types.optional(types.string, ""),
    isSingleBuyable: types.optional(types.boolean, false),
    loadingStatus: types.enumeration("empty", [
      "empty",
      "preview",
      "loading",
      "done"
    ])
  })
  .actions(self => ({}))
  .named("EduProductModel");

export default EduProductModel;

export interface IEduProductModel extends Instance<typeof EduProductModel> {}
export interface IEduProductModelSnapshotIn
  extends SnapshotIn<typeof EduProductModel> {}
export interface IEduProductModelSnapshotOut
  extends SnapshotOut<typeof EduProductModel> {}
