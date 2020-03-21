import ListableStore from "./Listable";
import { getArticles } from "../api/api";
import ArticleType, { processArticles } from "../models/ArticleType";

const ListableArticleStore = ListableStore(
  getArticles,
  ArticleType,
  processArticles
).actions(self => ({
  sortByIndex() {
    self.list.replace(self.list.slice().sort((a, b) => a.index - b.index));
  }
}));

export default ListableArticleStore;
