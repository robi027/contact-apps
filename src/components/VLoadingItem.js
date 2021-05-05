import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";
import colors from "../config/colors";

export default class VLoadingItem extends Component {
  render() {
    return (
      <View
        style={{
          height: this.props.height || "100%",
          width: this.props.width || "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={50} color={colors.blueSky} />
      </View>
    );
  }
}
