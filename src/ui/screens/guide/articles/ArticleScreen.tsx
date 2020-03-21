import React from "react";
import { useNavigation } from "react-navigation-hooks";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import Article from "../../../components/composite/article/Article";
import { IArticleTypeSnapshotOut } from "../../../../dataLayer/models/ArticleType";

const ArticleScreen: React.FC = () => {
  const { rootStore } = useStore();
  const { state } = useNavigation();
  const articleId = (state.params && state.params.articleId) || "";
  const article: IArticleTypeSnapshotOut = rootStore.articles.list.find(
    a => a.id === articleId
  ) || {
    id: "0000000000",
    teaserText: "",
    // TK Article not found
    title: "",
    content: "",
    subCategory: [],
    tags: []
  };
  return <Article article={article} />;
};

export default ArticleScreen;
