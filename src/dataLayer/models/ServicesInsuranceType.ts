import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";

export const processServicesInsurance = (
  input: any[]
): IServicesInsuranceTypeSnapshot[] => {
  let r: IServicesInsuranceTypeSnapshot[] = [];
  input.forEach(element => {
    const elem_return: IServicesInsuranceTypeSnapshot = {
      id: "",
      title: "",
      cardImage: "",
      headerImage: "",
      teaserText: "",
      content: "",
      serviceCategory: "",
      termsAndConditionPdfLink: "",
      termsAndConditionPdfTitle: "",
      tags: [],
      benefits: [],
      details: [],
      partnerLogo: []
    };

    elem_return.id = element.id;
    elem_return.title = element.data.Title;
    elem_return.cardImage = element.data.Image && element.data.Image[0];
    elem_return.headerImage =
      element.data.HeaderImage && element.data.HeaderImage[0];
    elem_return.teaserText = element.data.TeaserText;
    elem_return.content = element.data.Content;
    elem_return.serviceCategory = element.data.ServiceCategory;
    if (element.data.TermsAndCondition) {
      elem_return.termsAndConditionPdfLink =
        element.data.TermsAndCondition &&
        element.data.TermsAndCondition[0].PdfLink;
      elem_return.termsAndConditionPdfTitle =
        element.data.TermsAndCondition &&
        element.data.TermsAndCondition[0].PdfTitle;
    }
    elem_return.tags = element.data.Tags;

    if (element.data.Benefits && Array.isArray(element.data.Benefits)) {
      elem_return.benefits = element.data.Benefits.map((e: any) => e.Benefit);
    }
    if (element.data.Details && Array.isArray(element.data.Details)) {
      elem_return.details = element.data.Details.map((e: any) => e.Detail);
    }
    r.push(elem_return);
  });
  return r;
};

const ServicesInsuranceType = types
  .model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    cardImage: types.optional(types.string, ""),
    headerImage: types.optional(types.string, ""),
    teaserText: types.optional(types.string, ""),
    content: types.optional(types.string, ""),
    tags: types.optional(types.array(types.string), []),
    serviceCategory: types.optional(types.string, ""),
    partnerLogo: types.optional(types.array(types.string), []),
    benefits: types.optional(types.array(types.string), []),
    details: types.optional(types.array(types.string), []),
    termsAndConditionPdfLink: types.optional(types.string, ""),
    termsAndConditionPdfTitle: types.optional(types.string, "")
  })
  .named("ServicesInsuranceType");

export default ServicesInsuranceType;

export interface IServicesInsuranceType
  extends Instance<typeof ServicesInsuranceType> {}
export interface IServicesInsuranceTypeSnapshot
  extends SnapshotIn<typeof ServicesInsuranceType> {}
export interface IServicesInsuranceTypeSnapshotOut
  extends SnapshotOut<typeof ServicesInsuranceType> {}
