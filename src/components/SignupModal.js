import React from "react";
import { StyleSheet, View, Text, Keyboard, ScrollView } from "react-native";
import { Formik } from "formik";
import Input from "../components/Input";
import Button from "../components/Button";
import CloseButton from "../components/CloseButton";
import * as validation from "../utils/validator";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: "10%",
    marginTop: "5%",
    marginBottom: "5%"
  },
  button: {
    marginTop: "5%"
  },
  errorText: {
    color: "#FF0000",
    fontSize: 13
  }
});

class Signup extends React.Component {
  state = {
    secureTextEntry: true
  };

  render() {
    const { error = "", closeModal } = this.props;
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.content}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
              }}
              validate={values => {
                const errors = {};
                if (!validation.isEmpty(values.firstName)) {
                  errors.firstName = "Requierd";
                }
                if (!validation.isEmpty(values.lastName)) {
                  errors.lastName = "Requierd";
                }
                if (!validation.isValidEmail(values.email)) {
                  errors.email = "Enter Valied Email";
                }
                if (!validation.isValidPassword(values.password)) {
                  errors.password = "Enter Valied Password";
                }
                if (
                  !validation.isConfirmPassword(
                    values.password,
                    values.confirmPassword
                  )
                ) {
                  errors.confirmPassword = "Password Not Match";
                }
                return errors;
              }}
              onSubmit={values => {
                Keyboard.dismiss();
                console.log(values.email + values.password);
              }}
              render={props => (
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <CloseButton onPress={closeModal} />
                  </View>
                  <Input
                    name="person"
                    autoCorrect={false}
                    placeholder="First Name"
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("firstName", text);
                    }}
                    errorMessage={props.errors.firstName}
                    touched={props.touched.firstName}
                    onBlur={() => {
                      if (props.values.firstName !== "")
                        props.setFieldTouched("firstName", true);
                    }}
                    autoCapitalize="none"
                  />
                  <Input
                    name="person"
                    autoCorrect={false}
                    placeholder="Last Name"
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("lastName", text);
                    }}
                    errorMessage={props.errors.lastName}
                    touched={props.touched.lastName}
                    onBlur={() => {
                      if (props.values.lastName !== "")
                        props.setFieldTouched("lastName", true);
                    }}
                    autoCapitalize="none"
                  />
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
                    autoCapitalize="none"
                    showHidePress={() => {
                      this.setState({
                        secureTextEntry: !this.state.secureTextEntry
                      });
                    }}
                    password
                  />
                  <Input
                    name="lock"
                    placeholder="Confirm Password"
                    secureTextEntry={this.state.secureTextEntry}
                    returnKeyType="go"
                    ChangeText={text =>
                      props.setFieldValue("confirmPassword", text)
                    }
                    errorMessage={props.errors.confirmPassword}
                    touched={props.touched.confirmPassword}
                    onBlur={() => {
                      if (props.values.confirmPassword !== "")
                        props.setFieldTouched("confirmPassword", true);
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
                      title="SIGNUP"
                      onPress={props.handleSubmit}
                      loading={false}
                    />
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Signup;
