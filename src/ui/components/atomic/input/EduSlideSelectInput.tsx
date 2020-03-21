import React, { useState } from "react";
import EduText from "../text/EduText";
import { View, TouchableOpacity } from "react-native";
import useTheme from "../../../../themes/useTheme";
import { Colorstrings } from "../../../../themes/EdubaoTheme";
import { useSpring, animated } from "react-spring";

export interface IEduSlideSelectInput {
  label?: string;
  labelTK?: string;
  labelColor?: Colorstrings;
  value: string;
  options: string[];
  onChange?: (selectedText: string) => void;
}

const EduSlideSelectInput: React.FC<IEduSlideSelectInput> = ({
  label,
  labelTK,
  labelColor,
  value,
  options,
  onChange
}) => {
  const theme = useTheme();
  const indexFromValue = options.findIndex(s => s === value);
  const [index, setindex] = useState(indexFromValue === -1 ? 0 : indexFromValue);
  const widthOfPart: number = 100 / (options.length || 1);
  const leftDistance = useSpring({
    left: `${index * widthOfPart}%`
  });
  const AView = animated(View);

  return (
    <View
      style={{
        marginHorizontal: theme.grid.gridFactor(2),
        marginBottom: theme.grid.gridFactor(30 / 16)
      }}
    >
      {labelTK ||
        (label && (
          <EduText
            color={labelColor || "primary"}
            size="tiny10"
            style={{
              height: theme.grid.gridFactor(14 / 16),
              marginBottom: theme.grid.gridFactor(4 / 16),
              marginLeft: theme.grid.gridFactor(1)
            }}
            translationKey={labelTK}
          >
            {label}
          </EduText>
        ))}

      <View
        style={{
          height: 48,
          borderRadius: 16,
          flexDirection: "row"
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: 48,
            width: "100%",
            backgroundColor: theme.colors.lightest,
            borderRadius: 16,
            opacity: 0.5
          }}
        />
        <AView
          style={[
            {
              position: "absolute",
              width: `${widthOfPart}%`,
              height: 48,
              left: `${index * widthOfPart}%`,
              borderRadius: 16,
              backgroundColor: theme.colors.lightest
            },
            leftDistance
          ]}
        />
        {options.map((o, i) => (
          <TouchableOpacity
            key={i}
            style={{
              height: 48,
              justifyContent: "center",
              alignItems: "center",
              flex: 1
            }}
            onPress={() => {
              onChange && onChange(o);
              setindex(i);
            }}
          >
            <EduText
              style={{
                textAlignVertical: "center",
                textAlign: "center"
              }}
              color="primary"
            >
              {o}
            </EduText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default EduSlideSelectInput;
