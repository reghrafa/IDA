import React from "react";
import { IArticleType } from "../../../../dataLayer/models/ArticleType";
import useTheme from "../../../../themes/useTheme";
import { FlatList, View } from "react-native";
import EduListCard from "../card/EduListCard";

interface IFeedList {
  article: IArticleType[];
  filterText: string;
  headerComponent?: React.ComponentType<any> | React.ReactElement | null;
}
const FeedList = (props: IFeedList) => {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.primary }}>
      <FlatList
        style={{ backgroundColor: theme.colors.light }}
        ListHeaderComponent={props.headerComponent}
        renderItem={({ item, index }) => (
          <EduListCard key={index} card={item} />
        )}
        data={processData(props.article, props.filterText)}
      />
    </View>
  );
};

export default FeedList;

const processData = (article: IArticleType[], filterText: string) => {
  return !article || !article[0]
    ? []
    : filterText.length < 2
    ? article
    : article.filter(v => articleContainsString(v, filterText));
};

const articleContainsString = (article: IArticleType, filterText: string) => {
  if (article.tags.filter((e: any) => e.includes(filterText)).length > 0)
    return true;
  if (article.teaserText.includes(filterText)) return true;
  if (article.title.includes(filterText)) return true;
  if (article.content.includes(filterText)) return true;
  if (
    article.subCategory.filter((e: any) => e.title.includes(filterText))
      .length > 0
  )
    return true;
  return false;
};
