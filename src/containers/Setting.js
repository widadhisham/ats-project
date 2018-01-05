import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import { connect } from "react-redux";
import Button from "../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  settingContainer: {
    flex: 4,
    marginTop: "25%",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginBottom: "10%",
    width: "100%"
  },
  logOutContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
    paddingBottom: 5
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "white",
    width: "100%",
    height: 50,
    paddingLeft: "10%",
    paddingRight: "5%",
    paddingTop: 15
  },
  text: {
    width: "35%",
    fontWeight: "bold",
    color: "#179543"
  },
  text2: {
    width: "60%"
  },
  menu: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerIcon: {
    marginTop: "8%",
    marginRight: "4%"
  },
  actionsheetText: {
    color: "#179543",
    fontSize: 18
  },
  schedualItems: {
    flex: 1,
    position: "relative",
    paddingTop: "2%",
    paddingRight: "2%",
    paddingLeft: "2%"
  }
});

const data = [
  {
    id: "1",
    type: "agri",
    name: "Process 1",
    date: "2017-12-29",
    time: "01:00:00.000Z",
    days: undefined,
    assignPlant: "Tomato",
    assignDevice: "Device 1"
  },
  {
    id: "2",
    type: "irrig",
    name: "Process 2",
    date: undefined,
    time: "02:00:00.000Z",
    days: "Sun, Thu, Fri",
    assignPlant: "Bean",
    assignDevice: "Device 2"
  }
];

class Setting extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: Header({})
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingContainer}>
          <View style={styles.row}>
            <Text style={styles.text}>First Name</Text>
            <Text style={styles.text2}>Widad</Text>
            <Icon name="edit" color="#bfc0bf" />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Last Name</Text>
            <Text style={styles.text2}>Hisham</Text>
            <Icon name="edit" color="#bfc0bf" />
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Email</Text>
            <Text style={styles.text2}>widad@ats.com</Text>
            <Icon name="edit" color="#bfc0bf" />
          </View>
          <View
            style={{
              alignItems: "center",
              width: "100%"
            }}
          >
            <Text style={styles.text}>Change Password</Text>
          </View>
        </View>
        <View style={styles.logOutContainer}>
          <Button title="Log Out" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, {})(Setting);
