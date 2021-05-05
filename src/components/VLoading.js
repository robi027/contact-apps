import React, { Component } from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import colors from "../config/colors";
import { height, width } from "../config/screenDimension";

export default class VLoading extends Component {
  render() {
    return (
      <Modal
        transparent={true}
        animationType={"slide"}
        visible={this.props.visible}
      >
        <View
          style={{
            height: height,
            width: width,
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "absolute",
          }}
        />
        <View
          style={{
            height: height,
            width: width,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.white,
              borderRadius: 8,
              padding: 16,
            }}
          >
            <ActivityIndicator size={50} color={colors.blueSky} />
          </View>
        </View>
      </Modal>
    );
  }
}
