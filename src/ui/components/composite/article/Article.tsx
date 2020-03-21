import React from "react";
import useTheme from "../../../../themes/useTheme";
import EduText from "../../../components/atomic/text/EduText";
import EduMarkdown from "../../../components/atomic/markdownRenderer/EduMarkdown";
import ReadMore from "../../../components/composite/slider/ReadMore";
import { IArticleTypeSnapshotOut } from "../../../../dataLayer/models/ArticleType";
import StickyHeaderAfterScrollingDown from "../../../containers/layout/StickyHeaderAfterScrollingDownWrapper/StickyHeaderAfterScrollingDown";
import { Colorstrings } from "../../../../themes/EdubaoTheme";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { IHeaderIcon } from "../headers/StickyHeader";
import Bookmark from "../../../../assets/images/Bookmark";
import Link from "../../../../assets/images/Link";
import { observer } from "mobx-react";

export interface IArticleProps {
  article: IArticleTypeSnapshotOut;
  noReadMore?: boolean;
  noCategory?: boolean;
  noLinkButton?: boolean;
  noBookmarkButton?: boolean;
  headerBackgroundColor?: Colorstrings;
  bottomMargin?: boolean;
}

const Article: React.FC<IArticleProps> = ({
  article,
  noCategory,
  noReadMore,
  noBookmarkButton,
  noLinkButton,
  headerBackgroundColor,
  bottomMargin
}) => {
  const theme = useTheme();
  const { rootStore } = useStore();

  const bookmark: (active: boolean) => IHeaderIcon = active => ({
    icon: iconColor => {
      return (
        <Bookmark
          active={active}
          color={theme.colors[iconColor || "lightest"]}
          width={theme.grid.gridFactor(1)}
          height={theme.grid.gridFactor(1)}
        />
      );
    },
    onPress: () => {
      console.warn(article.id);
      if (rootStore.bookmarkStore.list.includes(article.id)) {
        console.warn("removed bookmark", article.id);
        rootStore.bookmarkStore.removeWithId(article.id);
      } else {
        console.warn("added bookmark", article.id);
        rootStore.bookmarkStore.add(article.id);
      }
    }
  });
  const link: (aactive: boolean) => IHeaderIcon = active => ({
    icon: iconColor => (
      <Link
        color={theme.colors[iconColor || "lightest"]}
        width={theme.grid.gridFactor(1)}
        height={theme.grid.gridFactor(1)}
      />
    ),
    onPress: () => {}
  });

  return (
    <StickyHeaderAfterScrollingDown
      SafeAreaBackgroundColor={headerBackgroundColor || "primary"}
      SafeAreaFlex={1}
      title={article.title}
      category={noCategory ? undefined : "Study Guide"}
      contentBackgroundColor="light"
      iconColor="lightest"
      imageUri={article.heroImage}
      link={
        noLinkButton
          ? undefined
          : link(rootStore.bookmarkStore.list.includes(article.id))
      }
      bookmark={
        noBookmarkButton
          ? undefined
          : bookmark(rootStore.bookmarkStore.list.includes(article.id))
      }
    >
      {article.teaserText === "" ? null : (
        <EduText
          size="small16"
          fontWeight="semibold"
          style={{
            marginBottom: theme.grid.gridFactor(1),
            marginHorizontal: theme.grid.gridFactor(2)
          }}
          color="primary"
        >
          {article.teaserText}
        </EduText>
      )}
      <EduMarkdown
        horizontalMargin={theme.grid.gridFactor(2)}
        bottomMargin={bottomMargin ? theme.grid.gridFactor(2) : undefined}
        markdown={article.content}
      />
      {!noReadMore && <ReadMore fromArticle={article} />}
    </StickyHeaderAfterScrollingDown>
  );
};

export default observer(Article);
