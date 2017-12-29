import React from "react";
import { StyleSheet, View, Image, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: "70%",
    height: "30%"
  }
});

const Splash = () => (
  <View style={styles.logoContainer}>
    <Image width="100%" height="100%" source={require("../assets/ATS2.png")} />

    <ActivityIndicator color="#179543" />
  </View>
);

export default Splash;
