import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
  RefreshControl,
} from "react-native";
import { connect } from "react-redux";
import { getContact, searchContact } from "../../actions/contact.action";
import VLoadingItem from "../../components/VLoadingItem";
import colors from "../../config/colors";
import images from "../../config/images";
import { width } from "../../config/screenDimension";
import styles from "../../config/styles";
import VNav from "../../navigation/VNav";
import { isEmpty } from "../../utils/Utils";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      animatedValue: new Animated.Value(0),
    };
    this.delayValue = 500;
  }

  componentDidMount() {
    this.props.getContact().then((res) => {
      Animated.spring(this.state.animatedValue, {
        toValue: 1,
        tension: 20,
        useNativeDriver: true,
      }).start();
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.header()}
        {this.searchBar()}
        {this.body()}
        {this.fab()}
      </View>
    );
  }

  body() {
    const { data } = this.props;
    const { keyword } = this.state;
    if (data.isLoading && data?.data?.data?.data == null)
      return <VLoadingItem height={500} />;
    var list = data?.data?.data?.data || [];
    return (
      <View style={{ flex: 1, marginTop: 32 }}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isEmpty(list) ? data.isLoading : false}
              onRefresh={() => this.props.getContact()}
            />
          }
          contentContainerStyle={{ padding: 32, paddingTop: 0 }}
          ItemSeparatorComponent={() => (
            <View
              style={{ height: 1, flex: 1, backgroundColor: colors.grey }}
            />
          )}
          data={isEmpty(keyword) ? list : data.listFilter}
          renderItem={({ index, item }) => this.item(index, item)}
          keyExtractor={(item, index) => "item_" + index}
        />
      </View>
    );
  }

  item(index, item) {
    this.delayValue = this.delayValue + 500;

    const translateX = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.delayValue, 1],
    });
    return (
      <Animated.View style={[{ transform: [{ translateX }] }]}>
        <TouchableOpacity
          onPress={() => VNav.profile(this.props.navigation, item)}
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
          }}
        >
          <View style={{ flexDirection: "row", flex: 1, marginRight: 60 }}>
            <View style={{ borderRadius: 25, overflow: "hidden" }}>
              <ImageBackground
                source={images.icEmptyBackground}
                style={{ height: 50, width: 50 }}
              >
                <Image
                  source={{ uri: item.photo }}
                  style={{ height: 50, width: 50 }}
                />
              </ImageBackground>
            </View>
            <View style={{ marginHorizontal: 4 }}>
              <Text numberOfLines={1} style={styles.t16Bold}>
                {item.firstName}
              </Text>
              <Text style={styles.t12Regular}>
                {item.firstName + " " + item.lastName}
              </Text>
            </View>
          </View>
          <Text style={styles.t12Regular}>{item.age} y.o</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  header() {
    return (
      <View
        style={{
          backgroundColor: colors.blueSky,
          height: 180,
          width: width,
          padding: 20,
        }}
      >
        <Text style={[styles.t24BoldWhite, { textAlign: "center" }]}>
          C O N T A C T - A P P
        </Text>
        <Text style={[styles.t16RegularWhite, { textAlign: "center" }]}>
          Let's find your friends!
        </Text>
        <Text style={[styles.t8RegularWhite, { textAlign: "center" }]}>
          @Robi Dwi Setiawan || Github : robi027 || Linkedin : Robi Dwi Setiawan
        </Text>
      </View>
    );
  }

  fab() {
    return (
      <TouchableOpacity
        onPress={() => VNav.profile(this.props.navigation)}
        style={[styles.shadow, styles.fab]}
      >
        <Image
          source={images.icAdd}
          style={{ height: 24, width: 24, tintColor: colors.white }}
        />
      </TouchableOpacity>
    );
  }

  searchBar() {
    const { data } = this.props;
    return (
      <View
        style={[
          { position: "absolute", top: 155 },
          styles.input,
          styles.shadow,
        ]}
      >
        <TextInput
          style={{
            flex: 1,
          }}
          placeholder={"Search..."}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(keyword) => {
            this.state.keyword = keyword;
            this.props.searchContact(data?.data?.data?.data, keyword);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.Contact,
  };
};

export default connect(mapStateToProps, { getContact, searchContact })(
  HomeScreen
);
