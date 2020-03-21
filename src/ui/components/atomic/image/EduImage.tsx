import React, { useState } from "react";
import Lightbox from "react-native-lightbox";
import { View, Dimensions } from "react-native";
import EduText from "../text/EduText";
import useTheme from "../../../../themes/useTheme";
import { IEduImageProps } from "./IEduImageProps";
import FastImage, { OnLoadEvent } from "react-native-fast-image";
import { TouchableOpacity } from "react-native";
import X from "../../../../assets/images/X";

/**
 * URI is ether an url or an squidex id/slug
 */
const EduImage: React.FC<IEduImageProps> = ({
  subText,
  noLightbox,
  height,
  style,
  source,
  noMargin,
  noCenteredText,
  onLBOpen,
  onLBClose,
  resizeMode,
  withMargin
}) => {
  const theme = useTheme();
  const [lbOpen, setLbOpen] = useState(false);
  const [imgDim, setImgDim] = useState({ w: 0, h: 0, aspR: 1 });
  const margin = withMargin ? theme.grid.gridFactor(2) : 0;
  const fixedWidth = Dimensions.get("window").width - margin * 2;
  const uri = source.uri
    ? source.uri.substr(0, 4) === "http"
      ? source.uri
      : "https://cloud.squidex.io/api/assets/edubao/" + source.uri
    : "";
  const processedSource = { ...source, uri };

  const onLoad: (event: OnLoadEvent) => void = event => {
    const imgD = { w: 0, h: 0, aspR: 0 };
    const dim = Dimensions.get("screen");
    imgD.aspR = event.nativeEvent.width / event.nativeEvent.height;
    if (dim.width / imgD.aspR > dim.height) {
      imgD.w = dim.height * imgD.aspR;
      imgD.h = dim.height;
    } else {
      imgD.w = dim.width;
      imgD.h = dim.width / imgD.aspR;
    }
    setImgDim(imgD);
  };

  const onOpen = () => {
    onLBOpen && onLBOpen();
    setLbOpen(true);
  };

  const onClose = () => {
    onLBClose && onLBClose();
    setLbOpen(false);
  };

  const textAlgin = noCenteredText ? "flex-start" : "center";

  return (
    <View
      style={{
        flexDirection: "column",
        height: height,
        width: fixedWidth,
        backgroundColor: "transparent",
        marginLeft: noMargin ? 0 : theme.grid.gridFactor(2),
        marginRight: noMargin ? 0 : theme.grid.gridFactor(2),
        ...(style || {})
      }}
    >
      {noLightbox ? (
        <FastImage
          source={processedSource}
          resizeMode={resizeMode}
          style={{
            height:
              height ||
              (subText
                ? fixedWidth / imgDim.aspR - theme.grid.gridFactor(1)
                : fixedWidth / imgDim.aspR),
            width: fixedWidth
          }}
          onLoad={onLoad}
        />
      ) : (
        <Lightbox
          backgroundColor={theme.colors.light}
          underlayColor={theme.colors.light}
          renderHeader={close => (
            <TouchableOpacity
              onPress={close}
              style={{
                padding: 16
              }}
            >
              <View style={{ width: 16, height: 16 }}>
                <X color={theme.colors.dark} width={16} height={16} />
              </View>
            </TouchableOpacity>
          )}
          onClose={onClose}
          onOpen={onOpen}
        >
          <FastImage
            style={{
              height: lbOpen
                ? imgDim.h
                : height
                ? height - theme.grid.gridFactor(1)
                : subText
                ? fixedWidth / imgDim.aspR - theme.grid.gridFactor(1)
                : fixedWidth / imgDim.aspR,
              width: lbOpen ? imgDim.w : fixedWidth
            }}
            source={processedSource}
            resizeMode={resizeMode}
            onLoad={onLoad}
          />
        </Lightbox>
      )}
      {subText && subText !== "" ? (
        <EduText
          style={{
            height: theme.grid.gridFactor(1),
            alignSelf: textAlgin
          }}
          size="smallest12"
          color="bluefont"
        >
          {subText}
        </EduText>
      ) : null}
    </View>
  );
};

EduImage.defaultProps = {
  resizeMode: "cover",
  withMargin: true
};

export default EduImage;
