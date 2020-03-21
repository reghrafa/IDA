import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View, TouchableOpacity, Platform } from "react-native";
import EduText from "../text/EduText";
import { Colorstrings } from "../../../../themes/EdubaoTheme";
import useTheme from "../../../../themes/useTheme";
// @ts-ignore
import moment from "moment/min/moment-with-locales";
import { useStore } from "../../../../dataLayer/stores/hooks/useStore";
import Calendar from "../../../../assets/images/Calendar";

export interface IEduDatePickerProps {
  label?: string;
  labelTK?: string;
  labelColor?: Colorstrings;
  value?: string;
  noMargin?: boolean;
  onChange: (date: string) => void;
}

const EduDatePicker: React.FC<IEduDatePickerProps> = ({
  label,
  labelTK,
  labelColor,
  value,
  noMargin,
  onChange
}) => {
  const theme = useTheme();
  const [date, setDate] = useState(!!value ? new Date(value) : new Date());
  const [open, setOpen] = useState(false);
  const { rootStore } = useStore();
  return (
    <View
      style={{
        marginHorizontal: noMargin ? 0 : theme.grid.gridFactor(2),
        marginBottom: noMargin ? 0 : theme.grid.gridFactor(30 / 16)
      }}
    >
      {(labelTK || label) && (
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
      )}
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View
          style={{
            height: theme.grid.gridFactor(3),
            borderRadius: theme.grid.gridFactor(1),
            backgroundColor: theme.colors.lightest,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <EduText
            style={{
              marginLeft: theme.grid.gridFactor(1),
              textAlignVertical: "center",
              height: theme.grid.gridFactor(3),
              flex: 1
            }}
            color="primary"
          >
            {moment(date)
              .locale(rootStore.settings.language)
              .format("dddd, MMMM Do YYYY")}
          </EduText>
          <View style={{ marginRight: theme.grid.gridFactor(1) }}>
            <Calendar color={theme.colors.primary} height={16} width={16} />
          </View>
        </View>
      </TouchableOpacity>
      {open && (
        <DateTimePicker
          value={date}
          onChange={(e, d) => {
            setOpen(Platform.OS === "ios" ? true : false);
            onChange((d || date).toDateString());
            setDate(d || date);
          }}
        />
      )}
    </View>
  );
};

export default EduDatePicker;
