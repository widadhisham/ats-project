import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Image,
  TouchableOpacity
} from "react-native";
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
    flex: 2.5
  }
});

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeHeader}>
          <LinearGradient>
            <HomeHeader />
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
