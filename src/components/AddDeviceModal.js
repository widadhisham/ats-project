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
    borderRadius: 20,
    paddingTop: "5%",
    paddingBottom: "5%"
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
    color: "#CFD0CF",
    fontSize: 13
  }
});

class AddDevice extends React.Component {
  state = {};

  render() {
    const {
      error = "",
      hideModal,
      id,
      name,
      deviceNumber,
      add,
      submit
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
                deviceNumber: deviceNumber
              }}
              validate={values => {
                const errors = {};
                if (!validation.isEmpty(values.name)) {
                  errors.name = "Required";
                }
                if (!validation.isEmpty(values.deviceNumber)) {
                  errors.deviceNumber = "Required";
                }

                return errors;
              }}
              onSubmit={values => {
                Keyboard.dismiss();
                submit({
                  name: values.name,
                  deviceNumber: values.deviceNumber
                });
              }}
              render={props => (
                <View>
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
