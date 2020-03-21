import React, { useState } from "react";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import BottomButtons, {
  IBottomButtonData
} from "../../components/composite/bottombuttons/BottomButtons";
import {
  IFormChunk,
  IFormField
} from "../../../dataLayer/static/formStructure";
import { View, StatusBar } from "react-native";
import Logo from "../../../assets/images/Logo";
import EduText from "../../components/atomic/text/EduText";
import EduDropdownInput from "../../components/atomic/input/EduDropdownInput";
import useTheme from "../../../themes/useTheme";
import { SafeAreaView, ScrollView } from "react-navigation";
import {
  NAVIGATION_PATH_FORM,
  NAVIGATION_PATH_GUIDE_NAVIGATOR,
  NAVIGATION_PATH_FEED_NAVIGATOR
} from "../../../Constants";
import ProgressBar from "../../components/atomic/progressbar/ProgressBar";
import EduTextInput from "../../components/atomic/input/EduTextInput";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import EduSlideSelectInput from "../../components/atomic/input/EduSlideSelectInput";
import EduDatePicker from "../../components/atomic/input/EduDatePicker";
import { warn } from "../../../helpers/debughelper";
import { observer } from "mobx-react";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

const FormScreen = () => {
  const { goBack, navigate, state, push } = useNavigation();
  const { routeName, params } = useNavigationState();
  const { rootStore } = useStore();
  const theme = useTheme();
  let bookingId: string | undefined;
  let currentIndex: number = 0;
  if (state.params) {
    bookingId = state.params.bookingId;
    currentIndex = state.params.index || 0;
  }
  if (!rootStore.formdata.formdata) {
    if (bookingId) {
      rootStore.formdata.getFormJSONFromBackend(bookingId);
    }
    warn("Need bookingId");
    return null; // LOADING
  }

  const formLength = rootStore.formdata.formdata.chunks.length;
  const currentFormChunk: IFormChunk =
    rootStore.formdata.formdata.chunks[currentIndex];
  const buttonData: IBottomButtonData[] = [
    {
      translationKey: "global.button.next",
      action:
        formLength === currentIndex + 1
          ? () => {
              sendNavigationEvent(
                routeName,
                params || {},
                NAVIGATION_PATH_FEED_NAVIGATOR,
                {}
              );
              navigate(NAVIGATION_PATH_FEED_NAVIGATOR);
            }
          : () => {
              sendNavigationEvent(
                routeName,
                params || {},
                NAVIGATION_PATH_FORM,
                {
                  index: (++currentIndex).toString()
                }
              );
              push(NAVIGATION_PATH_FORM, {
                index: ++currentIndex
              });
            },
      extraprops: { inverted: true }
    },
    {
      translationKey: "global.clickable.cancel",
      action: () => {
        sendNavigationEvent(routeName, params || {}, "BACK", {});
        goBack();
      }
    }
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary
      }}
      forceInset={{ bottom: "never" }}
    >
      <StatusBar backgroundColor={theme.colors.primary} />
      <View
        style={{
          height: 64,
          paddingVertical: 16,
          paddingHorizontal: 32,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Logo />
        <View
          style={{
            height: 32,
            maxWidth: 128,
            flex: 1,
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <EduText>{currentFormChunk.title || "No Title"}</EduText>
          <ProgressBar
            height={8}
            customRadius={4}
            progress={((currentIndex + 1) / (formLength || 1)) * 100}
          />
        </View>
      </View>
      {!!currentFormChunk.description && (
        <EduText
          style={{
            marginHorizontal: theme.grid.gridFactor(2),
            marginVertical: theme.grid.gridFactor(1)
          }}
        >
          {currentFormChunk.description}
        </EduText>
      )}
      <ScrollView style={{ flex: 1 }}>
        {currentFormChunk.fields.map((field, index) => (
          <FormField
            key={index}
            field={field}
            onChange={e => {
              rootStore.formdata.updateValue(currentIndex, index, e);
            }}
            value={field.value}
          />
        ))}
        <BottomButtons data={buttonData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(FormScreen);

interface IFormFieldProps {
  field: IFormField;
  onChange: (value: string) => void;
  value?: string;
}

const FormField: React.FC<IFormFieldProps> = ({ field, onChange, value }) => {
  const [data, setData] = useState(value || "");
  switch (field.type) {
    case "Text":
      return (
        <EduTextInput
          textColor="primary"
          labelColor="lightest"
          backgroundColor="lightest"
          placeholderTextColor="grey"
          label={field.label}
          value={data}
          onChange={e => {
            onChange(e);
            setData(e);
          }}
          placeholder={field.placeholder}
          textContentType={field.textContentType}
        />
      );
    case "Dropdown":
      return (
        <EduDropdownInput
          label={field.label}
          value={data}
          values={field.options}
          onChange={e => {
            onChange(e);
            setData(e);
          }}
        />
      );
    case "SwitchSlider":
      return (
        <EduSlideSelectInput
          labelColor={"lightest"}
          label={field.label}
          options={field.options}
          value={field.value || field.options[field.defaultIndex || 0]}
          onChange={e => {
            onChange(e);
            setData(e);
          }}
        />
      );
    case "DatePicker":
      return (
        <EduDatePicker
          label={field.label}
          labelColor="lightest"
          value={field.value}
          onChange={e => {
            onChange(e);
            setData(e);
          }}
        />
      );
    default:
      break;
  }
  return null;
};
