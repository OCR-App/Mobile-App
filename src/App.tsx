import React from 'react';

import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './store/store';
import Loading from './components/Loading';
import Toast from 'react-native-toast-message';
import {toastConfig} from './components/Toast';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Loading />
      <AppNavigator />
      <Toast config={toastConfig} />
    </Provider>
  );
}

export default App;
