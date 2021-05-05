import { StyleSheet } from "react-native";
import fonts from "../config/fonts";
import colors from "../config/colors";
import { width, height } from "../config/screenDimension";

export default StyleSheet.create({
  t12Regular: {
    fontSize: 12,
    fontFamily: fonts.regular,
  },
  t14BoldWhite: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  t18Bold: {
    fontSize: 18,
    fontFamily: fonts.bold,
  },
  t16Bold: {
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: width - 60,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: colors.orange,
    borderRadius: 20,
    width: width - 60,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginHorizontal: 30,
    alignItems: "center",
  },
});
