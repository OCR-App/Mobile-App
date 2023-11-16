import React from 'react';

import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './store/store';
import Loading from './components/Loading';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Loading />
      <AppNavigator />
    </Provider>
  );
}

export default App;
