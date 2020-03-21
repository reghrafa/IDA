import React from "react";
import { View } from "react-native";
import EduText from "../../atomic/text/EduText";
import CardContentTypeLabel from "../card/CardContentTypeLabel";
import { useNavigation } from "react-navigation-hooks";
import useTheme from "../../../../themes/useTheme";
import { TouchableOpacity } from "react-native";
import Bookmark from "../../../../assets/images/Bookmark";
import Link from "../../../../assets/images/Link";
import BackArrow from "../../../../assets/images/BackArrow";
import { IContentHeaderProps } from "./IContentHeaderProps";

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  contentType,
  translationKey,
  iconColor,
  color,
  noBookmark,
  noLink,
  noIcons,
  alternativeHeaderSection
}) => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const height = noIcons
    ? theme.grid.gridFactor(10.25)
    : theme.grid.gridFactor(12.25);
  return (
    <View
      style={{
        flex: 1,
        height: height,
        marginHorizontal: theme.grid.gridFactor(2)
      }}
    >
      {/* Back and Bookmark Buttons */}
      {noIcons ? null : (
        <View
          style={{
            flexDirection: "row",
            marginVertical: theme.grid.gridFactor(1)
          }}
        >
          <TouchableOpacity onPress={() => goBack()}>
            <BackArrow
              color={iconColor}
              width={theme.grid.gridFactor(1)}
              height={theme.grid.gridFactor(1)}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          {noLink ? null : (
            <TouchableOpacity style={{ marginRight: theme.grid.gridFactor(1) }}>
              <Link
                color={iconColor}
                width={theme.grid.gridFactor(1)}
                height={theme.grid.gridFactor(1)}
              />
            </TouchableOpacity>
          )}
          {noBookmark ? null : (
            <TouchableOpacity>
              <Bookmark
                color={iconColor}
                width={theme.grid.gridFactor(1)}
                height={theme.grid.gridFactor(1)}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
      <View style={{ flex: 1 }} />
      {/* Category Display */}
      {alternativeHeaderSection ? (
        alternativeHeaderSection(title, translationKey)
      ) : (
        <View>
          {contentType ? (
            <CardContentTypeLabel contentType={contentType} />
          ) : null}
          {/* Title */}
          <EduText
            style={{
              marginVertical: theme.grid.gridFactor(1)
            }}
            size="large21"
            fontWeight="bold"
            color={color}
            translationKey={translationKey}
          >
            {title}
          </EduText>
        </View>
      )}
    </View>
  );
};

ContentHeader.defaultProps = {
  iconColor: "lightest",
  color: "lightest"
};

export default ContentHeader;
