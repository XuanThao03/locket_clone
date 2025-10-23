import { IC_PhoneFrame } from "@/assets/icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WellcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <IC_PhoneFrame style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Locket</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#020202", flex: 1 },
  contentContainer: {
    backgroundColor: "#020202",
    height: "100%",
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
  },
  textContainer: { flex: 2 },
});
