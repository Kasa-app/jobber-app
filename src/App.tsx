import React from 'react';
import {NavigatorContainer} from './context/navigation/navigator-container';
import {Provider} from 'react-redux';
import store from './redux/store';
import {enableLatestRenderer} from 'react-native-maps';

const App = () => {
  enableLatestRenderer();
  return (
    <Provider store={store}>
      <NavigatorContainer />
    </Provider>
  );
};

export default App;
