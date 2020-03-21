import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

const EduArticleModel = types
  .model({
    id: types.identifier,
    title: types.string,
    heroImage: types.string,
    cardText: types.string,
    teaserText: types.optional(types.string, ""),
    content: types.optional(types.string, ""),
    tags: types.array(types.string), // array is allways optional
    readmore: types.array(types.string), // we cant use references because ring references (we could reference ourselfes)
    preview: types.optional(types.boolean, true)
  })
  .named("EduArticleModel");

export default EduArticleModel;

export interface IEduArticleModel extends Instance<typeof EduArticleModel> {}
export interface IEduArticleModelSnapshotIn
  extends SnapshotIn<typeof EduArticleModel> {}
export interface IEduArticleModelSnapshotOut
  extends SnapshotOut<typeof EduArticleModel> {}
