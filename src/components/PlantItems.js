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
  }
});

class PlantItem extends React.Component {
  state = {
    photoA: this.props.photo
  };

  render() {
    const {
      close,
      onScroll,
      onOpen,
      photo,
      id,
      name,
      waterQuantity,
      temperature,
      distanceX,
      distanceY,
      deletePlant,
      editPlant
    } = this.props;
    const { photoA } = this.state;
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
              onPressD: deletePlant
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
            ModalAction.showModal(constants.ADD_PLANT, {
              add: false,
              ...this.props,
              submit: editPlant
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
            <Avatar
              medium
              rounded
              source={photoA ? { uri: photoA } : null}
              title={
                name.charAt(0).toUpperCase() + name.charAt(1).toUpperCase()
              }
              onPress={() => actionSheet && actionSheet.show()}
              activeOpacity={0.7}
            />
            <ImagePicker
              ActionSheetRef={c => (actionSheet = c)}
              avatarImageSource={photoA}
              changeAvatarSource={data => {
                this.setState({ photoA: data });
                avatarSourceHandled = true;
                handled = true;
              }}
            />
            <View style={styles.data}>
              <View style={styles.row}>
                <Text style={styles.text}>Name</Text>
                <Text>{name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Water Quantity</Text>
                <Text>{waterQuantity + " Liter"}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Temperature</Text>
                <Text>{temperature + " °C"}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Distance In Width</Text>
                <Text>{distanceX + " M"}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Distance In Length</Text>
                <Text>{distanceY + " M"}</Text>
              </View>
            </View>
          </View>
        </View>
      </Swipeout>
    );
  }
}

export default PlantItem;
