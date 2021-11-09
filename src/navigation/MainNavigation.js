import React from "react";
import { StackNavigator } from 'react-navigation';
import { register } from "react-native-bundle-splitter";
import SplashScreen from "../screen/SplashScreen";
import ProfileScreen from "../screen/ProfileScreen";
import { withSplitter } from "../utils/Splitter";

const MainNavigation = StackNavigator({
  SplashScreen: {
    screen: (props) => <SplashScreen {...props}/>
  },
  HomeScreen: {
    screen: withSplitter(() => import("../screen/Home/HomeContainer"))
  },
  ProfileScreen: {
    screen: (props) => <ProfileScxreen {...props}/>
  },
}, {
  initialRouteName: 'HomeScreen',
  headerMode: "none",
});

export default MainNavigation;
