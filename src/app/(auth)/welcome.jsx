import { IC_Logo, IC_PhoneFrame } from "@/assets/icons";
import { styles } from "@/assets/styles/welcome.style";
import CommonButton from "@/src/components/buttons/commonButton";
import TransparentButton from "@/src/components/buttons/transparentButton";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WellcomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <IC_PhoneFrame style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <IC_Logo />
            <Text style={styles.title}>Locket</Text>
          </View>
          <Text style={styles.description}>
            Live pics from your friends, on your home screen
          </Text>
          {isLoading ? (
            <ActivityIndicator
              animating={isLoading}
              size="large"
              color="#e3e3e3"
              style={styles.ativityIndiator}
            />
          ) : (
            <View style={styles.buttonsContainer}>
              <CommonButton
                label="Create an account"
                onPress={() => {}}
                isShowed={!isLoading}
              />
              <TransparentButton
                label="Sign in"
                onPress={() => {}}
                isShowed={!isLoading}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
