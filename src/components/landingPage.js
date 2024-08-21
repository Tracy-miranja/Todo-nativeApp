import React, { Component } from "react";
import { View, Text, Image } from "react-native";

const LandingPage = () => {
  return (
    <View>
      <Image
        source={require("../../assets/note-pen.jpg")}
        style={{ height: 300, width: 300, marginTop: 50 }}
      />
      <Text style={{ fontWeight: 800, textAlign: "center", marginTop: 5 }}>
        No To do, Write 📝or lets take cofee!! 🎉🎉🎉
      </Text>
    </View>
  );
};

export default LandingPage;
