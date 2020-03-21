import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import EduText from "../../atomic/text/EduText";
import useTheme from "../../../../themes/useTheme";
import { observer } from "mobx-react";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import FastImage from "react-native-fast-image";
import { NAVIGATION_PATH_CATEGORIES_DETAIL } from "../../../../Constants";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

interface ICategoriesSliderProps {}

const CategoriesSlider = (props: ICategoriesSliderProps) => {
  const theme = useTheme();
  const { rootStore } = useStore();
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  //console.error(rootStore.categories.list);
  const data = rootStore.categories.list.map(e => ({
    id: e.id,
    title: e.title,
    imgId: e.previewImageSmall,
    index: e.index
  }));
  return (
    <FlatList
      contentContainerStyle={{
        marginHorizontal: 8,
        paddingRight: theme.grid.gridFactor(1)
      }}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            sendNavigationEvent(
              routeName,
              params || {},
              NAVIGATION_PATH_CATEGORIES_DETAIL,
              { id: item.id }
            );
            navigate(NAVIGATION_PATH_CATEGORIES_DETAIL, { id: item.id });
          }}
        >
          <FastImage
            source={{
              uri: "https://cloud.squidex.io/api/assets/edubao/" + item.imgId
            }}
            style={{
              padding: theme.grid.gridFactor(1),
              borderRadius: theme.grid.gridFactor(1),
              backgroundColor: theme.colors.lightest,
              height: 96,
              width: 120,
              margin: 8,
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            <EduText color="bluefont" fontWeight="semibold" size="tiniest9">
              {item.title}
            </EduText>
          </FastImage>
        </TouchableOpacity>
      )}
    />
  );
};

export default observer(CategoriesSlider);
