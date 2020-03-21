import React from "react";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import FeedList from "../../../components/composite/feedlist/FeedList";
import { observer } from "mobx-react";
import { View } from "react-native";
import useTheme from "../../../../themes/useTheme";

const BookmarkScreen: React.FC = () => {
  const { rootStore } = useStore();
  const theme = useTheme();
  console.warn("Bookmark", rootStore.bookmarkStore.list);
  return (
    <FeedList
      article={rootStore.bookmarkStore.list.map(id =>
        rootStore.articles.list.find(a => a.id === id)
      )}
      filterText=""
      headerComponent={() => (
        <View style={{ height: theme.grid.gridFactor(1) }} />
      )}
    />
  );
};

export default observer(BookmarkScreen);
