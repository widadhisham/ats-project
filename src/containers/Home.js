import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Image,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import LinearGradient from "../components/LinearGradient";
import HomeHeader from "../components/HomeHeader";
import Header from "../components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeHeader: {
    flex: 1
  },
  schedual: {
    flex: 4
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerIcon: {
    marginTop: "6%",
    marginRight: "4%"
  }
});

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: Header({})
  });
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeHeader}>
          <LinearGradient style={styles.row}>
            <View style={styles.row}>
              <HomeHeader />
              <View style={styles.headerIcon}>
                <Icon
                  name="menu"
                  size={35}
                  color="#d9d9d9"
                  onPress={this.handleOpenActionSheet}
                  style={styles.headerIcon}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.schedual}>
          <View />
        </View>
      </View>
    );
  }
}

export default Home;
