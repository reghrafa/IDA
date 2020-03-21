import React from "react";
import { View } from "react-native";
import EduText from "../../atomic/text/EduText";
import { ContentType } from "../../../../types_interfaces/types/basetypes";
import useTheme from "../../../../themes/useTheme";
import GuideIcon from "../../../../assets/images/GuideIcon";
import PremiumIcon from "../../../../assets/images/PremiumIcon";
import Check from "../../../../assets/images/Check";
import Arrow from "../../../../assets/images/Arrow";
import { Colorstrings, FontSizeStrings } from "../../../../themes/EdubaoTheme";
import ChatIcon from "../../../../assets/images/ChatIcon";

export interface ICardCategoryLabelProps {
  contentType: ContentType;
  hasArrow?: boolean;
  fontSize?: FontSizeStrings;
  iconSize?: number;
}
interface IContentTypeObject {
  name: ContentType;
  translationKey?: string;
  color: string;
  icon?: JSX.Element;
}

const CardContentTypeLabel: React.FC<ICardCategoryLabelProps> = ({
  iconSize,
  contentType,
  hasArrow,
  fontSize
}) => {
  const theme = useTheme();
  const wh = iconSize
    ? theme.grid.gridFactor(iconSize)
    : theme.grid.gridFactor(1);
  const contentTypeObjects: IContentTypeObject[] = [
    {
      name: "Study Guide",
      translationKey: "category.guide.label",
      // color: "#F88008",
      color: "#FF9D6F",
      icon: <GuideIcon color="#FF9D6F" width={wh} height={wh} />
    },
    {
      name: "Next up",
      translationKey: "category.nextup.label",
      color: "#17A9B5",
      icon: <Check color="#17A9B5" width={wh} height={wh} />
    },
    {
      name: "Todo",
      translationKey: "category.todo.label",
      color: "#FFFFFF",
      icon: <Check color="#FFFFFF" width={wh} height={wh} />
    },
    {
      name: "Finance",
      translationKey: "category.finance.label",
      color: "#7ED0FC",
      icon: <PremiumIcon color="#7ED0FC" width={wh} height={wh} />
    },
    {
      name: "Insurance",
      translationKey: "category.insurance.label",
      color: "#5A17B5",
      icon: <PremiumIcon color="#5A17B5" width={wh} height={wh} />
    },
    {
      name: "Service",
      translationKey: "category.service.label",
      color: "#7ED0FC",
      icon: <PremiumIcon color="#7ED0FC" width={wh} height={wh} />
    },
    {
      name: "Consultation",
      translationKey: "category.consultation.label",
      color: "#28D9AA",
      icon: <ChatIcon color="#7ED0FC" width={wh} height={wh} />
    }
  ];
  /*
  {
    name: "Consultation",
    translationKey: "category.consultation",
    color: "#37D8AB",
    icon: null
  },
  {
    name: "Insurance",
    translationKey: "category.insurance",
    color: "#5A17B5",
    icon: <PremiumIcon color="#5A17B5" width={wh} height={wh} />
  },
  {
    name: "Service",
    translationKey: "category.service",
    color: "#11537C",
    icon: null
  },
  {
    name: "Finance",
    translationKey: "category.finance",
    color: "#5A17B5",
    icon: null
  },
  {
    name: "Offers",
    translationKey: "category.offers",
    color: "#CE30B6",
    icon: null
  },
  {
    name: "Questionaire",
    translationKey: "category.questionaire",
    color: "#FABC3C",
    icon: null
  },
  */

  const currentContentType:
    | IContentTypeObject
    | undefined = contentTypeObjects.find(e => contentType === e.name);
  if (!currentContentType) {
    return null;
  }
  return (
    <View style={{ flexDirection: "row", height: theme.grid.gridFactor(1) }}>
      {currentContentType.icon && currentContentType.icon}
      <EduText
        style={{
          marginLeft: currentContentType.icon ? theme.grid.gridFactor(0.5) : 0
        }}
        fontWeight="bold"
        size={fontSize || "smallest12"}
        customColor={currentContentType.color}
        translationKey={currentContentType.translationKey}
      >
        {currentContentType.name}
      </EduText>
      <View style={{ flex: 1 }} />
      {hasArrow ? (
        <Arrow width={wh} height={wh} color={currentContentType.color} />
      ) : null}
    </View>
  );
};

export default CardContentTypeLabel;
