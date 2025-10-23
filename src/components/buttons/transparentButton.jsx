import { styles } from "@/assets/styles/button.style";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function TransparentButton({
  label,
  onPress,
  variant = "common",
  isShowed = true,
  disabled = false,
}) {
  return isShowed ? (
    <TouchableOpacity
      style={[
        styles.transparentContainer,
        variant === "fullwidth" && styles.fullWidthContainer,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.tranparentLabel}>{label}</Text>
    </TouchableOpacity>
  ) : null;
}
