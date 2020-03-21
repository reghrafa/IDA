import React from "react";
import { FlatList, View } from "react-native";
import CategoryCard, {
  ICategoryCard
} from "../../../components/composite/card/CategoryCard";
import useTheme from "../../../../themes/useTheme";
import { observer } from "mobx-react";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import FixHeader from "../../../containers/layout/FixHeaderWrapper/FixHeader";

export interface ICategoriesScreenProps {}

const CategoriesScreen = (props: ICategoriesScreenProps) => {
  const theme = useTheme();
  const { rootStore } = useStore();
  const cards: ICategoryCard[] = rootStore.categories.list.map(c => ({
    id: c.id,
    title: c.title,
    imgId: c.previewImageLarge,
    index: c.index,
    subCategories: rootStore.subCategories.list
      .filter(sc => sc.category.id === c.id)
      .map(scwf => scwf.title)
  }));
  return (
    <FixHeader
      iconColor="lightest"
      translationKey="guide.feed.categories.title"
      noLink
      SafeAreaFlex={1}
      noBookmark
    >
      <FlatList
        data={cards}
        style={{
          flex: 1,
          backgroundColor: theme.colors.light
        }}
        renderItem={({ item, index }) => (
          <View
            style={{
              paddingBottom: theme.grid.gridFactor(1)
            }}
          >
            <CategoryCard category={item} first={index === 0} />
          </View>
        )}
      />
    </FixHeader>
  );
};

export default observer(CategoriesScreen);
