import React from "react";
import { SvgCss } from "react-native-svg";
import DestinationGermany from "../../../../assets/images/Illustrations/03_Guide.Categories/DestinationGermany";
import DestinationGermanyDetail from "../../../../assets/images/Illustrations/03_Guide.Categories/DestinationGermany_Detail";
import Preparation from "../../../../assets/images/Illustrations/03_Guide.Categories/Preparation";
import PreparationDetail from "../../../../assets/images/Illustrations/03_Guide.Categories/Preparation_Detail";
import UniversityApplication from "../../../../assets/images/Illustrations/03_Guide.Categories/UniversityApplication";
import UniversityApplicationDetail from "../../../../assets/images/Illustrations/03_Guide.Categories/UniversityApplication_Detail";
import VisaApplication from "../../../../assets/images/Illustrations/03_Guide.Categories/VisaApplication";
import VisaApplicationDetail from "../../../../assets/images/Illustrations/03_Guide.Categories/VisaApplication_Detail";
import WaysToGermany from "../../../../assets/images/Illustrations/03_Guide.Categories/WaysToGermany";
import WaysToGermanyDetail from "../../../../assets/images/Illustrations/03_Guide.Categories/WaysToGermany_Detail";

export interface IIconProps {
  name: icontypes;
  width?: number;
  height?: number;
  size?: number;
}

export type icontypes =
  | "destinationgermany"
  | "destinationgermanydetail"
  | "preparation"
  | "preparationdetail"
  | "universityapplication"
  | "universityapplicationdetail"
  | "visaapplication"
  | "visaapplicationdetail"
  | "waystogermany"
  | "waystogermanydetail";

const Icon = (props: IIconProps) => {
  let w = props.size || props.width || 100;
  let h = props.size || props.height || 100;
  let xml = "";
  switch (props.name) {
    case "destinationgermany":
      xml = DestinationGermany;
      break;
    case "destinationgermanydetail":
      xml = DestinationGermanyDetail;
      break;
    case "preparation":
      xml = Preparation;
      break;
    case "preparationdetail":
      xml = PreparationDetail;
      break;
    case "universityapplication":
      xml = UniversityApplication;
      break;
    case "universityapplicationdetail":
      xml = UniversityApplicationDetail;
      break;
    case "visaapplication":
      xml = VisaApplication;
      break;
    case "visaapplicationdetail":
      xml = VisaApplicationDetail;
      break;
    case "waystogermany":
      xml = WaysToGermany;
      break;
    case "waystogermanydetail":
      xml = WaysToGermanyDetail;
      break;
    default:
      break;
  }

  return xml === "" ? null : <SvgCss xml={xml} width={w} height={h} />;
};

export default Icon;
