import { StyleSheet } from "react-native";
import fonts from "../config/fonts";
import colors from "../config/colors";
import { width, height } from "../config/screenDimension";

export default StyleSheet.create({
  t8RegularWhite: {
    fontSize: 8,
    fontFamily: fonts.regular,
    color: colors.white,
  },
  t12Regular: {
    fontSize: 12,
    fontFamily: fonts.regular,
  },
  t14BoldWhite: {
    fontSize: 14,
    fontFamily: fonts.bold,
    color: colors.white,
  },
  t16Bold: {
    fontSize: 16,
    fontFamily: fonts.bold,
  },
  t16RegularWhite: {
    fontSize: 16,
    color: colors.white,
  },
  t18Bold: {
    fontSize: 18,
    fontFamily: fonts.bold,
  },
  t24BoldWhite: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.white,
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
  fab: {
    position: "absolute",
    height: 60,
    width: 60,
    right: 20,
    bottom: 20,
    backgroundColor: colors.orange,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerProfile: {
    height: 300,
    backgroundColor: colors.blueSky,
    width: width,
    paddingTop: 100,
    top: 0,
    alignItems: "center",
    position: "absolute",
  },
  iconButton: {
    height: 32,
    width: 32,
    backgroundColor: colors.white,
    borderRadius: 32 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
