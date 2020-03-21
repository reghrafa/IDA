import React from "react";
import {
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from "react-native";
import EduText from "../../atomic/text/EduText";
import useTheme from "../../../../themes/useTheme";
import Arrow from "../../../../assets/images/Arrow";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

export interface ICategoryCard {
  id: string;
  title: string;
  imgId: string;
  subCategories: string[];
  index: number;
}
export interface ICategoryCardProps {
  category: ICategoryCard;
  first?: boolean;
}

const CategoryCard: React.FC<ICategoryCardProps> = ({
  first,
  category: { id, title, imgId, subCategories }
}) => {
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const theme = useTheme();

  const imgWidth = Dimensions.get("screen").width - theme.grid.gridFactor(2);

  return (
    <TouchableOpacity onPress={() => {
      sendNavigationEvent(routeName, params || {}, "CategoriesDetail", { id: id });
      navigate("CategoriesDetail", { id: id });
    }}>
      <ImageBackground
        source={{
          uri: "https://cloud.squidex.io/api/assets/edubao/" + imgId
        }}
        style={{
          marginTop: first ? theme.grid.gridFactor(1) : 0,
          borderRadius: theme.grid.gridFactor(1),
          padding: theme.grid.gridFactor(1),
          marginHorizontal: theme.grid.gridFactor(1),
          marginBottom: theme.grid.gridFactor(1),
          backgroundColor: "#C8EDFF"
        }}
        imageStyle={{
          resizeMode: "cover",
          borderRadius: theme.grid.gridFactor(1)
        }}
      >
        <EduText
          style={{
            marginTop: theme.grid.gridFactor(6.75),
            marginBottom: theme.grid.gridFactor(0.5)
          }}
          color="primary"
        >
          {title}
        </EduText>
        {subCategories.map((e, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: theme.grid.gridFactor(1)
            }}
          >
            <EduText color="primary" size="smaller14">
              {e}
            </EduText>
            <Arrow
              height={theme.grid.gridFactor(1)}
              width={theme.grid.gridFactor(1)}
              color={theme.colors.bluefont}
            />
          </View>
        ))}
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryCard;