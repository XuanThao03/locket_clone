// styles/auth.styles.js
import CUSTOM_COLORS from "@/src/constants";
import { responsiveFontSize, scaleH, scaleW } from "@/src/utils/responsive";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { backgroundColor: CUSTOM_COLORS.backgroundColor, flex: 1 },
  contentContainer: {
    backgroundColor: CUSTOM_COLORS.backgroundColor,
    height: "100%",
    paddingHorizontal: scaleW(48),
  },
  iconContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    transform: [{ rotate: "-5deg" }],
  },
  title: {
    color: "white",
    fontFamily: "Nunito-ExtraBold",
    fontSize: responsiveFontSize(36),
  },
  textContainer: { flex: 2, justifyContent: "center", alignItems: "center" },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scaleW(14),
  },
  description: {
    color: CUSTOM_COLORS.secondaryText,
    fontFamily: "Nunito-Bold",
    fontSize: responsiveFontSize(21),
    justifyContent: "center",
    textAlign: "center",
    marginTop: scaleH(21),
  },
  ativityIndiator: {
    marginTop: scaleH(40),
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: scaleH(16),
    marginVertical: scaleH(30),
  },
});
