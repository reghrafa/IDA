import ListableStore from "./Listable";
import { getSubCategories } from "../api/api";
import SubCategoryType, {
  processSubCategories
} from "../models/SubCategoryType";

const ListableSubCategoryStore = ListableStore(
  getSubCategories,
  SubCategoryType,
  processSubCategories
).actions(self => ({
  sortByIndex() {
    self.list.replace(self.list.slice().sort((a, b) => a.index - b.index));
  }
}));

export default ListableSubCategoryStore;
