import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import EduText from "../../atomic/text/EduText";
import TodoPath, { TodoPathSpecial, CollapsedTodoPath } from "./TodoPath";
import useTheme from "../../../../themes/useTheme";
import FastImage from "react-native-fast-image";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import { observer } from "mobx-react";
import Arrow from "../../../../assets/images/Arrow";

export interface ITodoCardProps {
  id: string;
  prevTodoID: string;
  type: "card" | "switch";
  action?: () => void;
  title?: string;
  text?: string;
  first?: boolean;
  firstInSection?: boolean;
  last?: boolean;
  lastInSection?: boolean;
  side: "left" | "right";
  img?: string;
  sectionIndex?: number;
}

const TodoCard = (props: ITodoCardProps) => {
  const { rootStore } = useStore();
  const { width } = Dimensions.get("window");
  const theme = useTheme();
  const margin = theme.grid.gridFactor(1.5);
  const w = width - margin * 2;
  const imgheight = 128;
  const svgheight = 100;
  const svgwidth = w / 2 + 12;
  const pathColor = rootStore.todoStore.todoChecks.get(props.id)?.checked
    ? theme.colors.primary
    : theme.colors.grey;
  const prevTodoPathColor = rootStore.todoStore.todoChecks.get(props.prevTodoID)
    ?.checked
    ? theme.colors.primary
    : theme.colors.grey;
  let cardTitle = props.title
    ? props.title.length <= 60
      ? props.title
      : props.title
          .trim()
          .substr(0, 57)
          .trim() + "..."
    : undefined;
  let cardText = props.text
    ? props.text.length <= 100
      ? props.text
      : props.text
          .trim()
          .substr(0, 97)
          .trim() + "..."
    : undefined;
  const onCheckPress = () => {
    if (rootStore.todoStore.todoChecks.get(props.id)?.checked) {
      rootStore.todoStore.uncheck(props.id);
    } else {
      rootStore.todoStore.check(props.id);
    }
    //forceUpdate(); // TODO: Somehow mobx doesnt reload so i do it manually for now. Should be investigated.
  };
  if (props.type === "card") {
    return (
      <View
        style={{
          flexDirection: "column",
          marginTop:
            !props.firstInSection &&
            rootStore.todoStore.todoSectionsCollapsState.get(
              "" + props.sectionIndex
            )?.collapsed
              ? 4
              : 0,
          marginBottom:
            !props.lastInSection &&
            rootStore.todoStore.todoSectionsCollapsState.get(
              "" + props.sectionIndex
            )?.collapsed
              ? 4
              : 0
        }}
      >
        {props.firstInSection && !props.first && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: props.side === "left" ? "flex-start" : "flex-end",
              marginHorizontal: margin
            }}
          >
            <TodoPathSpecial
              dir={props.side === "left" ? "rtl" : "ltr"}
              width={svgwidth}
              height={svgheight}
              color={pathColor}
            />
          </View>
        )}
        <View style={{ flexDirection: "row" }}>
          {props.side === "left" &&
            (rootStore.todoStore.todoSectionsCollapsState.get(
              "" + props.sectionIndex
            )?.collapsed ? (
              <CollapsedTodoPath
                onPress={onCheckPress}
                begin={props.first}
                active={!!rootStore.todoStore.todoChecks.get(props.id)?.checked}
                style={{ marginLeft: theme.grid.gridFactor(2) }}
                width={theme.grid.gridFactor(1)}
                color={pathColor}
                backgroundColor={theme.colors.lightest}
                checkColor={theme.colors.lightest}
              />
            ) : (
              <TodoPath
                onPress={onCheckPress}
                begin={props.first}
                active={!!rootStore.todoStore.todoChecks.get(props.id)?.checked}
                style={{ marginLeft: theme.grid.gridFactor(1.5) }}
                width={theme.grid.gridFactor(1.5)}
                color={pathColor}
                backgroundColor={theme.colors.lightest}
                checkColor={theme.colors.lightest}
                prevTodoColor={
                  props.firstInSection ? pathColor : prevTodoPathColor
                }
              />
            ))}
          {rootStore.todoStore.todoSectionsCollapsState.get(
            "" + props.sectionIndex
          )?.collapsed ? (
            <View
              style={{
                borderRadius: theme.grid.gridFactor(0.5),
                height: theme.grid.gridFactor(1),
                marginHorizontal: theme.grid.gridFactor(1),
                backgroundColor: rootStore.todoStore.todoChecks.get(props.id)
                  ?.checked
                  ? theme.colors.primary
                  : theme.colors.lightest,
                flex: 1,
                ...theme.shadows.default
              }}
            >
              <EduText
                style={{
                  height: theme.grid.gridFactor(1),
                  marginRight: theme.grid.gridFactor(1),
                  marginLeft: theme.grid.gridFactor(1),
                  textAlignVertical: "center"
                }}
                color={
                  rootStore.todoStore.todoChecks.get(props.id)?.checked
                    ? "lightest"
                    : "primary"
                }
                size="tiniest9"
                fontWeight="bold"
                numberOfLines={1}
              >
                {cardTitle}
              </EduText>
            </View>
          ) : (
            <View
              style={{
                borderRadius: theme.grid.gridFactor(1),
                marginVertical: theme.grid.gridFactor(0.5),
                marginHorizontal: theme.grid.gridFactor(1),
                backgroundColor: rootStore.todoStore.todoChecks.get(props.id)
                  ?.checked
                  ? theme.colors.primary
                  : theme.colors.lightest,
                flex: 1,
                ...theme.shadows.default
              }}
            >
              <TouchableOpacity onPress={props.action}>
                <View
                  style={{
                    height: theme.grid.gridFactor(8.5),
                    backgroundColor: "transparent",
                    padding: theme.grid.gridFactor(1)
                  }}
                >
                  <EduText
                    style={{
                      height: theme.grid.gridFactor(3),
                      marginRight: theme.grid.gridFactor(1.5)
                    }}
                    color={
                      rootStore.todoStore.todoChecks.get(props.id)?.checked
                        ? "lightest"
                        : "primary"
                    }
                    size="small16"
                    fontWeight="bold"
                  >
                    {cardTitle}
                  </EduText>
                  <EduText
                    style={{
                      marginBottom: theme.grid.gridFactor(0.5)
                    }}
                    color={
                      rootStore.todoStore.todoChecks.get(props.id)?.checked
                        ? "lightest"
                        : "bluefont"
                    }
                    size="smallest12"
                  >
                    {cardText}
                  </EduText>
                  <View
                    style={{
                      top: theme.grid.gridFactor(1.5),
                      right: theme.grid.gridFactor(1),
                      position: "absolute",
                      height: theme.grid.gridFactor(1),
                      width: theme.grid.gridFactor(1)
                    }}
                  >
                    <Arrow
                      height={theme.grid.gridFactor(0.75)}
                      width={theme.grid.gridFactor(0.75)}
                      color={
                        rootStore.todoStore.todoChecks.get(props.id)?.checked
                          ? theme.colors["lightest"]
                          : theme.colors["primary"]
                      }
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          {props.side === "right" &&
            (rootStore.todoStore.todoSectionsCollapsState.get(
              "" + props.sectionIndex
            )?.collapsed ? (
              <CollapsedTodoPath
                onPress={onCheckPress}
                begin={props.first}
                active={!!rootStore.todoStore.todoChecks.get(props.id)?.checked}
                style={{ marginRight: theme.grid.gridFactor(2) }}
                width={theme.grid.gridFactor(1)}
                color={pathColor}
                backgroundColor={theme.colors.lightest}
                checkColor={theme.colors.lightest}
              />
            ) : (
              <TodoPath
                onPress={onCheckPress}
                begin={props.first}
                active={!!rootStore.todoStore.todoChecks.get(props.id)?.checked}
                style={{ marginRight: theme.grid.gridFactor(1.5) }}
                width={theme.grid.gridFactor(1.5)}
                color={pathColor}
                backgroundColor={theme.colors.lightest}
                checkColor={theme.colors.lightest}
                prevTodoColor={
                  props.firstInSection ? pathColor : prevTodoPathColor
                }
              />
            ))}
        </View>
        {props.lastInSection && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: props.side === "left" ? "flex-start" : "flex-end",
              marginHorizontal: margin
            }}
          >
            <TodoPathSpecial
              dir={props.side === "left" ? "ltr" : "rtl"}
              width={svgwidth}
              height={svgheight}
              color={pathColor}
              button={
                rootStore.todoStore.todoSectionsCollapsState.get(
                  "" + props.sectionIndex
                )?.collapsed
                  ? "plus"
                  : "minus"
              }
              buttonAction={
                rootStore.todoStore.todoSectionsCollapsState.get(
                  "" + props.sectionIndex
                )?.collapsed
                  ? () => rootStore.todoStore.expand(props.sectionIndex || 0)
                  : () => rootStore.todoStore.collapse(props.sectionIndex || 0)
              }
            />
          </View>
        )}
      </View>
    );
  }
  if (props.type === "switch") {
    return (
      <View
        style={{ marginHorizontal: margin, flex: 1, flexDirection: "column" }}
      >
        <FastImage
          style={{
            alignSelf: "center",
            width: imgheight,
            height: imgheight
          }}
          source={{
            uri: "https://cloud.squidex.io/api/assets/edubao/" + props.img
          }}
        />
      </View>
    );
  }
  return null;
};

export default observer(TodoCard);
