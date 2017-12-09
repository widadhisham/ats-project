import React from "react";
import { StyleSheet, View, Text, Keyboard, ScrollView } from "react-native";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20,
    height: 150,
    padding: "5%"
  },
  button: {
    borderRadius: 15,
    position: "relative",
    backgroundColor: "white",
    width: 90
  },
  text: {
    fontSize: 18,
    color: "#77990d"
  },
  text2: {
    fontSize: 18,
    color: "#611b00"
  },
  title: {
    fontSize: 20
    //weight: "bold"
  },
  ButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: "8%"
  }
});

const AlertModal = ({ onPressD, closeModal, name, id }) => (
  <View style={styles.Container}>
    <Text style={styles.title}>Are You Want To Delete {name} ?</Text>
    <View style={styles.ButtonContainer}>
      <Button
        title="Cancel"
        buttonStyle={styles.button}
        textStyle={styles.text2}
        onPress={closeModal}
      />
      <Button
        title="Delete"
        containerViewStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        textStyle={styles.text}
        onPress={onPressD}
      />
    </View>
  </View>
);

export default AlertModal;
