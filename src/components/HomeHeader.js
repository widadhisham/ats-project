import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Image,
  TouchableOpacity
} from "react-native";
import { Avatar } from "react-native-elements";

const styles = StyleSheet.create({
  homeHeaderContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%"
  },
  name: {
    marginLeft: 20
  },
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "transparent"
  }
});

const HomeHeader = ({ firstName = "Widad", lastName = "Hisham" }) => (
  <View style={styles.homeHeaderContainer}>
    <View>
      <Avatar
        large
        rounded
        title={
          firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
        }
        activeOpacity={0.7}
      />
    </View>
    <View style={styles.name}>
      <Text style={styles.text}>{`${firstName} ${lastName}`}</Text>
    </View>
  </View>
);

export default HomeHeader;
