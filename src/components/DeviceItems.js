import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import ActionSheet from "react-native-actionsheet";
import ImagePicker from "./ImagePicker";
import * as ModalAction from "../redux/actions/modal";
import { constants } from "../containers/Modal";
import DeviceItems from "../components/DeviceItems";

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
    borderRightColor: "#611b00"
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
    color: "#737373"
  },
  actionsheetText: {
    color: "#77990d",
    fontSize: 18
  }
});

class DeviceItem extends React.Component {
  state = {};
  handleOpenActionSheet = () => this.ActionSheet.show();

  options = [
    <Text style={styles.actionsheetText}>Cancel</Text>,
    this.props.asignGround ? (
      <Text style={styles.actionsheetText}>Delete Asign To Ground</Text>
    ) : (
      <Text style={styles.actionsheetText}>Asign To Ground</Text>
    )
  ];
  handleActionSheetPress = index => {
    if (index === 1 && this.props.asignGround) {
      ModalAction.DispatchAction(
        ModalAction.showModal(constants.Alert, { ...this.props })
      );
    }
    if (index === 1 && !this.props.asignGround) {
      ModalAction.DispatchAction(
        ModalAction.showModal(constants.ADD_DEVICE, { add: true })
      );
    }
  };
  render() {
    const {
      close,
      onScroll,
      onOpen,
      id,
      name,
      deviceNumber,
      asignGround
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
            ModalAction.showModal(constants.ALERT, { ...this.props })
          );
        },
        backgroundColor: "#611b00"
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
              ...this.props
            })
          );
        },
        backgroundColor: "#77990d"
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
          <TouchableOpacity onPress={this.handleOpenActionSheet}>
            <View style={styles.plantBody}>
              <View style={styles.data}>
                <View style={styles.row}>
                  <Text style={styles.text}>Name:</Text>
                  <Text>{name}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.text}>MAC</Text>
                  <Text>{deviceNumber}</Text>
                </View>
                {asignGround && (
                  <View style={styles.row}>
                    <Text style={styles.text}>Asign To Ground</Text>
                    <Text>{asignGround}</Text>
                  </View>
                )}
              </View>
              <ActionSheet
                ref={o => (this.ActionSheet = o)}
                options={this.options}
                cancelButtonIndex={0}
                onPress={this.handleActionSheetPress}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Swipeout>
    );
  }
}

export default DeviceItem;
