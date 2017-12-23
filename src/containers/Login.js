import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Image,
  TouchableOpacity
} from "react-native";
import { Formik } from "formik";
import { connect } from "react-redux";
import Input from "../components/Input";
import Button from "../components/Button";
import * as validation from "../utils/validator";
import * as userActions from "../redux/actions/user";
import * as ModalAction from "../redux/actions/modal";
import { constants } from "../containers/Modal";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  logo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "20%"
  },
  content: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: "10%",
    marginTop: "15%"
  },
  button: {
    marginTop: "15%"
  },
  signup: {
    flexDirection: "row",
    marginTop: "10%"
  },
  textGray: {
    fontSize: 15,
    color: "gray"
  },
  textGreen: {
    fontSize: 15,
    color: "#179543"
  }
});

class Login extends React.Component {
  state = {
    secureTextEntry: true
  };

  render() {
    const { login, signup, dispatch } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../assets/ATS2.png")}
            width="100%"
            height="100%"
          />
        </View>
        <View style={styles.content}>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validate={values => {
              const errors = {};
              if (!validation.isValidEmail(values.email)) {
                errors.email = "Enter Valied Email";
              }
              if (!validation.isValidPassword(values.password)) {
                errors.password = "Enter Valied Password";
              }
              return errors;
            }}
            onSubmit={values => {
              Keyboard.dismiss();
              login({ email: values.email, password: values.password });
            }}
            render={props => (
              <View>
                <Input
                  name="email"
                  autoCorrect={false}
                  placeholder="Email"
                  keyboardType="email-address"
                  returnKeyType="next"
                  ChangeText={text => {
                    props.setFieldValue("email", text);
                  }}
                  errorMessage={props.errors.email}
                  touched={props.touched.email}
                  onBlur={() => {
                    if (props.values.email !== "")
                      props.setFieldTouched("email", true);
                  }}
                  autoCapitalize="none"
                />
                <Input
                  name="lock"
                  placeholder="Password"
                  secureTextEntry={this.state.secureTextEntry}
                  returnKeyType="go"
                  ChangeText={text => props.setFieldValue("password", text)}
                  errorMessage={props.errors.password}
                  touched={props.touched.password}
                  onBlur={() => {
                    if (props.values.password !== "")
                      props.setFieldTouched("password", true);
                  }}
                  onSubmitEditing={props.handleSubmit}
                  autoCapitalize="none"
                  showHidePress={() => {
                    this.setState({
                      secureTextEntry: !this.state.secureTextEntry
                    });
                  }}
                  password
                />
                <View style={styles.button}>
                  <Button
                    title="LOGIN"
                    onPress={props.handleSubmit}
                    loading={false}
                  />
                </View>
              </View>
            )}
          />
          <View style={styles.signup}>
            <Text style={styles.textGray}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                ModalAction.DispatchAction(
                  ModalAction.showModal(constants.SIGN_UP, {})
                );
              }}
            >
              <Text style={styles.textGreen}>Register Now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  login: userActions.login
})(Login);
