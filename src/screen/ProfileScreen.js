import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import {
  addContact,
  getContact,
  updateContact,
  deleteContact,
} from "../actions/contact.action";
import VLoading from "../components/VLoading";
import colors from "../config/colors";
import images from "../config/images";
import { width } from "../config/screenDimension";
import styles from "../config/styles";
import { isEmpty } from "../utils/Utils";

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    const { params } = this.props.route;
    this.state = {
      id: params?.id || "",
      firstName: params?.firstName || "",
      lastName: params?.lastName || "",
      age: params?.age.toString() || "",
      photo: params?.photo || "",
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 300,
            backgroundColor: colors.blueSky,
            width: width,
            paddingTop: 100,
            top: 0,
            alignItems: "center",
            position: "absolute",
          }}
        />
        {this.header()}
        {this.body()}
        <VLoading visible={this.props.data.isLoading} />
      </View>
    );
  }

  header() {
    const { id } = this.state;
    return (
      <View
        style={{
          height: 50,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        {!isEmpty(id) && (
          <TouchableOpacity
            onPress={() => this.deleteContact()}
            style={{
              height: 32,
              width: 32,
              backgroundColor: colors.white,
              borderRadius: 32 / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={images.emptyBackground}
              style={{ height: 16, width: 16 }}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  body() {
    const { photo, id } = this.state;
    return (
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: colors.white,
            borderRadius: 100 / 2,
            overflow: "hidden",
            marginBottom: 50,
          }}
        >
          <ImageBackground
            source={images.emptyBackground}
            style={{ height: 100, width: 100 }}
            resizeMode="center"
          >
            {!isEmpty(photo) && (
              <Image
                source={{ uri: photo }}
                style={{ height: 100, width: 100 }}
              />
            )}
          </ImageBackground>
        </View>

        <View style={[styles.input, styles.shadow, { marginBottom: 8 }]}>
          <TextInput
            value={this.state.firstName}
            ref={(ref) => (this.firstNameRef = ref)}
            style={{
              flex: 1,
            }}
            placeholder={"First Name"}
            autoCapitalize="none"
            onChangeText={(firstName) => this.setState({ firstName })}
          />
        </View>
        <View style={[styles.input, styles.shadow, { marginBottom: 8 }]}>
          <TextInput
            value={this.state.lastName}
            ref={(ref) => (this.lastNameRef = ref)}
            style={{
              flex: 1,
            }}
            placeholder={"Last Name"}
            autoCapitalize="none"
            onChangeText={(lastName) => this.setState({ lastName })}
          />
        </View>
        <View style={[styles.input, styles.shadow, { marginBottom: 8 }]}>
          <TextInput
            value={this.state.age}
            ref={(ref) => (this.ageRef = ref)}
            style={{
              flex: 1,
            }}
            placeholder={"Age"}
            keyboardType="number-pad"
            autoCapitalize="none"
            onChangeText={(age) => this.setState({ age })}
          />
        </View>
        <View
          style={[
            styles.input,
            styles.shadow,
            {
              marginBottom: 50,
              height: 100,
            },
          ]}
        >
          <TextInput
            value={this.state.photo}
            ref={(ref) => (this.photoRef = ref)}
            style={{
              flex: 1,
              height: 100,
              textAlignVertical: "top",
            }}
            multiline={true}
            placeholder={"Link Photo"}
            autoCapitalize="none"
            onChangeText={(photo) => this.setState({ photo })}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            !isEmpty(id) ? this.updateContact() : this.addContact()
          }
          style={[styles.button, styles.shadow, { marginBottom: 100 }]}
        >
          <Text style={styles.t14BoldWhite}>
            {!isEmpty(id) ? "Save" : "Submit"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  addContact() {
    if (this.props.data.isLoading) return;

    const { firstName, lastName, age, photo } = this.state;
    const body = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      photo: !isEmpty(photo)
        ? photo
        : "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
    };
    this.props.addContact(this.props.navigation, body);
  }

  updateContact() {
    if (this.props.data.isLoading) return;
    const { firstName, lastName, age, photo, id } = this.state;
    const body = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      age: age,
      photo: !isEmpty(photo)
        ? photo
        : "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
    };
    this.props.updateContact(this.props.navigation, body);
  }

  deleteContact() {
    if (this.props.data.isLoading) return;
    const { id } = this.state;
    this.props.deleteContact(this.props.navigation, id);
  }
}

const mapStateToProps = (state) => {
  console.log(state.Contact);
  return {
    data: state.Contact,
  };
};

export default connect(mapStateToProps, {
  addContact,
  getContact,
  updateContact,
  deleteContact,
})(ProfileScreen);
