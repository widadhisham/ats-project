import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

const CloseButton = ({ onPress }) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      height: 20
    }}
  >
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center"
      }}
      hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }}
    >
      <Text style={{ fontSize: 20, color: "#77990d" }}>&#215;</Text>
    </TouchableOpacity>
  </View>
);

export default CloseButton;
