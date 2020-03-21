import React from "react";
import ScreenWrapper from "../../../containers/layout/ScreenWrapper";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { observer } from "mobx-react-lite";
import theme from "../../../../themes/EdubaoTheme";
import FeedList from "../../../components/composite/feedlist/FeedList";
import FeedTop from "../../../components/composite/feed/FeedTop";

const FeedScreen = () => {
  const { rootStore } = useStore();

  return (
    <ScreenWrapper safeAreaBackgroundColor={theme.colors["primary"]}>
      <FeedList
        article={rootStore.articles.list}
        filterText={rootStore.ui.feedSearchText}
        headerComponent={FeedTop}
      />
    </ScreenWrapper>
  );
};

export default observer(FeedScreen);
