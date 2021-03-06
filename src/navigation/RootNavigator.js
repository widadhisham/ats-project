import React from "react";
import { View, Text, StyleSheet, Image, Settings } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import Login from "../containers/Login";
import TabBarComponent from "../components/TabBarComponent";
import UserHome from "../containers/Home";
import UserGround from "../containers/Ground";
import UserPlant from "../containers/Plant";
import UserDevice from "../containers/Device";
import AssignTo from "../components/AssignTo";
import Process from "../components/Process";
import UserSetting from "../containers/Setting";

class Schedule extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Schedule",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/home.png")} />
      ) : (
        <Image source={require("../assets/home2.png")} />
      )
  };

  render() {
    return <UserHome {...this.props} />;
  }
}
class AssignToSchedule extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Schedule",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/home.png")} />
      ) : (
        <Image source={require("../assets/home2.png")} />
      )
  };

  render() {
    return <AssignTo {...this.props} />;
  }
}
class ScheduleProcess extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Schedule",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/home.png")} />
      ) : (
        <Image source={require("../assets/home2.png")} />
      )
  };

  render() {
    return <Process {...this.props} />;
  }
}
class Ground extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Ground",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/ground.png")} />
      ) : (
        <Image source={require("../assets/ground2.png")} />
      )
  };

  render() {
    return <UserGround {...this.props} />;
  }
}
class AssignToGround extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Ground",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/ground.png")} />
      ) : (
        <Image source={require("../assets/ground2.png")} />
      )
  };

  render() {
    return <AssignTo {...this.props} />;
  }
}
class Plant extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Plant",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/plant.png")} />
      ) : (
        <Image source={require("../assets/plant2.png")} />
      )
  };

  render() {
    return <UserPlant {...this.props} />;
  }
}
class Device extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Device",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Image source={require("../assets/device.png")} />
      ) : (
        <Image source={require("../assets/device2.png")} />
      )
  };

  render() {
    return <UserDevice {...this.props} />;
  }
}

class Setting extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Settings",
    tabBarIcon: ({ focused }) =>
      focused ? (
        <Icon name="settings" color="#179543" />
      ) : (
        <Icon name="settings" color="#bfc0bf" />
      )
  };

  render() {
    return <UserSetting {...this.props} />;
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  }
});

const deviceStack = StackNavigator(
  {
    Device: { screen: Device }
  },
  { headerMode: "none" }
);
const groundStack = StackNavigator(
  {
    Ground: { screen: Ground },
    AssignTo: { screen: AssignToGround }
  },
  { headerMode: "none" }
);
const homeStack = StackNavigator(
  {
    Schedule: { screen: Schedule },
    AssignTo: { screen: AssignToSchedule },
    Process: { screen: ScheduleProcess }
  },
  { headerMode: "none" }
);

const RootTabs = TabNavigator(
  {
    Ground: {
      screen: groundStack
    },
    Plant: {
      screen: Plant
    },
    Device: {
      screen: deviceStack
    },
    Schedule: {
      screen: homeStack
    },
    Settings: {
      screen: Setting
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
      activeTintColor: "#179543",
      inactiveTintColor: "#bfc0bf",
      style: { backgroundColor: "#E6E6E5" }
    }
  }
);

export default RootTabs;
