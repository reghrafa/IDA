import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import EduCustomerSegmentModel, {
  IEduCustomerSegmentModel,
  IEduCustomerSegmentModelSnapshotIn
} from "../models/EduCustomerSegmentModel";
import { getCustomerSegments } from "../api/EduApi";

const EduSettingsStore = types
  .model({
    language: types.optional(types.string, "en"),
    country: types.maybe(types.string),
    activeCustomerSegment: types.maybe(EduCustomerSegmentModel),
    customerSegments: types.array(EduCustomerSegmentModel)
  })
  .actions(self => ({
    setLanguage(lang: string) {
      self.language = lang;
    },
    setCountry(country: string) {
      self.country = country;
    },
    setCustomerSegmentById(id: string) {
      const newCS = self.customerSegments.find(cs => cs.id === id);
      if (newCS) self.activeCustomerSegment = newCS;
    },
    setCustomerSegments(customerSegments: IEduCustomerSegmentModel[]) {
      self.customerSegments.replace(customerSegments);
      // we dont want the user to have a segment missing from the list, so if the current segment is not anymore present in the segmentlist we remove it.
      if (self.activeCustomerSegment) {
        if (
          !customerSegments
            .map(e => e.id)
            .includes(self.activeCustomerSegment.id)
        ) {
          self.activeCustomerSegment = undefined;
        }
      }
    }
  }))
  .views(self => {
    const loading = new Set();
    const fetchCustomerSegments = async () => {
      if (loading.has("customerSegments") || self.customerSegments.length > 0)
        return;
      loading.add("customerSegments");
      try {
        const cs: IEduCustomerSegmentModelSnapshotIn[] = await getCustomerSegments();
        loading.delete("customerSegments");
        if (cs) {
          self.setCustomerSegments(
            cs.map(c => EduCustomerSegmentModel.create(c))
          );
        }
      } catch (error) {
        loading.delete("customerSegments");
      }
    };
    return {
      get language() {
        return self.language;
      },
      get country() {
        return self.country;
      },
      get customerSegment() {
        fetchCustomerSegments();
        return self.activeCustomerSegment;
      }
    };
  })
  .named("EduSettingsStore");

export default EduSettingsStore;

export interface IEduSettingsStore extends Instance<typeof EduSettingsStore> {}
export interface IEduSettingsStoreSnapshotIn
  extends SnapshotIn<typeof EduSettingsStore> {}
export interface IEduSettingsStoreSnapshotOut
  extends SnapshotOut<typeof EduSettingsStore> {}
