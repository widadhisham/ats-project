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
import ActionSheet from "react-native-actionsheet";
import { connect } from "react-redux";
import _ from "lodash";
import LinearGradient from "../components/LinearGradient";
import Header from "../components/Header";
import PlantItem from "../components/PlantItems";
import * as ModalAction from "../redux/actions/modal";
import { constants } from "../containers/Modal";
import * as PlantAction from "../redux/actions/plant";
import * as PlantReducer from "../redux/reducers/plant";

const uuidv4 = require("uuid/v4");
const keyExtractor = () => uuidv4();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  plantHeader: {
    flex: 1
  },
  plant: {
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
    fontSize: 18
  },
  plantItems: {
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

const data = [
  {
    id: 1,
    name: "Tomato",
    waterQuantity: "2",
    temperature: "25",
    distanceX: "0.1",
    distanceY: "0.1"
  },
  {
    id: 2,
    name: "Cucumber",
    waterQuantity: "3",
    temperature: "23",
    distanceX: "0.2",
    distanceY: "0.2"
  }
];
class Plant extends React.Component {
  state = {
    searchText: "",
    sortBy: "",
    scrollEnabled: true,
    open: -1
  };
  options = [
    <Text style={styles.actionsheetText}>Cancel</Text>,
    <Text style={styles.actionsheetText}>Add Plant</Text>,
    <Text style={styles.actionsheetText}>Sort By Name</Text>
  ];

  handleOpenActionSheet = () => this.ActionSheet.show();
  onOpen = value => {
    this.setState({ open: value });
  };
  scroll = value => {
    this.setState({ scrollEnabled: value });
  };
  handleActionSheetPress = index => {
    if (index === 1) {
      ModalAction.DispatchAction(
        ModalAction.showModal(constants.ADD_PLANT, { add: true })
      );
    }
    if (index === 2) this.setState({ sortBy: "name" });
  };

  render() {
    const { plants, addPlant, deletePlant, editPlant } = this.props;
    let plantItems;
    /*if (plants) {
      plantItems = plants.filter(
        item =>
          item.name
            .toLowerCase()
            .search(this.state.searchText.toLowerCase()) !== -1
      );
    }*/
    switch (this.state.sortBy) {
      case "name":
        plantItems = _.sortBy(plants, "name");
        break;
      default:
        break;
    }

    return (
      <View style={styles.container}>
        <View style={styles.plantHeader}>
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
          ref={o => (this.ActionSheet = o)}
          options={this.options}
          cancelButtonIndex={0}
          onPress={this.handleActionSheetPress}
        />
        <View style={styles.plant}>
          <View style={styles.plantItems}>
            <ScrollView
              scrollEventThrottle={50}
              scrollEnabled={this.state.scrollEnabled}
            >
              <FlatList
                data={plants}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => (
                  <PlantItem
                    onOpen={() => this.onOpen(1)}
                    onScroll={this.scroll}
                    close={this.state.open !== 1}
                    id={item.id}
                    name={item.name}
                    waterQuantity={item.waterQuantity}
                    temperature={item.temperature}
                    distanceX={item.distanceX}
                    distanceY={item.distanceY}
                    deletePlant={() => deletePlant(item.id)}
                    editPlant={() => editPlant(item)}
                  />
                )}
              />
            </ScrollView>
          </View>
          <View style={styles.AddButton}>
            <TouchableOpacity
              onPress={() => {
                ModalAction.DispatchAction(
                  ModalAction.showModal(constants.ADD_PLANT, {
                    add: true,
                    submit: addPlant
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
  plants: PlantReducer.getPlants(state)
});

export default connect(mapStateToProps, {
  addPlant: PlantAction.addPlant,
  deletePlant: PlantAction.deletePlant,
  editPlant: PlantAction.editPlant
})(Plant);
