import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import Login from "../containers/Login";
import TabBarComponent from "../components/TabBarComponent";
import UserHome from "../containers/Home";

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => (
      <Image
        source={require("../assets/activity.png")}
        //style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return <UserHome />;
  }
}

class Ground extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Ground",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" style={[styles.icon, { tintColor: tintColor }]} />
    )
  };

  render() {
    return <Login />;
  }
}
class Plant extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Plant",
    tabBarIcon: ({ tintColor }) => (
      <Image source="" style={[styles.icon, { tintColor: tintColor }]} />
    )
  };

  render() {
    return <Login />;
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

const RootTabs = TabNavigator(
  {
    Home: {
      screen: Home
    },
    Ground: {
      screen: Ground
    },
    Plant: {
      screen: Plant
    }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarComponent: TabBarComponent,
    showIcon: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: "#006600",
      inactiveTintColor: "black",
      style: { backgroundColor: "#f2f2f2" }
      //indicatorStyle: { backgroundColor: "gray", height: 5 }
    }
  }
);

export default RootTabs;
