import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import ServicesInsuranceType from "./ServicesInsuranceType";
import PricingInformationType from "./PricingInformationType";

export const processServicePackages = (input: any[]): IServicePackageType[] =>
  input.map(
    (x: any): IServicePackageType => ({
      id: x.id,
      title: x.data.Title,
      image: x.data.Image ? x.data.Image[0] : undefined,
      color: x.data.Color,
      fontColor: x.data.FontColor,
      price: x.data.Price,
      pricingInformation: x.data.PricingInformation[0],
      servicesArticle: x.data.IncludedServices
    })
  );

const ServicePackageType = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    image: types.optional(types.string, ""),
    color: types.optional(types.string, ""),
    fontColor: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    pricingInformation: types.optional(
      types.reference(PricingInformationType),
      ""
    ),
    servicesArticle: types.optional(
      types.array(types.reference(ServicesInsuranceType)),
      []
    )
  })
  .named("ServicePackageType");

export default ServicePackageType;

export interface IServicePackageType
  extends Instance<typeof ServicePackageType> {}
export interface IServicePackageTypeSnapshot
  extends SnapshotIn<typeof ServicePackageType> {}
export interface IServicePackageTypeSnapshotOut
  extends SnapshotOut<typeof ServicePackageType> {}
