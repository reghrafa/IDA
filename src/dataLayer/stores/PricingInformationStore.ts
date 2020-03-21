import ListableStore from "./Listable";
import { getPricingInformation } from "../api/api";
import PricingInformationType, {
  processPricingInformations
} from "../models/PricingInformationType";

const PricingInformationStore = ListableStore(
  getPricingInformation,
  PricingInformationType,
  processPricingInformations
);

export default PricingInformationStore;
