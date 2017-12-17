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

class AddDevice extends React.Component {
  state = {};

  render() {
    const { error = "", closeModal, id, name, deviceNumber, add } = this.props;
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.content}>
            <Formik
              initialValues={{
                name: name,
                deviceNumber: deviceNumber
              }}
              validate={values => {
                const errors = {};
                if (!validation.isEmpty(values.name)) {
                  errors.name = "Requierd";
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
                  <View style={{ flexDirection: "row" }}>
                    <CloseButton onPress={closeModal} />
                  </View>
                  <Input
                    autoCorrect={false}
                    placeholder={add ? "Device Name" : ""}
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
                    text={"Device Name"}
                  />
                  <Input
                    autoCorrect={false}
                    keyboardType="numeric"
                    placeholder={add ? "Device MAC Address" : ""}
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("deviceNumber", text);
                    }}
                    value={props.values.deviceNumber}
                    errorMessage={props.errors.deviceNumber}
                    touched={props.touched.deviceNumber}
                    onBlur={() => {
                      if (props.values.deviceNumber !== "")
                        props.setFieldTouched("deviceNumber", true);
                    }}
                    autoCapitalize="none"
                    add={add}
                    text={"Device MAC Address"}
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

export default AddDevice;
