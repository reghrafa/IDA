import ListableStore from "./Listable";
import { getPackages } from "../api/api";
import ServicePackageType, {
  processServicePackages
} from "../models/ServicePackageType";

const ServicePackageStore = ListableStore(
  getPackages,
  ServicePackageType,
  processServicePackages
);

export default ServicePackageStore;
