import { types, flow, IModelType } from "mobx-state-tree";
import { warn } from "../../helpers/debughelper";

const Listable = (
  f: (lang: string) => Promise<any>,
  type: IModelType<any, any>,
  preprocessor: (input: any[]) => any[]
) =>
  types
    .model({
      list: types.optional(types.array(type), []),
      state: types.optional(
        types.enumeration("ListableStates", [
          "pending",
          "done",
          "error",
          "empty"
        ]),
        "empty"
      )
    })
    .actions(self => ({
      setListWithLanguage: flow(function*(lang: string) {
        self.state = "pending";
        let debugStateString = "";
        try {
          const data: any = yield f(lang);
          debugStateString += " yielded ";
          const snapshotList = preprocessor(data);
          debugStateString += " processed ";
          const listInstances = snapshotList.map((x: any) => type.create(x));
          debugStateString += " created ";
          self.list.replace(listInstances);
          self.state = "done";
        } catch (error) {
          warn(
            "Failed to fetch at " + type.name,
            debugStateString,
            error,
            self.list
          );
          self.state = "error";
        }
      })
    }))
    .named("Listable");

export default Listable;
