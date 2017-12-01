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
import Input from "../components/Input";
import Button from "../components/Button";
import GeneralModal from "../components/GeneralModal";
import Signup from "../components/SignupModal";
import * as validation from "../utils/validator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  logo: {
    flex: 1,
    backgroundColor: "gray"
  },
  content: {
    flex: 2,
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
    color: "#006600"
  }
});

class Login extends React.Component {
  state = {
    secureTextEntry: true,
    showModal: false
  };
  showModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo} />
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
              if (values.password !== "l") {
                errors.password = "Enter Valied Password";
              }
              return errors;
            }}
            onSubmit={values => {
              Keyboard.dismiss();
              console.log(values.email + values.password);
            }}
            render={props => (
              <View>
                <Input
                  name="email"
                  autoCorrect={false}
                  placeholder="Email"
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
            <TouchableOpacity onPress={() => this.showModal()}>
              <Text style={styles.textGreen}>Register Now!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <GeneralModal
          isVisible={this.state.showModal}
          onBackdropPress={() => this.closeModal()}
          onBackButtonPress={() => this.closeModal()}
        >
          <Signup closeModal={() => this.closeModal()} />
        </GeneralModal>
      </View>
    );
  }
}

export default Login;
