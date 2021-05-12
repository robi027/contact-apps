import React, { Component } from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import colors from "../config/colors";
import { height, width } from "../config/screenDimension";
import PropTypes from "prop-types";

class VLoading extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
  }
  
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

export default VLoading;
