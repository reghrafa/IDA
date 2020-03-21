import React from "react";
import { View } from "react-native";
import EduTallButton from "../../atomic/button/EduTallButton";
import ScreenWrapper from "../../../containers/layout/ScreenWrapper";
import LogoHeader from "../headers/LogoHeader";
import EduText from "../../atomic/text/EduText";
import { FlatList } from "react-native-gesture-handler";
import BottomButtons, {
  IBottomButtonData
} from "../bottombuttons/BottomButtons";
import { observer, useForceUpdate } from "mobx-react-lite";
import languages from "../../../../translations/languages";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import I18n from "../../../../translations/I18n";

export interface ILanguageChangeProps {
  bottomButtonData: IBottomButtonData[];
  titleTK?: string;
  title?: string;
}

const LanguageChange: React.FC<ILanguageChangeProps> = ({
  bottomButtonData,
  title,
  titleTK
}) => {
  const { rootStore } = useStore();
  const forceUpdate = useForceUpdate();

  const listItem = ({ item }: any) => (
    <View style={{ margin: 12, flex: 1 }}>
      <EduTallButton
        feedbacktype="opacity"
        selected={item.code === rootStore.settings.language}
        onPress={() => {
          I18n.locale = item.code || "en";
          rootStore.settings.setLanguage(item.code);
          forceUpdate();
        }}
      >
        {item.label}
      </EduTallButton>
    </View>
  );

  return (
    <ScreenWrapper>
      <LogoHeader />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 32,
          justifyContent: "center",
          alignItems: "center",
          height: 34
        }}
      >
        <EduText
          translationKey={titleTK}
          color="primary"
          size="large21"
          lang={rootStore.settings.language || "en"}
        >
          {title}
        </EduText>
      </View>

      <FlatList
        style={{ paddingHorizontal: 12 }}
        numColumns={2}
        extraData={rootStore.settings.language}
        data={languages.sort((a, b) => a.index - b.index)}
        renderItem={listItem}
      />
      <BottomButtons data={bottomButtonData} />
    </ScreenWrapper>
  );
};

export default observer(LanguageChange);
