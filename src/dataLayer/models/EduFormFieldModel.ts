import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

const EduFormFieldModel = types
  .model({
    label: types.string,
    type: types.enumeration(["Text", "Dropdown", "SwitchSlider", "DatePicker"]),
    placeholder: types.string,
    textContentType: types.string,
    options: types.array(types.string),
    icons: types.array(types.string),
    value: types.string
  })
  .actions(self => ({}))
  .named("EduFormFieldModel");

export default EduFormFieldModel;

export interface IEduFormFieldModel
  extends Instance<typeof EduFormFieldModel> {}
export interface IEduFormFieldModelSnapshotIn
  extends SnapshotIn<typeof EduFormFieldModel> {}
export interface IEduFormFieldModelSnapshotOut
  extends SnapshotOut<typeof EduFormFieldModel> {}
