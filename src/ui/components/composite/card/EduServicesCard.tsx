import React from "react";
import useTheme from "../../../../themes/useTheme";
import FastImage from "react-native-fast-image";
import { ContentType } from "../../../../types_interfaces/types/basetypes";
import EduCardSmall from "./EduCardSmall";

export interface IEduServicesCardProps {
  article: any;
}

const EduServicesCard = (props: IEduServicesCardProps) => {
  const theme = useTheme();
  const contentType: ContentType = "Insurance";
  const sideCard =
    (props.article && props.article.imgId && (
      <FastImage
        source={{
          uri:
            "https://cloud.squidex.io/api/assets/edubao/" + props.article.imgId,
          priority: "high"
        }}
        resizeMode="cover"
        style={{
          padding: theme.grid.gridFactor(1),
          width: theme.grid.gridFactor(6.5),
          borderTopLeftRadius: theme.grid.gridFactor(1),
          borderBottomLeftRadius: theme.grid.gridFactor(1)
        }}
      />
    )) ||
    null;
  return (
    <EduCardSmall
      leftSideCard={sideCard}
      contentType={contentType}
      text={props.article.teaseText}
      title={props.article.title}
    />
  );
};

export default EduServicesCard;
