import React, { useState } from "react";
import Carousel, { CarouselRenderProps } from "react-native-sideswipe";
import EduCard from "../card/EduCard";
import { Dimensions, View } from "react-native";
import useTheme from "../../../../themes/useTheme";
import { TouchableOpacity } from "react-native";

export interface ICardSliderItem {
  item: {
    id: string;
    title: string;
    text: string;
    label?: string;
  };
}

export interface ICardSlider {
  items: Array<ICardSliderItem>;
  onPress: (item: ICardSliderItem) => void;
}

const CardSlider: React.FC<ICardSlider> = ({ onPress, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const dim = Dimensions.get("screen");
  const itemWidth = dim.width - theme.grid.gridFactor(3);
  const offset = theme.grid.gridFactor(0.5);
  const itemMargin = theme.grid.gridFactor(0.5);
  const h = (itemWidth - itemMargin / 2) / 2.2;

  const renderItem: (props: CarouselRenderProps<any>) => React.ReactNode = ({
    item
  }) => (
    <TouchableOpacity
      onPress={(): void => {
        onPress(item);
      }}
      style={{
        width: itemWidth - itemMargin * 2,
        marginHorizontal: itemMargin,
        marginBottom: theme.grid.gridFactor(3 / 4),
        borderRadius: theme.grid.gridFactor(1),
        ...theme.shadows.default,
        height: h
      }}
    >
      <EduCard
        noMargin
        contentType={item.label}
        title={item.title}
        text={item.text}
        height="100%"
        small
      />
    </TouchableOpacity>
  );

  return (
    <View style={{ marginBottom: theme.grid.gridFactor(1.5) }}>
      <Carousel
        data={items}
        renderItem={renderItem}
        itemWidth={itemWidth}
        useVelocityForIndex={false}
        contentOffset={offset}
        index={currentIndex}
        onIndexChange={setCurrentIndex}
      />
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          marginHorizontal: theme.grid.gridFactor(1.5),
          marginTop: theme.grid.gridFactor(0.5)
        }}
      >
        {items.map((e, i) => (
          <View
            key={i}
            style={{
              width: 8,
              height: 8,
              backgroundColor:
                currentIndex === i ? undefined : theme.colors.primary,
              borderColor: theme.colors.primary,
              borderWidth: 1,
              borderRadius: 4,
              marginHorizontal: 4
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default CardSlider;
