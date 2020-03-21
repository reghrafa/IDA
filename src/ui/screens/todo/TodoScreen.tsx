import React from "react";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import { observer } from "mobx-react";
import { View } from "react-native";
import TodoCard, {
  ITodoCardProps
} from "../../components/composite/todo/TodoCard";
import useTheme from "../../../themes/useTheme";

import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import { ISectionedTodo } from "../../../dataLayer/stores/TodoStore";
import EduText from "../../components/atomic/text/EduText";
import ProgressBar from "../../components/atomic/progressbar/ProgressBar";
import StickyHeaderAfterScrollingDown from "../../containers/layout/StickyHeaderAfterScrollingDownWrapper/StickyHeaderAfterScrollingDown";
import { NAVIGATION_PATH_TODO_DETAIL } from "../../../Constants";
import { sendNavigationEvent } from "../../../helpers/analyticsEvents";

const TodoScreen = () => {
  const theme = useTheme();
  const { rootStore } = useStore();
  const { navigate } = useNavigation();
  const { routeName, params } = useNavigationState();

  if (rootStore.todoStore.initStatus === "empty") {
    rootStore.todoStore.initWithLanguage("en");
  }

  let currentSide: "left" | "right" = "left";
  let first = true;
  let sectionDone = true;
  let prevID: string;

  /**
   * HEADER
   */

  const header: (title?: string, titleTK?: string) => JSX.Element = (
    title,
    titleTK
  ) => (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: theme.grid.gridFactor(5.25)
        }}
      >
        <View style={{ justifyContent: "flex-end" }}>
          <EduText fontWeight="bold" size="small16" translationKey={titleTK}>
            {title}
          </EduText>
          <EduText fontWeight="bold" size="largest32">
            {rootStore.todoStore.progress + "%"}
          </EduText>
        </View>
        <View
          style={{
            height: 84,
            width: 95,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          {/* <NotFound height={84} width={95} /> */}
        </View>
      </View>
      <ProgressBar
        style={{
          marginVertical: theme.grid.gridFactor(1),
          height: theme.grid.gridFactor(1)
        }}
        progress={rootStore.todoStore.progress}
      />
    </View>
  );

  const stickyHeaderSection: ((opacity?: number) => JSX.Element)[] = [
    opacity => (
      <EduText
        size="smaller14"
        fontWeight="bold"
        style={{
          marginVertical: theme.grid.gridFactor(1),
          opacity: opacity
        }}
      >
        {rootStore.todoStore.progress + "%"}
      </EduText>
    ),
    opacity => (
      <ProgressBar
        style={{
          opacity: opacity,
          marginHorizontal: theme.grid.gridFactor(1),
          flex: 1
        }}
        progress={rootStore.todoStore.progress}
      />
    )
  ];

  /**
   * SORTING PROCESS
   */

  const todoCardDataList: ITodoCardProps[] = [];
  rootStore.todoStore.sectionedTodoList.forEach(
    (todoSection: ISectionedTodo, index: number) => {
      // Every Section
      sectionDone = true;
      todoSection.todos
        .sort((a, b) => a.index - b.index)
        .forEach((t, i, arr) => {
          // Every Todo
          if (!rootStore.todoStore.todoChecks.get(t.id)?.checked) {
            sectionDone = false;
          }
          todoCardDataList.push({
            type: "card",
            action: () => {
              sendNavigationEvent(
                routeName,
                params || {},
                NAVIGATION_PATH_TODO_DETAIL,
                { todoId: t.id }
              );
              navigate(NAVIGATION_PATH_TODO_DETAIL, { todoId: t.id });
            },
            first: first,
            side: currentSide,
            text: t.cardText,
            title: t.title,
            id: t.id,
            prevTodoID: prevID || t.id,
            firstInSection: i === 0,
            lastInSection: i === arr.length - 1,
            sectionIndex: index
          });
          first = false;
          prevID = t.id;
        });
      todoCardDataList.push({
        type: "switch",
        img: sectionDone
          ? todoSection.imageActive
          : todoSection.imageMonochrome,
        side: currentSide,
        last: index === rootStore.todoStore.sectionedTodoList.length - 1,
        id: "", // dummy id because it is required
        prevTodoID: "" // dummy id because it is required
      });
      if (currentSide === "left") {
        currentSide = "right";
      } else if (currentSide === "right") {
        currentSide = "left";
      }
    }
  );

  /**
   * RENDERING
   */

  return (
    <StickyHeaderAfterScrollingDown
      SafeAreaBackgroundColor="secondary"
      SafeAreaFlex={1}
      titleTK="guide.todo.title"
      contentBackgroundColor="light"
      backgroundColor="secondary"
      imageUri={"guide.todo.png"}
      no30percentOverlay
      alternativeHeaderSection={header}
      optionalStickyHeaderSections={stickyHeaderSection}
      noBookmark
      noLink
    >
      <View>
        {rootStore.todoStore.initStatus === "done" &&
          todoCardDataList.map((e: ITodoCardProps, i) => (
            <TodoCard
              id={e.id}
              prevTodoID={e.prevTodoID}
              key={i}
              action={e.action}
              first={e.first}
              last={e.last}
              img={e.img}
              side={e.side}
              text={e.text}
              title={e.title}
              type={e.type}
              firstInSection={e.firstInSection}
              lastInSection={e.lastInSection}
              sectionIndex={e.sectionIndex}
            />
          ))}
      </View>
    </StickyHeaderAfterScrollingDown>
  );
};

export default observer(TodoScreen);
