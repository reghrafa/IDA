import React from "react";
import { View, TouchableOpacity } from "react-native";
import EduText from "../../atomic/text/EduText";
import ProgressBar from "../../atomic/progressbar/ProgressBar";
import theme from "../../../../themes/EdubaoTheme";
import { useNavigation } from "react-navigation-hooks";
import BackArrow from "../../../../assets/images/BackArrow";
import { observer } from "mobx-react";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";

const TodoHeader: React.FC = () => {
  const { goBack } = useNavigation();
  const { rootStore } = useStore();
  return (
    <View style={{ height: theme.grid.gridFactor(12.25) }}>
      {/* height: 64 + 84 + 16 + 16 + 16 */}
      <View
        style={{
          height: theme.grid.gridFactor(4),
          paddingHorizontal: theme.grid.gridFactor(1),
          paddingVertical: theme.grid.gridFactor(0.5)
        }}
      >
        <TouchableOpacity
          onPress={() => goBack()}
          style={{
            alignContent: "center",
            padding: theme.grid.gridFactor(1),
            width: theme.grid.gridFactor(3),
            height: theme.grid.gridFactor(3)
          }}
        >
          <BackArrow height={16} width={16} />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: theme.grid.gridFactor(2) }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            height: theme.grid.gridFactor(5.25)
          }}
        >
          <View style={{ justifyContent: "flex-end" }}>
            <EduText fontWeight="bold" size="small16">
              To-Do`s
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
    </View>
  );
};

export default observer(TodoHeader);
