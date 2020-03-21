import React from "react";
import { View } from "react-native";
import EduText from "../../atomic/text/EduText";
import ProgressBar from "../../atomic/progressbar/ProgressBar";
import useTheme from "../../../../themes/useTheme";
import EduCard from "./EduCard";

export interface IEduTodoCardProps {
  progress: number;
  title: string;
  text: string;
  noMargin?: boolean;
}

const EduTodoCard = (props: IEduTodoCardProps) => {
  const theme = useTheme();
  const upperCard = (
    <View
      style={{
        borderTopRightRadius: theme.grid.gridFactor(1),
        borderTopLeftRadius: theme.grid.gridFactor(1),
        padding: theme.grid.gridFactor(1),
        backgroundColor: theme.colors.secondary
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: theme.grid.gridFactor(1)
        }}
      >
        <EduText size="largest32" fontWeight="bold">
          To-Do
        </EduText>
        <EduText
          size="largest32"
          fontWeight="bold"
        >{`${props.progress}%`}</EduText>
      </View>
      <ProgressBar progress={props.progress} />
    </View>
  );

  return (
    <EduCard
      contentType="Next up"
      upperCard={upperCard}
      text={props.text}
      title={props.title}
    />
  );
};

export default EduTodoCard;
