import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function Splash({ setIsLoading }) {
  return (
    <View style={{ flex: 1, alignItems: "center", margin: 0 }}>
      <LottieView
        source={require("../../assets/Animation - 1724681926493.json")}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setIsLoading(false)}
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
