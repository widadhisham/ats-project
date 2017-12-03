import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import Swipeout from "react-native-swipeout";

const styles = StyleSheet.create({
  swipe: {},
  plantContainer: {},
  plantBody: {}
});

const PlantItem = ({ close, onScroll, onOpen, plantName = "aa bb", photo }) => {
  const swipeout = [
    {
      component: (
        <View style={styles.swipe}>
          <Icon name="delete" color="white" />
        </View>
      ),
      type: "secondary",
      onPress: () => onPressDeleteBulletin(id),
      backgroundColor: "#664d00"
    },
    {
      component: (
        <View style={styles.swipe}>
          <Icon name="settings" color="white" />
        </View>
      ),
      type: "primary",
      onPress: () => onPressEditBulletin(id),
      backgroundColor: "#006600"
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
            small
            rounded
            source={photo ? { uri: `data:image/jpeg;base64,${photo}` } : null}
            title={
              plantName
                .split(" ")[0]
                .charAt(0)
                .toUpperCase() +
              plantName
                .split(" ")[1]
                .charAt(0)
                .toUpperCase()
            }
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <View />
          <View />
        </View>
      </View>
    </Swipeout>
  );
};

export default PlantItem;
