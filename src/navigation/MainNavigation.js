import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { register } from "react-native-bundle-splitter";
import HomeBridge from "../screen/Home/HomeBridge"

const MainNavigation = createStackNavigator({
  'SplashScreen': register({ loader: () =>  import("../screen/SplashScreen") }),
  'HomeScreen': HomeBridge,
  'ProfileScreen': register({ loader: () =>  import("../screen/ProfileScreen") }),
}, {
  initialRouteName: 'HomeScreen',
  headerMode: "none"
});

export default createAppContainer(MainNavigation);
