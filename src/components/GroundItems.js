import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import Swipeout from "react-native-swipeout";
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
  }
});
class GroundItem extends React.Component {
  state = {};

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
      asignPlant
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
            ModalAction.showModal(constants.ADD_GROUND, {
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
          <View style={styles.plantBody}>
            <View style={styles.data}>
              <View style={styles.row}>
                <Text style={styles.text}>Name:</Text>
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
                  <Text style={styles.text}>Assign to: </Text>
                  <Text>{plantName}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </Swipeout>
    );
  }
}

export default GroundItem;
