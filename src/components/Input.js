import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  textInput: {
    width: "70%",
    borderColor: "#9B9B9B",
    height: 30,
    marginTop: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 8
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1
  },
  errorText: {
    color: "#FF0000",
    fontSize: 13
  },
  input: {
    height: 75
  }
});

const border = (errorMessage, touched) =>
  errorMessage && touched ? "#FF0000" : "rgba(0,0,0,0.05)";

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: props.secureTextEntry,
      secure: true
    };
  }
  render() {
    const {
      errorMessage,
      name,
      ChangeText,
      touched,
      secureTextEntry,
      showHidePress,
      password,
      ...otherProps
    } = this.props;

    return (
      <View style={styles.input}>
        <View
          style={[
            styles.inputWrap,
            { borderColor: border(errorMessage, touched) }
          ]}
        >
          <Icon name={name} color="#006600" />

          <TextInput
            {...otherProps}
            underlineColorAndroid="transparent"
            onChangeText={text => {
              ChangeText(text);
            }}
            placeholderTextColor="rgba(0,0,0,0.5)"
            style={styles.textInput}
            secureTextEntry={secureTextEntry}
          />

          {secureTextEntry &&
            password && (
              <TouchableOpacity
                onPress={showHidePress}
                style={{
                  width: 30,
                  height: 20,
                  justifyContent: "center"
                }}
              >
                <Icon name="visibility" color="lightgray" />
              </TouchableOpacity>
            )}
          {!secureTextEntry &&
            password && (
              <TouchableOpacity
                onPress={showHidePress}
                style={{
                  width: 30,
                  height: 20,
                  justifyContent: "center"
                }}
              >
                <Icon name="visibility-off" color="lightgray" />
              </TouchableOpacity>
            )}
        </View>
        {touched &&
          errorMessage && (
            <Text style={styles.errorText}> {errorMessage} </Text>
          )}
      </View>
    );
  }
}

export default Input;
