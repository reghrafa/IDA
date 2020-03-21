import {
  types,
  flow,
  Instance,
  SnapshotIn,
  SnapshotOut
} from "mobx-state-tree";
import UserStore from "./User";
import SettingsStore from "./SettingsStore";
import UiStore from "./UiStore";

import TodoStore from "./TodoStore";
import ServicesInsuranceStore from "./ServicesInsuranceStore";
import ServicePackageStore from "./ServicePackageStore";
import PricingInformationStore from "./PricingInformationStore";
import ServiceGroupStore from "./ServiceGroupStore";
import ListableCategoryStore from "./CategoryStore";
import ListableSubCategoryStore from "./SubCategoryStore";
import ListableArticleStore from "./ArticleStore";
import BookmarksStore from "./BookmarksStore";
import FormDataStore from "./EduFormDataStore";

const RootStore = types
  .model({
    formdata: types.optional(FormDataStore, () => FormDataStore.create()),
    ui: types.optional(UiStore, () => UiStore.create()),
    settings: types.optional(SettingsStore, () => SettingsStore.create()),
    user: types.optional(UserStore, () => UserStore.create()),
    servicesInsurance: types.optional(ServicesInsuranceStore, () =>
      ServicesInsuranceStore.create()
    ),
    pricingInformation: types.optional(PricingInformationStore, () =>
      PricingInformationStore.create()
    ),
    servicePackage: types.optional(ServicePackageStore, () =>
      ServicePackageStore.create()
    ),
    serviceGroup: types.optional(ServiceGroupStore, () =>
      ServiceGroupStore.create()
    ),
    categories: types.optional(ListableCategoryStore, () =>
      ListableCategoryStore.create()
    ),
    subCategories: types.optional(ListableSubCategoryStore, () =>
      ListableSubCategoryStore.create()
    ),
    articles: types.optional(ListableArticleStore, () =>
      ListableArticleStore.create()
    ),
    todoStore: types.optional(TodoStore, {}),
    bookmarkStore: types.optional(BookmarksStore, () => BookmarksStore.create())
  })
  .actions(self => ({
    getInitialData: flow(function*(lang: string) {
      yield self.servicesInsurance.setListWithLanguage(lang);
      yield self.pricingInformation.setListWithLanguage(lang);
      yield self.servicePackage.setListWithLanguage(lang);
      yield self.serviceGroup.setListWithLanguage(lang);
      yield self.categories.setListWithLanguage(lang);
      yield self.subCategories.setListWithLanguage(lang);
      yield self.articles.setListWithLanguage(lang);
      yield self.todoStore.initWithLanguage(lang);
      self.categories.sortByIndex();
      self.subCategories.sortByIndex();
      self.articles.sortByIndex();
    })
  }))
  .named("RootStore");

export default RootStore;

export interface IRootStore extends Instance<typeof RootStore> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {}
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {}
