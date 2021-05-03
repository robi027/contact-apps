import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "../config/styles";

export default class SplashScreen extends Component {
  render() {
    return (
      <View>
        <Text style={styles.t12Regular}>Robi</Text>
      </View>
    );
  }
}
