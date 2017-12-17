import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import Swipeout from "react-native-swipeout";
import ImagePicker from "./ImagePicker";
import AddDevice from "./AddDeviceModal";
import GeneralModal from "./GeneralModal";
import AlertModal from "./AlertModal";

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

class DeviceItem extends React.Component {
  state = {
    showEditModal: false,
    showAlertModal: false
  };
  showModal = () => this.setState({ showEditModal: true });
  closeModal = () => this.setState({ showEditModal: false });
  showAlertModal = () => this.setState({ showAlertModal: true });
  closeAlertModal = () => this.setState({ showAlertModal: false });

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
    const { photoA } = this.state;
    const swipeout = [
      {
        component: (
          <View style={styles.swipe}>
            <Icon name="delete" color="white" />
          </View>
        ),
        type: "secondary",
        onPress: () => this.showAlertModal(),
        backgroundColor: "#611b00"
      },
      {
        component: (
          <View style={styles.swipe}>
            <Icon name="settings" color="white" />
          </View>
        ),
        type: "primary",
        onPress: () => this.showModal(),
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
            <GeneralModal
              isVisible={this.state.showEditModal}
              onBackdropPress={() => this.closeModal()}
              onBackButtonPress={() => this.closeModal()}
            >
              <AddDevice
                closeModal={() => this.closeModal()}
                id={id}
                name={name}
                deviceNumber={deviceNumber}
                add={false}
              />
            </GeneralModal>
            <GeneralModal
              isVisible={this.state.showAlertModal}
              onBackdropPress={() => this.closeAlertModal()}
              onBackButtonPress={() => this.closeAlertModal()}
            >
              <AlertModal
                closeModal={() => this.closeAlertModal()}
                id={id}
                name={name}
                onPressD={() => {}}
              />
            </GeneralModal>
          </View>
        </View>
      </Swipeout>
    );
  }
}

export default DeviceItem;
