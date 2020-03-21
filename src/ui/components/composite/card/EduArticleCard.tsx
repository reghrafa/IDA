import React from "react";
import useTheme from "../../../../themes/useTheme";
import FastImage from "react-native-fast-image";
import { ContentType } from "../../../../types_interfaces/types/basetypes";
import EduCard from "./EduCard";
import { IArticleType } from "../../../../dataLayer/models/ArticleType";

export interface IEduArticleCardProps {
  article: IArticleType;
  shadow?: number;
}

const EduArticleCard = (props: IEduArticleCardProps) => {
  const theme = useTheme();
  const contentType: ContentType = "Study Guide";
  const upper =
    (props.article && props.article.heroImage && (
      <FastImage
        source={{
          uri:
            "https://cloud.squidex.io/api/assets/edubao/" +
            props.article.heroImage,
          priority: "high"
        }}
        resizeMode="cover"
        style={{
          borderTopRightRadius: theme.grid.gridFactor(1),
          borderTopLeftRadius: theme.grid.gridFactor(1),
          padding: theme.grid.gridFactor(1),
          height: theme.grid.gridFactor(10)
        }}
      />
    )) ||
    null;
  return (
    <EduCard
      upperCard={upper}
      contentType={contentType}
      text={props.article.teaserText}
      title={props.article.title}
      shadow={props.shadow}
    />
  );
};

export default EduArticleCard;
