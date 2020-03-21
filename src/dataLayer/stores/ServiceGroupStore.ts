import ListableStore from "./Listable";
import { Instance } from "mobx-state-tree";
import { getPackageGroups } from "../api/api";
import ServiceGroupType, {
  processServiceGroups
} from "../models/ServiceGroupType";

const ServiceGroupStore = ListableStore(
  getPackageGroups,
  ServiceGroupType,
  processServiceGroups
);

export default ServiceGroupStore;

export interface IServiceGroupStore
  extends Instance<typeof ServiceGroupStore> {}
