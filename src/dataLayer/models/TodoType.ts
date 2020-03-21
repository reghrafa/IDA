import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import ArticleType from "./ArticleType";

export const processTodos = (input: any[]): ITodoType[] =>
  input.map(
    (x: any): ITodoType => ({
      id: x.id,
      title: x.data.Title,
      cardText: x.data.CardText,
      teaserText: x.data.TeaserText,
      content: x.data.Content,
      tags: x.data.Tags,
      index: x.data.Index,
      linksToOtherArticles: x.data.LinksToOtherArticles,
      category: Array.isArray(x.data.Category)
        ? x.data.Category[0]
        : x.data.Category
    })
  );

const TodoType = types
  .model({
    id: types.string,
    title: types.optional(types.string, ""),
    cardText: types.optional(types.string, ""),
    teaserText: types.optional(types.string, ""),
    content: types.optional(types.string, ""),
    tags: types.optional(types.array(types.string), []),
    index: types.optional(types.number, 999999999),
    category: types.optional(types.string, ""),
    linksToOtherArticles: types.optional(
      types.array(types.safeReference(ArticleType)),
      []
    )
  })
  .named("TodoType");

export default TodoType;

export interface ITodoType extends Instance<typeof TodoType> {}
export interface ITodoTypeSnapshot extends SnapshotIn<typeof TodoType> {}
export interface ITodoTypeSnapshotOut extends SnapshotOut<typeof TodoType> {}
