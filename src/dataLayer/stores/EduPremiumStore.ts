import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduProductModel, {
  IEduProductModel,
  IEduProductModelSnapshotIn
} from "../models/EduProductModel";
import {
  getProducts,
  getProduct,
  getFIPackages,
  getAdvisoryPackages,
  getAdvisoryPackageGroup,
  getFIPackageGroup
} from "../api/EduApi";
import EduFIPackageModel, {
  IEduFIPackageModel,
  IEduFIPackageModelSnapshotIn
} from "../models/EduFIPackageModel";
import EduAdvisoryPackageModel, {
  IEduAdvisoryPackageModel,
  IEduAdvisoryPackageModelSnapshotIn
} from "../models/EduAdvisoryPackageModel";
import EduFIPackagesGroupModel, {
  IEduFIPackagesGroupModel,
  IEduFIPackagesGroupModelSnapshotIn
} from "../models/EduFIPackagesGroupModel";
import EduAdvisoryPackagesGroupModel, {
  IEduAdvisoryPackagesGroupModel,
  IEduAdvisoryPackagesGroupModelSnapshotIn
} from "../models/EduAdvisoryPackagesGroupModel";
import { getPackages } from "../api/api";

const EduPremiumStore = types
  .model({
    products: types.map(EduProductModel),
    fiPackages: types.map(EduFIPackageModel),
    fiPackageGroup: types.maybe(EduFIPackagesGroupModel),
    advisoryPackages: types.map(EduAdvisoryPackageModel),
    advisoryPackageGroup: types.maybe(EduAdvisoryPackagesGroupModel)
  })
  .actions(self => ({
    setFIPackages(fipackageArray: IEduFIPackageModel[]) {
      self.fiPackages.replace(fipackageArray);
    },
    setAdvisoryPackages(advisorypackageArray: IEduAdvisoryPackageModel) {
      self.advisoryPackages.replace(advisorypackageArray);
    },
    setProducts(productArray: IEduProductModel[]) {
      self.products.replace(productArray);
    },
    setFIPackageGroup(packageGroup: IEduFIPackagesGroupModel) {
      self.products.replace(packageGroup);
    },
    setAdvisoryPackageGroup(packageGroup: IEduAdvisoryPackagesGroupModel) {
      self.products.replace(packageGroup);
    },
    setProduct(product: IEduProductModel) {
      self.products.put(product);
    }
  }))
  .views(self => {
    const loading = new Set();
    const fetchPremium = async (customerSegment: string, force?: boolean) => {
      if (
        !force &&
        (loading.has("premium") ||
          (self.fiPackages.size !== 0 &&
            self.advisoryPackages.size !== 0 &&
            self.products.size !== 0 &&
            self.fiPackageGroup &&
            self.advisoryPackageGroup))
      )
        return;
      loading.add("premium");
      try {
        const [
          products,
          fipackages,
          fipackagegroup,
          advisorypackages,
          advisorypackagegroup
        ] = await Promise.all([
          getProducts(customerSegment),
          getFIPackages(customerSegment),
          getFIPackageGroup(customerSegment),
          getAdvisoryPackages(customerSegment),
          getAdvisoryPackageGroup(customerSegment)
        ]);
        loading.delete("premium");
        self.setProducts(
          products.map((p: IEduProductModelSnapshotIn) =>
            EduProductModel.create(p)
          )
        );
        self.setFIPackages(
          fipackages.map((fip: IEduFIPackageModelSnapshotIn) =>
            EduFIPackageModel.create(fip)
          )
        );
        self.setFIPackageGroup(
          fipackagegroup.map((fipg: IEduFIPackagesGroupModelSnapshotIn) =>
            EduFIPackagesGroupModel.create(fipg)
          )
        );
        self.setAdvisoryPackages(
          advisorypackages.map((ap: IEduAdvisoryPackageModelSnapshotIn) =>
            EduAdvisoryPackageModel.create(ap)
          )
        );
        self.setAdvisoryPackageGroup(
          advisorypackagegroup.map(
            (apg: IEduAdvisoryPackagesGroupModelSnapshotIn) =>
              EduAdvisoryPackagesGroupModel.create(apg)
          )
        );
      } catch (error) {
        loading.delete("premium");
        console.error();
      }
    };
    const fetchProduct = async (id: string) => {
      if (loading.has(id) || self.products.get(id)?.loadingStatus === "done")
        return;
      loading.add(id);
      try {
        const p = await getProduct(id);
        loading.delete(id);
        if (p) {
          self.setProduct(EduProductModel.create(p));
        }
      } catch (error) {
        loading.delete(id);
        console.log(error);
      }
    };
    return {
      get buyableProducts(): any[] {
        fetchPremium("");
        return Array.from(self.products.values()).filter(
          p => p.isSingleBuyable
        );
      },
      get fiPackages() {
        fetchPremium("");
        return Array.from(self.fiPackages.values());
      },
      get advisoryPackages() {
        fetchPremium("");
        return Array.from(self.advisoryPackages.values());
      },
      get advisoryPackageGroup() {
        fetchProduct("");
        return self.advisoryPackageGroup;
      },
      get fiPackageGroup() {
        fetchProduct("");
        return self.fiPackageGroup;
      },
      product(id: string) {
        if (self.products.get(id)?.loadingStatus === "done") {
          return self.products.get(id);
        } else {
          fetchProduct(id);
          return;
        }
      }
    };
  })
  .named("EduPremiumStore");

export default EduPremiumStore;

export interface IEduPremiumStore extends Instance<typeof EduPremiumStore> {}

export interface IEduPremiumStoreSnapshotIn
  extends SnapshotIn<typeof EduPremiumStore> {}

export interface IEduPremiumStoreSnapshotOut
  extends SnapshotOut<typeof EduPremiumStore> {}
