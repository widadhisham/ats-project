import React from "react";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import { View, Platform } from "react-native";
import AddDevice from "../components/AddDeviceModal";
import AddGround from "../components/AddGroundModal";
import AddPlant from "../components/AddPlantModal";
import Alert from "../components/AlertModal";
import ShowItems from "../components/ShowItems";
import SignUp from "../components/SignupModal";

import * as modalActions from "../redux/actions/modal";

export const constants = {
  ADD_DEVICE: "ADD_DEVICE",
  ADD_GROUND: "ADD_GROUND",
  ADD_PLANT: "ADD_PLANT",
  ALERT: "ALERT",
  SHOW_ITEMS: "SHOW_ITEMS",
  SIGN_UP: "SIGN_UP"
};

const MODAL_COMPONENTS = {
  [constants.ADD_DEVICE]: AddDevice,
  [constants.ADD_GROUND]: AddGround,
  [constants.ADD_PLANT]: AddPlant,
  [constants.ALERT]: Alert,
  [constants.SHOW_ITEMS]: ShowItems,
  [constants.SIGN_UP]: SignUp
};

const GeneralModal = props => {
  const { modalType, modalProps, hideModal } = props;
  if (!modalType) {
    return null;
  }
  const SpecificModal = MODAL_COMPONENTS[modalType];
  return (
    <Modal
      avoidKeyboard={Platform.OS === "ios"}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
      animationInTiming={800}
      animationOutTiming={800}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      onBackdropPress={hideModal}
      onBackButtonPress={hideModal}
      isVisible
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
      }}
    >
      <SpecificModal {...modalProps} hideModal={hideModal} />
    </Modal>
  );
};
function mapDispatchToProps(dispatch) {
  return { hideModal: () => dispatch(modalActions.hideModal()) };
}

export default connect(state => state.modal, mapDispatchToProps)(GeneralModal);
