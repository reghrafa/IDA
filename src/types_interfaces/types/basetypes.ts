import React from "react";

export interface IVector2 {
  x: number;
  y: number;
}

export type Renderable = React.ComponentType<any> | React.ReactElement | null;

export type ContentType =
  | "Study Guide"
  | "Insurance"
  | "Consultation"
  | "Finance"
  | "Service"
  | "Offers"
  | "Questionaire"
  | "Next up"
  | "Todo";

export const getContentTypeFromString: (
  cT: string
) => ContentType | undefined = cT => {
  if (cT === "Study Guide") return "Study Guide";
  if (cT === "Insurance") return "Insurance";
  if (cT === "Consultation") return "Consultation";
  if (cT === "Finance") return "Finance";
  if (cT === "Service") return "Service";
  if (cT === "Offers") return "Offers";
  if (cT === "Questionaire") return "Questionaire";
  if (cT === "Next up") return "Next up";
  if (cT === "Todo") return "Todo";
};

export interface IContenType {
  name: ContentType;
  translationKey: string;
  color: string;
  image: string;
}
