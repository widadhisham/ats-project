import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import { ActionSheetCustom as ActionSheet } from "react-native-actionsheet";
import { connect } from "react-redux";
import LinearGradient from "../components/LinearGradient";
import Header from "../components/Header";
import GroundItems from "../components/GroundItems";
import * as ModalAction from "../redux/actions/modal";
import { constants } from "../containers/Modal";
import * as GroundReducer from "../redux/reducers/ground";
import * as DeviceReducer from "../redux/reducers/device";
import * as PlantReducer from "../redux/reducers/plant";
import * as GroundAction from "../redux/actions/ground";

const uuidv4 = require("uuid/v4");
const keyExtractor = () => uuidv4();
let actionSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  groundHeader: {
    flex: 1
  },
  ground: {
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
  actionsheetText: {
    color: "#179543",
    fontSize: 18,
    backgroundColor: "transparent"
  },
  groundItems: {
    flex: 1,
    position: "relative",
    paddingTop: "2%"
  },
  AddButton: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    marginBottom: 3,
    marginRight: 8
    // marginTop: "110%",
    //  marginLeft: "70%",
    //n  position: "absolute"
  },
  add: {
    shadowColor: "rgba(0, 0, 0, 0.2)"
  }
});
const ground2 = [
  { id: 1, name: "Ground 1", width: 300, height: 400 },
  { id: 2, name: "Ground 2", width: 300, height: 400, asignPlant: "Tomato" }
];
class Ground extends React.Component {
  state = {
    searchText: "",
    sortBy: "",
    scrollEnabled: true,
    open: -1
  };
  options = [
    <Text style={styles.actionsheetText}>Cancel</Text>,
    <Text style={styles.actionsheetText}>Add Ground</Text>,
    <Text style={styles.actionsheetText}>Sort By Name</Text>
  ];
  handleOpenActionSheet = () => actionSheet.show();
  onOpen = value => {
    this.setState({ open: value });
  };
  scroll = value => {
    this.setState({ scrollEnabled: value });
  };
  handleActionSheetPress = index => {
    if (index === 1) {
      ModalAction.DispatchAction(
        ModalAction.showModal(constants.ADD_GROUND, {
          add: true,
          submit: this.props.addGround
        })
      );
    }
    if (index === 2) this.setState({ sortBy: "name" });
  };
  render() {
    const {
      grounds,
      plants,
      devices,
      addGround,
      deleteGround,
      assignPlant,
      assignDevice,
      editGround
    } = this.props;
    console.log(grounds);
    return (
      <View style={styles.container}>
        <View style={styles.groundHeader}>
          <LinearGradient>
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
        <ActionSheet
          ref={o => (actionSheet = o)}
          options={this.options}
          cancelButtonIndex={0}
          onPress={this.handleActionSheetPress}
        />
        <View style={styles.ground}>
          <View style={styles.groundItems}>
            <ScrollView
              scrollEventThrottle={50}
              scrollEnabled={this.state.scrollEnabled}
            >
              <FlatList
                data={grounds}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => (
                  <GroundItems
                    onOpen={() => this.onOpen(1)}
                    onScroll={this.scroll}
                    close={this.state.open !== 1}
                    id={item.id}
                    name={item.name}
                    width={item.width}
                    height={item.height}
                    assignPlant={item.assignPlant}
                    assignPlantName={item.assignPlantName}
                    assignDevice={item.assignDevice}
                    assignDeviceName={item.assignDeviceName}
                    isAssignPressPlant={() =>
                      this.props.navigation.navigate("AssignTo", {
                        assignToItems: plants,
                        name: "Plants",
                        id: item.id,
                        submit: assignPlant,
                        item: item.assignPlant
                      })
                    }
                    isAssignPressDevice={() =>
                      this.props.navigation.navigate("AssignTo", {
                        assignToItems: devices,
                        name: "Devices",
                        id: item.id,
                        submit: assignDevice,
                        item: item.assignDevice
                      })
                    }
                    deleteGround={() => deleteGround(item.id)}
                    editGround={groundObject =>
                      editGround(item.id, groundObject)
                    }
                  />
                )}
              />
            </ScrollView>
          </View>
          <View style={styles.AddButton}>
            <TouchableOpacity
              onPress={() => {
                ModalAction.DispatchAction(
                  ModalAction.showModal(constants.ADD_GROUND, {
                    add: true,
                    submit: addGround
                  })
                );
              }}
            >
              <Icon raised name="add" color="#179543" style={styles.add} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  grounds: GroundReducer.getGrounds(state),
  devices: DeviceReducer.getDevices(state),
  plants: PlantReducer.getPlants(state)
});
export default connect(mapStateToProps, {
  addGround: GroundAction.addGround,
  deleteGround: GroundAction.deleteGround,
  editGround: GroundAction.editGround,
  assignPlant: GroundAction.assignPlant,
  assignDevice: GroundAction.assignDevice
})(Ground);
