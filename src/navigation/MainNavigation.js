import React from "react";
import { StackNavigator } from 'react-navigation';
import SplashScreen from "../screen/SplashScreen";
import ProfileScreen from "../screen/ProfileScreen";
import { ChunkManager } from '@callstack/repack/client';
import { withSplitter } from '../utils/Splitter';

ChunkManager.configure({
  resolveRemoteChunk: async (chunkId) => {
    return {
      url: ``,
    };
  },
});

const HomeScreen = React.lazy(() => import("../screen/Home/HomeScreen.js"));

const MainNavigation = StackNavigator({
  SplashScreen: {
    screen: (props) => <SplashScreen {...props}/>
  },
  HomeScreen: {
    screen: (props) => <HomeScreen {...props} />
  },
  ProfileScreen: {
    screen: (props) => <ProfileScreen {...props}/>
  },
}, {
  initialRouteName: 'HomeScreen',
  headerMode: "none",
});

export default MainNavigation;
