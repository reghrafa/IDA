import axios from "axios";
import {
  API_ROOT_URL,
  DEBUG_TOKEN,
  CLIENT_ID,
  CLIENT_SECRET
} from "./apiconfig";
import { warn } from "../../helpers/debughelper";

export const getToken = async () => {
  const { data, status } = await axios.post(
    "https://cloud.squidex.io/identity-server/connect/token",
    {
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: "squidex-api"
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  );
  if (status !== 200) return;
  return data;
};

const post = async (path: string) => {};

const get = async (path: string, headers?: any) => {
  // warn('get', 'headers: ', headers, API_ROOT_URL + path);
  const { data, status } = await axios.get(
    API_ROOT_URL + path + "?timestamp=" + Math.floor(Date.now()),
    {
      headers: { Authorization: `Bearer ${DEBUG_TOKEN}`, ...(headers || {}) }
    }
  );
  if (status !== 200) return;
  // warn('resp', status, data);
  return data.items;
};

export const getTodoCategories = async (lang: string) =>
  await get("/content/edubao/studyguide-todo-category/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });
export const getTodos = async (lang: string) =>
  await get("/content/edubao/studyguide-todos-todo/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });

export const getArticles = async (lang: string) =>
  await get("/content/edubao/studyguide-articles-article/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });

export const getCategories = async (lang: string) =>
  await get("/content/edubao/studyguide-articles-category/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });

export const getSubCategories = async (lang: string) =>
  await get("/content/edubao/studyguide-articles-subcategory/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });

export const getPackageServices = async (lang: string) =>
  await get("/content/edubao/service-details/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });

export const getPackages = async (lang: string) =>
  await get("/content/edubao/package/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });

export const getPackageGroups = async (lang: string) =>
  await get("/content/edubao/package-group/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });

export const getPricingInformation = async (lang: string) =>
  await get("/content/edubao/pricing-information/", {
    "X-Languages": lang,
    "X-Flatten": "true"
  });

/**
 *
 */

export const getFormWithBookingId = async (orderId: string) =>
  await JSON.stringify({
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
          {
            label: "Place of birth (City)",
            type: "Text",
            placeholder: "Berlin"
          },
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
  });
