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

class AddGround extends React.Component {
  state = {};

  render() {
    const {
      error = "",
      hideModal,
      id,
      name,
      width,
      height,
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
                width: width + "",
                height: height + ""
              }}
              validate={values => {
                const errors = {};
                if (!validation.isEmpty(values.name)) {
                  errors.name = "Required";
                }
                if (!validation.isFloat(values.width)) {
                  errors.width = "Enter Valid Width";
                }
                if (!validation.isFloat(values.height)) {
                  errors.height = "Enter Valid Height";
                }
                return errors;
              }}
              onSubmit={values => {
                Keyboard.dismiss();
                submit({
                  name: values.name,
                  width: values.width,
                  height: values.height
                });
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
                    onChangeText=""
                  />
                  <Input
                    autoCorrect={false}
                    keyboardType="numeric"
                    placeholder={add ? "Ground Width" : ""}
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("width", text);
                    }}
                    value={props.values.width}
                    errorMessage={props.errors.width}
                    touched={props.touched.width}
                    onBlur={() => {
                      if (props.values.width !== "")
                        props.setFieldTouched("width", true);
                    }}
                    autoCapitalize="none"
                    add={add}
                    text={"Ground Width"}
                    onChangeText=""
                  />
                  <Input
                    autoCorrect={false}
                    placeholder={add ? "Ground Height" : ""}
                    keyboardType="numeric"
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("height", text);
                    }}
                    value={props.values.height}
                    errorMessage={props.errors.height}
                    touched={props.touched.height}
                    onBlur={() => {
                      if (props.values.height !== "")
                        props.setFieldTouched("height", true);
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
