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
                waterQuantity: waterQuantity,
                temperature: temperature,
                distanceX: distanceX,
                distanceY: distanceY
              }}
              validate={values => {
                const errors = {};
                if (!validation.isEmpty(values.name)) {
                  errors.name = "Required";
                }
                if (!validation.isFloat(values.waterQuantity)) {
                  errors.waterQuantity = "Enter Valid Water Quantity";
                }
                if (!validation.isFloat(values.temperature)) {
                  errors.temperature = "Enter Valid Temperature";
                }
                if (!validation.isFloat(values.distanceX)) {
                  errors.distanceX = "Enter Valid Width Distance";
                }
                if (!validation.isFloat(values.distanceY)) {
                  errors.distanceY = "Enter Valid Length Distance";
                }

                return errors;
              }}
              onSubmit={values => {
                Keyboard.dismiss();
                submit({
                  name: values.name,
                  waterQuantity: values.waterQuantity,
                  temperature: values.temperature,
                  distanceX: values.distanceX,
                  distanceY: values.distanceY
                });
              }}
              render={props => (
                <View>
                  <Input
                    autoCorrect={false}
                    placeholder={add ? "Name" : ""}
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
                    placeholder={add ? "Water Quantity (Liter)" : ""}
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
                    text={"Water Quantity (Liter)"}
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
                    placeholder={add ? "Distance In Width (M)" : ""}
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
                    text={"Distance In Width (M)"}
                  />
                  <Input
                    placeholder={add ? "Distance In Length (M)" : ""}
                    keyboardType="numeric"
                    returnKeyType="go"
                    ChangeText={text => props.setFieldValue("distanceY", text)}
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
                    text={"Distance In Length (M)"}
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
