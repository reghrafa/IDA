import React from "react";
import {
  View,
  ScrollView,
  FlatList,
  ViewStyle,
  SectionList,
  SectionListRenderItem,
  ListRenderItem,
  SectionListData,
  StatusBar
} from "react-native";
import useTheme from "../../../themes/useTheme";
import { Renderable } from "../../../types_interfaces/types/basetypes";
import Image, { FastImageSource } from "react-native-fast-image";
import { SafeAreaView } from "react-navigation";

export interface IScreenWrapperProps {
  children?: any;
  customBackgroundColor?: string;
  safeAreaBackgroundColor?: string;
  headerProps?: IHeaderProps;
  contentProps?: IContentProps;
}
export type IContentProps =
  | {
      type: "sectionlist";
      data: ISectionProps;
    }
  | {
      type: "flatlist";
      data: IFlatListProps;
    }
  | {
      type: "scrollview";
      data: IScrollViewProps;
    };
export interface ISectionProps {
  sections: any[];
  renderItem: SectionListRenderItem<any>;
  sectionHeader: (info: {
    section: SectionListData<any>;
  }) => React.ReactElement | null;
  headerItem: Renderable;
}
export interface IFlatListProps {
  data: any[];
  renderItem: ListRenderItem<any>;
  headerItem: Renderable;
}
export interface IScrollViewProps {
  content: Renderable;
}
export interface IHeaderProps {
  headerBackground:
    | {
        type: "color";
        data: string;
      }
    | {
        type: "image";
        data: FastImageSource;
      };
  height: number;
  content: Renderable;
}

const ScreenWrapper = (props: IScreenWrapperProps) => {
  const theme = useTheme();

  let header = null;
  let content = props.children;
  let headerheight = 0;
  if (props.headerProps) {
    headerheight = props.headerProps.height;
    const staticHeaderStyle: ViewStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: headerheight
    };
    if (props.headerProps.headerBackground.type === "color") {
      header = (
        <View
          style={{
            ...staticHeaderStyle,
            backgroundColor: props.headerProps.headerBackground.data
          }}
        />
      );
    } else if (props.headerProps.headerBackground.type === "image") {
      header = (
        <Image
          style={staticHeaderStyle}
          source={props.headerProps.headerBackground.data}
        />
      );
    }
  }
  if (props.contentProps) {
    if (props.contentProps.type === "sectionlist") {
      content = (
        <SectionList
          renderSectionHeader={props.contentProps.data.sectionHeader}
          sections={props.contentProps.data.sections}
          ListHeaderComponent={props.contentProps.data.headerItem}
          renderItem={props.contentProps.data.renderItem}
        />
      );
    } else if (props.contentProps.type === "flatlist") {
      content = (
        <FlatList
          data={props.contentProps.data.data}
          ListHeaderComponent={props.contentProps.data.headerItem}
          renderItem={props.contentProps.data.renderItem}
        />
      );
    } else if (props.contentProps.type === "scrollview") {
      content = (
        <ScrollView>
          {props.children && props.children}
          {props.contentProps.data.content}
        </ScrollView>
      );
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: props.safeAreaBackgroundColor || theme.colors.light
      }}
      forceInset={{ bottom: "never" }}
    >
      <StatusBar backgroundColor={theme.colors.primary} />
      {header}
      <View
        style={{
          backgroundColor: props.customBackgroundColor || theme.colors.light,
          flex: 1
        }}
      >
        <View style={{ flex: 1 }}>{content}</View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
