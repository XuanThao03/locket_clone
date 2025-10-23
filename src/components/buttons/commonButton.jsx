import { styles } from "@/assets/styles/button.style";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function CommonButton({
  label,
  onPress,
  variant = "common",
  isShowed = true,
  disabled = false,
}) {
  return isShowed ? (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        variant === "fullwidth" && styles.buttonContainerFullwidth,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  ) : null;
}
