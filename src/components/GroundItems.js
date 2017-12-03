import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({});

const GroundItem = ({}) => {
  const swipeout = [
    {
      component: (
        <View style={bulletinMessageStyles.swipeoutComponent}>
          <Image source={require("../assets/icons/delete-item.png")} />
        </View>
      ),
      type: "secondary",
      onPress: () => onPressDeleteBulletin(id),
      backgroundColor: "#4D4D4D"
    },
    {
      component: (
        <View style={bulletinMessageStyles.swipeoutComponent}>
          <Image source={require("../assets/icons/edit-value.png")} />
        </View>
      ),
      type: "primary",
      onPress: () => onPressEditBulletin(id),
      backgroundColor: "#6C2A45"
    }
  ];
};

export default GroundItem;
