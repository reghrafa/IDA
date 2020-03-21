import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Ambassador Hub</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
