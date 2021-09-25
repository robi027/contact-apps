import React, { Component, Suspense } from "react";
import { SafeAreaView } from "react-native";
import MainNavigation from "./MainNavigation";

export default class Navigation extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Suspense fallback={null}>
          <MainNavigation />
        </Suspense>
      </SafeAreaView>
    );
  }
}
