import React from "react";
import { View, Text, SafeAreaView,  } from "react-native";
import styles from "../config/styles";
import { connect } from "react-redux";

class SplashScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.t12Regular}>Robi</Text>
      </View>
    );
  }
}

const mapStateToProp = (state) => {
  console.log(state);
  return state;
}

export default connect(mapStateToProp, null)(SplashScreen)
