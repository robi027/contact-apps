import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "../config/styles";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.t12Regular}>Robi</Text>
      </View>
    );
  }
}
