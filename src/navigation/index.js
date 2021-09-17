import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import MainNavigation from "./MainNavigation";
import { investigate } from 'react-native-bundle-splitter/dist/utils';
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    console.log(`module.exports = ${JSON.stringify(investigate().loaded.sort())};`);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <MainNavigation />
      </SafeAreaView>
    );
  }
}
