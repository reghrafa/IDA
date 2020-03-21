import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import Carousel from "react-native-sideswipe";
import useTheme from "../../../../../themes/useTheme";
import { SvgCss } from "react-native-svg";
import EduImage from "../../../atomic/image/EduImage";
import EduText from "../../../atomic/text/EduText";
import { IEduCarouselProps } from "./IEduCarouselProps";

const EduCarousel: React.FC<IEduCarouselProps> = ({
  distanceBetweenItems,
  itemWidth,
  height,
  backgroundColor,
  marginHorizontal,
  marginBottom,
  currentIndex,
  data,
  onIndexChange,
  dotJustify,
  noTouch
}) => {
  const theme = useTheme();
  const { width } = Dimensions.get("window");
  const [index, setIndex] = useState(0);
  const [swipable, setSwipable] = useState(true);
  const iW: number =
    itemWidth || width - marginHorizontal! * 2 + distanceBetweenItems!;
  const h = height ? { height: height } : {};
  const c = backgroundColor ? { backgroundColor: backgroundColor } : {};
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        index={currentIndex ? currentIndex : index}
        contentOffset={(width - iW! - distanceBetweenItems!) / 2}
        itemWidth={iW}
        shouldCapture={() => swipable}
        style={{
          width,
          flex: 1,
          justifyContent: "flex-end",
          ...h
        }}
        data={data}
        useVelocityForIndex={true}
        onIndexChange={
          onIndexChange ? onIndexChange : (i: number) => setIndex(i)
        }
        renderItem={({ itemIndex, currentIndex, item, animatedValue }) => {
          let img = null;
          if (item.imageId) {
            const uri =
              item.imageId.substr(0, 4) === "http"
                ? item.imageId
                : "https://cloud.squidex.io/api/assets/edubao/" + item.imageId;
            img = (
              <EduImage
                noCenteredText
                noMargin
                height={h.height}
                style={{ width: "100%", height: h.height }}
                source={{ uri }}
                subText={item.subText}
                onLBClose={() => setSwipable(true)}
                onLBOpen={() => setSwipable(false)}
              />
            );
          } else if (item.imageSvg) {
            img = <SvgCss xml={item.imageSvg} style={{ flex: 1 }} />;
          }
          if (item.text || item.textTK || item.title || item.titleTK) {
            return (
              <View
                style={{
                  width: iW! - distanceBetweenItems!,
                  marginHorizontal: distanceBetweenItems! / 2,
                  flex: 1,
                  flexDirection: "column",
                  ...h,
                  ...c
                }}
              >
                <View style={{ flex: 1 }} />
                {img}
                {(item.title || item.titleTK) && (
                  <EduText
                    translationKey={item.titleTK}
                    color="primary"
                    style={{
                      height: 24,
                      textAlign: "center",
                      marginBottom: 16
                    }}
                  >
                    {item.title}
                  </EduText>
                )}
                {(item.text || item.textTK) && (
                  <EduText
                    translationKey={item.textTK}
                    color="primary"
                    size="smaller14"
                    style={{
                      height: 80,
                      textAlign: "center",
                      paddingHorizontal: 32
                    }}
                  >
                    {item.text}
                  </EduText>
                )}
              </View>
            );
          } else {
            return (
              <View
                style={{
                  width: iW! - distanceBetweenItems!,
                  marginHorizontal: distanceBetweenItems! / 2,
                  flex: 1,
                  flexDirection: "column",
                  ...h,
                  ...c
                }}
              >
                {img}
              </View>
            );
          }
        }}
      />
      <View
        style={{
          justifyContent: dotJustify || "center",
          flexDirection: "row",
          marginBottom: (marginBottom || 60) + 4,
          marginHorizontal: (marginHorizontal || 0) + 4,
          marginTop: 4
        }}
      >
        {data.map((e, i) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              backgroundColor:
                (currentIndex ? currentIndex : index) === i
                  ? undefined
                  : theme.colors.primary,
              borderColor: theme.colors.primary,
              borderWidth: 1,
              borderRadius: 4,
              marginHorizontal: 4
            }}
          />
        ))}
      </View>
      {noTouch ? (
        <View
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />
      ) : null}
    </View>
  );
};

EduCarousel.defaultProps = {
  distanceBetweenItems: 0,
  marginHorizontal: 0
};

export default EduCarousel;
