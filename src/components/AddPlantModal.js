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

class AddPlant extends React.Component {
  state = {};

  render() {
    const {
      error = "",
      hideModal,
      id,
      name,
      waterQuantity,
      temperature,
      distanceX,
      distanceY,
      add
    } = this.props;
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.content}>
            <Formik
              initialValues={{
                name: name,
                waterQuantity: waterQuantity,
                temperature: temperature,
                distanceX: distanceX,
                distanceY: distanceY
              }}
              validate={values => {
                const errors = {};
                if (!validation.isEmpty(values.name)) {
                  errors.name = "Requierd";
                }
                if (!validation.isFloat(values.waterQuantity)) {
                  errors.waterQuantity = "Enter Valied Water Quantity";
                }
                if (!validation.isFloat(values.temperature)) {
                  errors.temperature = "Enter Valied Temperature";
                }
                if (!validation.isFloat(values.distanceX)) {
                  errors.distanceX = "Enter Valied width distance";
                }
                if (!validation.isFloat(values.distanceY)) {
                  errors.distanceY = "Enter Valied length distance";
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
                    <CloseButton onPress={hideModal} />
                  </View>
                  <Input
                    autoCorrect={false}
                    placeholder={add ? "Plant Name" : ""}
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
                    text={"Plant Name"}
                  />
                  <Input
                    autoCorrect={false}
                    keyboardType="numeric"
                    placeholder={add ? "Water Quantity (Cup)" : ""}
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("waterQuantity", text);
                    }}
                    value={props.values.waterQuantity}
                    errorMessage={props.errors.waterQuantity}
                    touched={props.touched.waterQuantity}
                    onBlur={() => {
                      if (props.values.waterQuantity !== "")
                        props.setFieldTouched("waterQuantity", true);
                    }}
                    autoCapitalize="none"
                    add={add}
                    text={"Water Quantity (Cup)"}
                  />
                  <Input
                    autoCorrect={false}
                    placeholder={add ? "Temperature °C" : ""}
                    keyboardType="numeric"
                    returnKeyType="next"
                    ChangeText={text => {
                      props.setFieldValue("temperature", text);
                    }}
                    value={props.values.temperature}
                    errorMessage={props.errors.temperature}
                    touched={props.touched.temperature}
                    onBlur={() => {
                      if (props.values.temperature !== "")
                        props.setFieldTouched("temperature", true);
                    }}
                    autoCapitalize="none"
                    add={add}
                    text={"Temperature °C"}
                  />
                  <Input
                    placeholder={add ? "Width Distance (M)" : ""}
                    keyboardType="numeric"
                    returnKeyType="next"
                    ChangeText={text => props.setFieldValue("distanceX", text)}
                    errorMessage={props.errors.distanceX}
                    touched={props.touched.distanceX}
                    onBlur={() => {
                      if (props.values.distanceX !== "")
                        props.setFieldTouched("distanceX", true);
                    }}
                    value={props.values.distanceX}
                    autoCapitalize="none"
                    add={add}
                    text={"Width Distance (M)"}
                  />
                  <Input
                    placeholder={add ? "Length Distance (M)" : ""}
                    keyboardType="numeric"
                    returnKeyType="go"
                    ChangeText={text =>
                      props.setFieldValue("confirmPassword", text)
                    }
                    errorMessage={props.errors.distanceY}
                    touched={props.touched.distanceY}
                    onBlur={() => {
                      if (props.values.distanceY !== "")
                        props.setFieldTouched("distanceY", true);
                    }}
                    value={props.values.distanceY}
                    onSubmitEditing={props.handleSubmit}
                    autoCapitalize="none"
                    add={add}
                    text={"Length Distance (M)"}
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

export default AddPlant;
