import React from 'react';
import Text from '../../components/text/Text';
import ScreenWrapper from '../../wrapper/ScreenWrapper/ScreenWrapper';
//@ts-ignore
// import {StreamApp, FlatFeed} from 'react-native-activity-feed';

const FeedScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <Text>FeedScreen</Text>
      {/* <StreamApp apiKey="awfsx32wrrck" appId="72529" token={null}>
        <FlatFeed />
      </StreamApp> */}
    </ScreenWrapper>
  );
};

export default FeedScreen;
