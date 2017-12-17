import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import Login from "../containers/Login";
import TabBarComponent from "../components/TabBarComponent";
import UserHome from "../containers/Home";
import UserGround from "../containers/Ground";
import UserPlant from "../containers/Plant";
import UserDevice from "../containers/Device";

class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/Home.png")} />
      ) : (
        <Image source={require("../assets/Home2.png")} />
      )
  };

  render() {
    return <UserHome />;
  }
}

class Ground extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Ground",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/Ground.png")} />
      ) : (
        <Image source={require("../assets/Ground2.png")} />
      )
  };

  render() {
    return <UserGround />;
  }
}
class Plant extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Plant",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/Plant.png")} />
      ) : (
        <Image source={require("../assets/Plant2.png")} />
      )
  };

  render() {
    return <UserPlant />;
  }
}
class Device extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Device",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/Device.png")} />
      ) : (
        <Image source={require("../assets/Device2.png")} />
      )
  };

  render() {
    return <UserDevice />;
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
    },
    Device: {
      screen: Device
    }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: false,
    tabBarComponent: TabBarComponent,
    showIcon: true,
    lazy: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#77990d",
      inactiveTintColor: "#664d00",
      style: { backgroundColor: "#f2f2f2" }
    }
  }
);

export default RootTabs;
