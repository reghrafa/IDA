import React from "react";
import EduText from "../../atomic/text/EduText";
import useTheme from "../../../../themes/useTheme";

export interface IFeedListHeader {
  translationKey?: string;
  title?: string;
}

const FeedListHeader = (props: IFeedListHeader) => {
  const theme = useTheme();
  return (
    <EduText
      translationKey={props.translationKey}
      color="primary"
      size="large21"
      style={{
        paddingHorizontal: theme.grid.gridFactor(1.5),
        /*         paddingTop: theme.grid.gridFactor(1.5), */
        paddingBottom: theme.grid.gridFactor(0.5)
      }}
    >
      {props.title ? props.title : undefined}
    </EduText>
  );
};

export default FeedListHeader;
