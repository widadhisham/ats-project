import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40
  },
  button: {
    backgroundColor: "#179543",
    borderRadius: 25,
    position: "relative",
    paddingTop: "5%"
  },
  text: {
    fontSize: 18,
    color: "white"
  }
});
const loadingProps = {
  iconRight: { werid: "s" },
  disabled: true,
  color: "#179543",
  iconComponent: () => <ActivityIndicator size="small" color="#179543" />
};
const ButtonWithLoadingIncator = ({ title, loading, onPress }) => (
  <Button
    title={title}
    containerViewStyle={styles.buttonContainer}
    buttonStyle={styles.button}
    textStyle={styles.text}
    onPress={onPress}
    {...(loading ? loadingProps : {})}
  />
);

export default ButtonWithLoadingIncator;
