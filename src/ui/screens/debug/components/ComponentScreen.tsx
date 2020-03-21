import React, { useState, useEffect } from "react";
import useTheme from "../../../../themes/useTheme";
import ScreenWrapper from "../../../containers/layout/ScreenWrapper";
import { View, Dimensions, Text } from "react-native";
import EduText from "../../../components/atomic/text/EduText";
import { useNavigation } from "react-navigation-hooks";
import { ScrollView } from "react-native-gesture-handler";
import BackArrow from "../../../../assets/images/BackArrow";
import Bookmark from "../../../../assets/images/Bookmark";
import Link from "../../../../assets/images/Link";
import CardContentTypeLabel from "../../../components/composite/card/CardContentTypeLabel";
import FastImage from "react-native-fast-image";
import EduTallButton from "../../../components/atomic/button/EduTallButton";
import EduButton from "../../../components/atomic/button/EduButton";
import EduRadioInput from "../../../components/atomic/input/EduRadioInput";
import EduSearchInput from "../../../components/atomic/input/EduSearchInput";
import ProgressBar from "../../../components/atomic/progressbar/ProgressBar";
import EduCard from "../../../components/composite/card/EduCard";
import EduCardSmall from "../../../components/composite/card/EduCardSmall";
import CategoriesSlider from "../../../components/composite/slider/CategoriesSlider";
import FeedTop from "../../../components/composite/feed/FeedTop";
import CategoryCard from "../../../components/composite/card/CategoryCard";
import EduTextInput from "../../../components/atomic/input/EduTextInput";
import BlurViewWrapper from "../../../containers/layout/BlurViewWrapper";
import EdubaoCheckbox from "../../../components/atomic/input/EdubaoCheckbox";
import EduDropdownInput from "../../../components/atomic/input/EduDropdownInput";
import { SafeAreaView } from "react-navigation";
import ServiceCompactCard from "../../../components/composite/card/ServiceCompactCard";
import { IEdubaoTheme } from "../../../../themes/IEdubaoTheme";

const sampleRadios = [
  {
    name: "language",
    value: "en",
    text: "onboarding.language.selector.english"
  },
  {
    name: "language",
    value: "de",
    text: "onboarding.language.selector.german"
  }
];

const ComponentScreen = () => {
  const theme: IEdubaoTheme = useTheme();
  const headerHeight: number = theme.grid.gridFactor(15.25);
  const [windowWidth] = useState(Dimensions.get("window").width);
  const [checked, setChecked] = useState<boolean>(false);
  const onCheckboxChanged = () => {
    setChecked(!checked);
  };
  const [servicePackageItem] = useState({
    id: "c6ffa01d-38eb-4fdd-955a-d0d1f37b852c",
    title: "Partner",
    color: "#37D8AB",
    fontColor: theme.colors.bluefont,
    price: 95,
    pricingInformation: {
      id: "f04f303a-ae6c-43c8-afca-bd56bce40f7e",
      title: "Standard Pricing Information AP",
      pricingDetail:
        "The monthly fee for your EDUBAO service will be drawn from your registered bank account. The notice period is three months. Our contracts have a minimum runtime of 1 year, as required by German law. The subscription will be automatically renewed.",
      disclaimer:
        "Please be aware, that you can’t renew your German Visa without a filled blocked account!",
      recurrence: "OneTime"
    }
  });

  const [includedServices] = useState([
    {
      id: "a769a637-f246-43a9-b89e-730fe59d64e4",
      title: "24/7 Arrival Contact Person"
    },
    {
      id: "daf310d4-4500-4626-961e-61385501a0e5",
      title: "University Enrollment"
    },
    {
      id: "5b0c914b-8044-4035-86dc-501679912230",
      title: "Migration Office Registration"
    },
    {
      id: "5b0c914b-8044-4035-86dc-501679912230",
      title: "Arrival Service"
    },
    {
      id: "5b0c914b-8044-4035-86dc-501679912230",
      title: "Accommodation Guidance"
    },
    {
      id: "5b0c914b-8044-4035-86dc-501679912230",
      title: "Visa Advisory"
    },
    {
      id: "5b0c914b-8044-4035-86dc-501679912230",
      title: "Career Mentoring"
    },
    {
      id: "5b0c914b-8044-4035-86dc-501679912230",
      title: "Study Consultation"
    }
  ]);
  const { state, goBack } = useNavigation();
  const [selectedRadio, setSelectedRadio] = useState("");
  const onPress = (value: string) => {
    console.log("pressed: ", value);
    setSelectedRadio(value);
  };
  const onPressDropdown = (value: string) => {
    console.log("pressed: ", value);
    setSelectedRadio(value);
  };
  const upperCardImage = (
    <FastImage
      source={{
        uri:
          "https://cloud.squidex.io/api/assets/edubao/807f8111-ce85-469e-abbe-ec1fc6391fde",
        priority: "high"
      }}
      resizeMode="cover"
      style={{
        borderTopRightRadius: theme.grid.gridFactor(1),
        borderTopLeftRadius: theme.grid.gridFactor(1),
        padding: theme.grid.gridFactor(1),
        height: theme.grid.gridFactor(10)
      }}
    />
  );
  const sideCardImage = (
    <FastImage
      source={{
        uri:
          "https://cloud.squidex.io/api/assets/edubao/807f8111-ce85-469e-abbe-ec1fc6391fde",
        priority: "high"
      }}
      resizeMode="cover"
      style={{
        borderBottomLeftRadius: theme.grid.gridFactor(1),
        borderTopLeftRadius: theme.grid.gridFactor(1),
        padding: theme.grid.gridFactor(1),
        width: theme.grid.gridFactor(8.375)
      }}
    />
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#ff0000"
      }}
      forceInset={{
        top: "never",
        bottom: "always"
      }}
    >
      <View style={{ flex: 1, paddingVertical: theme.grid.gridFactor(1) }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: headerHeight + theme.grid.gridFactor(1),
            backgroundColor: theme.colors.primary
          }}
        />
        <ScreenWrapper customBackgroundColor="transparent">
          <ScrollView>
            <View style={{ height: headerHeight }}>
              <View
                style={{
                  marginVertical: theme.grid.gridFactor(1),
                  marginHorizontal: theme.grid.gridFactor(2),
                  flexDirection: "row"
                }}
              >
                <BackArrow
                  color={theme.colors.lightest}
                  width={theme.grid.gridFactor(1)}
                  height={theme.grid.gridFactor(1)}
                />

                <View style={{ flex: 1 }} />

                <Link
                  color={theme.colors.lightest}
                  width={theme.grid.gridFactor(1)}
                  height={theme.grid.gridFactor(1)}
                />

                <View style={{ marginLeft: theme.grid.gridFactor(1.5) }}>
                  <Bookmark
                    color={theme.colors.lightest}
                    width={theme.grid.gridFactor(1)}
                    height={theme.grid.gridFactor(1)}
                  />
                </View>
              </View>
              <View style={{ flex: 1 }} />
              <View style={{ marginHorizontal: theme.grid.gridFactor(2) }}>
                <CardContentTypeLabel contentType="Study Guide" />
              </View>
              <EduText
                size="large21"
                fontWeight="bold"
                style={{
                  marginVertical: theme.grid.gridFactor(1),
                  marginHorizontal: theme.grid.gridFactor(2)
                }}
              >
                ComponentsScreen
              </EduText>
            </View>

            <View
              style={{
                backgroundColor: theme.colors.light,
                paddingTop: theme.grid.gridFactor(2),
                borderTopLeftRadius: theme.grid.gridFactor(1),
                borderTopRightRadius: theme.grid.gridFactor(1),
                minHeight: Dimensions.get("window").height - headerHeight
              }}
            >
              <View
                style={{
                  margin: theme.grid.gridFactor(1),
                  flex: 1
                }}
              >
                <EduDropdownInput
                  label="Dropdown"
                  values={["hallo", "du", "hier?"]}
                  value="hallo"
                  onChange={() => onPressDropdown("ds")}
                ></EduDropdownInput>
                <EduText color={"bluefont"} size="large21">
                  Buttons
                </EduText>
                <EduText color={"bluefont"} size="normal18">
                  Button Tall
                </EduText>
                <EduTallButton feedbacktype="opacity">English</EduTallButton>
                <EduText color={"bluefont"} size="normal18">
                  Button Primary
                </EduText>
                <EduButton feedbacktype="opacity">Next</EduButton>
                <EduText color={"bluefont"} size="normal18">
                  Button Inverted
                </EduText>
                <EduButton
                  inverted
                  withBorder
                  fontSize="normal18"
                  feedbacktype="opacity"
                >
                  Login
                </EduButton>
                <EduText color={"bluefont"} size="normal18">
                  Button Borderless
                </EduText>
                <EduButton inverted transparent feedbacktype="opacity">
                  Skip
                </EduButton>
                <EduText color={"bluefont"} size="large21">
                  Other Components
                </EduText>
                <EduText color={"bluefont"} size="normal18">
                  Search Input
                </EduText>
                <EduSearchInput onChange={() => {}} />
                <EduText color={"bluefont"} size="normal18">
                  TextInput Multiline
                </EduText>
                <EduTextInput
                  placeholder="type here..."
                  label="Notes"
                  value="sdafffffffasdhfhagsdfjgashdgfasd"
                  onChange={() => {}}
                  noMargin
                  height={200}
                  multiline
                />
                <EduText color={"bluefont"} size="normal18">
                  TextInput
                </EduText>
                <EduTextInput
                  placeholder="type here..."
                  value="sdafffffffasdhfhagsdfjgashdgfasd"
                  onChange={() => {}}
                  noMargin
                />
                <EduText color={"bluefont"} size="normal18">
                  ProgressBar
                </EduText>
                <View style={{ backgroundColor: "#054F7C", height: 50 }}>
                  <ProgressBar progress={5} style={{ margin: 16 }} />
                </View>
              </View>
              <EduText color={"bluefont"} size="large21">
                Cards
              </EduText>
              <EduText color={"bluefont"} size="normal18">
                StudyGuide Card with Img
              </EduText>
              <EduCard
                upperCard={upperCardImage}
                contentType="Study Guide"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                title="Dummy Titel"
              />
              <EduText color={"bluefont"} size="normal18">
                StudyGuide Card without Image
              </EduText>
              <EduCard
                contentType="Study Guide"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                title="Dummy Titel"
              />
              <EduText color={"bluefont"} size="normal18">
                StudyGuide Carussel Card
              </EduText>
              <EduCardSmall
                contentType="Study Guide"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                title="Dummy Titel"
              />
              <EduText color={"bluefont"} size="normal18">
                ServicesCard
              </EduText>
              <EduCardSmall
                leftSideCard={sideCardImage}
                contentType="Study Guide"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                title="Dummy Titel"
              />
              <EduText color={"bluefont"} size="normal18">
                StudyGuide.Category.Card
              </EduText>
              <CategoryCard
                category={{
                  id: "123542",
                  title: "Dummy Title",
                  imgId: "59eafff4-790d-4571-a846-9eda01f0a30d",
                  subCategories: ["Subtitle 1", "Subtitle 2", "Subtitle 3"],
                  index: 100
                }}
              />
              <EduText color={"bluefont"} size="normal18">
                CategoriesSlider
              </EduText>
              <CategoriesSlider />
              <EduText color={"bluefont"} size="normal18">
                To-Do.Feed.Card
              </EduText>
              <FeedTop />
              <EduText color={"bluefont"} size="normal18">
                EduRadioInput
              </EduText>
              <View style={{ display: "flex", flexDirection: "column" }}>
                {sampleRadios.map(({ name, value, text }) => {
                  return (
                    <EduRadioInput
                      labelTK={text}
                      selected={value === selectedRadio}
                      onPress={() => onPress(value)}
                    />
                  );
                })}
              </View>
              <View>
                <BlurViewWrapper showBlur>
                  <EduText color={"bluefont"} size="normal18">
                    Bluring with EduText Component
                  </EduText>
                </BlurViewWrapper>
                <BlurViewWrapper showBlur>
                  <Text
                    style={{
                      color: theme.colors.bluefont,
                      fontSize: 18
                    }}
                  >
                    Blurred Text with Text React-Native
                  </Text>
                </BlurViewWrapper>
              </View>
            </View>
            <View
              style={{
                marginVertical: theme.grid.gridFactor(2),
                marginHorizontal: theme.grid.gridFactor(4)
              }}
            >
              <EdubaoCheckbox
                text={"I don't know it yet (click me)"}
                checked={checked}
                onPress={onCheckboxChanged}
              />

              <EdubaoCheckbox
                text={"I don't know it yet (underline)"}
                checked={false}
                underline
              />

              <EdubaoCheckbox text={"I don't know it yet (checked)"} checked />

              <EdubaoCheckbox
                disabled
                text={"I don't know it yet (disabled)"}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ServiceCompactCard
                width={windowWidth}
                includedServices={includedServices}
                item={servicePackageItem}
              />
            </View>
          </ScrollView>
        </ScreenWrapper>
      </View>
    </SafeAreaView>
  );
};

export default ComponentScreen;
