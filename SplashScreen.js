import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ImageIcon from "./assets/imageIcon.png";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={ImageIcon}
        // style={{ width: "100", height: "100", resizeMode: "contain" }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 23 }}>
        The Essential News
      </Text>
    </View>
  );
};

export default SplashScreen;
