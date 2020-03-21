import { useState } from "react";
import ScreenWrapper from "../../containers/layout/ScreenWrapper";
import Carousel from "react-native-sideswipe";
import { Dimensions, ScrollView, Text, View } from "react-native";
import { IServicePackageType } from "../../../dataLayer/models/ServicePackageType";
import { IServiceGroupType } from "../../../dataLayer/models/ServiceGroupType";
import PremiumCard from "../../components/composite/card/PremiumCard";
import ProgressionDots from "../../components/composite/slider/ProgressionDots";
import useTheme from "../../../themes/useTheme";
import { observer } from "mobx-react";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import React from "react";
import SafeAreaWrapper from "../../containers/layout/SafeAreaWrapper/SafeAreaWrapper";
import EduText from "../../components/atomic/text/EduText";

interface IPremiumScreenProps {}

const PremiumScreen: React.FC<IPremiumScreenProps> = ({}) => {
  const theme = useTheme();
  const { rootStore } = useStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = Dimensions.get("window");

  const itemWidth = width - theme.grid.gridFactor(4);

  let packageGroup: IServiceGroupType;
  let packages: IServicePackageType[] = [];
  if (
    rootStore.serviceGroup.state === "done" &&
    rootStore.servicePackage.state === "done"
  ) {
    packageGroup = rootStore.serviceGroup.list.find(
      (packageGroup: IServiceGroupType) =>
        packageGroup.title === "Study-Packages"
    );
    packages = packageGroup.packages;
  } else {
    return (
      <SafeAreaWrapper>
        <EduText size="larger24" color="bluefont">
          CONTENT LOADING ERROR
        </EduText>
      </SafeAreaWrapper>
    );
  }

  return (
    <SafeAreaWrapper backgroundColor="primary" flex={1}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignContent: "space-between",
          backgroundColor: theme.colors.light
        }}
      >
        <View style={{ flex: 1 }} />
        <Carousel
          data={packages}
          contentOffset={theme.grid.gridFactor(2)}
          itemWidth={itemWidth}
          onIndexChange={newIndex => setActiveIndex(newIndex)}
          renderItem={({ item }) => (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            >
              <PremiumCard
                packageGroupId={packageGroup.id}
                includedServices={item.servicesArticle}
                item={item}
                width={width}
              />
            </ScrollView>
          )}
        />
        <ProgressionDots count={packages.length} activeIndex={activeIndex} />
        <View
          style={{
            flex: 1
          }}
        />
      </View>
    </SafeAreaWrapper>
  );
};
export default observer(PremiumScreen);
