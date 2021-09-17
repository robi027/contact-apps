import React from "react";
import { StackNavigator } from 'react-navigation';
import { register } from "react-native-bundle-splitter";
import SplashScreen from "../screen/SplashScreen";
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";

const MainNavigation = StackNavigator({
  SplashScreen: {
    screen: (props) => <SplashScreen {...props}/>
  },
  HomeScreen: {
    screen: (props) => <HomeScreen {...props}/>
  },
  ProfileScreen: {
    screen: (props) => <ProfileScreen {...props}/>
  },
}, {
  initialRouteName: 'HomeScreen',
  headerMode: "none",
});

export default MainNavigation;
