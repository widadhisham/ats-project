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
import ActionSheet from "react-native-actionsheet";
import { connect } from "react-redux";
import LinearGradient from "../components/LinearGradient";
import HomeHeader from "../components/HomeHeader";
import Header from "../components/Header";
import ProcessItem from "../components/ProcessItem";
import * as GroundReducer from "../redux/reducers/ground";
import * as DeviceReducer from "../redux/reducers/device";
import * as PlantReducer from "../redux/reducers/plant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  homeHeader: {
    flex: 1
  },
  schedual: {
    flex: 4
  },
  searchBar: {
    backgroundColor: "transparent",
    marginHorizontal: 0,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    margin: 0,
    padding: 0
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: "10%",
    marginHorizontal: "5%"
  },
  search: {
    width: "90%"
  },
  menu: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
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

const uuidv4 = require("uuid/v4");
const keyExtractor = () => uuidv4();
const data = [
  {
    id: "1",
    type: "agri",
    name: "Process 1",
    date: "Date 1",
    time: "Time 1",
    days: "Days 1"
  },
  {
    id: "2",
    type: "irrig",
    name: "Process 2",
    date: "Date 2",
    time: "Time 2",
    days: "Days 2"
  }
];

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: Header({})
  });
  state = {
    searchText: ""
  };
  options = [
    <Text style={styles.actionsheetText}>Cancel</Text>,
    <Text style={styles.actionsheetText}>Agriculture Process</Text>,
    <Text style={styles.actionsheetText}>Irrigation Process</Text>
  ];
  handleOpenActionSheet = () => this.ActionSheet.show();

  handleActionSheetPress = index => {
    if (index === 1) {
      this.props.navigation.navigate("AssignTo", {
        process: "agri",
        assignPlant: this.props.asignPlant,
        assignDevice: this.props.assignDevice,
        assignToItems: this.props.grounds,
        devices: this.props.devices,
        plants: this.props.plants,
        name: "Grounds"
      });
    }
    if (index === 2) {
      this.props.navigation.navigate("AssignTo", {
        process: "irrig",
        assignPlant: this.props.asignPlant,
        assignDevice: this.props.assignDevice,
        assignToItems: this.props.grounds,
        devices: this.props.devices,
        plants: this.props.plants,
        name: "Grounds"
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeHeader}>
          <LinearGradient style={styles.row}>
            <View style={styles.searchContainer}>
              <View style={styles.search}>
                <SearchBar
                  lightTheme
                  clearIcon
                  onChangeText={text => {
                    this.setState({ searchText: text });
                  }}
                  placeholder="Search"
                  containerStyle={styles.searchBar}
                  inputStyle={styles.searchBarInput}
                  showLoadingIcon={false}
                />
              </View>
              <View style={styles.menu}>
                <TouchableOpacity onPress={this.handleOpenActionSheet}>
                  <Icon name="more-vert" size={45} color="#CFD0CF" />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.schedual}>
          <View style={styles.schedualItems}>
            <ScrollView scrollEventThrottle={50} scrollEnabled>
              <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => (
                  <ProcessItem
                    id={item.id}
                    type={item.type}
                    name={item.name}
                    date={item.date}
                    time={item.time}
                    days={item.days}
                  />
                )}
              />
            </ScrollView>
          </View>
        </View>
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          options={this.options}
          cancelButtonIndex={0}
          onPress={this.handleActionSheetPress}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  grounds: GroundReducer.getGrounds(state),
  devices: DeviceReducer.getDevices(state),
  plants: PlantReducer.getPlants(state)
});
export default connect(mapStateToProps, {})(Home);
