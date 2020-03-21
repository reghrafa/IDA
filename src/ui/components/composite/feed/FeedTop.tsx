import React from "react";
import EduSearchInput from "../../atomic/input/EduSearchInput";
import EduText from "../../atomic/text/EduText";
import { View, TouchableOpacity } from "react-native";
import FeedListHeader from "./FeedListHeader";
import { EduButton } from "../../atomic/button/EduButton";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import useTheme from "../../../../themes/useTheme";
import EduTodoCard from "../card/EduTodoCard";

import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { observer } from "mobx-react";
import EduCard from "../card/EduCard";
import CategoriesSlider from "../slider/CategoriesSlider";
import {
  NAVIGATION_PATH_CATEGORIES,
  NAVIGATION_PATH_TODO
} from "../../../../Constants";
import { sendNavigationEvent } from "../../../../helpers/analyticsEvents";

export interface IFeedTopProps {}

const FeedTop = (props: IFeedTopProps) => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();
  const { rootStore } = useStore();
  const loggedIn = rootStore.user.signInState === "loggedIn";
  const nextNotDoneToDo = rootStore.todoStore.nextNotDoneTodo;
  return (
    <View
      style={{
        backgroundColor: theme.colors.light
      }}
    >
      <View
        style={{
          borderBottomRightRadius: theme.grid.gridFactor(1),
          borderBottomLeftRadius: theme.grid.gridFactor(1),
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 208,
          backgroundColor: theme.colors.primary
        }}
      />
      <View>
        <EduSearchInput
          onChange={rootStore.ui.updateFeedSearchText}
          value={rootStore.ui.feedSearchText}
        />
        <EduText
          fontWeight="bold"
          color="lightest"
          size="large21"
          style={{
            paddingHorizontal: theme.grid.gridFactor(1.5),
            paddingBottom: theme.grid.gridFactor(1)
          }}
          translationKey="guide.feed.text.welcome"
          interpolations={{
            "0_placeholder": rootStore.user.name || ""
          }}
        />
        {loggedIn ? (
          nextNotDoneToDo ? (
            <TouchableOpacity
              onPress={() => {
                sendNavigationEvent(
                  routeName,
                  params || {},
                  NAVIGATION_PATH_TODO,
                  {}
                );
                navigate(NAVIGATION_PATH_TODO);
              }}
            >
              <EduTodoCard
                //title="Confirm your email address"
                title={nextNotDoneToDo.title}
                //text="Please visit the link we send you. Afterwards you can start using your."
                text={nextNotDoneToDo.teaserText}
                progress={rootStore.todoStore.progress}
              />
            </TouchableOpacity>
          ) : null
        ) : (
          <TouchableOpacity onPress={() => rootStore.user.signIn({})}>
            <EduCard
              contentType="Next up"
              textTK="feed.nextupcard.text"
              titleTK="feed.nextupcard.title"
            />
          </TouchableOpacity>
        )}
        <FeedListHeader translationKey="guide.feed.categories.title" />
        <CategoriesSlider />
        {/* TRANSLATION-STRING */}
        <EduButton
          style={{
            marginLeft: theme.grid.gridFactor(1.5),
            marginBottom: theme.grid.gridFactor(1)
          }}
          onPress={() => {
            sendNavigationEvent(
              routeName,
              params || {},
              NAVIGATION_PATH_CATEGORIES,
              {}
            );
            navigate(NAVIGATION_PATH_CATEGORIES);
          }}
          fontWeight="regular"
          inline
          fontSize="small16"
          translationKey="guide.feed.seeallsubcategories.label"
        />
      </View>
    </View>
  );
};

export default observer(FeedTop);
