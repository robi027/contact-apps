/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
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

AppRegistry.registerComponent(appName, () => AppContainer);
