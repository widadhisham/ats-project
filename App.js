import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import RootContainer from "./src/containers/RootContainer";
import Process from "./src/components/AgricultureProcess";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
