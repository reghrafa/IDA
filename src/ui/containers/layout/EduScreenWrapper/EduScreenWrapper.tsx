import React from "react";
import SafeAreaWrapper from "../SafeAreaWrapper/SafeAreaWrapper";
import { IEduScreenWrapperProps } from "./IEduScreenWrapperProps";

const EduScreenWrapper: React.FC<IEduScreenWrapperProps> = ({
  safeAreaBackgroundColor,
  safeArea,
  children
}) => {
  return (
    <SafeAreaWrapper
      backgroundColor={safeAreaBackgroundColor}
      flex={1}
      top={safeArea === "both" || safeArea === "top" ? "always" : "never"}
      bottom={safeArea === "both" || safeArea === "bottom" ? "always" : "never"}
    >
      {children}
    </SafeAreaWrapper>
  );
};

export default EduScreenWrapper;
