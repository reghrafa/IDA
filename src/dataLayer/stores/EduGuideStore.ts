import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduArticleModel, {
  IEduArticleModel,
  IEduArticleModelSnapshotIn
} from "../models/EduArticleModel";
import EduCategoryModel, {
  IEduCategoryModel
} from "../models/EduCategoryModel";
import {
  getArticle,
  getFeed,
  getSubCategories,
  getCategories
} from "../api/EduApi";
import EduSubCategoryModel, {
  IEduSubCategoryModel
} from "../models/EduSubCategoryModel";
import { flattenArray } from "../../helpers/basehelpers";

/**
 * Edu Guide Store
 *
 * feed() returns feed
 * feedForceNew returns allways a new fetched feed
 *
 * getCategories returns the categories
 *
 * getArticle returns a full article
 * getArticlePreview returns at least a article preview
 *
 * searchText returns the current filter text
 */

const EduGuideStore = types
  .model({
    feed: types.array(
      types.safeReference(EduArticleModel, {
        get(identifier, parent: any) {
          return parent.articles.get(identifier);
        },
        set(value) {
          return value.id;
        }
      })
    ),
    feedSearchText: types.maybe(types.string),
    categories: types.array(EduCategoryModel),
    subcategories: types.array(EduSubCategoryModel),
    articles: types.map(EduArticleModel)
  })
  .actions(self => ({
    // LIFECYCLE HOOKS
    afterCreate() {
      // if we want to preload stuff we do it here
    },
    // SETTER
    setFeed(input: IEduArticleModel[]) {
      self.feed.replace(input);
    },
    setCategories(categories: IEduCategoryModel[]) {
      self.categories.replace(categories);
    },
    setSubCategories(subcategories: IEduSubCategoryModel[]) {
      self.subcategories.replace(subcategories);
    },
    addToArticles(article: IEduArticleModel) {
      const a = self.articles.get(article.id);
      if (!a || a.preview) self.articles.put(article);
    },
    setSearchText(text?: string) {
      self.feedSearchText = text;
    }
  }))
  .views(self => {
    // collection of ids to keep track of promises
    const loading = new Set();
    /**
     * An async function for every type of data required from an api.
     * The function should:
     * 1. check if what it needs to fetch is allready here or in loading set
     * 2. add a key to the loading set
     * 3. fetch data from api
     * 4. if data arrives delete key from loading set
     * 5. create mst-model-instance if needed
     * 6. call setter for the data
     */

    const fetchFeed = async (forceNew?: boolean, searchText?: string) => {
      // we get an array of articles and put id into the feed and the articles into the articles Map
      if (!forceNew && (self.feed.length > 0 || loading.has("feed"))) return;
      loading.add("feed");
      try {
        const data = await getFeed(searchText);
        loading.delete("feed");
        const created = data.map(d => EduArticleModel.create(d));
        self.setFeed(created);
        created.map(d => self.addToArticles(d));
      } catch (error) {
        loading.delete("feed");
        console.log(error);
      }
    };

    const fetchCategories = async (customerSegment: string) => {
      if (self.categories.length > 0) return;
      loading.add("categories");
      try {
        const categories = await getCategories(customerSegment);
        const subcategories = flattenArray(
          await Promise.all(
            categories.map(c => getSubCategories(c.id, customerSegment))
          )
        );

        loading.delete("categories");
        self.setSubCategories(
          subcategories.map(sc => EduSubCategoryModel.create(sc))
        );
        self.setCategories(categories.map(c => EduCategoryModel.create(c)));
      } catch (error) {
        loading.delete("categories");
      }
    };

    const fetchArticle = async (id: string, preview?: boolean) => {
      const a = self.articles.get(id);
      if ((a && a.preview === (preview || false)) || loading.has(id)) return;
      loading.add(id);
      try {
        const data = await getArticle(id);
        loading.delete(id);
        // could do error handling here
        if (!data) return;
        self.addToArticles(EduArticleModel.create(data));
      } catch (error) {
        loading.delete(id);
        console.log(error);
      }
    };

    return {
      // GETTER
      get feed() {
        fetchFeed(false);
        return self.feed;
      },
      get feedForceNew() {
        fetchFeed(true);
        return self.feed;
      },
      getCategories(customerSegment: string) {
        fetchCategories(customerSegment);
        return self.categories;
      },
      getArticle(id: string) {
        fetchArticle(id);
        return self.articles.get(id);
      },
      getArticlePreview(id: string) {
        fetchArticle(id, true);
        return self.articles.get(id);
      },
      get searchText() {
        fetchFeed(true, self.feedSearchText);
        return self.feedSearchText;
      }
    };
  })
  .named("EduGuideStore");

export default EduGuideStore;

export interface IEduGuideStore extends Instance<typeof EduGuideStore> {}
export interface IEduGuideStoreSnapshotIn
  extends SnapshotIn<typeof EduGuideStore> {}
export interface IEduGuideStoreSnapshotOut
  extends SnapshotOut<typeof EduGuideStore> {}
