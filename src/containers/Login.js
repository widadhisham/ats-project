import React from "react";
import { StyleSheet, View, Text, Keyboard, Image } from "react-native";
import { Formik } from "formik";
import Input from "../components/Input";
import validation from "../utils/validator";

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
    marginHorizontal: "10%",
    marginTop: "15%"
  }
});

class Login extends React.Component {
  state = {
    secureTextEntry: true
  };
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
              if (!validation.isValidPassword(values.password)) {
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
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default Login;
