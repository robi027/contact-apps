export default class VNav {
  static splash(navigation) {
    navigation.navigate("SplashScreen");
  }
  static profile(navigation, data) {
    navigation.navigate("ProfileScreen", data);
  }
}
