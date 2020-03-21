import React from "react";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { TouchableOpacity } from "react-native";
import EduArticleCard from "./EduArticleCard";
import { IArticleType } from "../../../../dataLayer/models/ArticleType";
import { NAVIGATION_PATH_ARTICLE } from "../../../../Constants";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

export interface IEduListCardProps {
  card?: IArticleType;
}

const EduListCard: React.FC<IEduListCardProps> = ({
  card,
}) => {
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  if (!card) return null;
  return (
    <TouchableOpacity
      onPress={() => {
        // warn("Navigating to Article: ", { articleId: (props.card && props.card.id) || null });
        sendNavigationEvent(routeName, params || {}, NAVIGATION_PATH_ARTICLE, { articleId: (card && card.id) || "" })
        navigate(NAVIGATION_PATH_ARTICLE, { articleId: (card && card.id) || null });
      }}
    >
      <EduArticleCard article={card} shadow={4} />
    </TouchableOpacity>
  );
};

export default EduListCard;
