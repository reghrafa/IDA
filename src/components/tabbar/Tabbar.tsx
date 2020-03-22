import React from 'react';
import Color from '../../helper/Color';
import {Colors} from '../../theme/theme';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../text/Text';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const Tabbar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const style = StyleSheet.create({
    tabbar: {
      flexDirection: 'row',
      backgroundColor: Colors.white.HEX,
    },
    tabbaritem: {
      flex: 1,
      height: 64,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={style.tabbar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const active = index === state.index;
        const color: Color = active ? Colors.blue : Colors.grey;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!active && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            style={style.tabbaritem}
            accessibilityRole="button"
            accessibilityStates={active ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Text color={color}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabbar;
