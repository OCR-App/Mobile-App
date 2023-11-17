import React, {useEffect} from 'react';

import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './store/store';
import Loading from './components/Loading';
import Toast from 'react-native-toast-message';
import {toastConfig} from './components/Toast';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <Provider store={store}>
      <Loading />
      <AppNavigator />
      <Toast config={toastConfig} />
    </Provider>
  );
}

export default App;
