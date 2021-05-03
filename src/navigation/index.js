import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import MainNavigation from "./MainNavigation";

export default class Navigation extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <MainNavigation />
      </SafeAreaView>
    );
  }
}
