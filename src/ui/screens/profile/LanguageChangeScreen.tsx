import React from "react";
import LanguageChange from "../../components/composite/languageChange/LanguageChange";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import { useNavigation } from "react-navigation-hooks";
import I18n from "../../../translations/I18n";

const LanguageChangeScreen = () => {
  const { rootStore } = useStore();
  const { goBack } = useNavigation();
  const oldLang = rootStore.settings.language;
  return (
    <LanguageChange
      bottomButtonData={[
        {
          translationKey: "guide.button.articleswipe.save",
          action: () => {
            if (rootStore.settings.language !== oldLang) {
              rootStore.getInitialData(rootStore.settings.language);
            }
            goBack();
          }
        },
        {
          translationKey: "global.clickable.back",
          action: () => {
            rootStore.settings.setLanguage(oldLang);
            I18n.locale = oldLang;
            goBack();
          }
        }
      ]}
    />
  );
};

export default LanguageChangeScreen;
