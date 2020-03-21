import React from 'react';
import { View } from 'react-native';
import IAnnotatedViewProps from './IAnnotatedViewProps';
import Text from '../../baseLayer/text/Text';
import useTheme from '../../theme/hooks/UseTheme';

const AnnotatedView: React.FC<IAnnotatedViewProps> = ({
  title, children, noPadding
}) => {
  const theme = useTheme();
  return (
    <View>
      <View style={{paddingHorizontal: 16}}>
        <Text style={{
          color: theme.colors.primary, marginBottom: 4, fontFamily: theme.typography.fontFamilies.bold, fontSize: 12
        }}
        >
          {title}
        </Text>
      </View>
      <View style={{
        borderRadius: 16, backgroundColor: 'white', paddingHorizontal: noPadding? undefined : 16,paddingVertical: noPadding? undefined : 14
      }}
      >
        {children}
      </View>
    </View>
  );
};

export default AnnotatedView;