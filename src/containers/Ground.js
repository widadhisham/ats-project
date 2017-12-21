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
import LinearGradient from "../components/LinearGradient";
import Header from "../components/Header";
import AddGround from "../components/AddGroundModal";
import GeneralModal from "../components/GeneralModal";
import GroundItems from "../components/GroundItems";

const uuidv4 = require("uuid/v4");
const keyExtractor = () => uuidv4();

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    width: "85%"
  },
  menu: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  actionsheetText: {
    color: "#77990d",
    fontSize: 18
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
    marginBottom: 10,
    marginRight: 10,
    marginTop: "110%",
    marginLeft: "70%",
    position: "absolute"
  },
  add: {
    shadowColor: "rgba(0, 0, 0, 0.2)"
  }
});

class Ground extends React.Component {
  state = {
    searchText: "",
    showModal: false,
    sortBy: "",
    scrollEnabled: true,
    open: -1
  };
  options = [
    <Text style={styles.actionsheetText}>Cancel</Text>,
    <Text style={styles.actionsheetText}>Add Ground</Text>,
    <Text style={styles.actionsheetText}>Sort By Name</Text>
  ];
  handleOpenActionSheet = () => this.ActionSheet.show();
  showModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });
  onOpen = value => {
    this.setState({ open: value });
  };
  scroll = value => {
    this.setState({ scrollEnabled: value });
  };
  handleActionSheetPress = index => {
    if (index === 1) {
      this.showModal();
    }
    if (index === 2) this.setState({ sortBy: "name" });
  };
  render() {
    const {
      ground = [
        { id: 1, name: "Ground 1", width: 300, height: 400 },
        { id: 2, name: "Ground 2", width: 300, height: 400 }
      ]
    } = this.props;
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
                <Icon
                  name="menu"
                  size={40}
                  color="#d9d9d9"
                  onPress={this.handleOpenActionSheet}
                />
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
        <View style={styles.ground}>
          <View style={styles.groundItems}>
            <ScrollView
              scrollEventThrottle={50}
              scrollEnabled={this.state.scrollEnabled}
            >
              <FlatList
                data={ground}
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
                    asignPlant={item.asignPlant}
                  />
                )}
              />
            </ScrollView>
          </View>
          <View style={styles.AddButton}>
            <TouchableOpacity onPress={() => this.showModal()}>
              <Icon reverse name="add" color="#611b00" style={styles.add} />
            </TouchableOpacity>
          </View>
          <GeneralModal
            isVisible={this.state.showModal}
            onBackdropPress={() => this.closeModal()}
            onBackButtonPress={() => this.closeModal()}
          >
            <AddGround closeModal={() => this.closeModal()} add={true} />
          </GeneralModal>
        </View>
      </View>
    );
  }
}

export default Ground;
