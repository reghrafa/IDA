import React, { useState } from "react";
import Carousel, { CarouselRenderProps } from "react-native-sideswipe";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { IArticleTypeSnapshotOut } from "../../../../dataLayer/models/ArticleType";
import EduCard from "../card/EduCard";
import { Dimensions, View } from "react-native";
import useTheme from "../../../../themes/useTheme";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import EduText from "../../atomic/text/EduText";
import { NAVIGATION_PATH_ARTICLE } from "../../../../Constants";

export interface IReadMore {
  fixedArticles?:
    | Array<{
        id?: string;
        title?: string;
        teaserText?: string;
      }>
    | undefined;
  fromSubCategoryId?: string;
  fromArticle?: IArticleTypeSnapshotOut;
  fromTags?: string[];
  limit?: number;
  noMargin?: boolean;
}

const ReadMore = (props: IReadMore) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { rootStore } = useStore();
  const theme = useTheme();
  const dim = Dimensions.get("screen");
  const { push } = useNavigation();
  const itemWidth = dim.width - theme.grid.gridFactor(3);
  const offset = theme.grid.gridFactor(1.5);
  const itemMargin = theme.grid.gridFactor(0.5);
  const minLimit = 3;
  const maxLimit = 10;
  const limit = Math.max(Math.min(props.limit || 0, maxLimit), minLimit);
  const h = (itemWidth - itemMargin / 2) / 2.2;
  const genNav = (item: IArticleTypeSnapshotOut) => () =>
    push(NAVIGATION_PATH_ARTICLE, { articleId: item.id });
  const renderItem: (
    props: CarouselRenderProps<IArticleTypeSnapshotOut>
  ) => React.ReactNode = ({ item }) => (
    <TouchableOpacity
      onPress={genNav(item)}
      style={{
        width: itemWidth - itemMargin * 2,
        marginHorizontal: itemMargin,
        marginTop: theme.grid.gridFactor(1),
        marginBottom: theme.grid.gridFactor(3 / 4),
        borderRadius: theme.grid.gridFactor(1),
        ...theme.shadows.default,
        height: h
      }}
    >
      <EduCard
        noMargin
        contentType="Study Guide"
        title={item.title}
        text={item.teaserText}
        height="100%"
        small
      />
    </TouchableOpacity>
  );
  // should work () a.subCategory[0] <==  a.subCategory[0].id )
  const data = props.fixedArticles
    ? props.fixedArticles
    : rootStore.articles.list
        .filter((a: IArticleTypeSnapshotOut) =>
          props.fromSubCategoryId
            ? a.subCategory[0] === props.fromSubCategoryId
            : true
        )
        .slice(0, limit);

  return (
    <View style={{ marginBottom: theme.grid.gridFactor(1.5) }}>
      <EduText
        style={{
          marginLeft: theme.grid.gridFactor(2.5)
        }}
        size="larger24"
        color="primary"
        translationKey="global.readmore.title"
      />
      <Carousel
        data={data}
        renderItem={renderItem}
        itemWidth={itemWidth}
        useVelocityForIndex={false}
        contentOffset={offset}
        index={currentIndex}
        onIndexChange={setCurrentIndex}
      />
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          marginHorizontal: theme.grid.gridFactor(2.5),
          marginTop: theme.grid.gridFactor(0.5)
        }}
      >
        {data.map((e, i) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              backgroundColor:
                currentIndex === i ? undefined : theme.colors.primary,
              borderColor: theme.colors.primary,
              borderWidth: 1,
              borderRadius: 4,
              marginHorizontal: 4
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ReadMore;
