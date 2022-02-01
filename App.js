import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//Redux Store
import { Provider } from 'react-redux';
import store from './store/store';

//Navigation
import { PlaceNavigator } from './navigation/PlaceNavigator';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlaceNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

