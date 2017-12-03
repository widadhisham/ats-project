import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import ActionSheet from "react-native-actionsheet";
import LinearGradient from "../components/LinearGradient";
import Header from "../components/Header";

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
    color: "#006600",
    fontSize: 18
  }
});

class Ground extends React.Component {
  state = {
    searchText: ""
  };
  options = [
    <Text style={styles.actionsheetText}>Cancel</Text>,
    <Text style={styles.actionsheetText}>Add Ground</Text>,
    <Text style={styles.actionsheetText}>Sort By Name</Text>
  ];
  handleOpenActionSheet = () => this.ActionSheet.show();

  render() {
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
          //onPress={this.handleSortPress}
        />
        <View style={styles.ground}>
          <View />
        </View>
      </View>
    );
  }
}

export default Ground;
