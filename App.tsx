import React from 'react';
import {Provider} from 'mobx-react';
import RootStore from './src/dataLayer/stores/RootStore';
import Navigation from './src/navigation/Navigation';

const App: React.FC = () => {
  const rootStore = RootStore.create();
  return (
    <Provider store={rootStore}>
      <Navigation />
    </Provider>
  );
};

export default App;
