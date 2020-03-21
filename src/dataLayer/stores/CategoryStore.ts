import ListableStore from "./Listable";
import { getCategories } from "../api/api";
import CategoryType, { processCategories } from "../models/CategoryType";

const ListableCategoryStore = ListableStore(
  getCategories,
  CategoryType,
  processCategories
).actions(self => ({
  sortByIndex() {
    self.list.replace(self.list.slice().sort((a, b) => a.index - b.index));
  }
}));

export default ListableCategoryStore;
