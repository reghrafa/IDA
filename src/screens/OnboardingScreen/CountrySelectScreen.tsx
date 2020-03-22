import React from 'react';
import {View} from 'react-native';
import EduText from '../../components/atomic/text/EduText';
import LogoHeader from '../../components/composite/headers/LogoHeader';
import ScreenWrapper from '../../containers/layout/ScreenWrapper';
import EduTallButton from '../../components/atomic/button/EduTallButton';
import {FlatList} from 'react-native-gesture-handler';
import BottomButtons from '../../components/composite/bottombuttons/BottomButtons';
import {useNavigation} from 'react-navigation-hooks';
import {observer, useForceUpdate} from 'mobx-react-lite';
import {useStore} from '../../../dataLayer/stores/useStore';

const LanguageSelectScreen = () => {
  const {navigate} = useNavigation();
  const {rootStore} = useStore();
  const forceUpdate = useForceUpdate();

  const listItem = ({item}: any) => (
    <View style={{margin: 12, flex: 1}}>
      <TallButton
        feedbacktype="opacity"
        selected={item.code === rootStore.settings.language}
        onPress={() => {
          rootStore.settings.setLanguage(item.code);
          forceUpdate();
        }}>
        {item.label}
      </TallButton>
    </View>
  );

  return (
    <ScreenWrapper>
      <LogoHeader />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 32,
          justifyContent: 'center',
          alignItems: 'center',
          height: 34,
        }}>
        <EduText
          translationKey="onboarding.language.text"
          color="primary"
          size="large21"
          lang={rootStore.settings.language || 'en'}
        />
      </View>

      <FlatList
        style={{paddingHorizontal: 12}}
        numColumns={2}
        extraData={rootStore.settings.language}
        data={languages.sort((a, b) => a.index - b.index)}
        renderItem={listItem}
      />
      <BottomButtons
        data={[
          {
            translationKey: 'global.button.confirm',
            action: () => {
              I18n.locale = rootStore.settings.language || 'en';
              if (rootStore.settings.language) {
                rootStore.getInitialData(rootStore.settings.language);
                navigate('Onboarding');
              }
            },
          },
        ]}
      />
    </ScreenWrapper>
  );
};

export default observer(LanguageSelectScreen);
