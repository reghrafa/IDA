import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import SubCategoryType from "./SubCategoryType";

export const processArticles = (input: any[]): IArticleType[] =>
  input.map(
    (x: any): IArticleType => ({
      id: x.id,
      index: x.data.Index,
      title: x.data.Title,
      content: x.data.Content,
      heroImage: x.data.HeroImage[0],
      subCategory: x.data.SubCategory,
      tags: x.data.Tags,
      teaserText: x.data.TeaserText
    })
  );

const ArticleType = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    index: types.optional(types.number, 99999999),
    heroImage: types.optional(types.string, ""),
    teaserText: types.optional(types.string, ""),
    content: types.optional(types.string, ""),
    tags: types.optional(types.array(types.string), []),
    subCategory: types.optional(
      types.array(types.reference(SubCategoryType)),
      []
    )
  })
  .named("ArticleType");

export default ArticleType;

export interface IArticleType extends Instance<typeof ArticleType> { }
export interface IArticleTypeSnapshot extends SnapshotIn<typeof ArticleType> { }
export interface IArticleTypeSnapshotOut
  extends SnapshotOut<typeof ArticleType> { }
