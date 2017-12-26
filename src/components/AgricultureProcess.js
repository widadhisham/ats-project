import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

class Process extends React.Component {
  state = {
    time: undefined,
    data: undefined,
    day: [],
    isDateTimePickerVisible: false
  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    //console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
    this.setState({ date: date });
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 100 }}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          //datePickerModeAndroid={"default"}
          mode="datetime"
          cancelTextIOS={{ color: "green" }}
          cancelTextStyle={{ color: "green" }}
          confirmTextIOS={{}}
          confirmTextStyle={{}}
        />
      </View>
    );
  }
}
export default Process;
