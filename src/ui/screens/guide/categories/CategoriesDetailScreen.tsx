import React from "react";
import useTheme from "../../../../themes/useTheme";
import { View, SectionList } from "react-native";
import EduText from "../../../components/atomic/text/EduText";
import { observer } from "mobx-react";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { useNavigation } from "react-navigation-hooks";
import { IArticleType } from "../../../../dataLayer/models/ArticleType";
import EduListCard from "../../../components/composite/card/EduListCard";
import { ICategoryType } from "../../../../dataLayer/models/CategoryType";
import { ISubCategoryType } from "../../../../dataLayer/models/SubCategoryType";
import StickyHeaderAfterScrollingDown from "../../../containers/layout/StickyHeaderAfterScrollingDownWrapper/StickyHeaderAfterScrollingDown";
import { IEdubaoTheme } from "../../../../themes/IEdubaoTheme";

export interface ICategoriesDetailScreenProps {
  categoriesName?: string;
}

const CategoriesDetailScreen = (props: ICategoriesDetailScreenProps) => {
  const theme: IEdubaoTheme = useTheme();
  const { state } = useNavigation();
  const { rootStore } = useStore();
  const categoryId = (state.params && state.params.id) || "";
  const category: ICategoryType = rootStore.categories.list.find(
    e => e.id === categoryId
  );
  const subCategories = rootStore.subCategories.list.filter(
    (sc: ISubCategoryType) => sc.category.id === categoryId
  );
  const sections = subCategories.map(sc => ({
    title: sc.title,
    data: rootStore.articles.list.filter(
      (a: IArticleType) => a.subCategory[0].id === sc.id
    )
  }));
  return (
    <StickyHeaderAfterScrollingDown
      SafeAreaBackgroundColor="primary"
      SafeAreaFlex={1}
      title={category.title}
      contentBackgroundColor="light"
      iconColor="lightest"
      imageUri={category.previewImageMedium}
      noBookmark
      noLink
    >
      <SectionList
        sections={sections}
        renderItem={({ item }) => <EduListCard card={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={{
              paddingBottom: theme.grid.gridFactor(1),
              paddingLeft: theme.grid.gridFactor(1.5)
            }}
          >
            <EduText size="large21" color="bluefont">
              {title}
            </EduText>
          </View>
        )}
      />
    </StickyHeaderAfterScrollingDown>
  );
};

export default observer(CategoriesDetailScreen);
