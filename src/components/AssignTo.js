import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";

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
    marginBottom: "2%"
  },
  containt: {
    flex: 14,
    margin: "5%",
    flexDirection: "column"
  },
  text: {
    color: "white",
    fontSize: 20
  },
  text2: {
    fontSize: 16
  },
  name: {
    color: "white",
    fontSize: 20
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
  center: {
    alignItems: "center"
  }
});

class AssignTo extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    checked: false,
    chechedId: -1
  };

  handleChange = chechedId => {
    this.setState({ checked: true, chechedId });
  };

  render() {
    const {
      items = [
        { id: 1, name: "item 1" },
        { id: 2, name: "item 2" },
        { id: 3, name: "item 3" }
      ]
    } = this.props;
    let { checked, chechedId } = this.state;
    const {
      process,
      assignDevice,
      assignPlant,
      ground,
      name,
      assignToItems,
      devices,
      plants,
      submit,
      id,
      item
    } = this.props.navigation.state.params;
    if (item) {
      checked = true;
      chechedId = item;
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Icon name="arrow-back" color="white" size={35} />
          </TouchableOpacity>
          {checked &&
            process && (
              <TouchableOpacity
                onPress={() => {
                  if (ground) {
                    if (assignPlant) {
                      if (assignDevice) {
                        this.props.navigation.navigate("Process", {
                          process: process,
                          assignPlant: assignPlant,
                          assignDevice: assignDevice,
                          ground: ground
                        });
                      } else {
                        // navigate to data, time, page
                        this.props.navigation.navigate("Process", {
                          process: process,
                          assignPlant: assignPlant,
                          assignDevice: this.state.chechedId,
                          ground: ground
                          // pass data of devices
                        });
                      }
                    } else {
                      this.props.navigation.navigate("AssignTo", {
                        process: process,
                        assignPlant: this.state.chechedId,
                        assignDevice: assignDevice,
                        ground: ground,
                        name: "Devices",
                        assignToItems: devices
                        // pass data of plants
                      });
                    }
                  } else {
                    this.props.navigation.navigate("AssignTo", {
                      process: process,
                      assignPlant: assignPlant,
                      assignDevice: assignDevice,
                      ground: this.state.chechedId,
                      name: "Plants",
                      assignToItems: plants,
                      devices: devices
                      // pass data of plants
                    });
                  }
                }}
              >
                <Text style={styles.text}>Next</Text>
              </TouchableOpacity>
            )}
          {checked &&
            !process && (
              <TouchableOpacity
                onPress={() => {
                  submit(id, chechedId);
                  this.props.navigation.goBack(null);
                }}
              >
                <Text style={styles.text}>OK</Text>
              </TouchableOpacity>
            )}
        </View>

        <View style={styles.containt}>
          <View style={styles.center}>
            <Text style={styles.text2}>{name}</Text>
          </View>
          {assignToItems.map(item => {
            return (
              <TouchableOpacity
                onPress={() => this.handleChange(item.id)}
                key={item.id}
              >
                <View style={styles.row}>
                  <Text style={styles.text2}>{item.name}</Text>
                  {checked &&
                    chechedId === item.id && (
                      <Icon name="check" color="#179543" size={20} />
                    )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}

export default AssignTo;
