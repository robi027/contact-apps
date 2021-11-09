/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import ProfileScreen from "./src/screen/ProfileScreen"
import SplashScreen from "./src/screen/SplashScreen";
import Navigation from "./src/navigation/index";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./src/reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

const AppContainer = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const AppContainerTwo = () => {
  return (
    <Provider store={store}>
      <SplashScreen />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
AppRegistry.registerComponent('ProfileScreen', () => ProfileScreen);
AppRegistry.registerComponent('SplashScreen', () => AppContainerTwo);
