import React, { Component } from "react";
import { Alert } from "react-native";

export default class VAlert {
  static deleteConfimation = (action) => {
    Alert.alert("Info", "Are you sure to delete this data ?", [
      { text: "No", onPress: () => action() },
      { text: "OK" },
    ]);
  };
  static error = (message) => {
    Alert.alert("Error", message, [{ text: "OK" }]);
  };
  static success = (message, navigation) => {
    Alert.alert("Success", message, [
      { text: "OK", onPress: () => navigation.popToTop() },
    ]);
  };
}
