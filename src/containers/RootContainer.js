import React, { Component } from "react";
import Login from "./Login";
import RootNavigation from "../navigation/RootNavigator";
import { connect } from "react-redux";
import { StatusBar, View } from "react-native";
import login from "../redux/actions/user";

class RootContainer extends Component {
  componentDidMount() {
    //this.props.authenticationRequest();
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        {isAuthenticated ? <RootNavigation /> : <RootNavigation />}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
  //isAuthenticating: state.user.isAuthenticating
});
export default connect(mapStateToProps)(RootContainer);
