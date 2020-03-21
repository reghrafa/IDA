import { TextContentType } from "../../ui/components/atomic/input/EduTextInput";

export interface IForms {
  [key: string]: IForm;
}

export const FORM_PERSONALDATA = "PersonalData";

export interface IForm {
  title?: string;
  chunks: IFormChunk[];
}

export interface IFormChunk {
  title?: string;
  description?: string;
  fields: IFormField[];
  noBackButton?: boolean;
}

export type IFormField =
  | {
      label: string;
      type: "Text";
      placeholder?: string;
      textContentType?: TextContentType;
      value?: string;
    }
  | {
      label: string;
      type: "Dropdown";
      placeholder?: string;
      options: string[];
      icons?: any[]; //Not yet implemented
      value?: string;
    }
  | {
      label: string;
      type: "SwitchSlider";
      defaultIndex?: number;
      options: string[];
      value?: string;
    }
  | {
      label: string;
      type: "DatePicker";
      value?: string;
    };

const forms: IForms = {};

forms[FORM_PERSONALDATA] = {
  title: "Personal Data",
  chunks: [
    {
      title: "Personal Data",
      description: "Let’s get to know each other!",
      fields: [
        { label: "First Name", type: "Text", placeholder: "Maxi" },
        { label: "Last Name", type: "Text", placeholder: "Mustermensch" },
        {
          label: "Nationality",
          type: "Dropdown",
          placeholder: "Nationality",
          options: ["German", "Vietnamese", "English", "Chinese"]
        },
        {
          label: "Gender",
          type: "SwitchSlider",
          options: ["Male", "Female", "Other"],
          defaultIndex: 1
        }
      ]
    },
    {
      description: "How can we get in contact with you?",
      fields: [
        { label: "Email", type: "Text", placeholder: "max@mustermensch.com" },
        {
          label: "Country code",
          type: "Dropdown",
          options: ["0001", "0002", "0003"]
        },
        {
          label: "Phone number",
          type: "Text",
          placeholder: "(0001) 01234 567891011",
          textContentType: "telephoneNumber"
        }
      ]
    },
    {
      description: "Please tell us a little bit about your past.",
      fields: [
        { label: "Birthday", type: "DatePicker" },
        {
          label: "Country of birth",
          type: "Dropdown",
          options: ["German", "Vietnamese", "English", "Chinese"]
        },
        { label: "Place of birth (City)", type: "Text", placeholder: "Berlin" },
        {
          label: "Do you have children?",
          type: "SwitchSlider",
          options: ["Yes", "No"],
          defaultIndex: 1
        }
      ]
    },
    {
      description: "Where do you live now?",
      fields: [
        { label: "Street & Number", type: "Text" },
        { label: "Zip code", type: "Text" },
        { label: "City", type: "Text" },
        {
          label: "Country",
          type: "Dropdown",
          options: ["German", "Vietnamese", "English", "Chinese"]
        }
      ]
    }
  ]
};

export default forms;
