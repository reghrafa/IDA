import { Colorstrings } from "../../../../themes/EdubaoTheme";
import IFixHeaderProps from "../FixHeaderWrapper/IFixHeaderProps";
import { IEduStickyHeaderProps } from "./EduStickyHeader";

export interface IEduScreenWrapperProps {
  safeAreaBackgroundColor?: Colorstrings;
  safeArea?: "top" | "bottom" | "both";
  header?:
    | {
        type: "fixed";
        props: IFixHeaderProps;
      }
    | {
        type: "sticky";
        props: IEduStickyHeaderProps;
      };
}
