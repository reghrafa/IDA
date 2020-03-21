import React, { useState } from "react";
import { ITodoType } from "../../../dataLayer/models/TodoType";
import { useStore } from "../../../dataLayer/stores/hooks/useStore";
import { useNavigation } from "react-navigation-hooks";
import { View } from "react-native";
import useTheme from "../../../themes/useTheme";
import EduText from "../../components/atomic/text/EduText";
import Markdown from "react-native-markdown-renderer";
import { generateStyleSheet } from "../../../helpers/markdownhelper";
import EduTextInput from "../../components/atomic/input/EduTextInput";
import { observer } from "mobx-react";
import EduButton from "../../components/atomic/button/EduButton";
import ReadMore from "../../components/composite/slider/ReadMore";
import StickyHeaderAfterScrollingDown from "../../containers/layout/StickyHeaderAfterScrollingDownWrapper/StickyHeaderAfterScrollingDown";
import { sendTodoEvent } from "../../../helpers/analyticsEvents";

const TodoDetailScreen = () => {
  const { rootStore } = useStore();
  const theme = useTheme();
  const { state } = useNavigation();
  const todoId = (state.params && state.params.todoId) || "";
  const [note, setNote] = useState<string>(
    rootStore.todoStore.todoNotes.get(todoId)?.note || ""
  );
  const todo: ITodoType = rootStore.todoStore.todos.list.find(
    e => e.id === todoId
  ) || {
    id: "",
    content: "",
    index: 0,
    tags: [],
    teaserText: "",
    title: ""
  };
  const todoLinkArticle =
    todo.linksToOtherArticles.length != 0
      ? todo.linksToOtherArticles
      : undefined;
  return (
    <StickyHeaderAfterScrollingDown
      SafeAreaBackgroundColor="primary"
      SafeAreaFlex={1}
      title={todo.title}
      category="Todo"
      contentBackgroundColor="light"
      iconColor="lightest"
    >
      <View style={{ paddingHorizontal: theme.grid.gridFactor(1.5) }}>
        <EduText
          color="primary"
          size="small16"
          fontWeight="semibold"
          style={{
            marginBottom: theme.grid.gridFactor(1)
          }}
        >
          {todo.teaserText}
        </EduText>
        <Markdown style={generateStyleSheet(theme)}>{todo.content}</Markdown>
        <EduTextInput
          placeholderTK="textboxes.placeholder.typehere"
          placeholderTextColor="#88a9be"
          labelTK="guide.todo.details.notes.label"
          value={note}
          onChange={e => {
            setNote(e);
            rootStore.todoStore.setNote(e, todoId);
          }}
          noMargin
          height={200}
          multiline
          onBlur={() => sendTodoEvent(todoId, "Note")}
        />
        {rootStore.todoStore.todoChecks.get(todoId)?.checked ? (
          <EduButton
            style={{
              alignSelf: "center",
              marginTop: theme.grid.gridFactor(2.5)
            }}
            width={263}
            feedbacktype="opacity"
            onPress={() => {
              rootStore.todoStore.uncheck(todoId);
            }}
            backgroundColor={theme.colors.tertiary}
            translationKey="guide.todo.details.markasundone.label"
          />
        ) : (
          <EduButton
            style={{
              alignSelf: "center",
              marginTop: theme.grid.gridFactor(2.5)
            }}
            width={263}
            feedbacktype="opacity"
            onPress={() => {
              rootStore.todoStore.check(todoId);
            }}
            translationKey="guide.todo.details.markasdone.label"
          />
        )
        // TODO: forceupdate should not be necessary.
        }
      </View>
      <View
        style={{
          paddingHorizontal: theme.grid.gridFactor(0.5),
          backgroundColor: theme.colors.light
        }}
      >
        <ReadMore
          fixedArticles={todoLinkArticle?.map(e => ({
            id: e?.id,
            title: e?.title,
            teaserText: e?.teaserText
          }))}
        />
      </View>
    </StickyHeaderAfterScrollingDown>
  );
};

export default observer(TodoDetailScreen);
