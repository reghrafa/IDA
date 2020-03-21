import ListableStore from "./Listable";
import { getPackageServices } from "../api/api";
import ServicesInsuranceType, {
  processServicesInsurance
} from "../models/ServicesInsuranceType";

const ServicesInsuranceStore = ListableStore(
  getPackageServices,
  ServicesInsuranceType,
  processServicesInsurance
);

export default ServicesInsuranceStore;
