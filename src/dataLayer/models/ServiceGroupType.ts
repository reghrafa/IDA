import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import ServicePackageType from "./ServicePackageType";
import { IServicePackageType } from "./ServicePackageType";
import { IServicesInsuranceType } from "./ServicesInsuranceType";
import _ from "lodash";

export const processServiceGroups = (input: any[]) =>
  input.map((x: any) => ({
    id: x.id,
    title: x.data.Identifier,
    promotedPackage: x.data.PromotedPackage,
    packages: x.data.Packages
  }));

const ServiceGroupType = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    promotedPackage: types.optional(
      types.array(types.reference(ServicePackageType)),
      []
    ),
    packages: types.optional(
      types.array(types.reference(ServicePackageType)),
      []
    )
  })
  .named("ServiceGroupType")
  .views(self => ({
    get lastPackage(): IServicePackageType | undefined {
      return _.last(self.packages);
    },
    get allPackages(): IServicePackageType[] | undefined {
      return self.packages;
    },
    getPackage(id: string): IServicePackageType | undefined {
      return self.packages.find(x => x.id === id);
    },
    getPackageIndex(id: string): number {
      // findIndex immediately returns that element index. Otherwise, findIndex returns -1.
      return self.packages.findIndex(x => x.id === id);
    },
    getPackagesAbove(id: string): IServicePackageType[] | undefined {
      const index = this.getPackageIndex(id);
      const allPackages = this.allPackages;
      let abovePackages: IServicePackageType[] = [];
      if (index === -1 || allPackages === undefined) return undefined;
      for (var i = index + 1; i <= allPackages?.length - 1; i++) {
        abovePackages.push(allPackages[i]);
      }
      return abovePackages;
    },
    getIncludedServices(id: string): IServicesInsuranceType[] {
      const index = this.getPackageIndex(id);
      const allPackages = this.allPackages;
      let IncludedServices: IServicesInsuranceType[] = [];
      if (index === -1 || allPackages === undefined) return [];
      for (var i = index + 0; i >= 0; i--) {
        let servicesArticle: IServicesInsuranceType[] =
          allPackages[i].servicesArticle;
        if (servicesArticle !== [] || servicesArticle !== undefined)
          servicesArticle.forEach(element => {
            IncludedServices.unshift(element);
          });
      }
      if (IncludedServices === []) return [];

      return IncludedServices;
    },
    getNotIncludeServices(id: string): IServicesInsuranceType[] | undefined {
      const index = this.getPackageIndex(id);
      const allPackages = this.allPackages;
      let notIncludedServices: IServicesInsuranceType[] = [];

      if (index === -1 || allPackages === undefined) return undefined;
      for (var i = allPackages?.length - 1; i >= index + 1; i--) {
        let servicesArticle: IServicesInsuranceType[] =
          allPackages[i].servicesArticle;
        if (servicesArticle !== [] || servicesArticle !== undefined)
          servicesArticle.forEach(element => {
            notIncludedServices.unshift(element);
          });
      }
      if (notIncludedServices === []) return undefined;

      return notIncludedServices;
    }
  }));

export default ServiceGroupType;

export interface IServiceGroupType extends Instance<typeof ServiceGroupType> {}
export interface IServiceGroupTypeSnapshot
  extends SnapshotIn<typeof ServiceGroupType> {}
export interface IServiceGroupTypeSnapshotOut
  extends SnapshotOut<typeof ServiceGroupType> {}
