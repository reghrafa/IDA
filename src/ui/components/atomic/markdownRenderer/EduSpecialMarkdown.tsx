import React from "react";
import EduCarousel from "../../composite/slider/eduCarousel/EduCarousel";
import { IEduMarkdownProps } from "./IEduMarkdownProps";
import { Dimensions } from "react-native";
import useTheme from "../../../../themes/useTheme";
import EduImage from "../image/EduImage";
import {
  MARKDOWNTYPE_SLIDER,
  MARKDOWNTYPE_IMAGE,
  MARKDOWNTYPE_ARTICLE_LINK,
  MARKDOWNTYPE_VIDEO,
  NAVIGATION_PATH_ARTICLE
} from "../../../../Constants";
import EduText from "../text/EduText";
import { useNavigation } from "react-navigation-hooks";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { IArticleType } from "../../../../dataLayer/models/ArticleType";
import Button from "../button/Button";

const EduSpecialMarkdown: React.FC<IEduMarkdownProps> = ({
  markdown,
  horizontalMargin
}) => {
  const theme = useTheme();
  const { push } = useNavigation();
  const { rootStore } = useStore();
  const parsedMD = markdown.split(new RegExp("[\u0028\u0029]")); // splitting at ( and )
  const mdtype = parsedMD.shift() || "";
  const parsedCleanArr = parsedMD.filter(e => e !== "");
  const args = parsedCleanArr.map(e => {
    if (e.includes(" ")) {
      const eSplit = e.split(" ");
      const path = eSplit.shift();
      const name = eSplit.join(" ");
      return { path, name };
    } else {
      return { path: e, name: "" };
    }
  });

  if (!args || args.length === 0) {
    return null;
  }

  switch (mdtype.toLowerCase()) {
    case MARKDOWNTYPE_SLIDER:
      return (
        <EduCarousel
          dotJustify="flex-start"
          distanceBetweenItems={theme.grid.gridFactor(0.5)}
          marginHorizontal={horizontalMargin}
          itemWidth={Dimensions.get("screen").width - horizontalMargin! * 2}
          height={
            ((Dimensions.get("screen").width - horizontalMargin!) / 16) * 9
          }
          backgroundColor="transparent"
          data={args.map(arg => ({ imageId: arg.path, subText: arg.name }))}
        />
      );
    case MARKDOWNTYPE_IMAGE:
      return <EduImage source={{ uri: args[0].path }} subText={args[0].name} />;
    case MARKDOWNTYPE_VIDEO:
      return null;
    case MARKDOWNTYPE_ARTICLE_LINK: {
      const article: IArticleType = rootStore.articles.list.find(
        (e: IArticleType) => e.id === args[0].path
      );
      if (!article) return null;
      return (
        <Button
          style={{
            marginHorizontal: theme.grid.gridFactor(2)
          }}
          onPress={() => {
            push(NAVIGATION_PATH_ARTICLE, { articleId: article.id });
          }}
        >
          <EduText
            style={{
              textDecorationLine: "underline"
            }}
            size="smaller14"
            color="primary"
          >
            {args[0].name === "" ? article.title : args[0].name}
          </EduText>
        </Button>
      );
    }
    default:
      return null;
  }
};

export default EduSpecialMarkdown;
