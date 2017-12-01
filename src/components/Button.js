import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  buttonContainer: {},
  button: {
    backgroundColor: "#006600",
    borderRadius: 15,
    position: "relative"
  },
  text: {
    fontSize: 18,
    color: "white"
  }
});
const loadingProps = {
  iconRight: { werid: "s" },
  disabled: true,
  color: "#006600",
  iconComponent: () => <ActivityIndicator size="small" color="#006600" />
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
