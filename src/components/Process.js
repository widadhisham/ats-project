import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon, Avatar } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import Input from "./Input";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "7%",
    paddingHorizontal: "3%",
    backgroundColor: "#179543",
    marginBottom: "1%"
  },
  containt: {
    flex: 14,
    margin: "10%",
    flexDirection: "column",
    alignItems: "center"
    // justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20
  },
  text2: {
    fontSize: 16
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "rgba(0,0,0,0.05)",
    borderWidth: 2,
    backgroundColor: "white",
    padding: "3%",
    marginTop: "3%"
  },
  textDateTime: {
    width: "80%",
    height: 40,
    paddingTop: 10,
    paddingLeft: 17
  }
});
const daysName = [
  { id: 1, name: "Sat" },
  { id: 2, name: "Sun" },
  { id: 3, name: "Mon" },
  { id: 4, name: "Tue" },
  { id: 5, name: "Wed" },
  { id: 6, name: "Thu" },
  { id: 7, name: "Fri" }
];
class Process extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    checked: false,
    text: undefined,
    date: "Date",
    time: "Time",
    days: new Map(),
    isDatePickerVisible: false,
    isTimePickerVisible: false
  };

  handleCheck = item => {
    let daysMap = this.state.days;
    if (daysMap.has(item)) {
      const value = daysMap.get(item);
      daysMap.set(item, !value);
    } else {
      daysMap.set(item, true);
    }
    this.setState({ days: daysMap });
  };

  handleChange = id => {
    this.setState({ checked: true, id });
  };
  _showDatePicker = () => this.setState({ isDatePickerVisible: true });

  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleDatePicked = date => {
    this._hideDatePicker();
    this.setState({ date: date });
  };
  _handleTimePicked = date => {
    console.log(date);
    this._hideTimePicker();
    this.setState({ time: date });
  };
  handleChoseDays = id => {};

  render() {
    const {
      items = [
        { id: 1, name: "item 1" },
        { id: 2, name: "item 2" },
        { id: 3, name: "item 3" }
      ]
    } = this.props;
    const { id, text, date, time, days } = this.state;
    const {
      process,
      assignDevice,
      assignPlant,
      ground
    } = this.props.navigation.state.params;
    let x = JSON.stringify(this.state.date);
    let y = JSON.stringify(this.state.time);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Icon name="arrow-back" color="white" size={35} />
          </TouchableOpacity>

          {text &&
            date &&
            time &&
            process === "agri" && (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Schedule")}
              >
                <Text style={styles.text}>Done</Text>
              </TouchableOpacity>
            )}
          {text &&
            time &&
            days.length > 0 &&
            process === "irrig" && (
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack(null)}
              >
                <Text style={styles.text}>Done</Text>
              </TouchableOpacity>
            )}
        </View>

        <View style={styles.containt}>
          <View>
            <Input
              name="sync"
              autoCorrect={false}
              placeholder="Process Name"
              returnKeyType="next"
              ChangeText={text => {
                this.setState({ text: text });
              }}
              autoCapitalize="none"
            />
          </View>
          <View>
            {process === "agri" && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  borderBottomWidth: 1,
                  borderBottomColor: "rgba(0,0,0,0.05)"
                }}
              >
                <TouchableOpacity
                  onPress={this._showDatePicker}
                  style={{ paddingTop: 8 }}
                >
                  <Icon name="today" color="#179543" />
                </TouchableOpacity>
                <Text style={styles.textDateTime}>{x}</Text>
                <DateTimePicker
                  isVisible={this.state.isDatePickerVisible}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDatePicker}
                  datePickerModeAndroid={"default"}
                  mode="date"
                />
              </View>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0,0,0,0.05)",
              paddingTop: 35
            }}
          >
            <TouchableOpacity
              onPress={this._showTimePicker}
              style={{ paddingTop: 8 }}
            >
              <Icon name="timer" color="#179543" />
            </TouchableOpacity>
            <Text style={styles.textDateTime}>{y}</Text>
            <DateTimePicker
              isVisible={this.state.isTimePickerVisible}
              onConfirm={this._handleTimePicked}
              onCancel={this._hideTimePicker}
              datePickerModeAndroid={"default"}
              mode="time"
              cancelTextIOS={{ color: "green" }}
              cancelTextStyle={{ color: "green" }}
              confirmTextIOS={{}}
              confirmTextStyle={{}}
            />
          </View>
          {process === "irrig" && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingTop: 90
              }}
            >
              {daysName.map(item => {
                const checked = this.state.days.get(item.name);

                return (
                  <Avatar
                    small
                    rounded
                    title={item.name}
                    key={item.id}
                    onPress={() => this.handleCheck(item.name)}
                    activeOpacity={0.7}
                    containerStyle={
                      checked
                        ? {
                            backgroundColor: "#179543",
                            margin: "1%"
                          }
                        : {
                            backgroundColor: "#bfc0bf",
                            margin: "1%"
                          }
                    }
                    titleStyle={{ fontSize: 13 }}
                  />
                );
              })}
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Process;
