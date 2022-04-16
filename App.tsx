import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import {MainNavigation, BottomBar} from './src/navigation';
import store from './src/redux/configureStore'

const App: () => JSX.Element = () => {

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
