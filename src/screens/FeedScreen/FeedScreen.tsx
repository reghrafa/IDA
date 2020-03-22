import React from 'react';
import Text from '../../components/text/Text';
import ScreenWrapper from '../../wrapper/ScreenWrapper/ScreenWrapper';
import Color from '../../helper/Color';
//@ts-ignore
// import {StreamApp, FlatFeed} from 'react-native-activity-feed';

const FeedScreen: React.FC = () => {
  return (
    <ScreenWrapper
      color={Color.fromHEX('#242424')}
      statusbarStyle="light-content">
      <Text color={Color.fromHEX('#844242')}>FeedScreen</Text>
      {/* <StreamApp apiKey="awfsx32wrrck" appId="72529" token={null}>
        <FlatFeed />
      </StreamApp> */}
    </ScreenWrapper>
  );
};

export default FeedScreen;
