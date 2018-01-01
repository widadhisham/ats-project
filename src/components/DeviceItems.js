import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
import ImagePicker from "./ImagePicker";
import * as ModalAction from "../redux/actions/modal";
import { constants } from "../containers/Modal";

const styles = StyleSheet.create({
  swipe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  plantContainer: {
    borderRightWidth: 4,
    borderColor: "rgba(0,0,0,0.05)",
    borderWidth: 2,
    borderRightColor: "#bfc0bf"
  },
  plantBody: {
    margin: "5%",
    flexDirection: "row"
  },
  data: {
    marginLeft: "5%",
    flex: 1
  },
  row: {
    flexDirection: "row",
    flex: 1
  },
  text: {
    paddingRight: "5%",
    color: "#B5B5B5"
  },
  actionsheetText: {
    color: "#179543",
    fontSize: 18
  }
});

class DeviceItem extends React.Component {
  state = {};

  render() {
    const {
      close,
      onScroll,
      onOpen,
      id,
      name,
      deviceNumber,
      deleteDevice,
      editDevice
    } = this.props;
    const swipeout = [
      {
        component: (
          <View style={styles.swipe}>
            <Icon name="delete" color="white" />
          </View>
        ),
        type: "secondary",
        onPress: () => {
          ModalAction.DispatchAction(
            ModalAction.showModal(constants.ALERT, {
              ...this.props,
              onPressD: deleteDevice
            })
          );
        },
        backgroundColor: "#bfc0bf"
      },
      {
        component: (
          <View style={styles.swipe}>
            <Icon name="settings" color="white" />
          </View>
        ),
        type: "primary",
        onPress: () => {
          ModalAction.DispatchAction(
            ModalAction.showModal(constants.ADD_DEVICE, {
              add: false,
              ...this.props,
              submit: editDevice
            })
          );
        },
        backgroundColor: "#179543"
      }
    ];
    return (
      <Swipeout
        close={close}
        autoClose
        onOpen={onOpen}
        scroll={s => {
          onScroll(s);
        }}
        right={swipeout}
        style={{
          marginHorizontal: 10,
          backgroundColor: "#fff",
          borderColor: "rgba(0,0,0,0.05)",
          borderBottomWidth: 1
        }}
      >
        <View style={styles.plantContainer}>
          <TouchableOpacity>
            <View style={styles.plantBody}>
              <View style={styles.data}>
                <View style={styles.row}>
                  <Text style={styles.text}>Name</Text>
                  <Text>{name}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.text}>MAC Address</Text>
                  <Text>{deviceNumber}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  }
}

export default DeviceItem;
