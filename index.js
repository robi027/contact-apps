/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import Navigation from "./src/navigation/index";
import { name as appName } from "./app.json";

const AppContainer = () => {
  return <Navigation />;
};

AppRegistry.registerComponent(appName, () => AppContainer);
