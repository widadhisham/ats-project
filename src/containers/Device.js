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
import LinearGradient from "../components/LinearGradient";
import Header from "../components/Header";
import * as ModalAction from "../redux/actions/modal";
import { constants } from "../containers/Modal";
import DeviceItems from "../components/DeviceItems";

const uuidv4 = require("uuid/v4");
const keyExtractor = () => uuidv4();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  deviceHeader: {
    flex: 1
  },
  device: {
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
  deviceItems: {
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
    shadowColor: "rgba(0, 0, 0, 1)"
  }
});

const data = [
  {
    id: 1,
    name: "Arduino 1",
    deviceNumber: "",
    asignGround: null
  },
  {
    id: 2,
    name: "Arduino 2",
    deviceNumber: "",
    asignGround: "Ground 1"
  }
];

class Device extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  state = {
    searchText: "",
    sortBy: "",
    scrollEnabled: true,
    open: -1
  };

  options = [
    <Text style={styles.actionsheetText}>Cancel</Text>,
    <Text style={styles.actionsheetText}>Add Device</Text>,
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
      this.showModal();
    }
    if (index === 2) this.setState({ sortBy: "name" });
  };

  render() {
    const {
      devices = [
        {
          id: 1,
          name: "Arduino 1",
          deviceNumber: "",
          asignGround: undefined
        },
        {
          id: 2,
          name: "Arduino 2",
          deviceNumber: "",
          asignGround: "Ground 1"
        }
      ]
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.deviceHeader}>
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
        <View style={styles.device}>
          <View style={styles.deviceItems}>
            <ScrollView
              scrollEventThrottle={50}
              scrollEnabled={this.state.scrollEnabled}
            >
              <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => (
                  <DeviceItems
                    onOpen={() => this.onOpen(1)}
                    onScroll={this.scroll}
                    close={this.state.open !== 1}
                    id={item.id}
                    name={item.name}
                    deviceNumber={item.deviceNumber}
                    asignGround={item.asignGround}
                    isAssignPress={() =>
                      this.props.navigation.navigate("AssignToGround", {})
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
                  ModalAction.showModal(constants.ADD_DEVICE, { add: true })
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

const mapStateToProps = state => ({});
export default connect(mapStateToProps, {})(Device);
