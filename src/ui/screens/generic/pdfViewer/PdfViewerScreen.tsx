import React from "react";
import FixHeader from "../../../containers/layout/FixHeaderWrapper/FixHeader";
import Pdf from "react-native-pdf";
import { useNavigation } from "react-navigation-hooks";

const PdfViewerScreen: React.FC = () => {
  const { state } = useNavigation();
  const title = (state.params && state.params.title) || "Pdf";
  const url = (state.params && state.params.url) || "";
  const uri = url
    ? url.substr(0, 4) === "http"
      ? url
      : "https://cloud.squidex.io/api/assets/edubao/" + url
    : "";
  return (
    <FixHeader SafeAreaFlex={1} noBookmark noLink title={title} noViewWrapper>
      <Pdf
        source={{ uri, cache: true }}
        style={{ flex: 1 }}
      />
    </FixHeader>
  );
};

export default PdfViewerScreen;
