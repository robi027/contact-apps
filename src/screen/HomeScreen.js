import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { getContact } from "../actions/contact.action";

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getContact();
  }
  render() {
    return (
      <View>
        <Text>Robi</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.CONTACT,
  };
};

export default connect(mapStateToProps, { getContact })(HomeScreen);
