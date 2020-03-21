import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

/**
 * This is a Store template that can be coppied for a new store.
 */

const TemplateStore = types
  .model({})
  .actions(self => ({
    // LIFECYCLE HOOKS
    afterCreate() {
      // if we want to preload stuff we do it here
    }
    // SETTER
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
     * 5. call setter for the data
     */

    return {
      // GETTER
    };
  })
  .named("");

export default TemplateStore;

export interface ITemplateStore extends Instance<typeof TemplateStore> {}
export interface ITemplateStoreSnapshotIn
  extends SnapshotIn<typeof TemplateStore> {}
export interface ITemplateStoreSnapshotOut
  extends SnapshotOut<typeof TemplateStore> {}
