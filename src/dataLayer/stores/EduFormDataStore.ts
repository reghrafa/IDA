import {
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
  flow
} from "mobx-state-tree";
import { IForm } from "../static/formStructure";
import { isValidJSON } from "../../helpers/basehelpers";
import { warn } from "../../helpers/debughelper";
import { getFormWithBookingId } from "../api/api";

const EduFormDataStore = types
  .model({
    dataJSON: types.optional(types.string, ""),
    state: types.optional(
      types.enumeration(["pending", "done", "error", "empty"]),
      "empty"
    )
  })
  .views(self => ({
    get formdata(): IForm | undefined {
      if (isValidJSON(self.dataJSON)) return JSON.parse(self.dataJSON);
    }
  }))
  .actions(self => ({
    getFormJSONFromBackend: flow(function*(bookingId: string) {
      self.state = "pending";
      try {
        const data = yield getFormWithBookingId(bookingId);
        if (isValidJSON(data)) {
          self.dataJSON = data;
          self.state = "done";
        } else {
          self.state = "empty";
        }
      } catch (error) {
        warn("Failed to get Form JSON");
        self.state = "error";
      }
    }),
    updateValue: (chunkIndex: number, fieldIndex: number, value: string) => {
      const form: IForm = JSON.parse(self.dataJSON);
      form.chunks[chunkIndex].fields[fieldIndex].value = value;
      self.dataJSON = JSON.stringify(form);
    }
  }))
  .named("EduFormDataStore");

export default EduFormDataStore;

export interface IEduFormDataStore extends Instance<typeof EduFormDataStore> {}
export interface IEduFormDataStoreSnapshot
  extends SnapshotIn<typeof EduFormDataStore> {}
export interface IEduFormDataStoreSnapshotOut
  extends SnapshotOut<typeof EduFormDataStore> {}
