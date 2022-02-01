import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PlaceNavigator } from './navigation/PlaceNavigator';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const App = () => {
  return (
    <NavigationContainer>
      <PlaceNavigator />
    </NavigationContainer>
  );
}

export default App;

