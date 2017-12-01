import React from "react";
import Modal from "react-native-modal";
import { View, StyleSheet, Platform, Text } from "react-native";

const styles = StyleSheet.create({
  modalContent: {}
});

const GeneralModal = ({
  children,
  isVisible,
  onBackdropPress,
  onBackButtonPress
}) => (
  <Modal
    avoidKeyboard={Platform.OS === "ios"}
    animationIn={"zoomInDown"}
    animationOut={"zoomOutUp"}
    animationInTiming={800}
    animationOutTiming={800}
    backdropTransitionInTiming={800}
    backdropTransitionOutTiming={800}
    onBackdropPress={onBackdropPress}
    onBackButtonPress={onBackButtonPress}
    isVisible={isVisible}
    style={styles.modalContent}
  >
    <View>{children}</View>
  </Modal>
);

export default GeneralModal;
