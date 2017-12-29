import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import ActionSheet from "react-native-actionsheet";
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
    //marginLeft: "5%",
    flex: 1
  },
  row: {
    flexDirection: "row",
    flex: 1
  },
  row2: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 10,
    justifyContent: "flex-end",
    width: "100%"
  },
  text: {
    paddingRight: "5%",
    color: "#B5B5B5"
  },
  actionsheetText: {
    color: "#179543",
    fontSize: 18
  },
  icon: {
    marginLeft: 15
  }
});
class GroundItem extends React.Component {
  state = {};
  handleOpenActionSheet = () => this.ActionSheet.show();
  handleOpenActionSheet2 = () => this.ActionSheet2.show();

  options = this.props.asignPlant
    ? [
        <Text style={styles.actionsheetText}>Cancel</Text>,
        <Text style={styles.actionsheetText}>Assign To Plant</Text>,
        <Text style={styles.actionsheetText}>Delete Assign To Plant</Text>
      ]
    : [
        <Text style={styles.actionsheetText}>Cancel</Text>,
        <Text style={styles.actionsheetText}>Assign To Plant</Text>
      ];
  options2 = this.props.asignDevice
    ? [
        <Text style={styles.actionsheetText}>Cancel</Text>,
        <Text style={styles.actionsheetText}>Assign To Device</Text>,
        <Text style={styles.actionsheetText}>Delete Assign To Device</Text>
      ]
    : [
        <Text style={styles.actionsheetText}>Cancel</Text>,
        <Text style={styles.actionsheetText}>Assign To Device</Text>
      ];

  handleActionSheetPress = index => {
    if (index === 1 && this.props.asignPlant) {
      this.props.isAssignPressPlant();
    }
    if (index === 2 && this.props.asignPlant) {
      ModalAction.DispatchAction(
        ModalAction.showModal(constants.ALERT, {
          ...this.props,
          name: `assign to ${this.props.asignPlant} `
        })
      );
    }
    if (index === 1 && !this.props.asignPlant) {
      this.props.isAssignPressPlant();
    }
  };
  handleActionSheetPress2 = index => {
    if (index === 1 && this.props.asignDevice) {
      this.props.isAssignPressDevice();
    }
    if (index === 2 && this.props.asignDevice) {
      ModalAction.DispatchAction(
        ModalAction.showModal(constants.ALERT, {
          ...this.props,
          name: `assign to ${this.props.asignDevice} `
        })
      );
    }
    if (index === 1 && !this.props.asignDevice) {
      this.props.isAssignPressDevice();
    }
  };
  render() {
    const {
      close,
      onScroll,
      onOpen,
      photo,
      id,
      name,
      groundWidth,
      groundHeight,
      asignPlant,
      asignDevice
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
            ModalAction.showModal(constants.ADD_GROUND, {
              add: false,
              ...this.props
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
          <View style={styles.plantBody}>
            <View style={styles.data}>
              <View style={styles.row}>
                <Text style={styles.text}>Name</Text>
                <Text>{name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Width</Text>
                <Text>{groundWidth + " M"}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Height</Text>
                <Text>{groundHeight + " M"}</Text>
              </View>
              {asignPlant && (
                <View style={styles.row}>
                  <Text style={styles.text}>Assign To Plant</Text>
                  <Text>{asignPlant}</Text>
                </View>
              )}
              {asignDevice && (
                <View style={styles.row}>
                  <Text style={styles.text}>Assign To Device</Text>
                  <Text>{asignPlant}</Text>
                </View>
              )}
              <View style={styles.row2}>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={this.handleOpenActionSheet}
                >
                  <Image source={require("../assets/assignPlant.png")} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icon}
                  onPress={this.handleOpenActionSheet2}
                >
                  <Image source={require("../assets/assignDevice.png")} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ActionSheet
            ref={o => (this.ActionSheet = o)}
            options={this.options}
            cancelButtonIndex={0}
            onPress={this.handleActionSheetPress}
          />
          <ActionSheet
            ref={o => (this.ActionSheet2 = o)}
            options={this.options2}
            cancelButtonIndex={0}
            onPress={this.handleActionSheetPress2}
          />
        </View>
      </Swipeout>
    );
  }
}

export default GroundItem;
