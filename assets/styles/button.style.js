// styles/auth.styles.js
import CUSTOM_COLORS from "@/src/constants";
import { responsiveFontSize, scaleH, scaleW } from "@/src/utils/responsive";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: CUSTOM_COLORS.primary,
    borderRadius: scaleW(28),
    paddingVertical: scaleH(16),
    paddingHorizontal: scaleW(20),
    alignItems: "center",
  },
  fullWidthContainer: {
    width: "100%",
  },
  label: {
    color: CUSTOM_COLORS.buttonLabel,
    fontSize: responsiveFontSize(18),
    fontFamily: "Nunito-Bold",
  },
  transparentContainer: {
    backgroundColor: "transparent",
  },
  tranparentLabel: {
    color: CUSTOM_COLORS.tertiaryText,
    fontSize: responsiveFontSize(18),
    fontFamily: "Nunito-Bold",
  },
});
