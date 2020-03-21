import React, { useState } from "react";
import EduText from "../text/EduText";
import { View, Modal, Dimensions, TouchableOpacity } from "react-native";
import useTheme from "../../../../themes/useTheme";
import { useNavigation } from "react-navigation-hooks";
import EduTextInput from "./EduTextInput";
import BlurViewWrapper from "../../../containers/layout/BlurViewWrapper";
import Arrow from "../../../../assets/images/Arrow";

export interface IEduDropdownInput {
  placeholderTK?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
  values: string[];
  labelTK?: string;
  label?: string;
}

const EduDropdownInput: React.FC<IEduDropdownInput> = ({
  onChange,
  values,
  label,
  labelTK,
  placeholder,
  placeholderTK,
  value
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currVal, setCurrVal] = useState("");
  const {} = useNavigation();
  const dim = Dimensions.get("screen");

  return (
    <View
      style={{
        marginHorizontal: theme.grid.gridFactor(2),
        marginBottom: theme.grid.gridFactor(30 / 16)
      }}
    >
      {!!labelTK ||
        (!!label && (
          <EduText
            color="lightest"
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

      <TouchableOpacity
        onPress={() => {
          setCurrVal("");
          onChange("");
          setOpen(true);
        }}
      >
        <View
          style={{
            paddingHorizontal: theme.grid.gridFactor(1),
            paddingVertical: theme.grid.gridFactor(13 / 16),
            borderRadius: theme.grid.gridFactor(1),
            backgroundColor: theme.colors.lightest,
            height: 48,
            flexDirection: "row"
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => setOpen(false)}
          >
            {/* Blur seems to not be working in android */}
            <BlurViewWrapper blurAmount={10} showBlur>
              <>
                <View
                  style={{
                    position: "absolute",
                    width: dim.width,
                    height: dim.height,
                    backgroundColor: theme.colors.primary,
                    opacity: 0.3
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    marginVertical: 128,
                    marginHorizontal: 32
                  }}
                >
                  <EduTextInput
                    label={label}
                    backgroundColor="lightest"
                    textColor="primary"
                    onChange={e => {
                      setCurrVal(e);
                      if (values.includes(e)) {
                        onChange(e);
                        setOpen(false);
                      }
                    }}
                    value={currVal}
                    noMargin
                  />
                  <View
                    style={{
                      backgroundColor: theme.colors.lightest,
                      borderRadius: 16,
                      marginTop: 8
                    }}
                  >
                    {values
                      .filter(e => e.includes(currVal))
                      .map((v, i) => (
                        <View style={{ flexDirection: "row" }}>
                          <View
                            style={{
                              backgroundColor: theme.colors.primary,
                              height: 24,
                              width: 24,
                              borderRadius: 12,
                              marginVertical: 12,
                              marginLeft: 16
                            }}
                          />
                          <EduText
                            style={{
                              margin: 12,
                              height: 24
                            }}
                            onPress={() => {
                              onChange(v);
                              setOpen(false);
                            }}
                            key={i}
                            color="primary"
                          >
                            {v}
                          </EduText>
                        </View>
                      ))}
                  </View>
                </View>
              </>
            </BlurViewWrapper>
          </Modal>
          {!!value && (
            <View
              style={{
                backgroundColor: theme.colors.primary,
                height: 24,
                width: 24,
                borderRadius: 12
              }}
            />
          )}
          <EduText
            style={{
              marginLeft: !!value ? 12 : 0,
              height: 24
            }}
            color={!!value ? "primary" : "grey"}
          >
            {value || placeholder || label}
          </EduText>
          <View style={{ flex: 1 }} />
          <View
            style={{
              rotation: 90
            }}
          >
            <Arrow color={theme.colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EduDropdownInput;
