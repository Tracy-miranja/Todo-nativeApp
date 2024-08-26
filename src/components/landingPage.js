import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const LandingPage = () => {
  return (
    <View>
      <Image
        source={require("../../assets/TodoImage.png")}
        style={{ height: 300, width: 300, marginTop: 50 }}
      />
      <Text
        style={{
          fontWeight: 800,
          textAlign: "center",
          marginTop: 5,
          color: "#fff",
        }}
      >
        No To do? let's Write 📝 it!! 🎉🎉
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default LandingPage;
