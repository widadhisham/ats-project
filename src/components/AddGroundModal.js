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

class AddGround extends React.Component {
  state = {};

  render() {
    const {
      error = "",
      hideModal,
      id,
      name,
      groundWidth,
      groundHeight,
      add
    } = this.props;
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              paddingRight: "5%"
            }}
          >
            <CloseButton onPress={hideModal} />
          </View>
          <View style={styles.content}>
            <Formik
              initialValues={{
                name: name,
                groundWidth: groundWidth,
                groundHeight: groundHeight
              }}
              validate={values => {
                const errors = {};
                if (!validation.isEmpty(values.name)) {
                  errors.name = "Requierd";
                }
                if (!validation.isFloat(values.groundWidth)) {
                  errors.groundWidth = "Enter Valied Width";
                }
                if (!validation.isFloat(values.groundHeight)) {
                  errors.groundHeight = "Enter Valied Height";
                }
                return errors;
              }}
              onSubmit={values => {
                Keyboard.dismiss();
                add
                  ? console.log(values.email + values.password)
                  : console.log(values.email + values.password);
              }}
              render={props => (
                <View>
                  <Input
                    autoCorrect={false}
                    placeholder={add ? "Ground Name" : ""}
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("name", text);
                    }}
                    value={props.values.name}
                    errorMessage={props.errors.name}
                    touched={props.touched.name}
                    onBlur={() => {
                      if (props.values.name !== "")
                        props.setFieldTouched("name", true);
                    }}
                    autoCapitalize="none"
                    add={add}
                    text={"Ground Name"}
                  />
                  <Input
                    autoCorrect={false}
                    keyboardType="numeric"
                    placeholder={add ? "Ground Width" : ""}
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("groundWidth", text);
                    }}
                    value={props.values.groundWidth}
                    errorMessage={props.errors.groundWidth}
                    touched={props.touched.groundWidth}
                    onBlur={() => {
                      if (props.values.groundWidth !== "")
                        props.setFieldTouched("groundWidth", true);
                    }}
                    autoCapitalize="none"
                    add={add}
                    text={"Ground Width"}
                  />
                  <Input
                    autoCorrect={false}
                    placeholder={add ? "Ground Height" : ""}
                    keyboardType="numeric"
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("groundHeight", text);
                    }}
                    value={props.values.groundHeight}
                    errorMessage={props.errors.groundHeight}
                    touched={props.touched.groundHeight}
                    onBlur={() => {
                      if (props.values.groundHeight !== "")
                        props.setFieldTouched("groundHeight", true);
                    }}
                    autoCapitalize="none"
                    add={add}
                    text={"Ground Height"}
                  />
                  <View style={styles.button}>
                    <Button
                      title="Submit"
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

export default AddGround;
