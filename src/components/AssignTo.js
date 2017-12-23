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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "rgba(0,0,0,0.05)",
    borderWidth: 2,
    backgroundColor: "white",
    padding: "3%",
    marginTop: "3%"
  }
});

class AssignTo extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    checked: false,
    id: -1
  };

  handleChange = id => {
    this.setState({ checked: true, id });
  };

  render() {
    const {
      items = [
        { id: 1, name: "item 1" },
        { id: 2, name: "item 2" },
        { id: 3, name: "item 3" }
      ]
    } = this.props;
    const { checked, id } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Icon name="arrow-back" color="white" size={35} />
          </TouchableOpacity>
          {checked && (
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}
            >
              <Text style={styles.text}>OK</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.containt}>
          {items.map(item => {
            return (
              <TouchableOpacity onPress={() => this.handleChange(item.id)}>
                <View style={styles.row}>
                  <Text style={styles.text2}>{item.name}</Text>
                  {checked &&
                    id === item.id && (
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
