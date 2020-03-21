import React from "react";
import { View, ImageBackground } from "react-native";
import StickyHeaderList from "../../../components/composite/stickyHeaderList/StickyHeaderList";
import IStickyHeaderAfterScrollingDownProps from "./IStickyHeaderAfterScrollingDownProps";
import SafeAreaWrapper from "../SafeAreaWrapper/SafeAreaWrapper";
import ContentHeader from "../../../components/composite/headers/ContentHeader";
import useTheme from "../../../../themes/useTheme";
import StickyHeader from "../../../components/composite/headers/StickyHeader";

const StickyHeaderAfterScrollingDown: React.FC<IStickyHeaderAfterScrollingDownProps> = ({
  title,
  titleTK,
  category,
  children,
  color,
  SafeAreaFlex,
  SafeAreaBackgroundColor,
  SafeAreaTop,
  SafeAreaBottom,
  iconColor,
  bookmark,
  link,
  imageUri,
  contentBackgroundColor,
  imageBackgroundColor,
  backgroundColor,
  noImageBackgroundColor,
  titleColor,
  stickyHeaderTitleColor,
  optionalStickyHeaderSections,
  no30percentOverlay,
  alternativeHeaderSection
}) => {
  const theme = useTheme();
  const uri = imageUri
    ? imageUri.substr(0, 4) === "http"
      ? imageUri
      : "https://cloud.squidex.io/api/assets/edubao/" + imageUri
    : "";

  const contentHeader = (
    <ContentHeader
      color={titleColor || color}
      noIcons
      iconColor={iconColor}
      contentType={category}
      title={title || ""}
      translationKey={titleTK}
      alternativeHeaderSection={alternativeHeaderSection}
    />
  );

  return (
    <SafeAreaWrapper
      backgroundColor={SafeAreaBackgroundColor}
      flex={SafeAreaFlex}
      top={SafeAreaTop}
      bottom={SafeAreaBottom}
    >
      <StickyHeaderList
        backgroundLayer={
          <View
            style={{
              flex: 1,
              backgroundColor: backgroundColor || theme.colors.light
            }}
          >
            {imageUri ? (
              <React.Fragment>
                <ImageBackground
                  source={{
                    uri
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: theme.grid.gridFactor(14),
                    marginBottom: theme.grid.gridFactor(1)
                  }}
                />
                {!no30percentOverlay && (
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      backgroundColor: theme.colors.primary,
                      opacity: 0.3,
                      width: "100%",
                      height: theme.grid.gridFactor(14),
                      marginBottom: theme.grid.gridFactor(1)
                    }}
                  />
                )}
                <View
                  style={{
                    width: "100%",
                    height: theme.grid.gridFactor(14),
                    paddingBottom: theme.grid.gridFactor(1)
                  }}
                >
                  {contentHeader}
                </View>
              </React.Fragment>
            ) : (
              <View
                style={{
                  width: "100%",
                  height: theme.grid.gridFactor(14),
                  paddingBottom: theme.grid.gridFactor(1),
                  backgroundColor: noImageBackgroundColor
                    ? undefined
                    : theme.colors[imageBackgroundColor || "primary"]
                }}
              >
                {contentHeader}
              </View>
            )}
          </View>
        }
        header={(opacity): JSX.Element => (
          <React.Fragment>
            <View
              style={{
                opacity,
                position: "absolute",
                backgroundColor:
                  theme.colors[SafeAreaBackgroundColor || "primary"],
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                height: theme.grid.gridFactor(3)
              }}
            />
            <StickyHeader
              color={stickyHeaderTitleColor || color}
              iconColor={iconColor}
              title={title}
              translationKey={titleTK}
              opacity={opacity}
              marginHorizontal={theme.grid.gridFactor(2)}
              optionalSections={optionalStickyHeaderSections}
              link={link}
              bookmark={bookmark}
            />
          </React.Fragment>
        )}
      >
        {(onLayout): JSX.Element => (
          <>
            <View
              style={{
                height: theme.grid.gridFactor(3)
              }}
            />
            <View
              style={{
                paddingTop: theme.grid.gridFactor(2),
                paddingBottom: theme.grid.gridFactor(1),
                height: theme.grid.gridFactor(7),
                opacity: 0.5
              }}
              onLayout={onLayout}
            />
            <View
              style={{
                backgroundColor:
                  theme.colors[contentBackgroundColor || "light"],
                borderTopLeftRadius: theme.grid.gridFactor(1),
                borderTopRightRadius: theme.grid.gridFactor(1),
                paddingTop: theme.grid.gridFactor(2),
                minHeight: "100%"
              }}
            >
              {children}
            </View>
          </>
        )}
      </StickyHeaderList>
    </SafeAreaWrapper>
  );
};

export default StickyHeaderAfterScrollingDown;
