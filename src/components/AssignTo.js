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
    flex: 14
  },
  text: {
    color: "white",
    fontSize: 25
  }
});

class AssignTo extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    checked: false
  };

  render() {
    const { checked } = this.state;
    const { items } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Icon name="arrow-back" color="white" size={35} />
          </TouchableOpacity>
          {checked && (
            <TouchableOpacity>
              <Text style={styles.text}>OK</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.containt}>
          <Text style={styles.text}>OK</Text>
        </View>
      </View>
    );
  }
}

export default AssignTo;
