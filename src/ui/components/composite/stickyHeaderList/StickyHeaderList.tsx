import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';
import IStickyHeaderListProps from './IStickyHeaderListProps';

const StickyHeaderList: React.FC<IStickyHeaderListProps> = ({
  children, header, backgroundLayer
}) => {
  const [titleTopPositionY, setTitleTopPositionY] = useState<number>(0);
  const [titleHeight, setTitleHeight] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(0);
  return (
    <View style={{flex: 1}}>
      {backgroundLayer}
      <View style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, left: 0
      }}
      >
        {header(opacity)}
        <ScrollView
          scrollEventThrottle={16}
          style={{flex: 1}}
          onScroll={(e): void => {
            const {y} = e.nativeEvent.contentOffset;
            if(y > titleTopPositionY + titleHeight){
              if(opacity !== 1){
                setOpacity(1);
              }
              return;
            }
            if(y < titleTopPositionY){
              if(opacity !== 0){
                setOpacity(0);
              }
              return;
            }
            const normalizeY = y - titleTopPositionY;
            if(normalizeY === 0){
              return;
            }

            setOpacity(normalizeY / titleHeight);
          }}
        >
          {children((e): void => {
            setTitleTopPositionY(e.nativeEvent.layout.y);
            setTitleHeight(e.nativeEvent.layout.height);
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default StickyHeaderList;